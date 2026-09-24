import type { Post } from "./posts";

export const postsIe: Post[] = [
  {
    slug: "tesla-pracuje-z-irlandia-nad-fsd",
    kicker: "FSD",
    topic: "tesla",
    title: "Tesla pracuje z Irlandią nad FSD Supervised",
    excerpt:
      "Tesla oddała w Irlandii 15-tysięczne auto i potwierdziła pracę z władzami nad FSD Supervised. Czechy są siódmym rynkiem w Europie.",
    date: "24 września 2026",
    isoDate: "2026-09-24",
    img: "/img/ie-fsd-15000.jpg",
    body: [
      {
        type: "p",
        text: "Tesla oddała w Irlandii 15-tysięczne auto i w tym samym komunikacie potwierdziła, że pracuje z irlandzkimi władzami nad zgodą na FSD Supervised. Czechy dostały ten papier na początku tygodnia. To siódmy rynek w Europie.",
      },
      {
        type: "img",
        src: "/img/ie-fsd-15000.jpg",
        alt: "Zespół Tesli w Irlandii przy 15-tysięcznym aucie, balony 15000 i irlandzka tablica",
        caption:
          "15-tysięczne auto w salonie Tesli w Irlandii. Źródło: [Wessel van Keulen](https://x.com/wesselvk/status/2103199080004362697).",
        href: "https://x.com/wesselvk/status/2103199080004362697",
      },
      { type: "x", id: "2103129062919057715", handle: "SawyerMerritt" },
      {
        type: "p",
        text: "FSD Supervised na irlandzkich drogach jeszcze nie jeździ. Tesla napisała, że Irlandia liczy na pojawienie się funkcji we właściwym czasie i że pracuje z władzami, żeby tę zgodę umożliwić. Terminu nie podała.",
      },
      {
        type: "p",
        text: "Rozmowy nie zaczęły się wczoraj. W maju Departament Transportu potwierdził RTÉ, że Tesla rozmawia z irlandzkimi urzędami, w tym z National Standards Authority of Ireland. Krajowa zgoda zależy od unijnej, a kalendarza Brukseli wtedy nie było. 2 marca rozporządzenie otworzyło w Irlandii drogę dla asystentów poziomu 2 i 2+ na drogach publicznych. Kierowca dalej odpowiada za jazdę.",
      },
      {
        type: "p",
        text: "Zanim doczekamy się wspólnej decyzji całej Unii Europejskiej, jestem pewien, że kolejne rynki i kolejne kraje otworzą się na Full Self-Driving od Tesli. Czy Irlandia będzie następnym rynkiem? Na ile procent nie wiemy, ale może tak się stać.",
      },
    ],
  },
];
