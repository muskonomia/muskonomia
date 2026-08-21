import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PostCard } from "@/components/post-card";
import { pageHead } from "@/lib/seo";
import { TOPICS, postsByTopic } from "@/lib/posts";

export const Route = createFileRoute("/tematy")({
  head: () =>
    pageHead({
      title: "Tematy: Tesla, SpaceX, xAI",
      description:
        "Wpisy pogrupowane: Tesla, SpaceX, xAI i Elon Musk. Robotaxi, Starlink, Grok i reszta świata Muska w jednym miejscu.",
      path: "/tematy",
    }),
  component: Tematy,
});

function Tematy() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main className="pt-16">
        <header className="mx-auto max-w-6xl px-5 py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">Dział</p>
          <h1 className="mt-1 font-display text-5xl font-semibold tracking-tight">
            Tesla, SpaceX, xAI
          </h1>
          <p className="mt-3 max-w-xl text-muted">
            Każdy wpis z bloga ląduje tu automatycznie — Tesla, rakiety, xAI albo Inne (Boring
            Company, Neuralink, reszta).
          </p>
          <nav className="mt-6 flex flex-wrap gap-2" aria-label="Tematy">
            {TOPICS.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="rounded-full border border-border px-4 py-1.5 text-sm text-muted hover:border-fg hover:text-fg"
              >
                {t.label}
              </a>
            ))}
          </nav>
        </header>

        {TOPICS.map((topic) => {
          const list = postsByTopic(topic.id);
          return (
            <section key={topic.id} id={topic.id} className="scroll-mt-20" aria-labelledby={`h-${topic.id}`}>
              <div className="relative isolate min-h-56 overflow-hidden">
                <img src={topic.cover} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-overlay/70" />
                <div className="relative z-10 mx-auto flex min-h-56 max-w-6xl items-end px-5 py-10">
                  <div>
                    <h2 id={`h-${topic.id}`} className="font-display text-5xl font-semibold leading-none">
                      {topic.label}
                    </h2>
                    <p className="mt-2 text-fg/80">
                      {topic.copy} · {countLabel(list.length)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mx-auto max-w-6xl px-5 py-10">
                {list.length ? (
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {list.map((post) => (
                      <PostCard key={post.slug} post={post} />
                    ))}
                  </div>
                ) : (
                  <p className="text-muted">Brak wpisów w tym dziale. Pojawią się, gdy wyjdą na blogu.</p>
                )}
              </div>
            </section>
          );
        })}
      </main>
      <SiteFooter />
    </div>
  );
}

function countLabel(n: number) {
  if (n === 0) return "na razie pusto";
  if (n === 1) return "1 wpis";
  const m10 = n % 10;
  const m100 = n % 100;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return `${n} wpisy`;
  return `${n} wpisów`;
}
