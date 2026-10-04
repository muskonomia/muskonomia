import { createServerFn } from "@tanstack/react-start";
import { FSD_COUNTER_FALLBACK, type FsdCounter } from "@/lib/fsd-counter";

const DATA_URL = "https://fsdodometer.z5.web.core.windows.net/data.json";

function fallback(asOfMs: number): FsdCounter {
  return { ...FSD_COUNTER_FALLBACK, asOfMs };
}

function fromPayload(data: unknown, asOfMs: number): FsdCounter | null {
  if (!data || typeof data !== "object") return null;
  const counter = (data as { counter?: unknown }).counter;
  if (!counter || typeof counter !== "object") return null;
  const row = counter as Record<string, unknown>;
  const seedEpochMs = Date.parse(String(row.seedEpochUtc ?? ""));
  const totalMilesStart = Number(row.totalMilesStart);
  const cityMilesStart = Number(row.cityMilesStart);
  const totalMilesPerMs = Number(row.totalMilesPerMs);
  const cityMilesPerMs = Number(row.cityMilesPerMs);
  if (
    !Number.isFinite(seedEpochMs) ||
    !Number.isFinite(totalMilesStart) ||
    !Number.isFinite(cityMilesStart) ||
    !(totalMilesPerMs > 0) ||
    !(cityMilesPerMs > 0)
  ) {
    return null;
  }
  return { seedEpochMs, totalMilesStart, cityMilesStart, totalMilesPerMs, cityMilesPerMs, asOfMs };
}

export const getFsdCounter = createServerFn({ method: "GET" }).handler(async (): Promise<FsdCounter> => {
  const asOfMs = Date.now();
  try {
    const response = await fetch(DATA_URL, {
      headers: { accept: "application/json" },
      signal: AbortSignal.timeout(4000),
    });
    if (!response.ok) return fallback(asOfMs);
    return fromPayload(await response.json(), asOfMs) ?? fallback(asOfMs);
  } catch {
    return fallback(asOfMs);
  }
});
