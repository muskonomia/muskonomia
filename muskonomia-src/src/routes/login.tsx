import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main className="grid min-h-screen place-items-center px-5 pt-16">
        <div className="w-full max-w-sm space-y-5 rounded-xl border border-border bg-surface p-8">
          <h1 className="font-display text-3xl font-semibold tracking-wide">Zaloguj się</h1>
          <p className="text-sm text-muted">Dołącz, żeby śledzić aktualności Tesli, SpaceX i xAI.</p>
          {authEnabled ? (
            GROK_PROVIDERS.map((p) => (
              <button
                key={p.providerId}
                type="button"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
                className="w-full rounded-md border border-border bg-bg px-4 py-3 text-sm font-medium hover:border-accent"
              >
                Kontynuuj z {p.label}
              </button>
            ))
          ) : (
            <p className="text-sm text-muted">Logowanie wyłączone.</p>
          )}
          <Link to="/" className="block text-center text-sm text-muted hover:text-fg">
            Wróć na stronę główną
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
