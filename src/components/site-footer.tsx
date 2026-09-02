import { Link } from "@tanstack/react-router";
import { XLogo } from "@/components/x-logo";
import {
  SITE_AUTHOR,
  SITE_CONTACT_EMAIL,
  SITE_CONTACT_PHONE_DISPLAY,
  SITE_CONTACT_TEL,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg py-10 text-sm text-muted">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <p>© 2026 muskonomia.pl — świat Elona Muska</p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link to="/o-serwisie" className="hover:text-fg">
            O serwisie
          </Link>
          <Link to="/huby" className="hover:text-fg">
            Huby
          </Link>
          <Link to="/archiwum" className="hover:text-fg">
            Archiwum
          </Link>
          <a href="/rss.xml" className="hover:text-fg">
            RSS
          </a>
          <a
            href="https://x.com/MuskonomiaPL"
            target="_blank"
            rel="me noopener noreferrer"
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
      <p className="mx-auto mt-6 max-w-6xl px-5 text-center text-sm text-muted">
        {SITE_AUTHOR}
        {" · "}
        <a href={`mailto:${SITE_CONTACT_EMAIL}`} className="hover:text-fg">
          {SITE_CONTACT_EMAIL}
        </a>
        {" · "}
        <a href={SITE_CONTACT_TEL} className="hover:text-fg">
          {SITE_CONTACT_PHONE_DISPLAY}
        </a>
      </p>
    </footer>
  );
}
