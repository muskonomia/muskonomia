import type { Post } from "./posts";

export const postsG48: Post[] = [
  {
    slug: "grok-48-wiekszy-krok",
    kicker: "Grok",
    topic: "xai",
    title: "Grok 4.8 to ten większy krok",
    excerpt:
      "Elon: Grok 4.7 mniej więcej na poziomie Opus 5.0. Grok 4.8 — 2,5 bln parametrów, trening kończy się w tym tygodniu. 4.7 jeszcze nie wyszedł.",
    date: "15 września 2026",
    isoDate: "2026-09-15",
    img: "/img/g48-okladka.jpg",
    contain: true,
    body: [
      {
        type: "p",
        text: "Elon właśnie dał dużą aktualizację planu modeli Grok. A Grok 4.8 to ten większy krok.",
      },
      {
        type: "img",
        src: "/img/g48-okladka.jpg",
        alt: "Grafika XFreeze: Grok 4.7, 4.8, 4.9 i Grok 5 na osi czasu",
        caption: "Plan od 4.7 do Groka 5. Źródło: @XFreeze.",
        contain: true,
        href: "https://x.com/XFreeze/status/2099505659884569009",
      },
      { type: "x", id: "2099505659884569009", handle: "XFreeze" },
      {
        type: "ul",
        items: [
          "Grok 4.7 — mniej więcej na poziomie Opus 5.0, w jednych rzeczach lepszy, w innych gorszy. Multimodalność jeszcze wymaga roboty.",
          "Grok 4.8 — duży model 2,5 bln parametrów, trenowany na nowym stosie C++ SpaceXAI. Trening kończy się w tym tygodniu, potem od razu uczenie ze wzmocnieniem.",
          "Grok 4.9 — klasa Astra/Fable",
          "Grok 5 — może być lepszy niż cokolwiek",
        ],
      },
      {
        type: "p",
        text: "Najciekawsze: 4.7 jeszcze nawet nie wyszedł, a 4.8 już kończy trening. Potem w kolejce 4.9 i Grok 5.",
      },
      {
        type: "img",
        src: "/img/g48-colossus.jpg",
        alt: "Korytarz szaf GPU w klastrze Colossus xAI",
        caption: "Colossus. Tu kończy trening 4.8.",
      },
      {
        type: "p",
        text: "[Musk](https://x.com/elonmusk/status/2099458047408013751): Grok 4.7 powinien być mniej więcej na poziomie Opus 5.0, nie 5.1. W jednych rzeczach lepszy, w innych gorszy. Trzeba poprawić multimodalność. Grok 4.8 będzie wyraźnym skokiem. Grok 4.9 to pewnie klasa Astra/Fable. Grok 5 może być lepszy niż cokolwiek. Zobaczymy.",
      },
      { type: "x", id: "2099308197802631191", handle: "elonmusk" },
      {
        type: "img",
        src: "/img/grok-chart.jpg",
        alt: "Wykres Pareto: Grok 4.5 i Opus 5 na granicy kosztu i jakości",
        caption: "Grok 4.5 i Opus 5 na granicy Pareto. 4.7 ma być przy Opus 5.0, nie 5.1.",
        contain: true,
        href: "https://x.com/elonmusk/status/2080723860073091158",
      },
      {
        type: "p",
        text: "Elon pcha cały plan Groka bardzo szybko.",
      },
    ],
  },
];
