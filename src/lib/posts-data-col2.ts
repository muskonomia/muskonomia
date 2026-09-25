import type { Post } from "./posts";

export const postsCol2: Post[] = [
  {
    slug: "colossus-jeszcze-bardziej-sie-powiekszy",
    kicker: "xAI",
    topic: "xai",
    title: "Potężne centrum danych Colossus w przyszłym tygodniu jeszcze bardziej się powiększy",
    excerpt:
      "W Colossusie pracuje dziś 780 tys. GPU. W przyszłym tygodniu dojdzie 220 tys. GB300 i klaster przekroczy milion.",
    date: "25 września 2026",
    isoDate: "2026-09-25",
    xPostId: "2103389445151941037",
    img: "/img/minihard-gb300.jpg",
    body: [
      {
        type: "p",
        text: "W Colossusie, potężnym centrum danych SpaceX do zastosowań sztucznej inteligencji, pracuje dziś 780 tys. akceleratorów Nvidii. W przyszłym tygodniu dojdzie 220 tys. układów GB300, co wyniesie klaster ponad milion.",
      },
      {
        type: "p",
        text: "W Colossusie 1 stoi 150 tys. H100, 50 tys. H200 i 30 tys. GB200. Colossus 2 ma 110 tys. GB200 i 440 tys. GB300. Kolejne GB300 mają wchodzić transzami po 220 tys.: pierwsza ruszy w pełni w przyszłym tygodniu, druga w listopadzie. Gdyby pod koniec grudnia weszła jeszcze trzecia, klaster urósłby do 1,44 mln GPU. Ile prądu to wszystko pobierze, Musk w swoim rozpisie nie podał.",
      },
      { type: "x", id: "2103329761690865846", handle: "elonmusk" },
      {
        type: "p",
        text: "Sawyer Merritt policzył, ile to kosztuje. Jedna transza 220 tys. GB300 to według niego ponad 15 mld dolarów, czyli około 58 mld zł. Przy trzech transzach w czwartym kwartale wychodzi mu ponad 50 mld dolarów w samych chipach. Według Merritta przyszłotygodniowa transza trafi do Minihardu, mniejszego budynku na kampusie w Tennessee.",
      },
      { type: "x", id: "2103332409789776197", handle: "SawyerMerritt" },
      {
        type: "p",
        text: "Wczoraj dowiedzieliśmy się, że [SpaceX AI może za około pół roku wyjść na prowadzenie wśród firm rozwijających sztuczną inteligencję](https://muskonomia.pl/blog/spacex-chce-dogonic-czolowke-ai-w-pol-roku). Jednym z argumentów Muska było to, że SpaceX potrafi szybko uruchomić compute liczący setki megawatów.",
      },
    ],
  },
];
