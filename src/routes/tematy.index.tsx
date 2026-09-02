import { createFileRoute, Link } from "@tanstack/react-router";
import { ListingShell } from "@/components/listing-shell";
import { pageHead } from "@/lib/seo";
import { postsByTopic, TOPICS, wpisow, type TopicId } from "@/lib/posts";

export const Route = createFileRoute("/tematy/")({
  head: () =>
    pageHead({
      title: "Tematy: Tesla, SpaceX, xAI, Neuralink, Boring",
      description:
        "Wpisy pogrupowane: Tesla, SpaceX, xAI, Neuralink, Boring Company i reszta. Robotaxi, Starlink, Grok i świat Muska w osobnych działach.",
      path: "/tematy",
    }),
  component: Tematy,
});

function Tematy() {
  return (
    <ListingShell
      title="Tesla, SpaceX, xAI, Neuralink, Boring"
      description="Każdy wpis z bloga ląduje tu automatycznie — osobny dział, osobny adres. Inne to Rivian, Scout i reszta branży."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TOPICS.map((topic) => (
          <TopicOverviewCard key={topic.id} id={topic.id} />
        ))}
      </div>
    </ListingShell>
  );
}

function TopicOverviewCard({ id }: { id: TopicId }) {
  const topic = TOPICS.find((t) => t.id === id)!;
  const n = postsByTopic(id).length;
  return (
    <Link
      to="/tematy/$topic"
      params={{ topic: id }}
      className="group relative block min-h-72 overflow-hidden rounded-xl"
    >
      <img
        src={topic.cover}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-overlay via-overlay/40 to-overlay/10" />
      <div className="relative z-10 flex h-full min-h-72 flex-col justify-end p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg/75">{topic.label}</p>
        <h2 className="mt-1 font-display text-3xl font-semibold leading-none">{topic.label}</h2>
        <p className="mt-2 text-sm text-fg/80">
          {topic.copy} · {wpisow(n)}
        </p>
      </div>
    </Link>
  );
}
