import type { Post } from "./posts";

export const postsSub: Post[] = [
  {
    slug: "starlink-fsd-najwieksze-subskrypcje",
    kicker: "Subskrypcje",
    topic: "tesla",
    title: "Starlink i FSD mogą zostać największymi subskrypcjami na świecie",
    excerpt:
      "Teslaconomics: Starlink 12 mln i FSD 1,48 mln są na dole listy. Łączność i bezpieczeństwo ludzie kupują całe życie. Przy wyższej cenie wystarczy mniej użytkowników.",
    date: "17 września 2026",
    isoDate: "2026-09-17",
    img: "/img/sub-okladka.jpg",
    contain: true,
    body: [
      {
        type: "p",
        text: "Starlink i Tesla FSD mają potencjał na największe subskrypcje na świecie — zdaniem inwestora Teslaconomics. Dziś zajmują odległe miejsca w rankingu: Starlink 12 mln subskrybentów, FSD 1,48 mln. Pewnego dnia mogą zająć pierwsze dwie pozycje, wyprzedzając gigantów jak Microsoft 365 czy Netflix.",
      },
      {
        type: "img",
        src: "/img/sub-okladka.jpg",
        alt: "Ranking subskrypcji: Microsoft 365 450 mln, Netflix 301 mln, Starlink 12 mln, FSD 1,48 mln",
        caption: "Dziś Starlink jest 16., FSD 18. Źródło: @Teslaconomics / @CernBasher.",
        contain: true,
        href: "https://x.com/Teslaconomics/status/2100599340125532268",
      },
      { type: "x", id: "2100599340125532268", handle: "Teslaconomics" },
      {
        type: "p",
        text: "Lista pokazuje dominację tradycyjnych usług: Microsoft 365 — 450 mln, Netflix — 301,6 mln. Teslaconomics podkreśla, że Starlink sprzedaje codzienną łączność, a FSD bezpieczeństwo i czas — potrzeby, które ludzie ponawiają przez całe życie, w przeciwieństwie do jednorazowej rozrywki. Jeden idzie po to, jak świat się łączy. Drugi po to, jak świat się rusza.",
      },
      {
        type: "img",
        src: "/img/sub-ceny.jpg",
        alt: "Roczna cena subskrypcji: FSD 1188 dolarów, Starlink około 792",
        caption: "FSD ok. 1188 dolarów rocznie (ok. 4430 zł). Starlink ok. 792 (ok. 2950 zł). Najdroższe na tej liście.",
        contain: true,
        href: "https://x.com/CernBasher/status/2100617542725165409",
      },
      { type: "x", id: "2100617542725165409", handle: "CernBasher" },
      {
        type: "p",
        text: "Przy wyższych cenach wystarczy znacznie mniej użytkowników niż u konkurencji, żeby wygenerować ogromne przychody. Cern Basher liczy: żeby dojść do 99 mld dolarów rocznie Microsoftu z Office 365, Starlink potrzebowałby 125 mln abonentów, FSD — 83 mln. Teslaconomics widzi w tym budowę dwóch największych biznesów subskrypcyjnych przyszłości. 12 mln i 1,48 mln wyglądają mało. On patrzy na te liczby i widzi, jak wcześnie jeszcze jest.",
      },
      {
        type: "img",
        src: "/img/sub-przychod.jpg",
        alt: "Roczny przychód z subskrypcji: Microsoft 99 mld dolarów, Starlink 9,5 mld, FSD 1,8 mld",
        caption: "Przychód, nie liczba kont. Źródło: @CernBasher.",
        contain: true,
        href: "https://x.com/CernBasher/status/2100617542725165409",
      },
    ],
  },
];
