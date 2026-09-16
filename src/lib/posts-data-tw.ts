import type { Post } from "./posts";

export const postsTw: Post[] = [
  {
    slug: "terafab-wycinka-miesiac",
    kicker: "Terafab",
    topic: "tesla",
    title: "Terafab w miesiąc wyciął plac pod fabrykę chipów",
    excerpt:
      "Joe Tegtmeyer: wycinka Terafaba SpaceX i Tesli ruszyła koło 6 sierpnia. Miesiąc później z drona widać niwelację, drogi i ciężki sprzęt.",
    date: "16 września 2026",
    isoDate: "2026-09-16",
    img: "/img/tw-okladka.jpg",
    body: [
      {
        type: "p",
        text: "Główna wycinka terenu wspólnego Terafaba SpaceX i Tesli ruszyła około 6 sierpnia 2026 — niecały miesiąc przed tym nagraniem. Na filmie Joe Tegtmeyera widać już rozległe niwelowanie, hałdy ziemi, drogi i ciężki sprzęt na wielkiej działce.",
      },
      {
        type: "img",
        src: "/img/tw-okladka.jpg",
        alt: "Dron nad Terafabem: wielki, oczyszczony plac, las dookoła, Grimes County",
        caption: "Grimes County, Teksas. Wycinka na poważnie od około 6 sierpnia. Źródło: @JoeTegtmeyer.",
        href: "https://x.com/JoeTegtmeyer/status/2099839506190934385",
      },
      { type: "x", id: "2099839506190934385", handle: "JoeTegtmeyer" },
      {
        type: "p",
        text: "Kadr z drona pokazuje ogromny, oczyszczony plac budowy z pracującym sprzętem do robót ziemnych, wyrównanymi odcinkami i uporządkowanymi składami materiału. Dookoła las. To przygotowanie pod [wspólną fabrykę chipów](https://muskonomia.pl/blog/terafab-ruszyly-pierwsze-prace-budowlane) w wiejskim Teksasie.",
      },
      {
        type: "img",
        src: "/img/tw-ciezarowki.jpg",
        alt: "Ciężarówki i koparki na oczyszczonym terenie Terafaba",
        caption: "Sprzęt w ruchu. Hałdy, drogi, niwelacja.",
        href: "https://x.com/JoeTegtmeyer/status/2099839506190934385",
      },
      {
        type: "img",
        src: "/img/tw-plac.jpg",
        alt: "Wyrównany odcinek placu Terafaba i droga gruntowa",
        caption: "Wyrównane odcinki. Miesiąc po starcie wycinki.",
      },
      {
        type: "img",
        src: "/img/tw-dron.jpg",
        alt: "Szeroki kadr z drona: plac Terafaba, drogi i sprzęt, las w tle",
        caption: "Szerszy kadr z 11 września. Źródło: @JoeTegtmeyer.",
        href: "https://x.com/JoeTegtmeyer/status/2098213241444798539",
      },
      {
        type: "p",
        text: "Joe Tegtmeyer pisze, że to tempo jest normalne, jeśli ktoś oglądał inne duże budowy SpaceX i Tesli w Teksasie, Luizjanie i na Florydzie. Bez tej historii wygląda na niewiarygodne.",
      },
      {
        type: "img",
        src: "/img/tw-mapa.jpg",
        alt: "Mapa: różowym zaznaczony dotychczas wycięty obszar Terafaba",
        caption: "Różowy: ile lasu zeszło do tej pory. Źródło: @TeslaTakesOver.",
        contain: true,
        href: "https://x.com/TeslaTakesOver/status/2099935335639867514",
      },
    ],
  },
];
