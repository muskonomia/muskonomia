import type { Post } from "./posts";

export const postsWdo: Post[] = [
  {
    slug: "wyciekly-dane-optimusa",
    kicker: "Optimus",
    topic: "tesla",
    title: "Wyciekły dane Optimusa",
    excerpt:
      "W aplikacji Tesli na Androida są trzy pliki PNG z etykietą gen3. Stawy zakryte, korpus jednolity, łydki czarne. Daty premiery nie ma.",
    date: "24 września 2026",
    isoDate: "2026-09-24",
    img: "/img/opt-gen3.jpg",
    contain: true,
    body: [
      {
        type: "p",
        text: "W podpisanej paczce aplikacji Tesli na Androida siedzą trzy pliki PNG z etykietą „gen3”. To własne assety firmy, wrzucone do publicznego pakietu, a nie szkic z sieci. Ming niezależnie potwierdził te same nazwy w wersji 4.60.5.",
      },
      {
        type: "img",
        src: "/img/opt-gen3.jpg",
        alt: "Optimus Gen 3 ze złotym korpusem i czarnymi łydkami na czarnym tle",
        caption:
          "Asset z aplikacji Tesli. Źródło: [Tesla Owners Slovenia](https://x.com/TeslaOwnersSLO/status/2102679669459804669).",
        href: "https://x.com/TeslaOwnersSLO/status/2102679669459804669",
        contain: true,
      },
      {
        type: "img",
        src: "/img/opt-gen3-jasny.jpg",
        alt: "Optimus Gen 3 w całej postaci na białym tle",
        caption:
          "Ten sam kształt na białym tle. Źródło: [Tesla Owners Slovenia](https://x.com/TeslaOwnersSLO/status/2102679669459804669).",
        href: "https://x.com/TeslaOwnersSLO/status/2102679669459804669",
        contain: true,
      },
      { type: "x", id: "2102679669459804669", handle: "TeslaOwnersSLO" },
      {
        type: "p",
        text: "Przy Gen 2.5 widać jeszcze gołe mechanizmy przy biodrach i złote osłony na kolanach. Gen 3 zamyka stawy pod elastycznymi osłonami, korpus składa w jedną złotawą skorupę, a łydki i stopy idą w matową czerń. Ręce wyglądają mniej jak laboratorium.",
      },
      {
        type: "img",
        src: "/img/opt-gen3-ciemny.jpg",
        alt: "Ciemniejszy kadr Optimusa Gen 3 z zakrytymi stawami",
        caption:
          "Ciemniejszy kadr z tej samej paczki. Źródło: [Tesla Owners Slovenia](https://x.com/TeslaOwnersSLO/status/2102679669459804669).",
        href: "https://x.com/TeslaOwnersSLO/status/2102679669459804669",
        contain: true,
      },
      {
        type: "p",
        text: "31 marca Musk napisał, że Optimus 3 już chodzi, ale potrzebuje ostatnich poprawek przed pokazem. Później tłumaczył wstrzymanie tym, żeby konkurencja nie skopiowała obudowy. Daty premiery nie ma. Nazwa w pliku Tesli mówi tylko, jak firma sama etykietuje ten kształt.",
      },
    ],
  },
];
