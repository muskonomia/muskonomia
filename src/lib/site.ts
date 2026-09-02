export const SITE_NAME = "muskonomia.pl";
export const SITE_URL = "https://muskonomia.pl";
export const SITE_DESCRIPTION =
  "Aktualności o Tesli, SpaceX, xAI i Elonie Musku po polsku: Robotaxi, Starlink, Grok, Cybercab i Optimus.";
export const SITE_OG = "/og.jpg";
export const SITE_X_HANDLE = "@MuskonomiaPL";
export const SITE_X_URL = "https://x.com/MuskonomiaPL";

export const SITE_AUTHOR = "SEBIX";
export const SITE_CONTACT_EMAIL = "sebastianlipinski@gmail.com";
export const SITE_CONTACT_PHONE = "07341702870";
export const SITE_CONTACT_PHONE_DISPLAY = "07341 702 870";
export const SITE_CONTACT_TEL = "tel:+447341702870";

export function absoluteUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
