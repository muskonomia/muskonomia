import { XLogo } from "@/components/x-logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg py-10 text-sm text-muted">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <p>© 2026 muskonomia.pl — świat Elona Muska</p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href="https://x.com/MuskonomiaPL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-fg"
          >
            <XLogo className="h-4 w-4" />
            Śledź na X
          </a>
          <a href="mailto:muskonomia.pl@gmail.com" className="hover:text-fg">
            Kontakt
          </a>
        </div>
      </div>
    </footer>
  );
}
