import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DiscussOnX } from "@/components/discuss-on-x";
import { getPost, postJsonLd, postTopic, posts, postsByTopic, TOPICS } from "@/lib/posts";
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

function RichText({ text }: { text: string }) {
  const re = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)|(https?:\/\/[^\s<]+)/g;
  const parts: ReactNode[] = [];
  let last = 0;
  let i = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1] && m[2]) {
      parts.push(
        <a
          key={i++}
          href={m[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline decoration-accent/40 underline-offset-2 hover:text-accent-hover"
        >
          {m[1]}
        </a>,
      );
    } else {
      let href = m[3];
      let trail = "";
      const cut = href.match(/^(.*?)([),.;:]+)$/);
      if (cut) {
        href = cut[1];
        trail = cut[2];
      }
      parts.push(
        <a
          key={i++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline decoration-accent/40 underline-offset-2 hover:text-accent-hover break-all"
        >
          {href}
        </a>,
      );
      if (trail) parts.push(trail);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function BlogPost() {
  const post = Route.useLoaderData();
  const topic = postTopic(post);
  const topicMeta = TOPICS.find((t) => t.id === topic);
  const others = postsByTopic(topic)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);
  if (others.length < 3) {
    others.push(
      ...posts.filter((p) => p.slug !== post.slug && !others.includes(p)).slice(0, 3 - others.length),
    );
  }

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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fg/70">
                {post.kicker} ·{" "}
                <time dateTime={post.isoDate}>{post.date}</time>
                {topicMeta ? (
                  <>
                    {" "}
                    ·{" "}
                    <a href={`/tematy#${topic}`} className="hover:text-fg">
                      {topicMeta.label}
                    </a>
                  </>
                ) : null}
              </p>
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
                    {block.items.map((item) => (
                      <li key={item}>
                        <RichText text={item} />
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i}>
                  <RichText text={block.text} />
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

        <section className="mx-auto max-w-6xl px-5 pb-20" aria-labelledby="post-more">
          <h2 id="post-more" className="mb-6 font-display text-3xl font-semibold tracking-tight">
            Czytaj również
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="relative min-h-56 overflow-hidden rounded-xl"
            >
              <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-overlay/55" />
              <div className="relative z-10 flex h-full min-h-56 items-end p-5">
                <h3 className="font-display text-2xl font-semibold leading-none">{p.title}</h3>
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
