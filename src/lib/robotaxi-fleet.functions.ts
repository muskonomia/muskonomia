import { createServerFn } from "@tanstack/react-start";

export type RobotaxiCityBar = {
  city: string;
  provider: string;
  mode: "unsupervised" | "supervised";
  inService: number;
};

export type RobotaxiFleet = {
  ok: boolean;
  asOfMs: number;
  teslaUnsupervised: number;
  cities: RobotaxiCityBar[];
};

let cache: { at: number; value: RobotaxiFleet } | null = null;

function empty(asOfMs: number): RobotaxiFleet {
  return { ok: false, asOfMs, teslaUnsupervised: 0, cities: [] };
}

export const getRobotaxiFleet = createServerFn({ method: "GET" }).handler(async (): Promise<RobotaxiFleet> => {
  const asOfMs = Date.now();
  if (cache && asOfMs - cache.at < 6 * 60 * 60 * 1000) return { ...cache.value, asOfMs };
  try {
    const { loadRobotaxiFleet } = await import("@/lib/robotaxi-fleet.server");
    const value = await loadRobotaxiFleet(asOfMs);
    if (value.ok) cache = { at: asOfMs, value };
    return value;
  } catch {
    return cache?.value ?? empty(asOfMs);
  }
});
