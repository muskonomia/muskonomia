import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function ErrorShell({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main id="tresc" className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-5 pb-20 pt-32">
        <h1 className="font-display text-5xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 max-w-xl text-muted">{copy}</p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
          <Link to="/" className="text-link hover:text-link-hover">
            ← Strona główna
          </Link>
          <Link to="/blog" className="text-link hover:text-link-hover">
            Wszystkie wpisy
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function AppErrorComponent() {
  return (
    <ErrorShell
      title="Coś poszło nie tak"
      copy="Nie udało się wczytać tej strony. Odśwież ją za chwilę albo wróć na stronę główną."
    />
  );
}

export function AppNotFound() {
  return (
    <ErrorShell
      title="Nie ma takiej strony"
      copy="Adres jest błędny albo wpis zmienił miejsce. Zajrzyj na listę wpisów albo użyj wyszukiwarki."
    />
  );
}
