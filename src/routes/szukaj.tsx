import { createFileRoute } from "@tanstack/react-router";
import { ListingShell } from "@/components/listing-shell";
import { PostGrid } from "@/components/post-card";
import { SearchForm } from "@/components/search-form";
import { TopicChips } from "@/components/topic-chips";
import { searchPosts } from "@/lib/posts";
import { pageHead } from "@/lib/seo";

type SzukajSearch = { q: string };

export const Route = createFileRoute("/szukaj")({
  validateSearch: (raw: Record<string, unknown>): SzukajSearch => ({
    q: typeof raw.q === "string" ? raw.q : "",
  }),
  head: () =>
    pageHead({
      title: "Szukaj",
      description: "Szukaj wpisów na muskonomia.pl po tytule, leadzie i treści.",
      path: "/szukaj",
    }),
  component: Szukaj,
});

function Szukaj() {
  const { q } = Route.useSearch();
  const needle = q.trim();
  const results = needle ? searchPosts(needle) : [];

  return (
    <ListingShell
      kicker="Szukaj"
      title="Szukaj wpisów"
      description="Po tytule, leadzie, kickerze i treści. Wielkość liter nie ma znaczenia."
      toolbar={
        <div className="flex flex-col gap-4">
          <SearchForm defaultValue={q} />
          <TopicChips />
        </div>
      }
    >
      {!needle ? (
        <p className="text-muted">Wpisz frazę powyżej, żeby przeszukać bloga.</p>
      ) : results.length === 0 ? (
        <p className="text-muted">
          Nic nie znaleziono dla «{needle}». Spróbuj innego słowa albo wróć do{" "}
          <a href="/blog" className="text-accent hover:text-accent-hover">
            wszystkich wpisów
          </a>
          .
        </p>
      ) : (
        <PostGrid posts={results} />
      )}
    </ListingShell>
  );
}
