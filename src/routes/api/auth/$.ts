import { createFileRoute } from "@tanstack/react-router";
import { auth } from "@/lib/auth/server";
import { ensureDbReady } from "@/lib/db";

async function handle(request: Request) {
  await ensureDbReady();
  const url = new URL(request.url);
  const legacy = "/api/auth/oauth2/callback/";
  if (url.pathname.startsWith(legacy)) {
    url.pathname = `/api/auth/callback/${url.pathname.slice(legacy.length)}`;
    request = new Request(url, request);
  }
  return auth.handler(request);
}

export const Route = createFileRoute("/api/auth/$")({
  server: {
    handlers: {
      GET: ({ request }) => handle(request),
      POST: ({ request }) => handle(request),
    },
  },
});

