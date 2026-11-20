import { resolveParentEmbedderOrigin } from "./preview-embedder-origin";

export {
  isGrokEmbedderOrigin,
  isSandboxPreviewGuestHost,
  resolveParentEmbedderOrigin,
} from "./preview-embedder-origin";

export const PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge" as const;
export const PREVIEW_BRIDGE_VERSION = 1 as const;

type Envelope = { channel: typeof PREVIEW_BRIDGE_CHANNEL; version: number; type: string } & Record<
  string,
  unknown
>;

function parseEnvelope(data: unknown): Envelope | null {
  if (!data || typeof data !== "object") return null;
  const msg = data as Record<string, unknown>;
  if (msg.channel !== PREVIEW_BRIDGE_CHANNEL) return null;
  if (typeof msg.version !== "number" || !Number.isInteger(msg.version) || msg.version <= 0) return null;
  if (typeof msg.type !== "string" || msg.type.length === 0) return null;
  return msg as Envelope;
}

export type PreviewHostBridgeOptions = {
  navigate?: (path: string) => void;
  getRoutePaths?: () => string[];
};

export function isSafeBridgePath(path: string): boolean {
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
  try {
    const resolved = new URL(path, "https://preview.invalid");
    return resolved.origin === "https://preview.invalid";
  } catch {
    return false;
  }
}

export function installPreviewHostBridge(options: PreviewHostBridgeOptions = {}): () => void {
  if (typeof window === "undefined") return () => {};
  const ancestorOrigin =
    typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0
      ? location.ancestorOrigins[0]
      : null;
  const parentOrigin = resolveParentEmbedderOrigin(
    window.parent === window,
    document.referrer,
    ancestorOrigin,
    window.location.hostname,
  );
  if (parentOrigin === null) return () => {};

  const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
  const originalPushState = window.history.pushState.bind(window.history);
  const originalReplaceState = window.history.replaceState.bind(window.history);
  const isAtHistoryRoot = () => {
    const state = window.history.state;
    return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
  };

  try {
    const current = window.history.state;
    const alreadyTagged =
      current !== null &&
      typeof current === "object" &&
      Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY);
    if (!alreadyTagged) {
      const isRoot = window.history.length <= 1;
      const marked =
        current && typeof current === "object"
          ? { ...current, [ROOT_STATE_KEY]: isRoot }
          : { [ROOT_STATE_KEY]: isRoot };
      originalReplaceState(marked, "", window.location.href);
    }
  } catch {
    /* ignore */
  }

  const post = (message: object) => {
    window.parent.postMessage(message, parentOrigin);
  };
  const reportLocation = () => {
    post({
      channel: PREVIEW_BRIDGE_CHANNEL,
      version: PREVIEW_BRIDGE_VERSION,
      type: "location",
      path: window.location.pathname || "/",
      search: window.location.search,
      hash: window.location.hash,
    });
  };
  const reportRoutes = () => {
    post({
      channel: PREVIEW_BRIDGE_CHANNEL,
      version: PREVIEW_BRIDGE_VERSION,
      type: "routes",
      paths: options.getRoutePaths?.() ?? [],
    });
  };
  const navigate = (path: string) => {
    if (!isSafeBridgePath(path)) return;
    if (options.navigate) {
      options.navigate(path);
      return;
    }
    try {
      const url = new URL(path, window.location.origin);
      if (url.origin !== window.location.origin) return;
      const next = `${url.pathname}${url.search}${url.hash}`;
      window.history.pushState(window.history.state, "", next);
      window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
    } catch {
      /* ignore */
    }
  };
  const announce = () => {
    reportLocation();
    reportRoutes();
    post({ channel: PREVIEW_BRIDGE_CHANNEL, version: PREVIEW_BRIDGE_VERSION, type: "ready" });
  };
  const onMessage = (event: MessageEvent) => {
    if (event.source !== window.parent) return;
    if (event.origin !== parentOrigin) return;
    const envelope = parseEnvelope(event.data);
    if (!envelope || envelope.version !== PREVIEW_BRIDGE_VERSION) return;
    if (envelope.type === "hello") {
      announce();
      return;
    }
    if (envelope.type === "navigate") {
      if (typeof envelope.path !== "string" || envelope.path.length === 0) return;
      navigate(envelope.path);
      queueMicrotask(reportLocation);
      return;
    }
    if (envelope.type === "history") {
      const delta = envelope.delta;
      if (delta !== -1 && delta !== 1) return;
      if (delta === -1 && isAtHistoryRoot()) return;
      window.history.go(delta);
    }
  };
  window.history.pushState = (data, unused, url) => {
    const next =
      data && typeof data === "object" ? { ...data, [ROOT_STATE_KEY]: false } : data;
    originalPushState(next, unused, url);
    reportLocation();
  };
  window.history.replaceState = (data, unused, url) => {
    const next = isAtHistoryRoot()
      ? { ...(data && typeof data === "object" ? data : {}), [ROOT_STATE_KEY]: true }
      : data;
    originalReplaceState(next, unused, url);
    reportLocation();
  };
  window.addEventListener("message", onMessage);
  window.addEventListener("popstate", reportLocation);
  window.addEventListener("hashchange", reportLocation);
  announce();
  return () => {
    window.removeEventListener("message", onMessage);
    window.removeEventListener("popstate", reportLocation);
    window.removeEventListener("hashchange", reportLocation);
    window.history.pushState = originalPushState;
    window.history.replaceState = originalReplaceState;
  };
}

export function collectRoutePathsFromTree(routeTree: unknown): string[] {
  const paths = new Set<string>();
  const walk = (node: unknown) => {
    if (!node || typeof node !== "object") return;
    const record = node as { fullPath?: unknown; path?: unknown; children?: unknown };
    const full =
      typeof record.fullPath === "string"
        ? record.fullPath
        : typeof record.path === "string"
          ? record.path
          : null;
    if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
    else if (full === "") paths.add("/");
    const children = record.children;
    if (Array.isArray(children)) for (const child of children) walk(child);
    else if (children && typeof children === "object") {
      for (const child of Object.values(children as Record<string, unknown>)) walk(child);
    }
  };
  walk(routeTree);
  return [...paths];
}
