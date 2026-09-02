import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DiscussOnX } from "@/components/discuss-on-x";
import { PostCard } from "@/components/post-card";
import { PostMeta } from "@/components/post-meta";
import { LinkedText } from "@/components/rich-text";
import { getPost, postJsonLd, relatedPosts } from "@/lib/posts";
import { postHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => (loaderData ? postHead(loaderData) : {}),
  component: BlogPost,
});

function BlogPost() {
  const post = Route.useLoaderData();
  const others = relatedPosts(post, 3);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main className="pt-16">
        <article>
          <header className="relative isolate min-h-[80vh] overflow-hidden">
            <img
              src={post.img}
              alt={post.title}
              className={`absolute inset-0 h-full w-full ${post.contain ? "bg-fg object-contain" : post.object ?? "object-cover"}`}
            />
            <div className="absolute inset-0 bg-linear-to-t from-overlay via-overlay/50 to-overlay/20" />
            <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-3xl flex-col justify-end px-5 py-16">
              <PostMeta
                post={post}
                className="text-xs font-semibold uppercase tracking-[0.28em] text-fg/70"
              />
              <h1 className="mt-3 font-display text-5xl font-semibold leading-none sm:text-6xl">
                {post.title}
              </h1>
            </div>
          </header>

          <div className="mx-auto max-w-3xl space-y-5 px-5 py-16 text-base leading-relaxed text-fg/90 sm:text-lg">
            {post.body.map((block, i) => {
              if (block.type === "img") {
                return (
                  <figure key={i} className="-mx-5 overflow-hidden sm:mx-0 sm:rounded-xl">
                    <img
                      src={block.src}
                      alt={block.alt}
                      className={
                        block.contain
                          ? "max-h-[28rem] w-full bg-fg object-contain"
                          : "aspect-video w-full object-cover"
                      }
                    />
                    {block.caption ? (
                      <figcaption className="px-5 pt-2 text-sm text-muted sm:px-0">
                        {block.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                );
              }
              if (block.type === "video") {
                return (
                  <figure key={i} className="-mx-5 overflow-hidden sm:mx-0 sm:rounded-xl">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster={block.poster}
                      autoPlay={block.loop}
                      muted={block.loop}
                      loop={block.loop}
                      className="aspect-video w-full bg-overlay"
                    >
                      <source src={block.src} type="video/mp4" />
                    </video>
                    {block.caption ? (
                      <figcaption className="px-5 pt-2 text-sm text-muted sm:px-0">
                        {block.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                );
              }
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="pt-4 font-display text-3xl font-semibold leading-tight text-fg"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="list-disc space-y-2 pl-5">
                    {block.items.map((item, j) => (
                      <li key={j}>
                        <LinkedText text={item} />
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i}>
                  <LinkedText text={block.text} />
                </p>
              );
            })}
            <Link
              to="/blog"
              className="inline-block pt-4 text-sm font-medium text-accent hover:text-accent-hover"
            >
              ← Wszystkie wpisy
            </Link>
          </div>
        </article>

        <div className="px-5 pb-16">
          <DiscussOnX title={post.title} slug={post.slug} xPostId={post.xPostId} />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd(post)) }}
        />

        {others.length > 0 ? (
          <section className="mx-auto max-w-6xl px-5 pb-20" aria-labelledby="post-more">
            <h2 id="post-more" className="mb-6 font-display text-3xl font-semibold tracking-tight">
              Czytaj również
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </div>
  );
}
