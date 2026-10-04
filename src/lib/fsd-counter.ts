/** Ten sam wzór co licznik na https://www.tesla.com/fsd/safety (stan z 18 lipca 2026). */
export const FSD_COUNTER_FALLBACK = {
  seedEpochMs: Date.parse("2026-07-18T08:14:00Z"),
  totalMilesStart: 12_445_140_996,
  cityMilesStart: 4_788_264_077,
  totalMilesPerMs: 0.404761904762,
  cityMilesPerMs: 0.166666666667,
} as const;

export type FsdCounter = {
  seedEpochMs: number;
  totalMilesStart: number;
  cityMilesStart: number;
  totalMilesPerMs: number;
  cityMilesPerMs: number;
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
