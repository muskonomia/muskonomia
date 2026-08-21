import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center" aria-label="muskonomia.pl — strona główna">
          <img
            src="/img/logo.png"
            alt="muskonomia.pl"
            className="h-10 w-auto max-w-[220px] object-contain object-left sm:h-11 sm:max-w-[260px]"
          />
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-muted sm:gap-6">
          <Link to="/" className="hidden hover:text-fg sm:inline">
            Start
          </Link>
          <Link to="/tematy" className="hover:text-fg">
            Tematy
          </Link>
          <Link to="/blog" className="hover:text-fg">
            Blog
          </Link>
          <a href="/#join" className="hover:text-fg">
            Newsletter
          </a>
        </nav>
      </div>
    </header>
  );
}
