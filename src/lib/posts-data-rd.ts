import type { Post } from "./posts";

export const postsRd: Post[] = [
  {
    slug: "roadster-odsloniecie-1-pazdziernika",
    kicker: "Roadster",
    topic: "tesla",
    title: "Tesla pokaże nowy Roadster 1 października",
    excerpt:
      "Tesla: „Go for launch”, data 10.01. Musk: odsłonięcie nowego Roadstera 1 października w Waco. Produkcja nadal 12–18 miesięcy później.",
    date: "13 września 2026",
    isoDate: "2026-09-13",
    img: "/img/rd-okladka.jpg",
    contain: true,
    body: [
      {
        type: "p",
        text: "Tesla wrzuciła nową wiadomość. Elon Musk dopisał: odsłonięcie nowego Roadstera 1 października.",
      },
      {
        type: "img",
        src: "/img/rd-okladka.jpg",
        alt: "Oficjalna grafika Tesli: Roadster, cztery smugi, data 10.01, napis Go for launch",
        caption: "„Go for launch”. Data 10.01. Źródło: @Tesla.",
        contain: true,
        href: "https://x.com/Tesla/status/2098843535730725124",
      },
      { type: "x", id: "2098843535730725124", handle: "Tesla" },
      {
        type: "p",
        text: "To pierwsza twarda data od 2017 r. Wtedy Tesla pokazała prototyp i obiecała dostawy w 2020. Termin schodził kolejno na 2022, 2023, 2024 i okolice 2025–2026. Na walnym w listopadzie Musk mówił o produkcji w 2027 albo 2028. Po pokazie ma minąć jeszcze 12–18 miesięcy, zanim coś zjedzie z linii.",
      },
      {
        type: "img",
        src: "/img/rd-2017.jpg",
        alt: "Czerwony prototyp Tesli Roadster z 2017 roku na podjeździe",
        caption: "Prototyp z 2017 r. Dostawy miały ruszyć w 2020. Nie ruszyły.",
      },
      {
        type: "p",
        text: "Rezerwujący dostali zaproszenia do Waco w Teksasie. RSVP do północy 16 września czasu pacyficznego. Wstęp od 21 lat. Bilety nieprzenoszalne. Waco leży koło McGregor, gdzie SpaceX pali silniki.",
      },
      {
        type: "img",
        src: "/img/rd-mcgregor.jpg",
        alt: "Stanowisko testowe SpaceX w McGregor w Teksasie, wieża z napisem SPACEX",
        caption: "McGregor, koło Waco. Tu SpaceX pali silniki.",
      },
      {
        type: "p",
        text: "Tesla nie podała ceny, zasięgu ani miejsca streamu. Grafika pokazuje cztery smugi nad nadwoziem. Jest to pewnie specyfikacja SpaceX: zimne silniczki gazowe, które mają docisnąć auto albo na chwilę je unieść. The Information pisał w sierpniu, że pokaz ma być zdalny, bez kogoś w kabinie, i że projekt z 2017 r. Tesla odstawiła na rzecz nowej karoserii. Tego Tesla w sobotę nie potwierdziła.",
      },
      {
        type: "img",
        src: "/img/rd-doge-fly.jpg",
        alt: "Kadr DogeDesignera: Roadster i dopisek, że nowy może naprawdę latać",
        caption: "Cztery smugi. DogeDesigner: nowy Roadster może naprawdę latać.",
        contain: true,
        href: "https://x.com/cb_doge/status/2098866502619496576",
      },
      {
        type: "p",
        text: "Roadster z 2017 r. miał być czteromiejscowym sportowym elektrykiem z przyspieszeniem, którego diesle nie dogonią. Liczby z tamtej nocy dziś nic nie znaczą. 1 października ma pokazać, co z tego zostało.",
      },
      {
        type: "img",
        src: "/img/rd-bialy.jpg",
        alt: "Biały Tesla Roadster z 2017 na wystawie, czarne felgi, dach z szkła",
        caption: "To, co Tesla pokazała w 2017. 1 października ma pokazać, co z tego zostało.",
      },
    ],
  },
];
