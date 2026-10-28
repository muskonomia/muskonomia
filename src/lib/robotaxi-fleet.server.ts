import https from "node:https";
import type { RobotaxiCityBar, RobotaxiFleet, TexasRegistry, TexasRegistryRow, TexasTeslaFleet, TexasTeslaPoint } from "@/lib/robotaxi-fleet.functions";

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
  vins?: Record<string, { provider?: string; first_seen?: string; last_seen?: string }>;
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

type RegistryPayload = {
  generated_at?: string;
  registrations?: {
    generated_at?: string;
    providers?: Record<string, { model_breakdown?: Record<string, number> }>;
  };
};

const PROVIDER_NAMES: Record<string, string> = {
  tesla: "Tesla",
  waymo: "Waymo",
  zoox: "Zoox",
  avride: "Avride",
};

const PROVIDER_ORDER = ["Tesla", "Waymo", "Zoox", "Avride"];

function providerName(key: string) {
  return PROVIDER_NAMES[key] ?? key.charAt(0).toUpperCase() + key.slice(1);
}

function modelName(provider: string, raw: string) {
  const prefix = `${provider} `;
  return raw.startsWith(prefix) ? raw.slice(prefix.length) : raw;
}

function parseRegistry(body: string): TexasRegistry | null {
  const data = JSON.parse(body) as RegistryPayload;
  const providers = data.registrations?.providers;
  if (!providers) return null;
  const rows: TexasRegistryRow[] = [];
  for (const [key, provider] of Object.entries(providers)) {
    const name = providerName(key);
    for (const [rawModel, count] of Object.entries(provider.model_breakdown ?? {})) {
      if (!Number.isFinite(count) || count <= 0) continue;
      rows.push({ provider: name, model: modelName(name, rawModel), count });
    }
  }
  if (!rows.length) return null;
  rows.sort((a, b) => {
    if (a.provider !== b.provider) {
      const ai = PROVIDER_ORDER.indexOf(a.provider);
      const bi = PROVIDER_ORDER.indexOf(b.provider);
      if (ai === -1 && bi === -1) return a.provider.localeCompare(b.provider, "pl");
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    }
    const cyber = Number(b.model === "Cybercab") - Number(a.model === "Cybercab");
    return cyber || b.count - a.count || a.model.localeCompare(b.model, "pl");
  });
  const generatedAt = data.registrations?.generated_at || data.generated_at || "";
  return { generatedAt, rows };
}

function chicagoDay(iso: string) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(iso));
}

function shiftDay(day: string, days: number) {
  const date = new Date(`${day}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function buildTeslaTexas(modelsBody: string, dmvBody: string): TexasTeslaFleet | null {
  const models = JSON.parse(modelsBody) as {
    generated_at?: string;
    providers?: { tesla?: { vehicles?: { vin?: string; model?: string }[] } };
  };
  const dmv = JSON.parse(dmvBody) as Dmv;
  const list = models.providers?.tesla?.vehicles;
  if (!list?.length || !dmv.vins) return null;
  const added = new Map<string, { cybercab: number; modelY: number }>();
  for (const row of list) {
    const model = row.model?.toLowerCase();
    const key = model === "cybercab" ? "cybercab" : model === "model y" ? "modelY" : "";
    const seen = row.vin ? dmv.vins[row.vin]?.first_seen : undefined;
    if (!key || !seen) continue;
    const day = chicagoDay(seen);
    const bucket = added.get(day) ?? { cybercab: 0, modelY: 0 };
    bucket[key] += 1;
    added.set(day, bucket);
  }
  const points: TexasTeslaPoint[] = [];
  let cybercab = 0;
  let modelY = 0;
  for (const date of [...added.keys()].sort()) {
    const bucket = added.get(date);
    if (!bucket) continue;
    cybercab += bucket.cybercab;
    modelY += bucket.modelY;
    points.push({ date, cybercab, modelY });
  }
  const last = points.at(-1);
  if (!last) return null;
  let latestBatch = last.cybercab;
  let latestBatchDate = last.date;
  for (let i = points.length - 1; i >= 0; i -= 1) {
    const prev = i > 0 ? points[i - 1].cybercab : 0;
    const batch = points[i].cybercab - prev;
    if (batch > 0) {
      latestBatch = batch;
      latestBatchDate = points[i].date;
      break;
    }
  }
  const asOf = models.generated_at || dmv.generated_at || "";
  const cutoff = asOf ? shiftDay(chicagoDay(asOf), -7) : shiftDay(last.date, -7);
  let weekBase = 0;
  for (const point of points) if (point.date <= cutoff) weekBase = point.cybercab;
  return {
    asOf,
    cybercab: last.cybercab,
    modelY: last.modelY,
    total: last.cybercab + last.modelY,
    latestBatch,
    latestBatchDate,
    last7: last.cybercab - weekBase,
    leadDate: points.find((point) => point.cybercab > point.modelY)?.date ?? null,
    points,
  };
}

export async function loadRobotaxiFleet(asOfMs: number): Promise<RobotaxiFleet> {
  const empty: RobotaxiFleet = { ok: false, asOfMs, teslaUnsupervised: 0, cities: [], registry: null, teslaTexas: null };
  const home = await request("/");
  if (home.status !== 200 || !home.setCookie) return empty;
  const [vehiclesRes, dmvRes, registryRes, modelsRes] = await Promise.all([
    request("/v1/api/compat/vehicles?limit=5000", home.setCookie),
    request("/v1/api/texas-dmv/vins", home.setCookie),
    request("/v1/api/texas-dmv", home.setCookie),
    request("/v1/api/texas-dmv/vehicles", home.setCookie),
  ]);
  let registry: TexasRegistry | null = null;
  if (registryRes.status === 200) {
    try {
      registry = parseRegistry(registryRes.body);
    } catch {
      registry = null;
    }
  }
  let teslaTexas: TexasTeslaFleet | null = null;
  if (modelsRes.status === 200 && dmvRes.status === 200) {
    try {
      teslaTexas = buildTeslaTexas(modelsRes.body, dmvRes.body);
    } catch {
      teslaTexas = null;
    }
  }
  if (vehiclesRes.status !== 200 || dmvRes.status !== 200) return { ...empty, registry, teslaTexas };
  const vehicles = JSON.parse(vehiclesRes.body) as Vehicle[];
  const dmv = JSON.parse(dmvRes.body) as Dmv;
  if (!Array.isArray(vehicles)) return { ...empty, registry, teslaTexas };

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
  return { ok: cities.length > 0, asOfMs, teslaUnsupervised, cities, registry, teslaTexas };
}
