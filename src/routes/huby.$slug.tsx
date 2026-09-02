import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PostGrid } from "@/components/post-card";
import { getHub, hubPosts } from "@/lib/hubs";
import { pageHead } from "@/lib/seo";
import { wpisow } from "@/lib/posts";

export const Route = createFileRoute("/huby/$slug")({
  loader: ({ params }) => {
    const hub = getHub(params.slug);
    if (!hub) throw notFound();
    return { hub, list: hubPosts(hub) };
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead({
          title: loaderData.hub.title,
          description: loaderData.hub.copy,
          path: `/huby/${loaderData.hub.id}`,
          image: loaderData.hub.cover,
        })
      : {},
  component: HubPage,
});

function HubPage() {
  const { hub, list } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main className="pt-16">
        <div className="relative isolate min-h-56 overflow-hidden">
          <img src={hub.cover} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-overlay/70" />
          <div className="relative z-10 mx-auto flex min-h-56 max-w-6xl items-end px-5 py-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fg/70">Hub</p>
              <h1 className="mt-1 font-display text-5xl font-semibold leading-none">{hub.title}</h1>
              <p className="mt-2 max-w-2xl text-fg/80">
                {hub.copy} · {wpisow(list.length)}
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-5 py-10">
          {list.length ? (
            <PostGrid posts={list} />
          ) : (
            <p className="text-muted">Brak pasujących wpisów. Hub pokazuje tylko to, co już jest na blogu.</p>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
