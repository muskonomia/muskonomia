import { createFileRoute, Link } from "@tanstack/react-router";
import { ListingShell } from "@/components/listing-shell";
import { archiveMonths, monthTitle, wpisow } from "@/lib/posts";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/archiwum/")({
  head: () =>
    pageHead({
      title: "Archiwum",
      description: "Wpisy muskonomia.pl pogrupowane miesiącami.",
      path: "/archiwum",
    }),
  component: Archiwum,
});

function Archiwum() {
  const months = archiveMonths();
  return (
    <ListingShell
      title="Archiwum"
      description="Miesiące, w których coś wyszło na blogu. Data na karcie wpisu prowadzi tu."
    >
      {months.length === 0 ? (
        <p className="text-muted">Brak wpisów w archiwum.</p>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {months.map((m) => (
            <li key={`${m.year}-${m.month}`}>
              <Link
                to="/archiwum/$year/$month"
                params={{ year: m.year, month: m.month }}
                className="block rounded-xl border border-border bg-surface px-5 py-6 hover:border-fg"
              >
                <h2 className="font-display text-2xl font-semibold">{monthTitle(m.year, m.month)}</h2>
                <p className="mt-1 text-sm text-muted">{wpisow(m.count)}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </ListingShell>
  );
}
