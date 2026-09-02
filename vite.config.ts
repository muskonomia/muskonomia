import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { Plugin } from "vite";
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

const GROK_OG_IDENTITY_ID = "virtual:grok-og-identity";

/**
 * Load the platform PWA plugin at runtime (file://), not via a static import.
 * Vite 8 / rolldown bundles vite.config.ts and then fails to resolve
 * `./grok-pwa-shared.mjs` from scripts/grok-pwa-plugin.mjs (looks in the
 * repo root). Hostinger Node builds hit that UNRESOLVED_IMPORT. A dynamic
 * import of the absolute file URL is not followed by the config bundler.
 */
async function grokPwaPlugin(): Promise<Plugin> {
  const pluginFile = resolve(process.cwd(), "scripts/grok-pwa-plugin.mjs");
  const sharedFile = resolve(process.cwd(), "scripts/grok-pwa-shared.mjs");
  if (existsSync(pluginFile) && existsSync(sharedFile)) {
    try {
      const mod = (await import(/* @vite-ignore */ pathToFileURL(pluginFile).href)) as {
        grokPwaPlugin: () => Plugin;
      };
      return mod.grokPwaPlugin();
    } catch (err) {
      console.warn("[app-builder] grokPwaPlugin load failed, using fallback:", err);
    }
  }
  return {
    name: "app-builder:grok-pwa",
    resolveId(id) {
      if (id === GROK_OG_IDENTITY_ID) return `\0${GROK_OG_IDENTITY_ID}`;
    },
    load(id) {
      if (id !== `\0${GROK_OG_IDENTITY_ID}`) return;
      return `export const grokOgIdentity = ${JSON.stringify({
        site: { title: "muskonomia.pl", color: "E10600" },
      })};`;
    },
  };
}

function xmlFeedsPlugin(): Plugin {
  return {
    name: "muskonomia:xml-feeds",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        try {
          const pathOnly = (req.url ?? "").split("?", 1)[0] ?? "";
          if (pathOnly !== "/sitemap.xml" && pathOnly !== "/rss.xml") {
            next();
            return;
          }
          if ((req.method ?? "GET").toUpperCase() !== "GET") {
            res.statusCode = 405;
            res.setHeader("content-type", "text/plain; charset=utf-8");
            res.end("Method Not Allowed");
            return;
          }
          const mod = (await server.ssrLoadModule("/src/lib/feeds.ts")) as {
            sitemapXml: () => string;
            rssXml: () => string;
          };
          const body = pathOnly === "/rss.xml" ? mod.rssXml() : mod.sitemapXml();
          res.statusCode = 200;
          res.setHeader("content-type", "application/xml; charset=utf-8");
          res.setHeader("cache-control", "public, max-age=3600");
          res.end(body);
        } catch (err) {
          console.error("[xml-feeds] handler failed:", err);
          if (!res.headersSent) {
            res.statusCode = 500;
            res.setHeader("content-type", "text/plain; charset=utf-8");
            res.end("xml feed failed");
          }
        }
      });
    },
  };
}

function pgliteBootstrapPlugin(): Plugin {
  return {
    name: "app-builder:pglite-bootstrap",
    apply: "serve",
    async configureServer(server) {
      try {
        const mod = (await server.ssrLoadModule("/src/lib/db.ts")) as {
          ensureDbReady?: () => Promise<void>;
        };
        if (typeof mod.ensureDbReady === "function") {
          await mod.ensureDbReady();
        }
      } catch (err) {
        console.error("[app-builder] DB bootstrap failed:", err);
        throw err;
      }
    },
  };
}

function authPopupPlugin(): Plugin {
  return {
    name: "app-builder:auth-popup",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        try {
          const rawUrl = req.url ?? "";
          const pathOnly = rawUrl.split("?", 1)[0] ?? "";
          if (pathOnly !== "/auth/popup") {
            next();
            return;
          }
          if ((req.method ?? "GET").toUpperCase() !== "GET") {
            res.statusCode = 405;
            res.setHeader("content-type", "text/plain; charset=utf-8");
            res.end("Method Not Allowed");
            return;
          }

          const host = String(
            req.headers["x-forwarded-host"] ?? req.headers.host ?? "localhost:8080",
          );
          const proto = String(
            req.headers["x-forwarded-proto"] ??
              ((req.socket as { encrypted?: boolean } | undefined)?.encrypted ? "https" : "http"),
          );
          const requestHeaders = new Headers();
          for (const [key, value] of Object.entries(req.headers)) {
            if (value === undefined) continue;
            if (Array.isArray(value)) {
              for (const v of value) requestHeaders.append(key, v);
            } else {
              requestHeaders.set(key, value);
            }
          }
          if (!requestHeaders.has("host")) requestHeaders.set("host", host);

          const request = new Request(`${proto}://${host}${rawUrl}`, {
            method: "GET",
            headers: requestHeaders,
          });

          const mod = (await server.ssrLoadModule("/src/lib/auth/popup.server.ts")) as {
            handleAuthPopupRequest: (req: Request) => Promise<Response>;
          };
          const response = await mod.handleAuthPopupRequest(request);

          res.statusCode = response.status;
          const setCookies =
            typeof response.headers.getSetCookie === "function"
              ? response.headers.getSetCookie()
              : [];
          response.headers.forEach((value, key) => {
            if (key.toLowerCase() === "set-cookie") return;
            res.setHeader(key, value);
          });
          for (const cookie of setCookies) {
            res.appendHeader("set-cookie", cookie);
          }
          const body = Buffer.from(await response.arrayBuffer());
          res.end(body);
        } catch (err) {
          console.error("[app-builder] /auth/popup handler failed:", err);
          if (!res.headersSent) {
            res.statusCode = 500;
            res.setHeader("content-type", "text/plain; charset=utf-8");
            res.end("auth popup failed");
          }
        }
      });
    },
  };
}

export default defineConfig(async ({ command, isPreview }) => ({
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 8081,
    strictPort: true,
  },
  resolve: { tsconfigPaths: true },
  plugins: [
    pgliteBootstrapPlugin(),
    xmlFeedsPlugin(),
    authPopupPlugin(),
    await grokPwaPlugin(),
    tailwindcss(),
    tanstackStart(),
    ...(command === "build" || isPreview
      ? [
          nitro({
            preset: process.env.NITRO_PRESET || "node-server",
            serverDir: "./server",
          }),
        ]
      : []),
    viteReact(),
  ],
}));
