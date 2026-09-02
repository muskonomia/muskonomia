import { Link } from "@tanstack/react-router";
import { TOPICS, type TopicId } from "@/lib/posts";

function chipClass(active: boolean) {
  return active
    ? "rounded-full border border-fg bg-fg/10 px-4 py-1.5 text-sm text-fg"
    : "rounded-full border border-border px-4 py-1.5 text-sm text-muted hover:border-fg hover:text-fg";
}

export function TopicChips({ current }: { current?: TopicId }) {
  return (
    <nav className="flex flex-wrap gap-2" aria-label="Filtr tematów">
      <Link to="/blog" className={chipClass(!current)}>
        Wszystkie
      </Link>
      {TOPICS.map((t) => (
        <Link
          key={t.id}
          to="/tematy/$topic"
          params={{ topic: t.id }}
          className={chipClass(current === t.id)}
        >
          {t.label}
        </Link>
      ))}
    </nav>
  );
}
