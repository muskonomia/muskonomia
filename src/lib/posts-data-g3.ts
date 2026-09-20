import type { Post } from "./posts";

export const postsG3: Post[] = [
  {
    slug: "fcc-przyjela-wniosek-starlink-gen3",
    kicker: "Starlink",
    topic: "spacex",
    title: "FCC rozpatruje wniosek o wyniesienie 100 tysięcy satelitów na orbitę",
    excerpt:
      "FCC rozpatruje wniosek o 100 tys. satelitów Gen3. Musk: 10 Tb w obie strony na sztukę, droga do ponad 100 Tb, 250 kW i Vera Rubin NVL72.",
    date: "20 września 2026",
    isoDate: "2026-09-20",
    img: "/img/g3-okladka.jpg",
    contain: true,
    body: [
      {
        type: "p",
        text: "Federalna Komisja Łączności 18 września przyjęła do rozpoznania wniosek SpaceX o zgodę na 100 tys. satelitów trzeciej generacji. Wniosek leży w systemie od 6 lipca pod sygnaturą SAT-LOA-20260630-00264.",
      },
      {
        type: "p",
        text: "SpaceX będzie wynosił satelity na dwie warstwy orbit — niższą około 325 km i wyższą około 475 km. Dolna schodzi pod Międzynarodową Stację Kosmiczną. Na tej niższej orbicie ma ściąć opóźnienie i skrócić czas, w którym martwy satelita spala się w atmosferze.",
      },
      {
        type: "img",
        src: "/img/g3-okladka.jpg",
        alt: "Wniosek SpaceX o 100 tys. satelitów Gen3: FCC przyjęła 18 września, warstwy 325 i 475 km",
        caption: "Przyjęty do rozpoznania 18 września. Źródło: @XFreeze.",
        contain: true,
        href: "https://x.com/XFreeze/status/2101416616395252086",
      },
      { type: "x", id: "2101416616395252086", handle: "XFreeze" },
      {
        type: "p",
        text: "Na orbicie jest dziś 11 114 pracujących Starlinków, według zestawienia Jonathana McDowella z 17 września. Gen2 ma zgodę na 15 tys. sztuk. Wniosek o 100 tys. to mniej więcej dziewięć razy więcej niż to, co już lata.",
      },
      {
        type: "img",
        src: "/img/g3-v3.jpg",
        alt: "Porównanie satelitów Starlink V1.5, V2 i V3",
        caption: "V3 jest inną skalą. Falcon 9 uniesie dwie sztuki. Flota stoi na Starshipie.",
      },
      {
        type: "p",
        text: "W załączniku technicznym SpaceX liczy 2–2,5 tony suchej masy na sztukę. Falcon 9 uniesie dwie. Flota tej skali stoi na Starshipie.",
      },
      {
        type: "img",
        src: "/img/g3-starship.jpg",
        alt: "Ładownia Starshipa z satelitami V3 podczas Lotu 13",
        caption: "Lot 13: V3 w ładowni. To nie jest wniosek o start. To wniosek o konstelację.",
      },
      {
        type: "p",
        text: "Wniosek mówi o Gen3 NGSO, nie o Starlinku z nazwy. Cel: bardzo niskie opóźnienie i wielogigabitowe, symetryczne łącze — także pod AI, które według uzasadnienia potrzebuje ogromnego uplinku.",
      },
      {
        type: "p",
        text: "Musk podbił liczby pod wnioskiem. Łącze na satelitę ma być bliżej 10 Tb w obie strony, z drogą do ponad 100 Tb. Każda sztuka: 250 kW i komputer Nvidia Vera Rubin NVL72 w wersji SpaceX.",
      },
      { type: "x", id: "2101466638939832365", handle: "elonmusk" },
      {
        type: "p",
        text: "Jest to osobny wniosek od styczniowego.",
      },
      {
        type: "p",
        text: "Status w systemie FCC: w toku. Zgody na starty jeszcze nie ma.",
      },
    ],
  },
];
