import type { Post } from "./posts";

export const postsSmc: Post[] = [
  {
    slug: "tesla-semi-imc-forum-mobility",
    kicker: "Semi",
    topic: "tesla",
    title: "Tesla Semi wchodzi w komercyjne wdrożenie",
    excerpt:
      "IMC Logistics bierze 50 Semi w Kalifornii. Forum Mobility: ponad 330 rezerwacji i depots z ładowaniem megawatowym. Semi wychodzi z pilotażu.",
    date: "17 września 2026",
    isoDate: "2026-09-17",
    img: "/img/smc-okladka.jpg",
    contain: true,
    xPostId: "2100761750131908919",
    body: [
      {
        type: "p",
        text: "Tesla Semi wchodzi w fazę poważnego wdrożenia komercyjnego. IMC Logistics, jeden z największych operatorów transportu kontenerowego w USA, przygotowuje się do dodania 50 sztuk Semi do swojej floty w Kalifornii — zarówno w wersji Standard Range do lokalnego drayage, jak i Long Range na dłuższe trasy.",
      },
      {
        type: "img",
        src: "/img/smc-okladka.jpg",
        alt: "Tesla Semi: IMC 50 sztuk, Forum Mobility ponad 330, depots z ładowaniem megawatowym",
        caption: "Z pilotażu do pracy. Źródło: @XFreeze.",
        contain: true,
        href: "https://x.com/XFreeze/status/2100703422819565890",
      },
      { type: "x", id: "2100703422819565890", handle: "XFreeze" },
      {
        type: "p",
        text: "[IMC](https://www.ajot.com/insights/full/ai-imc-logistics-will-deploy-50-tesla-semis) pokazało Semi na Intermodal EXPO w Long Beach. Standard Range ma wozić z portów w Kalifornii. Long Range — z południa stanu w głąb lądu. Jim Gillis z IMC: mieszanka technologii, nie jedna. 50 Semi ma dać też zeroemisyjny long haul.",
      },
      {
        type: "img",
        src: "/img/smc-imc.jpg",
        alt: "Grafika: IMC Logistics wdraża 50 Tesla Semi w Kalifornii",
        caption: "50 sztuk. Drayage i inland. Źródło: @cb_doge.",
        contain: true,
        href: "https://x.com/cb_doge/status/2100675323256095148",
      },
      { type: "x", id: "2100675323256095148", handle: "cb_doge" },
      {
        type: "p",
        text: "Forum Mobility zamawia ponad 330 Semi. Firma jednocześnie buduje sieć depots z ładowaniem megawatowym w Kalifornii. [Electrek](https://electrek.co/2026/09/17/tesla-public-megachargers-forum-mobility-semi-depots/): Tesla ma prowadzić publiczne Megachargery przy trzech z czterech nowych depots — Ontario i dwa w Oakland. Czwarty, FM Santa Fe w Rancho Dominguez, trzyma kontrakt na te 330 plus. Dochodzi około 30 MW. To nie są już pojedyncze testy. To skala w logistyce zeroemisyjnej.",
      },
      {
        type: "img",
        src: "/img/smc-szosa.jpg",
        alt: "Tesla Semi z naczepą na szosie",
        caption: "Standard Range do drayage. Long Range na dłuższe trasy.",
      },
      {
        type: "img",
        src: "/img/smc-plac.jpg",
        alt: "Tesla Semi na placu wśród naczep",
        caption: "Zachodnie Wybrzeże. Semi jako narzędzie pracy, nie pokaz.",
      },
      {
        type: "p",
        text: "XFreeze podkreśla, że Tesla Semi powoli wychodzi z fazy testów i zaczyna być traktowany jako realne narzędzie pracy w dużych firmach transportowych na Zachodnim Wybrzeżu.",
      },
    ],
  },
];
