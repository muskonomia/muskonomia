/**
 * Baseline security headers for every response Nitro produces (HTML, server
 * functions, feeds, API). No script-src: GA, the X pixel, X embeds and inline
 * consent scripts would all need nonces first.
 */
const SECURITY_HEADERS: Record<string, string> = {
  "strict-transport-security": "max-age=31536000",
  "x-content-type-options": "nosniff",
  "referrer-policy": "strict-origin-when-cross-origin",
  "x-frame-options": "SAMEORIGIN",
  "cross-origin-opener-policy": "same-origin-allow-popups",
  "permissions-policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "content-security-policy": "base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self'",
};

interface SecurityHeadersEvent {
  res: { headers: Headers };
}

function withHeaders(response: Response): Response {
  try {
    for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
      if (!response.headers.has(name)) response.headers.set(name, value);
    }
    return response;
  } catch {
    const headers = new Headers(response.headers);
    for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
      if (!headers.has(name)) headers.set(name, value);
    }
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }
}

export default async function securityHeadersMiddleware(
  event: SecurityHeadersEvent,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) event.res.headers.set(name, value);
  const result = await next();
  return result instanceof Response ? withHeaders(result) : result;
}
