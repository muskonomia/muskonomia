import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FormEvent, useState } from "react";
import { pageHead } from "@/lib/seo";
import { SITE_DESCRIPTION } from "@/lib/site";
import { posts } from "@/lib/posts";
import { XLogo } from "@/components/x-logo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Tesla, SpaceX, Elon Musk i xAI",
      description: SITE_DESCRIPTION,
      path: "/",
    }),
  component: Home,
});

function Home() {
  const [subscribed, setSubscribed] = useState(false);

  function onJoin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubscribed(true);
  }

  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />

      <main>
      <section className="relative isolate flex min-h-svh items-end overflow-hidden" aria-labelledby="home-h1">
        <img
          src="/img/cybertruck-pl.png"
          alt="Tesla Cybertruck"
          className="absolute inset-0 h-full w-full object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-overlay via-overlay/55 to-overlay/20" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-32">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-fg/80">
            Tesla · SpaceX · xAI
          </p>
          <h1
            id="home-h1"
            className="max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl"
          >
            Świat Elona Muska
          </h1>
          <p className="mt-5 max-w-xl text-base text-fg/85 sm:text-lg">
            Najświeższe wiadomości z Tesli, SpaceX i xAI. Never count Elon out — he’s frequently
            late, but never wrong.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#blog"
              className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-fg hover:bg-accent-hover"
            >
              Najnowsze wpisy
            </a>
            <a
              href="#join"
              className="rounded-md border border-fg/30 bg-overlay/40 px-5 py-3 text-sm font-semibold backdrop-blur-sm hover:border-fg"
            >
              Newsletter
            </a>
          </div>
        </div>
      </section>

      <HomeBlog />

      <section id="tematy" className="mx-auto max-w-6xl px-5 py-20" aria-labelledby="sec-tematy">
        <h2 id="sec-tematy" className="font-display text-4xl font-semibold tracking-tight">
          Tematy
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <TopicCard
            href="/tematy#tesla"
            img="/img/cover-cybercab.jpg"
            kicker="Tesla"
            title="Tesla"
            copy="Robotaxi, Semi, Cybertruck."
          />
          <TopicCard
            href="/tematy#spacex"
            img="/img/cover-falcon.jpg"
            kicker="SpaceX"
            title="SpaceX"
            copy="Starlink, Starship, Księżyc."
          />
          <TopicCard
            href="/tematy#xai"
            img="/img/grok-bot.jpg"
            kicker="xAI"
            title="xAI"
            copy="Grok, boty, Colossus."
          />
          <TopicCard
            href="/tematy#inne"
            img="/img/inline-rivian.jpg"
            kicker="Inne"
            title="Inne"
            copy="Branża EV poza Teslą."
          />
        </div>
      </section>

      <Link
        to="/blog/$slug"
        params={{ slug: "tesla-model-y-dla-rodziny" }}
        className="relative isolate block min-h-[70vh] overflow-hidden"
        aria-labelledby="sec-wnetrze"
      >
        <img
          src="/img/interior.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay/55" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl items-center px-5 py-24">
          <div className="max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fg/70">Wnętrze</p>
            <h2 id="sec-wnetrze" className="mt-3 font-display text-5xl font-semibold leading-none">
              Rodzina w Tesli
            </h2>
            <p className="mt-4 text-fg/85">
              Model Y: miejsce, foteliki, bagażnik i spokój na codziennej trasie — nie tylko starty
              rakiet.
            </p>
            <span className="mt-6 inline-block text-sm font-semibold text-fg underline decoration-accent underline-offset-4">
              Czytaj wpis →
            </span>
          </div>
        </div>
      </Link>

      <Link
        to="/blog/$slug"
        params={{ slug: "terafab-ruszyly-pierwsze-prace-budowlane" }}
        className="relative isolate block overflow-hidden"
        aria-labelledby="sec-terafab"
      >
        <img
          src="/img/terafab-render-night.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-overlay/70" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-28 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fg/70">Skala</p>
          <h2 id="sec-terafab" className="mt-4 font-display text-5xl font-semibold leading-none sm:text-6xl">
            TERAFAB
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-fg/80">
            Render, teren, liczby. Wszystko, co wiadomo o fabryce chipów Tesli i SpaceX.
          </p>
          <span className="mt-6 inline-block text-sm font-semibold text-fg underline decoration-accent underline-offset-4">
            Czytaj wpis →
          </span>
        </div>
      </Link>

      <section className="mx-auto max-w-6xl px-5 py-20" aria-labelledby="sec-historie">
        <h2 id="sec-historie" className="mb-6 font-display text-4xl font-semibold tracking-tight">
          Wybrane historie
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
        <article className="overflow-hidden rounded-xl border border-border bg-surface">
          <img src="/img/model3.jpg" alt="Matowa Tesla Model 3" className="h-56 w-full object-cover" />
          <div className="p-6">
            <p className="text-xs uppercase tracking-widest text-accent">Tesla</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">Matowy Model 3</h3>
            <p className="mt-2 text-sm text-muted">
              Design, hamulce i codzienność na ulicach — nie tylko Cybertruck.
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-xl border border-border bg-surface">
          <img
            src="/img/grok-chart.jpg"
            alt="Ranking Grok w indeksie medycznym"
            className="h-56 w-full bg-fg object-contain object-center p-3"
          />
          <div className="p-6">
            <p className="text-xs uppercase tracking-widest text-accent">xAI</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">Grok w medycynie</h3>
            <p className="mt-2 text-sm text-muted">
              Indeks Artificial Analysis — Grok wśród liderów w zadaniach healthcare.
            </p>
          </div>
        </article>
        </div>
      </section>

      <section id="join" className="px-5 pb-24" aria-labelledby="sec-newsletter">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-surface px-6 py-14 text-center">
            <h2 id="sec-newsletter" className="font-display text-4xl font-semibold">
              Newsletter
            </h2>
            <p className="mt-2 text-muted">Krótki newsletter o Tesli, SpaceX i Groku.</p>
            {subscribed ? (
              <p className="mt-6 text-sm font-medium text-fg">Zapisane. Dzięki.</p>
            ) : (
              <form onSubmit={onJoin} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="Twój email"
                  className="min-h-12 flex-1 rounded-md border border-border bg-bg px-4 text-sm text-fg outline-none placeholder:text-muted focus:border-accent"
                />
                <button
                  type="submit"
                  className="min-h-12 rounded-md bg-accent px-6 text-sm font-semibold text-fg hover:bg-accent-hover"
                >
                  Zapisz się
                </button>
              </form>
            )}
          </div>
          <a
            href="https://x.com/MuskonomiaPL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center rounded-xl border border-border bg-surface px-6 py-14 text-center transition hover:border-fg"
          >
            <XLogo className="h-10 w-10" />
            <h2 className="mt-5 font-display text-4xl font-semibold">Śledź na X</h2>
            <p className="mt-2 text-muted">@MuskonomiaPL — starty, wycieki i newsy, zanim wejdą na bloga.</p>
          </a>
          <a
            href="mailto:muskonomia.pl@gmail.com"
            className="flex flex-col items-center justify-center rounded-xl border border-border bg-surface px-6 py-14 text-center transition hover:border-fg"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-10 w-10 fill-none stroke-current stroke-[1.6]">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 7 9-7" />
            </svg>
            <h2 className="mt-5 font-display text-4xl font-semibold">Kontakt</h2>
            <p className="mt-2 text-muted">muskonomia.pl@gmail.com</p>
          </a>
        </div>
      </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function HomeBlog() {
  const [hero, ...rest] = posts;

  return (
    <section id="blog" className="bg-bg" aria-labelledby="sec-blog">
      <div className="mx-auto max-w-6xl px-5 pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">Aktualności</p>
        <h2 id="sec-blog" className="mt-1 font-display text-4xl font-semibold tracking-tight">
          Blog
        </h2>
      </div>

      {hero && (
        <Link
          to="/blog/$slug"
          params={{ slug: hero.slug }}
          className="group relative mx-auto mt-10 block min-h-[70vh] max-w-6xl overflow-hidden sm:rounded-xl"
        >
          <img
            src={hero.img}
            alt=""
            className={`absolute inset-0 h-full w-full ${hero.contain ? "bg-fg object-contain" : hero.object ?? "object-cover"}`}
          />
          <div className="absolute inset-0 bg-linear-to-t from-overlay via-overlay/50 to-overlay/15" />
          <div className="relative z-10 flex min-h-[70vh] items-end px-5 py-12 sm:px-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fg/70">
                {hero.kicker} · {hero.date}
              </p>
              <h3 className="mt-3 font-display text-5xl font-semibold leading-none sm:text-6xl">
                {hero.title}
              </h3>
              <p className="mt-4 text-fg/90">{hero.excerpt}</p>
            </div>
          </div>
        </Link>
      )}

      <div className="mx-auto grid max-w-6xl gap-5 px-5 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <Link
            key={post.slug}
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
        ))}
      </div>
    </section>
  );
}

function TopicCard({
  href,
  img,
  kicker,
  title,
  copy,
}: {
  href: string;
  img: string;
  kicker: string;
  title: string;
  copy: string;
}) {
  return (
    <a href={href} className="group relative block min-h-72 overflow-hidden rounded-xl">
      <img
        src={img}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-overlay via-overlay/40 to-overlay/10" />
      <div className="relative z-10 flex h-full min-h-72 flex-col justify-end p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg/75">{kicker}</p>
        <h3 className="mt-1 font-display text-3xl font-semibold leading-none">{title}</h3>
        <p className="mt-2 text-sm text-fg/80">{copy}</p>
      </div>
    </a>
  );
}
