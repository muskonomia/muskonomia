export const SITE_NAME = "muskonomia.pl";
export const SITE_URL = "https://muskonomia.pl";
export const SITE_DESCRIPTION =
  "Najświeższe wiadomości o Elonie Musku, Tesli, SpaceX i xAI.";

export function absoluteUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
