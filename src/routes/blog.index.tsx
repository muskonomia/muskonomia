import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { posts } from "@/lib/posts";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead({
      title: "Blog",
      description: "Wpisy o Tesli, SpaceX, xAI i muskonomii — aktualności i analizy.",
      path: "/blog",
    }),
  component: BlogIndex,
});

function BlogIndex() {
  const [hero, ...rest] = posts;

  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main className="pt-16">
        <header className="mx-auto max-w-6xl px-5 py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">Dział</p>
          <h1 className="mt-1 font-display text-5xl font-semibold tracking-tight">Blog</h1>
        </header>

        <section aria-labelledby="blog-featured">
        {hero && (
          <Link to="/blog/$slug" params={{ slug: hero.slug }} className="group relative block min-h-[70vh] overflow-hidden">
            <img
              src={hero.img}
              alt=""
              className={`absolute inset-0 h-full w-full ${hero.contain ? "bg-fg object-contain" : hero.object ?? "object-cover"}`}
            />
            <div className="absolute inset-0 bg-linear-to-t from-overlay via-overlay/50 to-overlay/15" />
            <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl items-end px-5 py-16">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fg/70">
                  {hero.kicker} · {hero.date}
                </p>
                <h2 id="blog-featured" className="mt-3 font-display text-5xl font-semibold leading-none sm:text-6xl">
                  {hero.title}
                </h2>
                <p className="mt-4 text-fg/90">{hero.excerpt}</p>
              </div>
            </div>
          </Link>
        )}
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16" aria-labelledby="blog-more">
          <h2 id="blog-more" className="mb-8 font-display text-3xl font-semibold tracking-tight">
            Pozostałe wpisy
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group relative min-h-80 overflow-hidden rounded-xl"
            >
              <img
                src={post.img}
                alt=""
                className={`absolute inset-0 h-full w-full ${post.contain ? "bg-fg object-contain" : "object-cover"} transition duration-500 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-overlay via-overlay/45 to-overlay/10" />
              <div className="relative z-10 flex h-full min-h-80 flex-col justify-end p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg/75">
                  {post.kicker}
                </p>
                <h3 className="mt-1 font-display text-3xl font-semibold leading-none">{post.title}</h3>
                <p className="mt-2 text-sm text-fg/80">{post.excerpt}</p>
              </div>
            </Link>
          ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
