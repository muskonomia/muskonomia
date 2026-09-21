import type { Post } from "./posts";

export const postsG47: Post[] = [
  {
    slug: "grok-47-wypuszczony",
    kicker: "Grok",
    topic: "xai",
    title: "SpaceXAI wypuszcza Grok 4.7",
    excerpt:
      "SpaceXAI wypuścił Grok 4.7. Najmocniejszy model firmy do kodu i pracy na wiedzy. Ta sama cena co 4.6: 2 dolary za milion tokenów wejścia, ok. 7,60 zł. Cursor, Grok Build, API.",
    date: "21 września 2026",
    isoDate: "2026-09-21",
    img: "/img/g47-og.jpg",
    xPostId: "2102078614267183201",
    body: [
      {
        type: "p",
        text: "SpaceXAI wypuścił Grok 4.7. To najmocniejszy model firmy do kodowania i pracy na wiedzy. Ma dłużej siedzieć przy trudnych zadaniach, ogarniać więcej kontekstu i ostrożniej sprawdzać własne odpowiedzi.",
      },
      {
        type: "p",
        text: "Główne zmiany:",
      },
      {
        type: "ul",
        items: [
          "nowy, większy model bazowy",
          "dłuższy trening na wielogodzinnych zadaniach",
          "lepiej weryfikuje własne odpowiedzi",
          "lepszy długi kontekst",
          "lepsze dokumenty i prezentacje",
          "natywnie rozumie system Grok Bota",
          "mocniejsze zabezpieczenia i ochrona przed jailbreakiem",
        ],
      },
      {
        type: "img",
        src: "/img/g47-tabela.jpg",
        alt: "Tabela Grok 4.7 xHigh: ceny tokenów i wyniki na CursorBench, DeepSWE, EEBench, Harvey Legal",
        caption:
          "Grok 4.7 xHigh przy cenie 4.6. Harvey Legal i EEBench wygrane. CursorBench: Fable 5.1 Max nadal wyżej. Źródło: [SpaceXAI](https://x.ai/news/grok-4-7).",
        contain: true,
        href: "https://x.ai/news/grok-4-7",
      },
      {
        type: "p",
        text: "Wyniki Grok 4.7 xhigh wobec 4.6 high:",
      },
      {
        type: "ul",
        items: [
          "CursorBench 4.0: 46,3%, z 40,4%",
          "DeepSWE v1.1: 71,0% przy wysokim wysiłku, z 65,2%",
          "AA Briefcase v1.1: 1657, z 1546",
          "Terminal-Bench 4.0: 38,0%, z 20,3%",
          "Harvey Legal: 19,6%, z 15,8%",
          "HealthBench Professional: 56,7%, z 48,5%",
          "EEBench: 64,0%, z 53,0%",
        ],
      },
      {
        type: "p",
        text: "Na Harvey Legal i EEBench Grok 4.7 wyprzedza GPT-5.6 Sol Max i Fable 5.1 Max. Na CursorBench 4.0 Fable 5.1 Max zostaje wyżej, 51,8%. DeepSWE wygrywa Sol, 72,7%.",
      },
      {
        type: "img",
        src: "/img/g47-cursorbench.jpg",
        alt: "Wykres CursorBench 4.0: wynik względem średniego kosztu zadania, Grok 4.7 na granicy Pareto",
        caption:
          "CursorBench 4.0: wynik do średniego kosztu zadania. Grok 4.7 na granicy Pareto, niżej niż Fable 5.1. Źródło: [SpaceXAI](https://x.ai/news/grok-4-7).",
        contain: true,
        href: "https://x.ai/news/grok-4-7",
      },
      {
        type: "p",
        text: "Na wykresie Grok 4.7 trzyma się granicy wyniku do ceny. Fable 5.1 jest wyżej, ale drożej. Opus 5 i GPT-5.6 Sol są niżej albo droższe.",
      },
      {
        type: "p",
        text: "Bezpieczeństwo. Nowy stos zabezpieczeń. 62,4% na LatchBio biosafety. Na HackerBench przez sito przeszło 3,3% ryzykownych promptów cybernetycznych. SpaceXAI nazywa to najmocniejszym modelem przy odmawianiu niebezpiecznych poleceń. Legalnej roboty z cyberbezpieczeństwa prawie nie blokuje. Wybrani partnerzy dostają dostęp do red-teamu na zaproszenie.",
      },
      {
        type: "p",
        text: "Cena zostaje jak przy 4.6: 2 dolary za milion tokenów wejścia, ok. 7,60 zł, i 6 dolarów za milion wyjścia, ok. 22,80 zł, po średnim kursie NBP z 18 września (3,7998 zł za dolara). Wersja Fast: dwa razy szybsze wyjście, dwa razy wyższa cena. Kontekst: 500 tys. tokenów.",
      },
      {
        type: "p",
        text: "Dostępny od dziś w Cursor, Grok Build i Grok API. Także w narzędziach do kodu, routerach i chmurze. SpaceXAI pisze, że Grok 4.7 jest dwa razy szybszy i o połowę tańszy od porównywalnych modeli. Z 4.6 wygrywa na każdym wymienionym teście przy tej samej cenie.",
      },
      {
        type: "p",
        text: "Źródło: [komunikat SpaceXAI](https://x.ai/news/grok-4-7).",
      },
    ],
  },
];
