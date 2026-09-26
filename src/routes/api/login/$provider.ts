import { createFileRoute } from "@tanstack/react-router";
import { auth } from "@/lib/auth/server";
import { ensureDbReady } from "@/lib/db";

const PROVIDERS: Record<string, string> = {
  google: "grok-google",
  x: "grok-x",
};

export const Route = createFileRoute("/api/login/$provider")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const provider = new URL(request.url).pathname.split("/").filter(Boolean).pop() ?? "";
        const providerId = PROVIDERS[provider];
        if (!providerId) {
          return new Response("Nieznany sposób logowania.", {
            status: 404,
            headers: { "content-type": "text/plain; charset=utf-8" },
          });
        }
        try {
          await ensureDbReady();
          const apiRes = await auth.api.signInWithOAuth2({
            body: {
              providerId,
              callbackURL: "/",
              errorCallbackURL: "/login",
            },
            headers: request.headers,
            asResponse: true,
          });
          if (!apiRes.ok) {
            const detail = (await apiRes.text()).slice(0, 300);
            return new Response(`Logowanie nie wystartowało (${apiRes.status}). ${detail}`, {
              status: 500,
              headers: { "content-type": "text/plain; charset=utf-8" },
            });
          }
          const body = (await apiRes.json().catch(() => null)) as { url?: string } | null;
          if (!body?.url) {
            return new Response("Logowanie nie wystartowało. Brak adresu.", {
              status: 500,
              headers: { "content-type": "text/plain; charset=utf-8" },
            });
          }
          return new Response(null, {
            status: 302,
            headers: { location: body.url, "cache-control": "no-store" },
          });
        } catch (err) {
          const message = err instanceof Error ? err.message : "błąd";
          return new Response(`Logowanie nie wystartowało. ${message}`.slice(0, 400), {
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
          });
        }
      },
    },
  },
});
