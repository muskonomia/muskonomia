import { Link } from "@tanstack/react-router";
import type { Post } from "@/lib/posts";
import { PostMeta } from "@/components/post-meta";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group relative min-h-72 overflow-hidden rounded-xl">
      <img
        src={post.img}
        alt=""
        className={`absolute inset-0 h-full w-full ${post.contain ? "bg-fg object-contain" : "object-cover"} transition duration-500 group-hover:scale-105`}
      />
      <div className="absolute inset-0 bg-linear-to-t from-overlay via-overlay/45 to-overlay/10" />
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className="absolute inset-0 z-0"
        aria-label={post.title}
      >
        <span className="block h-full w-full" />
      </Link>
      <div className="pointer-events-none relative z-10 flex h-full min-h-72 flex-col justify-end p-6">
        <div className="pointer-events-auto">
          <PostMeta post={post} />
        </div>
        <h3 className="mt-1 font-display text-2xl font-semibold leading-none">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-fg/80">{post.excerpt}</p>
      </div>
    </article>
  );
}

export function PostGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
