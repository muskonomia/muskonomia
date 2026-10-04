import https from "node:https";
import type { RobotaxiCityBar, RobotaxiFleet } from "@/lib/robotaxi-fleet.functions";

const HOST = "robotaxitracker.com";
const DAY30 = 720 * 60 * 60 * 1000;
const WEEK = 10080 * 60 * 1000;
const TEXAS = new Set([
  "austin",
  "austin-waymo",
  "dallas",
  "dallas-waymo",
  "houston",
  "houston-waymo",
  "san-antonio",
  "san-antonio-waymo",
]);

type Vehicle = {
  provider?: string;
  vin?: string;
  isTestVehicle?: boolean;
  lastSpotted?: number;
  serviceArea?: { name?: string; slug?: string } | null;
};

type Dmv = {
  generated_at?: string;
  vins?: Record<string, { provider?: string; last_seen?: string }>;
};

function request(path: string, cookie = ""): Promise<{ status: number; setCookie: string; body: string }> {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: HOST,
        path,
        method: "GET",
        headers: {
          accept: path === "/" ? "text/html" : "application/json",
          "user-agent": "Mozilla/5.0",
          ...(cookie ? { cookie } : {}),
        },
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => {
          const raw = res.headers["set-cookie"];
          const setCookie = (Array.isArray(raw) ? raw : raw ? [raw] : []).map((item) => item.split(";")[0]).join("; ");
          resolve({ status: res.statusCode ?? 0, setCookie, body: Buffer.concat(chunks).toString("utf8") });
        });
      },
    );
    req.setTimeout(8000, () => req.destroy(new Error("timeout")));
    req.on("error", reject);
    req.end();
  });
}

function retired(vehicle: Vehicle, dmv: Dmv, now: number) {
  if (!vehicle.lastSpotted || now - vehicle.lastSpotted < DAY30) return false;
  const slug = vehicle.serviceArea?.slug;
  const generatedAt = dmv.generated_at;
  if (!generatedAt || !vehicle.vin || !slug || !TEXAS.has(slug)) return false;
  const generatedMs = Date.parse(generatedAt);
  if (!Number.isFinite(generatedMs) || now - generatedMs > WEEK) return false;
  const record = dmv.vins?.[vehicle.vin.trim().toUpperCase()];
  if (!record || record.provider !== vehicle.provider) return true;
  return record.last_seen !== generatedAt;
}

export async function loadRobotaxiFleet(asOfMs: number): Promise<RobotaxiFleet> {
  const empty: RobotaxiFleet = { ok: false, asOfMs, teslaUnsupervised: 0, cities: [] };
  const home = await request("/");
  if (home.status !== 200 || !home.setCookie) return empty;
  const [vehiclesRes, dmvRes] = await Promise.all([
    request("/v1/api/compat/vehicles?limit=5000", home.setCookie),
    request("/v1/api/texas-dmv/vins", home.setCookie),
  ]);
  if (vehiclesRes.status !== 200 || dmvRes.status !== 200) return empty;
  const vehicles = JSON.parse(vehiclesRes.body) as Vehicle[];
  const dmv = JSON.parse(dmvRes.body) as Dmv;
  if (!Array.isArray(vehicles)) return empty;

  const buckets = new Map<string, RobotaxiCityBar>();
  let teslaUnsupervised = 0;
  for (const vehicle of vehicles) {
    if (vehicle.isTestVehicle) continue;
    const provider =
      vehicle.provider === "tesla" ? "Tesla" : vehicle.provider === "waymo" ? "Waymo" : vehicle.provider === "zoox" ? "Zoox" : "";
    if (!provider || retired(vehicle, dmv, asOfMs)) continue;
    const slug = vehicle.serviceArea?.slug ?? "";
    const mode: RobotaxiCityBar["mode"] = provider === "Tesla" && slug === "bay_area" ? "supervised" : "unsupervised";
    const city = vehicle.serviceArea?.name || "Bez miasta";
    if (provider === "Tesla" && mode === "unsupervised") teslaUnsupervised += 1;
    const key = `${mode}|${provider}|${city}`;
    const row = buckets.get(key) ?? { city, provider, mode, inService: 0 };
    row.inService += 1;
    buckets.set(key, row);
  }

  const cities = [...buckets.values()].sort((a, b) => b.inService - a.inService || a.city.localeCompare(b.city, "pl"));
  return { ok: cities.length > 0, asOfMs, teslaUnsupervised, cities };
}
