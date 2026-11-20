import { Link } from "@tanstack/react-router";
import { archiveParams, topicLabel, type PostSummary } from "@/lib/posts";

export function PostMeta({
  post,
  className = "text-xs font-semibold uppercase tracking-[0.2em] text-fg/75",
}: {
  post: Pick<PostSummary, "topic" | "isoDate" | "date">;
  className?: string;
}) {
  const { year, month } = archiveParams(post.isoDate);
  return (
    <p className={className}>
      <Link to="/tematy/$topic" params={{ topic: post.topic }} className="hover:text-fg">
        {topicLabel(post.topic)}
      </Link>
      {" · "}
      <Link to="/archiwum/$year/$month" params={{ year, month }} className="hover:text-fg">
        <time dateTime={post.isoDate}>{post.date}</time>
      </Link>
    </p>
  );
}
