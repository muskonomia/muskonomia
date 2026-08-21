import { Link } from "@tanstack/react-router";
import type { Post } from "@/lib/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group relative min-h-72 overflow-hidden rounded-xl"
    >
      <img
        src={post.img}
        alt=""
        className={`absolute inset-0 h-full w-full ${post.contain ? "bg-fg object-contain" : "object-cover"} transition duration-500 group-hover:scale-105`}
      />
      <div className="absolute inset-0 bg-linear-to-t from-overlay via-overlay/45 to-overlay/10" />
      <div className="relative z-10 flex h-full min-h-72 flex-col justify-end p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg/75">
          {post.kicker} · {post.date}
        </p>
        <h3 className="mt-1 font-display text-2xl font-semibold leading-none">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-fg/80">{post.excerpt}</p>
      </div>
    </Link>
  );
}
