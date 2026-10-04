import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FsdCounterView } from "@/components/fsd-counter";
import { getFsdCounter } from "@/lib/fsd-counter.functions";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/fsd-tracker")({
  loader: () => getFsdCounter(),
  head: () =>
    pageHead({
      title: "FSD Tracker",
      description:
        "Ile mil przejechały auta Tesli na FSD (Supervised). Licznik idzie w tym samym tempie co na tesla.com/fsd/safety.",
      path: "/fsd-tracker",
    }),
  component: FsdTrackerPage,
});

function FsdTrackerPage() {
  const counter = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">Tesla</p>
        <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight sm:text-6xl">FSD Tracker</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Kilometry/mile przejechane przez wszystkie auta z włączonym FSD (Supervised).
        </p>
        <div className="mt-12">
          <FsdCounterView counter={counter} />
        </div>
        <p className="mt-10 max-w-2xl text-sm text-muted">
          Licznik nie czyta każdego auta w tej sekundzie. Tesla bierze stan floty z jednego momentu i dokłada mile w
          stałym tempie. Sama pisze, że przyrost to średnie tempo floty i że liczba może nie obejmować wzrostu floty
          ani darmowych okresów próbnych.
        </p>
        <p className="mt-4 text-sm">
          <a
            href="https://www.tesla.com/fsd/safety"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-fg underline decoration-accent underline-offset-4"
          >
            Źródło: tesla.com/fsd/safety
          </a>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
