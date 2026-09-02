import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ListingShell } from "@/components/listing-shell";
import { PostGrid } from "@/components/post-card";
import { isYearMonth, monthTitle, postsInMonth } from "@/lib/posts";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/archiwum/$year/$month")({
  loader: ({ params }) => {
    const { year, month } = params;
    if (!isYearMonth(year, month)) throw notFound();
    return { year, month, list: postsInMonth(year, month), title: monthTitle(year, month) };
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead({
          title: `Archiwum: ${loaderData.title}`,
          description: `Wpisy z ${loaderData.title.toLowerCase()} na muskonomia.pl.`,
          path: `/archiwum/${loaderData.year}/${loaderData.month}`,
        })
      : {},
  component: ArchiwumMiesiac,
});

function ArchiwumMiesiac() {
  const { list, title } = Route.useLoaderData();
  return (
    <ListingShell
      kicker="Archiwum"
      title={title}
      description={
        list.length
          ? undefined
          : "W tym miesiącu nie ma wpisów. Wybierz inny z indeksu archiwum."
      }
      toolbar={
        <Link to="/archiwum" className="text-sm text-accent hover:text-accent-hover">
          ← Wszystkie miesiące
        </Link>
      }
    >
      {list.length ? (
        <PostGrid posts={list} />
      ) : (
        <p className="text-muted">Brak wpisów w tym miesiącu.</p>
      )}
    </ListingShell>
  );
}
