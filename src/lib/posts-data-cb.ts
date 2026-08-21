import type { Post } from "./posts";

export const postsCb: Post[] = [
  {
    slug: "grok-46-liderem-cursorbench-32",
    kicker: "xAI",
    topic: "xai",
    title: "Grok 4.6 liderem CursorBench 3.2 – i to przy wyraźnie niższych kosztach",
    excerpt:
      "Grok 4.6 Extra High: 70,8% przy 2,81 $ za zadanie. Fable 5 Max 70,5% za 17,32 $, Opus 5 Max 70,0% za 8,23 $. Najwyższy wynik, wielokrotnie niższy koszt.",
    date: "21 sierpnia 2026",
    isoDate: "2026-08-21",
    img: "/img/cb-cursorbench.jpg",
    contain: true,
    xPostId: "2090857881474093133",
    body: [
      {
        type: "p",
        text: "Grok 4.6 zajął pierwsze miejsce w najnowszej edycji CursorBench 3.2, benchmarku mierzącego skuteczność modeli w zadaniach agentowych (głównie kodowaniu).",
      },
      {
        type: "img",
        src: "/img/cb-cursorbench.jpg",
        alt: "Wykres CursorBench 3.2: Grok 4.6 Extra High 70,8% przy 2,81 dolara za zadanie",
        caption:
          "CursorBench 3.2: Grok 4.6 Extra High na czele — 70,8% przy 2,81 $ za zadanie. Fable i Opus są tuż za wynikiem, ale kilka razy droższe.",
        contain: true,
      },
      { type: "h2", text: "Wyniki topowych modeli" },
      {
        type: "ul",
        items: [
          "Grok 4.6 Extra High — 70,8% | 2,81 $ za zadanie",
          "Fable 5 Max — 70,5% | 17,32 $",
          "Opus 5 Max — 70,0% | 8,23 $",
          "GPT-5.6 Sol Max — 67,2% | 5,69 $",
        ],
      },
      {
        type: "p",
        text: "Grok osiągnął najwyższy wynik przy koszcie około sześciokrotnie niższym niż Fable 5 Max i niemal trzykrotnie niższym niż Opus 5 Max.",
      },
      {
        type: "p",
        text: "To właśnie ta kombinacja — topowa jakość przy wyraźnie lepszej efektywności kosztowej — jest w tym przypadku najważniejsza. W zastosowaniach agentowych, gdzie modele wykonują długie sekwencje zadań programistycznych, różnica w koszcie na zadanie szybko się kumuluje.",
      },
      {
        type: "p",
        text: "Wykres pokazuje wyraźnie, że Grok 4.6 wypada najlepiej pod względem stosunku wyniku do ceny. Przy podobnym lub wyższym poziomie skuteczności zużywa wyraźnie mniej zasobów.",
      },
      {
        type: "p",
        text: "Dla użytkowników budujących agentów kodujących to konkretna przewaga: model nie tylko dobrze radzi sobie z zadaniami, ale też pozwala dłużej pracować przy rozsądnych kosztach.",
      },
    ],
  },
];
