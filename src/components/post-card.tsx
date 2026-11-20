import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { PostSummary } from "@/lib/posts";
import { PostMeta } from "@/components/post-meta";

type HeadingLevel = "h2" | "h3";

export function PostCard({ post, heading: Heading = "h3" }: { post: PostSummary; heading?: HeadingLevel }) {
  return (
    <article className="group relative min-h-72 overflow-hidden rounded-xl">
      <img
        src={post.img}
        alt=""
        width={1600}
        height={900}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full ${post.contain ? "bg-fg object-contain" : "object-cover"} transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
      />
      <div className="absolute inset-0 bg-linear-to-t from-overlay via-overlay/45 to-overlay/10" />
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className="absolute inset-0 z-0 rounded-xl focus-visible:outline-offset-[-3px]"
        aria-label={post.title}
      >
        <span className="block h-full w-full" />
      </Link>
      <div className="pointer-events-none relative z-10 flex h-full min-h-72 flex-col justify-end p-6">
        <div className="pointer-events-auto">
          <PostMeta post={post} />
        </div>
        <Heading className="mt-1 font-display text-2xl font-semibold leading-none">{post.title}</Heading>
        <p className="mt-2 line-clamp-2 text-sm text-fg/80">{post.excerpt}</p>
      </div>
    </article>
  );
}

export function PostGrid({
  posts: initial,
  limit = 12,
  heading,
  total,
  loadAll,
}: {
  posts: PostSummary[];
  limit?: number | false;
  heading?: HeadingLevel;
  /** Size of the full list when `posts` is only its first page. */
  total?: number;
  loadAll?: () => Promise<PostSummary[]>;
}) {
  const [all, setAll] = useState<PostSummary[] | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const posts = all ?? initial;
  const count = all ? all.length : Math.max(total ?? 0, initial.length);
  const cap = limit === false ? count : limit;
  const hidden = Math.max(0, count - cap);
  const visible = open || hidden === 0 ? posts : posts.slice(0, cap);

  async function showOlder() {
    if (!all && loadAll && initial.length < count) {
      setLoading(true);
      setFailed(false);
      try {
        setAll(await loadAll());
      } catch {
        setFailed(true);
        return;
      } finally {
        setLoading(false);
      }
    }
    setOpen(true);
  }

  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <PostCard key={post.slug} post={post} heading={heading} />
        ))}
      </div>
      {hidden > 0 && !open ? (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={showOlder}
            disabled={loading}
            className="rounded-md border border-border px-5 py-3 text-sm font-semibold text-fg hover:border-fg disabled:opacity-60"
          >
            {loading ? "Wczytuję…" : `Pokaż starsze (${hidden})`}
          </button>
          {failed ? (
            <p role="alert" className="mt-3 text-sm text-link">
              Nie udało się wczytać starszych wpisów. Spróbuj jeszcze raz.
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
