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
        "Kilometry i mile przejechane przez wszystkie auta Tesli na FSD (Supervised).",
      path: "/fsd-tracker",
      image: "/img/fsd-tracker-cybercab.jpg",
      imageWidth: 1468,
      imageHeight: 1258,
    }),
  component: FsdTrackerPage,
});

function FsdTrackerPage() {
  const counter = Route.useLoaderData();

  return (
    <div className="relative min-h-screen text-fg">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <img
          src="/img/fsd-tracker-cybercab.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg/45 via-bg/72 to-bg/90" />
      </div>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">Tesla</p>
        <h1 className="mt-1.5 font-display text-[2.4rem] font-semibold tracking-tight sm:text-[3rem]">FSD Tracker</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Kilometry/mile przejechane przez wszystkie auta z włączonym FSD (Supervised).
        </p>
        <div className="mt-10">
          <FsdCounterView counter={counter} />
        </div>
        <p className="mt-8 max-w-2xl text-sm text-muted">
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
