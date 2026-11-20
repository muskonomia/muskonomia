import { createFileRoute, Link } from "@tanstack/react-router";
import { ListingShell } from "@/components/listing-shell";
import { PostGrid } from "@/components/post-card";
import { SearchForm } from "@/components/search-form";
import { TopicChips } from "@/components/topic-chips";
import { searchPostList } from "@/lib/posts.functions";
import { pageHead } from "@/lib/seo";

type SzukajSearch = { q?: string };

export const Route = createFileRoute("/szukaj")({
  validateSearch: (raw: Record<string, unknown>): SzukajSearch => ({
    q: typeof raw.q === "string" ? raw.q : undefined,
  }),
  loaderDeps: ({ search }) => ({ q: (search.q ?? "").trim() }),
  loader: ({ deps }) => (deps.q ? searchPostList({ data: { q: deps.q } }) : []),
  head: () =>
    pageHead({
      title: "Szukaj",
      description: "Szukaj wpisów na muskonomia.pl po tytule, leadzie i treści.",
      path: "/szukaj",
      robots: "noindex,follow",
    }),
  component: Szukaj,
});

function Szukaj() {
  const { q = "" } = Route.useSearch();
  const needle = q.trim();
  const results = Route.useLoaderData();

  return (
    <ListingShell
      kicker="Szukaj"
      title="Szukaj wpisów"
      description="Po tytule, leadzie, kickerze i treści. Wielkość liter nie ma znaczenia."
      toolbar={
        <div className="flex flex-col gap-4">
          <SearchForm key={q} defaultValue={q} />
          <TopicChips />
        </div>
      }
    >
      {!needle ? (
        <p className="text-muted">Wpisz frazę powyżej, żeby przeszukać bloga.</p>
      ) : results.length === 0 ? (
        <p className="text-muted">
          Nic nie znaleziono dla «{needle}». Spróbuj innego słowa albo wróć do{" "}
          <Link to="/blog" className="text-link hover:text-link-hover">
            wszystkich wpisów
          </Link>
          .
        </p>
      ) : (
        <PostGrid posts={results} limit={false} heading="h2" />
      )}
    </ListingShell>
  );
}
