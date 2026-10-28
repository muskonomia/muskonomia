import { formatMiles } from "@/lib/fsd-counter";
import type { TexasTeslaFleet, TexasTeslaPoint } from "@/lib/robotaxi-fleet.functions";

function plDay(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

function shortDay(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

function StepChart({ points }: { points: TexasTeslaPoint[] }) {
  const w = 640;
  const h = 320;
  const pad = { l: 40, r: 108, t: 18, b: 32 };
  const maxVal = Math.max(...points.map((point) => Math.max(point.cybercab, point.modelY)), 1);
  const yMax = Math.max(100, Math.ceil(maxVal / 100) * 100);
  const n = points.length;
  const xAt = (i: number) => pad.l + (n <= 1 ? 0 : (i / (n - 1)) * (w - pad.l - pad.r));
  const yAt = (value: number) => pad.t + (1 - value / yMax) * (h - pad.t - pad.b);
  const path = (key: "cybercab" | "modelY") => {
    let d = `M ${xAt(0)} ${yAt(points[0][key])}`;
    for (let i = 1; i < n; i += 1) d += ` H ${xAt(i)} V ${yAt(points[i][key])}`;
    return d;
  };
  const last = points[n - 1];
  let cyberLabel = yAt(last.cybercab);
  let modelLabel = yAt(last.modelY);
  if (Math.abs(cyberLabel - modelLabel) < 36) {
    if (cyberLabel <= modelLabel) {
      cyberLabel -= 10;
      modelLabel += 18;
    } else {
      modelLabel -= 10;
      cyberLabel += 18;
    }
  }
  const ticks = [0, yMax / 2, yMax];

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full" role="img" aria-label="Rejestr Cybercab i Model Y w Teksasie">
      {ticks.map((tick) => (
        <g key={tick}>
          <line x1={pad.l} x2={w - pad.r} y1={yAt(tick)} y2={yAt(tick)} stroke="rgba(255,255,255,0.12)" />
          <text x={pad.l - 8} y={yAt(tick) + 4} textAnchor="end" fill="rgba(255,255,255,0.45)" fontSize="12">
            {formatMiles(tick)}
          </text>
        </g>
      ))}
      <path d={path("modelY")} fill="none" stroke="#f3ead7" strokeWidth="3" />
      <path d={path("cybercab")} fill="none" stroke="#ff2a1a" strokeWidth="3" />
      <text x={xAt(n - 1) + 10} y={cyberLabel - 2} fill="#ff2a1a" fontSize="13">
        Cybercab
      </text>
      <text x={xAt(n - 1) + 10} y={cyberLabel + 18} fill="#ff2a1a" fontSize="22" fontWeight="700">
        {formatMiles(last.cybercab)}
      </text>
      <text x={xAt(n - 1) + 10} y={modelLabel - 2} fill="#f3ead7" fontSize="13">
        Model Y
      </text>
      <text x={xAt(n - 1) + 10} y={modelLabel + 18} fill="#f3ead7" fontSize="22" fontWeight="700">
        {formatMiles(last.modelY)}
      </text>
      <text x={pad.l} y={h - 8} fill="rgba(255,255,255,0.45)" fontSize="12">
        {shortDay(points[0].date)}
      </text>
      <text x={w - pad.r} y={h - 8} textAnchor="end" fill="rgba(255,255,255,0.45)" fontSize="12">
        {shortDay(last.date)}
      </text>
    </svg>
  );
}

export function TexasFleetChart({ fleet }: { fleet: TexasTeslaFleet | null }) {
  if (!fleet?.points.length) {
    return <p className="mt-8 text-sm text-muted">Wykres rejestru Teksasu chwilowo niedostępny.</p>;
  }
  const ahead = fleet.cybercab > fleet.modelY;
  const tied = fleet.cybercab === fleet.modelY;
  const share = fleet.total ? Math.round((fleet.cybercab / fleet.total) * 100) : 0;
  const headline = ahead
    ? "Cybercab wyprzedził Model Y"
    : tied
      ? "Cybercab zrównał się z Model Y"
      : "Cybercab jest jeszcze za Modelem Y";
  const sub = ahead && fleet.leadDate
    ? `Przewaga od ${plDay(fleet.leadDate)} · ${formatMiles(fleet.total)} aut w rejestrze`
    : `${formatMiles(fleet.total)} aut w rejestrze`;

  return (
    <section className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#141311] text-[#f6f1e8]">
      <div className="grid items-center lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="px-6 py-7 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff2a1a]">Tesla Robotaxi · Teksas</p>
          <p className="mt-3 font-display text-7xl font-semibold leading-none tracking-tight text-[#ff2a1a] tabular-nums sm:text-8xl">
            {formatMiles(fleet.cybercab)}
          </p>
          <p className="mt-4 text-xl font-medium">{headline}</p>
          <p className="mt-1 text-[#f6f1e8]/60">{sub}</p>
          <div className="mt-6 grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-[#ff2a1a] px-3 py-3">
              <p className="font-display text-2xl font-semibold tabular-nums sm:text-3xl">+{formatMiles(fleet.latestBatch)}</p>
              <p className="mt-1 text-xs text-[#f6f1e8]/60">ostatnia partia · {shortDay(fleet.latestBatchDate)}</p>
            </div>
            <div className="rounded-xl border border-white/15 px-3 py-3">
              <p className="font-display text-2xl font-semibold tabular-nums sm:text-3xl">+{formatMiles(fleet.last7)}</p>
              <p className="mt-1 text-xs text-[#f6f1e8]/60">Cybercab przez 7 dni</p>
            </div>
            <div className="rounded-xl border border-white/15 px-3 py-3">
              <p className="font-display text-2xl font-semibold tabular-nums sm:text-3xl">{formatMiles(fleet.modelY)}</p>
              <p className="mt-1 text-xs text-[#f6f1e8]/60">Model Y</p>
            </div>
          </div>
          <p className="mt-5 text-[#f6f1e8]/80">Cybercab to {share}% floty Tesli w Teksasie</p>
        </div>
        <div className="px-3 pb-4 sm:px-6 sm:py-6">
          <p className="px-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f6f1e8]/45">
            Rejestr Tesli w Teksasie
          </p>
          <StepChart points={fleet.points} />
        </div>
      </div>
      <p className="px-6 pb-5 text-xs text-[#f6f1e8]/45 sm:px-8">
        Źródło: publiczny rejestr TxDMV, odczyt robotaxitracker.com
        {fleet.asOf ? ` · stan ${registryStamp(fleet.asOf)}` : ""}. Wpis w rejestrze, nie liczba aut na ulicy.
      </p>
    </section>
  );
}

function registryStamp(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Warsaw",
  }).format(date);
}
