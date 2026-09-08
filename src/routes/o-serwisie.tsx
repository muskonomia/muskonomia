import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { pageHead } from "@/lib/seo";
import { SITE_AUTHOR, SITE_CONTACT_EMAIL, SITE_X_HANDLE, SITE_X_URL } from "@/lib/site";

export const Route = createFileRoute("/o-serwisie")({
  head: () =>
    pageHead({
      title: "O serwisie",
      description:
        "muskonomia.pl — aktualności o Tesli, SpaceX, xAI, Neuralink i The Boring Company po polsku. Kontakt: muskonomia.pl@gmail.com.",
      path: "/o-serwisie",
      image: "/img/terafab-render-night.jpg",
    }),
  component: OSerwisie,
});

/** Okładki i hero z public/img + powiązane wpisy (unikalne ścieżki, bez 404). */
const GALLERY: {
  src: string;
  alt: string;
  caption: string;
  slug?: string;
}[] = [
  {
    src: "/img/cover-cybercab.jpg",
    alt: "Tesla Cybercab — wizualizacja robotaxi",
    caption: "Cybercab / Robotaxi",
    slug: "tesla-dostala-zielone-swiatlo-na-robotaxi-w-nevadzie-do-5000-pojazdow",
  },
  {
    src: "/img/ashok-cybercab-austin-poster.jpg",
    alt: "Cybercab bez kierowcy na ulicy w Austin",
    caption: "Ashok · Cybercab w Austin",
    slug: "ashok-cybercab-austin-bez-kierowcy",
  },
  {
    src: "/img/cc-teaser.jpg",
    alt: "Zapowiedź wydarzenia Cybercab",
    caption: "Wydarzenie Cybercab",
    slug: "tesla-zapowiada-wydarzenie-cybercab-w-austin",
  },
  {
    src: "/img/terafab-render-night.jpg",
    alt: "Nocny render kompleksu Terafab",
    caption: "Terafab — fabryka przyszłości",
    slug: "terafab-ruszyly-pierwsze-prace-budowlane",
  },
  {
    src: "/img/cover-terafab.jpg",
    alt: "Porównanie skali Terafab z boiskiem NFL",
    caption: "Terafab — skala",
    slug: "terafab-ruszyly-pierwsze-prace-budowlane",
  },
  {
    src: "/img/starship-scifi.jpg",
    alt: "Starship po powrocie — kadencja science-fiction",
    caption: "Starship is so sci-fi",
    slug: "elon-musk-starship-is-so-sci-fi",
  },
  {
    src: "/img/v3-starship.jpg",
    alt: "Starship i Starlink V3",
    caption: "Starlink V3 · Starship",
    slug: "spacex-fcc-15-wrzesnia-starlink-v3-operacyjne",
  },
  {
    src: "/img/or-starship.jpg",
    alt: "Starship na stanowisku startowym",
    caption: "Tańsza tona na orbitę",
    slug: "musk-tansza-orbita-odblokuje-nieskonczony-wzrost",
  },
  {
    src: "/img/spacex-ship40-plytki-inspekcja.jpg",
    alt: "Inspekcja płytek osłony termicznej Ship 40",
    caption: "Ship 40 — osłona",
    slug: "spacex-ship-40-probki-oslony-polzanurzalny",
  },
  {
    src: "/img/falcon-sunset.jpg",
    alt: "Falcon o zachodzie słońca",
    caption: "Falcon · SpaceX",
    slug: "jesli-anthropic-wart-2-biliony-ile-wart-spacex",
  },
  {
    src: "/img/cover-moon.jpg",
    alt: "Księżyc — pivot SpaceX",
    caption: "Księżyc przed Marsem",
    slug: "spacex-stawia-ksiezyc-przed-marsem-elon-musk-oglasza-pivot-na-self-growing-city",
  },
  {
    src: "/img/mars-alpha.jpg",
    alt: "Wizja bazy na Marsie",
    caption: "Baza na Marsie",
    slug: "musk-baza-na-marsie-jednym-z-najwiekszych-wyzwan-w-historii",
  },
  {
    src: "/img/sl-vandenberg.jpg",
    alt: "Start Starlink z Vandenberg",
    caption: "11 000+ satelitów Starlink",
    slug: "spacex-przekroczyl-11000-satelitow-starlink-na-orbicie",
  },
  {
    src: "/img/cover-starlink.jpg",
    alt: "Antena Starlink",
    caption: "10 mln klientów Starlink",
    slug: "starlink-przekracza-10-milionow-aktywnych-klientow",
  },
  {
    src: "/img/la-pady.jpg",
    alt: "Pady startowe Starbase Louisiana",
    caption: "Starbase Louisiana",
    slug: "spacex-oglasza-starbase-louisiana",
  },
  {
    src: "/img/modely-hero.jpg",
    alt: "Tesla Model Y przy Superchargerze",
    caption: "Model Y",
    slug: "tesla-model-y-dla-rodziny",
  },
  {
    src: "/img/cover-megacharger.jpg",
    alt: "Megacharger Tesli",
    caption: "Megacharger",
    slug: "nowy-megacharger-tesli-w-vernon-kalifornia",
  },
  {
    src: "/img/fsd-amsterdam.jpg",
    alt: "Tesla FSD — dane unijne",
    caption: "FSD · Unia Europejska",
    slug: "tesla-publikuje-unijne-dane-fsd-przed-glosowaniem-6-pazdziernika",
  },
  {
    src: "/img/g20-optimus.jpg",
    alt: "Tesla Optimus — zbliżenie torsu i głowy",
    caption: "Optimus",
    slug: "musk-na-g20-prad-pod-ai-skonczy-sie-juz-w-2027",
  },
  {
    src: "/img/jpm-optimus.jpg",
    alt: "Pięć robotów Tesla Optimus w hali",
    caption: "Optimus · produkcja",
    slug: "jpmorgan-po-wizycie-w-fremont-tesla-wstrzymuje-model-y-w-robotaxi",
  },
  {
    src: "/img/vegas-loop-123-stacji.jpg",
    alt: "Mapa stacji Vegas Loop",
    caption: "Vegas Loop · Boring Company",
    slug: "vegas-loop-19-nowych-stacji",
  },
  {
    src: "/img/nl-implant-moneta.jpg",
    alt: "Implant Neuralink obok monety",
    caption: "Neuralink N1",
    slug: "neuralink-szuka-ludzi-i-jasno-mowi-kogo-nie-chce",
  },
  {
    src: "/img/pw-colossus.jpg",
    alt: "Klastry Colossus — infrastruktura AI",
    caption: "Colossus · moc pod AI",
    slug: "elon-musk-prad-to-dopiero-poczatek",
  },
  {
    src: "/img/gb-poster.jpg",
    alt: "Grok Bot — plakat",
    caption: "Grok Bot",
    slug: "grok-bot-ma-wlasny-komputer-i-dziala-gdy-ty-spisz",
  },
];

