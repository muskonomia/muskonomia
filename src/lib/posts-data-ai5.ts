import type { Post } from "./posts";

export const postsAi5: Post[] = [
  {
    slug: "tesla-ai5-probna-produkcja-taylor",
    kicker: "AI5",
    topic: "tesla",
    title: "Tesla AI5 wszedł w próbną produkcję na 2 nm",
    excerpt:
      "Samsung w Taylor odpalił próbną produkcję AI5 Tesli na 2 nm. Wafele już schodzą, weryfikacja serii trwa. Dostawy do Tesli w 2027.",
    date: "17 września 2026",
    isoDate: "2026-09-17",
    img: "/img/ai5-okladka.jpg",
    contain: true,
    body: [
      {
        type: "p",
        text: "Tesla AI5 wszedł w fazę próbnej produkcji na 2 nm w nowej fabryce Samsunga w Taylor w Teksasie. Wafele są już wytwarzane, a weryfikacja masowej produkcji trwa.",
      },
      {
        type: "img",
        src: "/img/ai5-okladka.jpg",
        alt: "Układ Tesla AI5: wafele w Taylor, weryfikacja serii, dostawy w 2027",
        caption: "Próbna produkcja na 2 nm. Źródło: @cb_doge.",
        contain: true,
        href: "https://x.com/cb_doge/status/2100667261489225992",
      },
      { type: "x", id: "2100667261489225992", handle: "cb_doge" },
      {
        type: "p",
        text: "Dostawy chipów do Tesli zaplanowano na 2027 rok. To potwierdza wcześniejsze kontrakty na miliardy dolarów i bliską współpracę obu firm przy zaawansowanych układach AI. [Seoul Economic Daily](https://m.sedaily.com/article/20091221) i [BusinessKorea](https://www.businesskorea.co.kr/news/articleView.html?idxno=277083) podają umowę na 16,5 mld dolarów (ok. 61,5 mld zł). [Zakład w Taylor](https://muskonomia.pl/blog/samsung-taylor-zapelniony-2nm) miał ruszyć próbnie na przełomie września i października. Samsung przyspieszył.",
      },
      {
        type: "img",
        src: "/img/ai5-taylor.jpg",
        alt: "Fabryka Samsunga w Taylor w Teksasie z lotu ptaka",
        caption: "Taylor, Teksas. Tu schodzą pierwsze wafele AI5.",
      },
      {
        type: "img",
        src: "/img/ai5-samsung.jpg",
        alt: "Budynek Samsung w Taylor, dźwigi i baner Made in America",
        caption: "Maszyny weszły w kwietniu. Tape-out w lipcu. Teraz próba na 2 nm.",
      },
      {
        type: "p",
        text: "To ważny krok w skalowaniu mocy obliczeniowej Tesli, szczególnie dla systemów autonomicznych i robotyki. Pełne wdrożenie nadal wymaga czasu na ramp-up produkcji.",
      },
    ],
  },
];
