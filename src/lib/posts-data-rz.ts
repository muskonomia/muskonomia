import type { Post } from "./posts";

export const postsRz: Post[] = [
  {
    slug: "nowa-tesla-zamowienia-otwarte-bez-polski",
    kicker: "Roadster",
    topic: "tesla",
    title: "Nowa Tesla: zamówienia otwarte, bez Polski",
    excerpt:
      "Tesla znów zbiera zaliczki na Roadstera. Tesla Owners Slovenia zestawiła 17 rynków z formularzem. Polski i Słowenii na liście nie ma.",
    date: "20 września 2026",
    isoDate: "2026-09-20",
    img: "/img/rd-okladka.jpg",
    contain: true,
    body: [
      {
        type: "p",
        text: "Tesla znów zbiera zaliczki na Roadstera. W sobotę klub Tesla Owners Slovenia zestawił 17 rynków, na których wrócił formularz. Polski i Słowenii na tej liście jeszcze nie ma.",
      },
      {
        type: "img",
        src: "/img/rd-okladka.jpg",
        alt: "Oficjalna grafika Tesli: Roadster, Go for launch, data 10.01",
        caption: "Pokaz 1 października w Waco. Rezerwacje ruszyły wcześniej. Źródło: Tesla.",
        contain: true,
        href: "https://muskonomia.pl/blog/roadster-odsloniecie-1-pazdziernika",
      },
      { type: "x", id: "2101250259087192445", handle: "TeslaOwnersSLO" },
      {
        type: "p",
        text: "Na liście Słoweńców są: Belgia, Czechy, Dania, Niemcy, Hiszpania, Francja, Irlandia, Islandia, Włochy, Luksemburg, Holandia, Norwegia, Portugalia, Szwajcaria, Szwecja, Finlandia i Wielka Brytania. Zaliczka w Europie: 4 tys. euro kartą od razu i 39 tys. euro przelewem w 10 dni. Razem 43 tys. euro (ok. 184 tys. zł). Ceny auta Tesla nie podała.",
      },
      {
        type: "img",
        src: "/img/rd-rezerwacja.jpg",
        alt: "Formularz rezerwacji Tesli Roadster: 5000 dolarów kartą i 45 tys. przelewem",
        caption: "W USA 5 tys. dolarów kartą i 45 tys. przelewem. W Europie 4 + 39 tys. euro. Źródło: @SawyerMerritt.",
        contain: true,
        href: "https://x.com/SawyerMerritt/status/2101088347036782855",
      },
      { type: "x", id: "2101088347036782855", handle: "SawyerMerritt" },
      {
        type: "p",
        text: "To te same kwoty co w 2017 r. Tesla pisze, że zaliczka jest zwrotna, a ewentualna cena na stronie to tylko szacunek. Opcje, osprzęt i sprzęt jeszcze się układają. Ostateczna kwota ma paść przy konfiguracji.",
      },
      {
        type: "img",
        src: "/img/rd-2017.jpg",
        alt: "Czerwony prototyp Tesli Roadster z 2017 roku",
        caption: "Prototyp z 2017 r. Dostawy miały ruszyć w 2020. Nie ruszyły.",
      },
      {
        type: "p",
        text: "Formularz wrócił na kilkanaście dni przed odsłonięciem 1 października. Produkcja, jak Tesla mówiła przy teaserze, i tak ma ruszyć 12–18 miesięcy po pokazie. Polska strona Tesli na razie zostaje przy Modelu 3 i Y.",
      },
    ],
  },
];
