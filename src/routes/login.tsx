import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main className="grid min-h-screen place-items-center px-5 pt-16">
        <div className="relative z-10 w-full max-w-sm space-y-5 rounded-xl border border-border bg-surface p-8">
          <h1 className="font-display text-3xl font-semibold tracking-wide">Komentarze</h1>
          <p className="text-sm text-muted">
            Nie trzeba konta. Pod artykułem podajesz imię i piszesz komentarz.
          </p>
          <Link to="/blog" className="block text-center text-sm text-muted hover:text-fg">
            Przejdź do wpisów
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
