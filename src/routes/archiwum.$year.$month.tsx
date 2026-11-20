import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ListingShell } from "@/components/listing-shell";
import { PostGrid } from "@/components/post-card";
import { isYearMonth, monthTitle } from "@/lib/posts";
import { getArchiveMonth } from "@/lib/posts.functions";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/archiwum/$year/$month")({
  loader: async ({ params }) => {
    const { year, month } = params;
    if (!isYearMonth(year, month)) throw notFound();
    const list = await getArchiveMonth({ data: { year, month } });
    if (!list) throw notFound();
    return { year, month, list, title: monthTitle(year, month) };
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
        <Link to="/archiwum" className="text-sm text-link hover:text-link-hover">
          ← Wszystkie miesiące
        </Link>
      }
    >
      {list.length ? (
        <PostGrid posts={list} limit={false} heading="h2" />
      ) : (
        <p className="text-muted">Brak wpisów w tym miesiącu.</p>
      )}
    </ListingShell>
  );
}
