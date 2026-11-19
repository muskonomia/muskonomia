export const GA_MEASUREMENT_ID = "G-Z4TZTX4EF4";

export const CONSENT_STORAGE_KEY = "muskonomia-cookie-consent";

const OPEN_COOKIE_SETTINGS = "muskonomia:open-cookie-settings";

export type ConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Runs before gtag.js. Default consent is denied. A stored "granted" choice is
 * restored in the same turn so returning visits are measured without the banner.
 */
export const GA_BOOT_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = window.gtag || gtag;
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied'
});
try {
  if (localStorage.getItem('${CONSENT_STORAGE_KEY}') === 'granted') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }
} catch (e) {}
`.trim();

/** Automatic page_view is off. The router sends one hit per location. */
export const GA_CONFIG_SCRIPT = `
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
`.trim();

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (value === "granted" || value === "denied") return value;
    return null;
  } catch {
    return null;
  }
}

export function writeConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Storage can be blocked. The gtag update still applies for this visit.
  }
}

export function updateAnalyticsConsent(choice: ConsentChoice) {
  window.gtag?.("consent", "update", { analytics_storage: choice });
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS));
}

export function onOpenCookieSettings(handler: () => void) {
  window.addEventListener(OPEN_COOKIE_SETTINGS, handler);
  return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, handler);
}

let lastTrackedPath: string | null = null;

/** One page_view per location. The same path is ignored so the first hit is not sent twice. */
export function trackPageView(path: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (lastTrackedPath === path) return;
  lastTrackedPath = path;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
  });
}
