/** Zapas, gdy padnie odczyt https://fsdodometer.z5.web.core.windows.net/data.json (ziarno tesla.com/fsd/safety z 22 października 2026). */
export const FSD_COUNTER_FALLBACK = {
  seedEpochMs: Date.parse("2026-10-22T08:14:00Z"),
  totalMilesStart: 16_485_475_664,
  cityMilesStart: 6_545_394_617,
  totalMilesPerMs: 0.52380952381,
  cityMilesPerMs: 0.214285714286,
  sourceGeneratedAtMs: Date.parse("2026-11-18T05:06:02Z"),
} as const;

export type FsdCounter = {
  seedEpochMs: number;
  totalMilesStart: number;
  cityMilesStart: number;
  totalMilesPerMs: number;
  cityMilesPerMs: number;
  sourceGeneratedAtMs: number | null;
  asOfMs: number;
};

export function fsdMiles(start: number, perMs: number, seedEpochMs: number, nowMs: number) {
  return Math.floor(start + Math.max(0, nowMs - seedEpochMs) * perMs);
}

export function formatMiles(value: number) {
  return new Intl.NumberFormat("pl-PL").format(value);
}

const MILES_TO_KM = 1.609344;

export function milesToKm(miles: number) {
  return Math.floor(miles * MILES_TO_KM);
}
