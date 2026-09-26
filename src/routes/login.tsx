import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { authClient, authEnabled } from "@/lib/auth/client";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  const [mode, setMode] = useState<"in" | "up">("up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setPending(true);
    try {
      const result =
        mode === "up"
          ? await authClient.signUp.email({
              email,
              password,
              name: name.trim() || "Czytelnik",
              callbackURL: "/",
            })
          : await authClient.signIn.email({ email, password, callbackURL: "/" });
      if (result.error) {
        setError(polishError(result.error.message));
        return;
      }
      window.location.href = "/";
    } catch (err) {
      setError(err instanceof Error ? polishError(err.message) : "Nie udało się zalogować.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main className="grid min-h-screen place-items-center px-5 pt-16">
        <div className="relative z-10 w-full max-w-sm space-y-5 rounded-xl border border-border bg-surface p-8">
          <h1 className="font-display text-3xl font-semibold tracking-wide">
            {mode === "up" ? "Załóż konto" : "Zaloguj się"}
          </h1>
          <p className="text-sm text-muted">
            Google i X nie działają na tej domenie. Do komentarzy użyj maila i hasła.
          </p>
          {authEnabled ? (
            <form onSubmit={onSubmit} className="space-y-3">
              {mode === "up" ? (
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="Imię"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
                />
              ) : null}
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
              />
              <input
                type="password"
                required
                minLength={8}
                autoComplete={mode === "up" ? "new-password" : "current-password"}
                placeholder="Hasło, minimum 8 znaków"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
              />
              {error ? <p className="text-sm text-accent">{error}</p> : null}
              <button
                type="submit"
                disabled={pending}
                className="w-full rounded-md bg-accent px-4 py-3 text-sm font-medium text-white hover:bg-accent-hover disabled:opacity-50"
              >
                {pending ? "Chwilę…" : mode === "up" ? "Załóż konto" : "Zaloguj się"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode(mode === "up" ? "in" : "up");
                  setError("");
                }}
                className="w-full text-sm text-muted hover:text-fg"
              >
                {mode === "up" ? "Masz już konto? Zaloguj się" : "Nie masz konta? Załóż je"}
              </button>
            </form>
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

function polishError(message: string | undefined) {
  const text = message ?? "";
  if (/already|exists/i.test(text)) return "Ten email jest już zajęty. Zaloguj się.";
  if (/invalid email or password|invalid credentials/i.test(text)) return "Zły email albo hasło.";
  if (/password/i.test(text) && /short|8|character/i.test(text)) return "Hasło musi mieć co najmniej 8 znaków.";
  return text || "Nie udało się zalogować.";
}
