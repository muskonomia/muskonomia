import { Link } from "@tanstack/react-router";
import { archiveParams, postTopic, topicLabel, type Post } from "@/lib/posts";

export function PostMeta({
  post,
  className = "text-xs font-semibold uppercase tracking-[0.2em] text-fg/75",
}: {
  post: Post;
  className?: string;
}) {
  const topic = postTopic(post);
  const { year, month } = archiveParams(post.isoDate);
  return (
    <p className={className}>
      <Link to="/tematy/$topic" params={{ topic }} className="hover:text-fg">
        {topicLabel(topic)}
      </Link>
      {" · "}
      <Link to="/archiwum/$year/$month" params={{ year, month }} className="hover:text-fg">
        <time dateTime={post.isoDate}>{post.date}</time>
      </Link>
    </p>
  );
}
