import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PostGrid } from "@/components/post-card";
import { TopicChips } from "@/components/topic-chips";
import { pageHead } from "@/lib/seo";
import { isTopicId, postsByTopic, topicMeta, wpisow } from "@/lib/posts";

export const Route = createFileRoute("/tematy/$topic")({
  loader: ({ params }) => {
    if (!isTopicId(params.topic)) throw notFound();
    const meta = topicMeta(params.topic);
    if (!meta) throw notFound();
    return { topic: params.topic, meta, list: postsByTopic(params.topic) };
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead({
          title: `${loaderData.meta.label} — tematy`,
          description: `${loaderData.meta.copy} Wpisy o ${loaderData.meta.label} na muskonomia.pl.`,
          path: `/tematy/${loaderData.topic}`,
          image: loaderData.meta.cover,
        })
      : {},
  component: Temat,
});

function Temat() {
  const { topic, meta, list } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main className="pt-16">
        <div className="relative isolate min-h-56 overflow-hidden">
          <img src={meta.cover} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-overlay/70" />
          <div className="relative z-10 mx-auto flex min-h-56 max-w-6xl items-end px-5 py-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fg/70">Temat</p>
              <h1 className="mt-1 font-display text-5xl font-semibold leading-none">{meta.label}</h1>
              <p className="mt-2 text-fg/80">
                {meta.copy} · {wpisow(list.length)}
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="mb-8">
            <TopicChips current={topic} />
          </div>
          {list.length ? (
            <PostGrid posts={list} />
          ) : (
            <p className="text-muted">Brak wpisów w tym dziale. Pojawią się, gdy wyjdą na blogu.</p>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
