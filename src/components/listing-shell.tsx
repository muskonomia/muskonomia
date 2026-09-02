import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function ListingShell({
  kicker = "Dział",
  title,
  description,
  toolbar,
  children,
}: {
  kicker?: string;
  title: string;
  description?: string;
  toolbar?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main className="pt-16">
        <header className="mx-auto max-w-6xl px-5 py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">{kicker}</p>
          <h1 className="mt-1 font-display text-5xl font-semibold tracking-tight">{title}</h1>
          {description ? <p className="mt-3 max-w-xl text-muted">{description}</p> : null}
          {toolbar ? <div className="mt-6">{toolbar}</div> : null}
        </header>
        <div className="mx-auto max-w-6xl px-5 pb-20">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
