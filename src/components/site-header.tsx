import { Link } from "@tanstack/react-router";
import { SearchForm } from "@/components/search-form";

export function SiteHeader() {
  return (
    <>
      <a
        href="#tresc"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
      >
        Przejdź do treści
      </a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
          <Link to="/" className="flex shrink-0 items-center" aria-label="muskonomia.pl — strona główna">
            <img
              src="/logo-header.png"
              alt="muskonomia.pl"
              width={309}
              height={132}
              className="h-10 w-auto max-w-[220px] object-contain object-left sm:h-11 sm:max-w-[260px]"
            />
          </Link>
          <nav aria-label="Główna nawigacja" className="flex items-center gap-3 text-sm font-medium text-muted sm:gap-5">
            <Link to="/blog" className="hover:text-fg">
              Blog
            </Link>
            <Link to="/fsd-tracker" className="whitespace-nowrap hover:text-fg">
              FSD Tracker
            </Link>
            <Link to="/o-serwisie" className="hidden hover:text-fg sm:inline">
              O serwisie
            </Link>
            <div className="hidden md:block">
              <SearchForm compact />
            </div>
            <Link to="/szukaj" className="hover:text-fg md:hidden">
              Szukaj
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
