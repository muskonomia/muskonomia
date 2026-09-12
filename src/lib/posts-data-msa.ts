import type { Post } from "./posts";

export const postsMsa: Post[] = [
  {
    slug: "morgan-stanley-autonomia-semi",
    kicker: "Semi",
    topic: "tesla",
    title: "Morgan Stanley liczy 17 mld dolarów z autonomii Tesli Semi",
    excerpt:
      "Morgan Stanley: autonomia Tesli Semi to 12–18 tys. dolarów miesięcznie od sztuki i 17 mld dolarów z oprogramowania w 2040 r. przy 82 tys. ciężarówek. Cel byczy 840 dolarów.",
    date: "12 września 2026",
    isoDate: "2026-09-12",
    img: "/img/tesla-semi-autonomia-okladka.jpg",
    contain: true,
    body: [
      {
        type: "p",
        text: "Andrew Percoco z Morgan Stanley wycenił w piątkowej nocie oprogramowanie autonomicznego Tesli Semi na 12–18 tys. dolarów miesięcznie od jednej ciężarówki, czyli około 44,7–67,1 tys. zł po kursie NBP z 11 września (3,7267 zł). Przy 82 tys. sztuk na drodze w 2040 r. bank liczy na wpływy 17 mld dolarów przychodu rocznie z samego oprogramowania, około 63,4 mld zł, i 7,5 mld dolarów dodatkowego EBIT, około 28 mld zł. W tej liczbie nie ma sprzedaży pojazdu ani ładowania.",
      },
      {
        type: "img",
        src: "/img/tesla-semi-autonomia-okladka.jpg",
        alt: "Grafika XFreeze: 12–18 tys. dolarów miesięcznie, 17 mld dolarów z oprogramowania Semi w 2040",
        caption: "Liczby z noty Morgan Stanley. Źródło: @XFreeze.",
        contain: true,
        href: "https://x.com/XFreeze/status/2098602740444549137",
      },
      { type: "x", id: "2098602740444549137", handle: "XFreeze" },
      {
        type: "p",
        text: "Model stoi na założeniu, że opłata wyniesie 0,85–1 dolara za milę, czyli 3,17–3,73 zł, przy przebiegu 18 tys. mil miesięcznie, około 29 tys. km. Wychodzi również z założenia, że ciężarówki będą jeździć prawie bez przerwy.",
      },
      {
        type: "img",
        src: "/img/msa-flota.jpg",
        alt: "Rząd białych Tesli Semi przy fabryce w Nevadzie",
        caption: "18 tys. mil miesięcznie. Bank zakłada, że Semi prawie nie stoi.",
      },
      {
        type: "p",
        text: "Dedykowana fabryka w Sparks w Nevadzie, obok Giga Nevada, ma uroczyste otwarcie 24 września. Linia seryjna działa od kwietnia. Zakład ma około 1,7 mln stóp kwadratowych, czyli około 158 tys. m², i jest liczony na 50 tys. sztuk rocznie. Goście dostaną zwiedzanie i jazdę w produkcji.",
      },
      {
        type: "img",
        src: "/img/msa-fabryka.jpg",
        alt: "Wizualizacja fabryki Tesli Semi w Sparks: dach z napisem TESLA, parking, pustynia",
        caption: "Sparks, Nevada. 50 tys. sztuk rocznie. Otwarcie 24 września.",
      },
      {
        type: "img",
        src: "/img/msa-lobby.jpg",
        alt: "Hol fabryki Semi: biała ciężarówka, logo Tesli, goście",
        caption: "Goście dostaną zwiedzanie i jazdę w produkcji.",
      },
      {
        type: "p",
        text: "Na Semi Percoco spodziewa się tej samej krytyki co przy osobówkach: same kamery, bez radaru i lidaru, wyższe prędkości, większa masa. Nadzór może mocniej trzymać wersję bez kierowcy. Bank dodaje, że ten sceptycyzm trwa od lat i nie zatrzymał robotaxi Tesli, które zaczyna się skalować. Jeśli Semi wyjedzie i pojedzie, rynek będzie oglądał wynik, nie zestaw czujników.",
      },
      {
        type: "img",
        src: "/img/msa-kabina.jpg",
        alt: "Kabina Tesli Semi: kierownica, dwa ekrany, kamery wsteczne",
        caption: "Same kamery, bez radaru i lidaru. Bank: rynek i tak będzie oglądał wynik.",
      },
      {
        type: "img",
        src: "/img/msa-szosa.jpg",
        alt: "Tesla Semi z przodu na drodze przez pustynię Nevady",
        caption: "Jeśli Semi wyjedzie i pojedzie, zestaw czujników schodzi na drugi plan.",
      },
      {
        type: "p",
        text: "Rekomendacja zostaje na poziomie rynku, cel bazowy 400 dolarów, około 1490 zł. Scenariusz byczy rośnie o 20 dolarów na akcję, do 840 dolarów, około 3130 zł. Semi wchodzi do tego wariantu, nie do bazy.",
      },
      {
        type: "img",
        src: "/img/msa-giga.jpg",
        alt: "Giga Nevada z lotu ptaka: dach solarny, pustynia, parking",
        caption: "Obok Giga Nevada. 82 tys. Semi w 2040 r. to, według banku, konserwatywny start.",
      },
    ],
  },
];
