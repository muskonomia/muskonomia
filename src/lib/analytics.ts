export const GA_MEASUREMENT_ID = "G-Z4TZTX4EF4";

export const CONSENT_STORAGE_KEY = "muskonomia-cookie-consent";

const OPEN_COOKIE_SETTINGS = "muskonomia:open-cookie-settings";

export type ConsentChoice = "granted" | "denied";

export const X_PIXEL_ID = "rfr6q";

/**
 * Official X pixel loader. The snippet both queues `twq` and inserts
 * static.ads-twitter.com/uwt.js. It must run only after consent.
 */
const X_PIXEL_SNIPPET = `!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
twq('config','${X_PIXEL_ID}');`;

/**
 * Runs in the document head. A stored "granted" choice loads the pixel in the
 * same turn, before React hydrates. Any other value, including no choice, does
 * not request ads-twitter.com.
 */
export const X_PIXEL_BOOT_SCRIPT = `
try {
  if (localStorage.getItem('${CONSENT_STORAGE_KEY}') === 'granted') {
    ${X_PIXEL_SNIPPET}
  }
} catch (e) {}
`.trim();

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    twq?: ((...args: unknown[]) => void) & {
      exe?: (...args: unknown[]) => void;
      queue?: unknown[][];
      version?: string;
    };
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

/**
 * The config command does not send page_view. History-based page views
 * (gtm.historyChange-v2) ignore send_page_view; gtag.js for this stream
 * hardcodes them on, and no config parameter turns them off.
 */
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

/** Inserts uwt.js once. A second call is a no-op, including after the boot script. */
export function loadXPixel() {
  if (typeof window === "undefined" || window.twq) return;
  const script = document.createElement("script");
  script.text = X_PIXEL_SNIPPET;
  document.head.appendChild(script);
}

export function updateAnalyticsConsent(choice: ConsentChoice) {
  window.gtag?.("consent", "update", { analytics_storage: choice });
  if (choice === "granted") loadXPixel();
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

/**
 * The path was already sent while analytics_storage was denied.
 * Queuing the new page_view in the same turn as the consent update still
 * sends it as denied, so clear the dedupe and send once on the next turn.
 */
export function trackPageViewAfterConsent(path: string) {
  window.setTimeout(() => {
    lastTrackedPath = null;
    trackPageView(path);
  }, 0);
}
