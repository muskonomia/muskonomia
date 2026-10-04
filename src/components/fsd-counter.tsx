import { useEffect, useState } from "react";
import { fsdMiles, formatMiles, milesToKm, type FsdCounter } from "@/lib/fsd-counter";

export function FsdCounterView({
  counter,
  live = true,
  size = "page",
}: {
  counter: FsdCounter;
  live?: boolean;
  size?: "page" | "card";
}) {
  const [now, setNow] = useState(counter.asOfMs);

  useEffect(() => {
    if (!live) return;
    const id = window.setInterval(() => setNow(Date.now()), 100);
    return () => window.clearInterval(id);
  }, [live]);

  const total = fsdMiles(counter.totalMilesStart, counter.totalMilesPerMs, counter.seedEpochMs, now);
  const city = fsdMiles(counter.cityMilesStart, counter.cityMilesPerMs, counter.seedEpochMs, now);
  const perSecond = Math.round(counter.totalMilesPerMs * 1000);
  const perSecondKm = Math.round(perSecond * 1.609344);
  const perDay = Math.round((counter.totalMilesPerMs * 1000 * 86400) / 1_000_000);
  const perDayKm = Math.round((perDay * 1.609344));

  if (size === "card") {
    return (
      <div className="text-center">
        <h2 className="font-display text-4xl font-semibold">FSD Tracker</h2>
        <p
          className="mt-4 font-display text-4xl font-semibold tabular-nums tracking-tight text-fg sm:text-5xl"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {formatMiles(total)}
        </p>
        <p className="mt-2 text-muted">mil na FSD (Supervised)</p>
      </div>
    );
  }

  return (
    <div>
      <p
        className="font-display text-5xl font-semibold leading-none tracking-tight tabular-nums sm:text-7xl"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {formatMiles(total)}
      </p>
      <p className="mt-3 text-lg text-muted">mil na FSD (Supervised)</p>
      <p
        className="mt-10 font-display text-5xl font-semibold leading-none tracking-tight tabular-nums sm:text-7xl"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {formatMiles(milesToKm(total))}
      </p>
      <p className="mt-3 text-lg text-muted">kilometrów</p>
      <dl className="mt-10 grid gap-4 sm:grid-cols-3">
        <Stat label="Mile w mieście" value={formatMiles(city)} />
        <Stat label="Tempo" value={`${formatMiles(perSecond)} mil/s — ${formatMiles(perSecondKm)} km/s`} />
        <Stat label="Na dobę" value={`ok. ${formatMiles(perDay)} mln mil — ok. ${formatMiles(perDayKm)} mln km`} />
      </dl>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface px-5 py-4">
      <dt className="text-xs uppercase tracking-widest text-muted">{label}</dt>
      <dd className="mt-2 font-display text-xl font-semibold leading-snug tabular-nums sm:text-2xl">{value}</dd>
    </div>
  );
}
