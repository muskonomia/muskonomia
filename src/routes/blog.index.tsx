import { createFileRoute } from "@tanstack/react-router";
import { PostGrid } from "@/components/post-card";
import { TopicChips } from "@/components/topic-chips";
import { ListingShell } from "@/components/listing-shell";
import { SearchForm } from "@/components/search-form";
import { getLatestPosts, getPostList } from "@/lib/posts.functions";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  loader: () => getLatestPosts({ data: { limit: 12 } }),
  head: () =>
    pageHead({
      title: "Blog Tesla, SpaceX i Elon Musk",
      description:
        "Wpisy o Tesli, SpaceX, xAI, Neuralink, Boring Company i Elonie Musku: Robotaxi, Starlink, Grok, Cybercab, Optimus. Newsy i analizy po polsku.",
      path: "/blog",
    }),
  component: BlogIndex,
});

function BlogIndex() {
  const { posts, total } = Route.useLoaderData();
  return (
    <ListingShell
      title="Blog Tesla, SpaceX, Elon Musk"
      toolbar={
        <div className="flex flex-col gap-4">
          <TopicChips />
          <SearchForm />
        </div>
      }
    >
      <PostGrid posts={posts} total={total} loadAll={() => getPostList()} heading="h2" />
    </ListingShell>
  );
}
