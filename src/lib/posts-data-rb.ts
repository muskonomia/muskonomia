import type { Post } from "./posts";

export const postsRb: Post[] = [
  {
    slug: "baron-czas-kupowac-tesle",
    kicker: "FSD",
    topic: "tesla",
    title: "Ron Baron: czas kupować Teslę jest teraz",
    excerpt:
      "Ron Baron 16 września: The time to buy the stock is now. 55% nowych nabywców Tesli bierze FSD. Osobiście ok. 1,5 mld dolarów w Tesli.",
    date: "16 września 2026",
    isoDate: "2026-09-16",
    img: "/img/rb-okladka.jpg",
    contain: true,
    body: [
      {
        type: "p",
        text: "Ron Baron w [wywiadzie](https://www.cnbc.com/video/2026/09/16/billionaire-investor-ron-baron-on-tesla-the-time-to-buy-the-stock-is-now.html) z 16 września 2026 powtórzył jedno ze swoich charakterystycznych stwierdzeń: „The time to buy the stock is now”. Wskazał na przyspieszoną adopcję FSD — 55% nowych nabywców Tesli wybiera pakiet — oraz rosnące przekonanie, że technologia stanie się wszechobecna i bezpieczniejsza.",
      },
      {
        type: "img",
        src: "/img/rb-okladka.jpg",
        alt: "Ron Baron na CNBC: The time to buy the stock is now. 55% nowych nabywców Tesli bierze FSD",
        caption: "Squawk Box, 16 września. Źródło: @SawyerMerritt.",
        contain: true,
        href: "https://x.com/SawyerMerritt/status/2100247448669114539",
      },
      { type: "x", id: "2100247448669114539", handle: "SawyerMerritt" },
      {
        type: "img",
        src: "/img/rb-cnbc.jpg",
        alt: "Ron Baron w studiu Squawk Box, 16 września 2026",
        caption: "Baron Capital. Osobiście ok. 1,5 mld dolarów w Tesli.",
        href: "https://x.com/cb_doge/status/2100228864073257264",
      },
      { type: "x", id: "2100228864073257264", handle: "cb_doge" },
      {
        type: "p",
        text: "Podobną opinię Baron wyraził już 12 maja 2026 na CNBC, mówiąc „now is Tesla’s moment” i prognozując ceny akcji w przedziale 2000–2500 dolarów (ok. 7460–9320 zł) w perspektywie 10 lat. Po tej wypowiedzi kurs Tesli w ciągu kolejnego tygodnia odbił wyraźnie w górę.",
      },
      {
        type: "img",
        src: "/img/rb-maj.jpg",
        alt: "Ron Baron w maju 2026: Tesla 2000 albo 2500 dolarów w ciągu 10 lat",
        caption: "12 maja. Źródło: @SawyerMerritt.",
        contain: true,
        href: "https://x.com/SawyerMerritt/status/2054215869312499714",
      },
      { type: "x", id: "2054215869312499714", handle: "SawyerMerritt" },
      {
        type: "p",
        text: "Baron pozostaje jednym z największych długoterminowych akcjonariuszy Tesli (ok. 1,5 mld dolarów osobiście, ok. 5,6 mld zł), a jego powtarzane wezwania do kupna podkreślają wiarę w autonomię jako główny katalizator wzrostu wartości spółki.",
      },
      {
        type: "img",
        src: "/img/rb-fsd.jpg",
        alt: "Wizualizacja FSD na ekranie Tesli: pieszy i kaczka na drodze",
        caption: "FSD. Baron: będzie wszędzie. I jest bezpieczniejsze.",
      },
    ],
  },
];
