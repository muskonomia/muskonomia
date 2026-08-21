/**
 * PWA/OG helpers used by grok-pwa-plugin.mjs.
 */
export const DEFAULT_APP_NAME = "muskonomia.pl";
export const OG_SERVICE_URL_DEFAULT = "https://og.grok.me";
export const OG_SITE_REL_PATH = "src/lib/og/site.json";
export const GROK_EXTENSIONS_SCRIPT_SRC = "https://grok.com/grok-app-builder/extensions.js";

export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "\u0026amp;")
    .replaceAll("<", "\u0026lt;")
    .replaceAll(">", "\u0026gt;")
    .replaceAll('"', "\u0026quot;")
    .replaceAll("'", "\u0026#39;");
}
export function appNameFromHost() { return DEFAULT_APP_NAME; }
export function publicAppHost() { return ""; }
export function resolvePublicHost() { return ""; }
export function isInstallQuery() { return false; }
export function isDocumentPath(pathname) {
  const path = String(pathname ?? "");
  return (
    !path.startsWith("/__grok/") &&
    !path.startsWith("/api/") &&
    !path.startsWith("/@") &&
    !/\.[a-z0-9]+$/i.test(path)
  );
}
export function acceptsHtml(accept) {
  const value = String(accept ?? "");
  return value === "" || value.includes("text/html") || value.includes("*/*");
}
export function stripInstallParams(url) {
  return String(url ?? "/");
}
export function renderInstallPageHtml(template, ctx = {}) {
  const url = ctx.url ?? "/";
  return String(template)
    .replaceAll("{{APP_NAME}}", escapeHtml(DEFAULT_APP_NAME))
    .replaceAll("{{APP_URL}}", escapeHtml(stripInstallParams(url)));
}
export function renderWebManifest() {
  return JSON.stringify({
    name: DEFAULT_APP_NAME,
    short_name: DEFAULT_APP_NAME,
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0a0a0b",
    theme_color: "#0a0a0b",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  });
}
export function grokPwaHeadTags() { return []; }
export function readGrokProjectId() { return ""; }
export function readXCreator() { return ""; }
export function readXCreatorId() { return ""; }
export function grokXCreatorHeadTags() { return []; }
export function grokExtensionsHeadTags() { return []; }
export function readOgSite() { return {}; }
export function snapshotOgIdentity() {
  return { site: { title: "muskonomia.pl", color: "E10600" } };
}
export function customOgAssetPath() { return "/og.jpg"; }
export function ogServiceUrl() { return OG_SERVICE_URL_DEFAULT; }
export function titleFromDocument() { return ""; }
export function resolveOgTitle() { return DEFAULT_APP_NAME; }
export function siteHasCustomCard() { return false; }
export function grokOgHeadTags() { return []; }
export function stripShareMetaTags(html) { return html; }
export function normalizeHeadContext(ctx = {}) {
  return {
    appName: DEFAULT_APP_NAME,
    projectId: "",
    creator: "",
    creatorId: "",
    host: ctx.host ?? "",
    cwd: typeof process !== "undefined" ? process.cwd() : "",
    site: {},
  };
}
export function injectGrokPwaHead(html) { return html; }
export function createHeadInjector() {
  return {
    push(chunk) {
      const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
      return [buf];
    },
    flush() {
      return [];
    },
  };
}
