import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FsdCounterView } from "@/components/fsd-counter";
import { getFsdCounter } from "@/lib/fsd-counter.functions";
import { getRobotaxiFleet, type RobotaxiCityBar, type TexasRegistry } from "@/lib/robotaxi-fleet.functions";
import { formatMiles } from "@/lib/fsd-counter";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/fsd-tracker")({
  loader: async () => {
    const [counter, fleet] = await Promise.all([getFsdCounter(), getRobotaxiFleet()]);
    return { counter, fleet };
  },
  head: () =>
    pageHead({
      title: "FSD Tracker",
      description:
        "Kilometry i mile przejechane przez wszystkie auta Tesli na FSD (Supervised) oraz flota Robotaxi bez kierowcy.",
      path: "/fsd-tracker",
      image: "/img/fsd-tracker-cybercab.jpg",
      imageWidth: 1468,
      imageHeight: 1258,
    }),
  component: FsdTrackerPage,
});

function FsdTrackerPage() {
  const { counter, fleet } = Route.useLoaderData();
  const unsupervised = fleet.cities.filter((row) => row.mode === "unsupervised");
  const supervised = fleet.cities.filter((row) => row.mode === "supervised");

  return (
    <div className="relative min-h-screen text-fg">
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <img
          src="/img/fsd-tracker-cybercab.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg/65 via-bg/40 to-bg/80" />
      </div>
      <div className="relative z-10">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">Tesla</p>
        <div className="mt-1.5 grid items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.7fr)]">
          <div>
            <h1 className="font-display text-[2.4rem] font-semibold tracking-tight sm:text-[3rem]">FSD Tracker</h1>
            <p className="mt-3 max-w-2xl text-muted">
              Kilometry/mile przejechane przez wszystkie auta z włączonym FSD (Supervised).
            </p>
            <div className="mt-10">
              <FsdCounterView counter={counter} part="totals" />
            </div>
          </div>
          <FsdCounterView counter={counter} part="stats" />
        </div>
        <div className="mt-8">
          <UnsupervisedCard count={fleet.ok ? fleet.teslaUnsupervised : null} />
        </div>
        {fleet.ok ? (
          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <CityBars
              title="Bez kierowcy"
              note="Miasta, w których robotaxi jeździ unsupervised."
              rows={unsupervised}
            />
            <CityBars
              title="Z kierowcą"
              note="Miasta, w których robotaxi jedzie supervised, z człowiekiem na pokładzie."
              rows={supervised}
            />
          </div>
        ) : (
          <p className="mt-14 text-sm text-muted">Wykresy miast chwilowo niedostępne.</p>
        )}
        <RegistryTable registry={fleet.registry} />
        <p className="mt-8 max-w-2xl text-sm text-muted">
          Licznik nie czyta każdego auta w tej sekundzie. Tesla bierze stan floty z jednego momentu i dokłada mile w
          stałym tempie. Sama pisze, że przyrost to średnie tempo floty i że liczba może nie obejmować wzrostu floty
          ani darmowych okresów próbnych.
        </p>
        <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href="https://www.tesla.com/fsd/safety"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-fg underline decoration-accent underline-offset-4"
          >
            Źródło mil: tesla.com/fsd/safety
          </a>
          <a
            href="https://robotaxitracker.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-fg underline decoration-accent underline-offset-4"
          >
            Źródło floty: robotaxitracker.com
          </a>
        </p>
      </main>
      <SiteFooter />
      </div>
    </div>
  );
}

function RegistryTable({ registry }: { registry: TexasRegistry | null }) {
  if (!registry?.rows.length) {
    return <p className="mt-14 text-sm text-muted">Rejestr Teksasu chwilowo niedostępny.</p>;
  }
  const total = registry.rows.reduce((sum, row) => sum + row.count, 0);
  return (
    <section className="mt-14 overflow-hidden rounded-2xl border border-border bg-bg/75 backdrop-blur-sm">
      <div className="px-6 pt-5">
        <h2 className="font-display text-3xl font-semibold tracking-tight">Rejestr Teksasu</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Auta wpisane do rejestru TxDMV. To pozwolenie na przewozy, nie liczba aut widzianych na ulicy.
        </p>
      </div>
      <table className="mt-4 w-full text-sm">
        <thead>
          <tr className="text-left text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            <th className="px-6 py-2 font-semibold">Operator</th>
            <th className="px-6 py-2 font-semibold">Model</th>
            <th className="px-6 py-2 text-right font-semibold">W rejestrze</th>
          </tr>
        </thead>
        <tbody>
          {registry.rows.map((row) => (
            <tr key={`${row.provider}-${row.model}`} className="border-t border-border/70">
              <td className="px-6 py-2.5">{row.provider}</td>
              <td className="px-6 py-2.5">{row.model}</td>
              <td className="px-6 py-2.5 text-right tabular-nums">{formatMiles(row.count)}</td>
            </tr>
          ))}
          <tr className="border-t border-border font-semibold">
            <td className="px-6 py-3" colSpan={2}>
              Razem
            </td>
            <td className="px-6 py-3 text-right tabular-nums">{formatMiles(total)}</td>
          </tr>
        </tbody>
      </table>
      <p className="px-6 py-4 text-sm text-muted">Stan rejestru: {registryWhen(registry.generatedAt)}.</p>
    </section>
  );
}

function registryWhen(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "brak daty";
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Warsaw",
  }).format(date);
}

function UnsupervisedCard({ count }: { count: number | null }) {
  return (
    <aside className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 rounded-2xl border border-border bg-bg/75 px-6 py-5 backdrop-blur-sm">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">Tesla Robotaxi</p>
        <p className="mt-2 font-display text-4xl font-semibold leading-none tracking-tight tabular-nums sm:text-5xl">
          {count === null ? "—" : formatMiles(count)}
        </p>
        <p className="mt-2 text-muted">aut bez kierowcy · Unsupervised</p>
      </div>
    </aside>
  );
}

function CityBars({
  title,
  note,
  rows,
  barClass,
}: {
  title: string;
  note: string;
  rows: RobotaxiCityBar[];
  barClass?: string;
}) {
  const max = Math.max(...rows.map((row) => row.inService), 1);
  return (
    <section>
      <h2 className="font-display text-3xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-2 text-sm text-muted">{note}</p>
      {rows.length ? (
        <ul className="mt-5 space-y-3">
          {rows.map((row) => (
            <li key={`${row.mode}-${row.provider}-${row.city}`}>
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span>
                  {row.city} <span className="text-muted">{row.provider}</span>
                </span>
                <span className="tabular-nums">{formatMiles(row.inService)}</span>
              </div>
              <div className="mt-1.5 h-2 rounded-full bg-white/10">
                <div
                  className={`h-2 rounded-full ${barClass ?? barColor(row.provider)}`}
                  style={{ width: `${(row.inService / max) * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm text-muted">Brak miast w tym trybie.</p>
      )}
    </section>
  );
}

function barColor(provider: string) {
  if (provider === "Tesla") return "bg-accent";
  if (provider === "Waymo") return "bg-sky-400";
  return "bg-white";
}
