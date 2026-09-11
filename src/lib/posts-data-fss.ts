import type { Post } from "./posts";

export const postsFss: Post[] = [
  {
    slug: "fsd-supervised-w-slowenii",
    kicker: "FSD",
    topic: "tesla",
    title: "FSD Supervised dostało zgodę w Słowenii",
    excerpt:
      "Tesla Europe ogłosiła 7 września zgodę na FSD Supervised w Słowenii. Usługa ma zostać włączona wkrótce. To szóste państwo Unii.",
    date: "7 września 2026",
    isoDate: "2026-09-07",
    img: "/img/fsd-amsterdam.jpg",
    body: [
      {
        type: "p",
        text: "[Tesla Europe](https://x.com/teslaeurope/status/2097007168939593780) ogłosiła 7 września zgodę na FSD Supervised w Słowenii. Usługa ma zostać włączona wkrótce. To szóste państwo Unii.",
      },
      { type: "x", id: "2097007168939593780", handle: "teslaeurope" },
      {
        type: "img",
        src: "/img/fss-kabina.jpg",
        alt: "Kabina Tesli z FSD Supervised: ręce na udach, wizualizacja pasa na ekranie",
        caption: "Kabina z ogłoszenia Tesli Europe. Ręce na udach, wzrok na drodze.",
        href: "https://x.com/teslaeurope/status/2097007168939593780",
      },
      {
        type: "p",
        text: "Na liście są Holandia z 10 kwietnia, Litwa i Estonia z maja, Dania i Belgia z czerwca oraz Słowenia z 7 września. Reszta kontynentu zostaje poza listą.",
      },
      {
        type: "img",
        src: "/img/fss-mapa.jpg",
        alt: "Mapa Europy z sześcioma flagami krajów, które zatwierdziły FSD Supervised",
        caption: "Holandia, Litwa, Estonia, Dania, Belgia, Słowenia. Reszta poza listą. [Roland Pircher](https://x.com/piloly/status/2097058158946443697).",
        href: "https://x.com/piloly/status/2097058158946443697",
        contain: true,
      },
      {
        type: "p",
        text: "[Głosowanie](https://x.com/teslaeurope/status/2094661569582096779) Komitetu Technicznego ds. Pojazdów Silnikowych ma się odbyć 6 października. Do tego dnia Tesla otworzyła dane, które wcześniej poszły do RDW. W pięciu krajach system jeździł u ponad 70 tys. klientów, ponad 1 mln km dziennie. Na 100 mln km unijnych dróg użytkownicy FSD mieli 4,1 raza mniej kolizji niż przy jeździe ręcznej. W 2025 r. Europa zanotowała 19 400 ofiar śmiertelnych na drogach, około 53 dziennie.",
      },
      {
        type: "p",
        text: "Kierowca dalej odpowiada za każdy manewr. Auto z FSD Supervised nie jest autonomiczne. To nadal auto działające pod nadzorem kierowcy.",
      },
    ],
  },
];