function OSerwisie() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <SiteHeader />
      <main className="pt-16">
        <div className="relative isolate min-h-64 overflow-hidden sm:min-h-72">
          <img
            src="/img/terafab-render-night.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-t from-overlay via-overlay/75 to-overlay/45" />
          <div className="absolute inset-0 bg-overlay/40" />
          <div className="relative z-10 mx-auto flex min-h-64 max-w-6xl items-end px-5 py-10 sm:min-h-72">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-fg/80">Serwis</p>
              <h1 className="mt-1 font-display text-5xl font-semibold leading-none tracking-tight text-fg drop-shadow-sm sm:text-6xl">
                O serwisie
              </h1>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 py-10 pb-20">
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-fg/90 sm:text-lg">
            <p>
              muskonomia.pl zbiera po polsku to, co dzieje się wokół firm Elona Muska. Źródła są
              publiczne: wpisy na X, komunikaty firm, notatki analityków, lokalna prasa.
            </p>
            <p>
              Na blogu są Tesla, SpaceX, xAI, Neuralink i The Boring Company. Gdy we wpisie jest kąt
              rynkowy — TSLA, wyceny, porównywalne spółki — też tam ląduje, w dziale Inne albo przy
              właściwej firmie.
            </p>
            <p>Redakcja: {SITE_AUTHOR}.</p>
            <p>
              Kontakt serwisu:{" "}
              <a href={`mailto:${SITE_CONTACT_EMAIL}`} className="text-accent hover:text-accent-hover">
                {SITE_CONTACT_EMAIL}
              </a>
              . Na X:{" "}
              <a
                href={SITE_X_URL}
                target="_blank"
                rel="me noopener noreferrer"
                className="text-accent hover:text-accent-hover"
              >
                {SITE_X_HANDLE}
              </a>
              .
            </p>
          </div>

          <section className="mt-14" aria-labelledby="galeria-heading">
            <h2 id="galeria-heading" className="font-display text-3xl font-semibold tracking-tight">
              Galeria
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
              Wybrane okładki i kadry z bloga — Tesla, SpaceX, Optimus, Terafab, Starlink, Boring i
              więcej. Kliknij zdjęcie, żeby przejść do powiązanego wpisu.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
              {GALLERY.map((item) => {
                const inner = (
                  <>
                    <div className="aspect-[4/3] overflow-hidden bg-surface">
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="mt-2 text-xs font-medium text-fg/85 sm:text-sm">
                      {item.caption}
                    </figcaption>
                  </>
                );

                return (
                  <li key={item.src}>
                    <figure className="group">
                      {item.slug ? (
                        <Link
                          to="/blog/$slug"
                          params={{ slug: item.slug }}
                          className="block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                          aria-label={`${item.caption} — otwórz wpis`}
                        >
                          {inner}
                        </Link>
                      ) : (
                        <div>{inner}</div>
                      )}
                    </figure>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
