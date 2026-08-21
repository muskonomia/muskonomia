export const SITE_NAME = "muskonomia.pl";
export const SITE_URL = "https://muskonomia.pl";
export const SITE_DESCRIPTION =
  "Aktualności o Tesli, SpaceX, xAI i Elonie Musku po polsku: Robotaxi, Starlink, Grok, Cybercab i Optimus.";
export const SITE_OG = "/og.jpg";
export const SITE_X_HANDLE = "@MuskonomiaPL";
export const SITE_X_URL = "https://x.com/MuskonomiaPL";

export function absoluteUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
