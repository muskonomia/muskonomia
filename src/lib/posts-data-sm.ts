import type { Post } from "./posts";

export const postsSm: Post[] = [
  {
    slug: "tesla-semi-europa-550-km",
    kicker: "Semi",
    topic: "tesla",
    title: "Tesla Semi jedzie do Europy z zasięgiem 550 km",
    excerpt:
      "Tesla Europe: Semi z zasięgiem do 550 km przy 40 tonach, 1 kWh/km, Megacharger do 800 kW. Dostawy od 2027. Targi w Hanowerze.",
    date: "11 września 2026",
    isoDate: "2026-09-11",
    img: "/img/sm-eu.jpg",
    contain: true,
    body: [
      {
        type: "p",
        text: "Tesla Europe podała 11 września liczby europejskiego Semi. Zasięg: do 550 km przy 40 tonach DMC, pełny ładunek. Zużycie: 1 kWh/km. Masa własna: 9100 kg.",
      },
      {
        type: "img",
        src: "/img/sm-eu.jpg",
        alt: "Grafika Tesli Europe: Semi z kamerami zamiast lusterek, zasięg 550 km, 40 ton",
        caption: "Semi is coming to Europe. Kamery, nie lusterka. Źródło: @teslaeurope.",
        contain: true,
        href: "https://x.com/teslaeurope/status/2098429681607307452",
      },
      { type: "x", id: "2098429681607307452", handle: "teslaeurope" },
      {
        type: "p",
        text: "[Wpis Tesli Europe](https://x.com/teslaeurope/status/2098429681607307452) odsyła na [niemiecką stronę Semi](https://www.tesla.com/de_de/semi). Ta sama specyfikacja stoi na [stronie brytyjskiej](https://www.tesla.com/en_gb/semi): trzy niezależne silniki na tylnych osiach, moc do 800 kW, gniazdo MCS 3.2, ePTO do 25 kW.",
      },
      {
        type: "img",
        src: "/img/sm-profil.jpg",
        alt: "Biały Tesla Semi z profilu, kamery zamiast lusterek, trzy osie",
        caption: "Europejska sylwetka: kamery, nie lusterka. Trzy silniki na tylnych osiach.",
      },
      {
        type: "p",
        text: "Megacharger do 800 kW ma oddać około 60 proc. zasięgu w 30 minut. To jest jednak mniej niż 1,2 MW, które Tesla pokazywała przy amerykańskim Long Range.",
      },
      {
        type: "img",
        src: "/img/sm-port.jpg",
        alt: "Tesla Semi bez lusterek ciągnie kontener na terenie portu",
        caption: "Wersja bez klasycznych lusterek. W Europie Megacharger do 800 kW.",
      },
      {
        type: "p",
        text: "Amerykański Long Range ma około 805 km przy 37,2 tony. Europa dostaje jedną wersję, bliższą Standard Range z USA: 550 km, ale przy cięższych 40 tonach. Warunki z niemieckiej strony: 80 km/h, 20°C, równa droga, zestaw aerodynamiczny i sucha naczepa. Inne opony oraz spojler mocno zmieniają ten wynik.",
      },
      {
        type: "img",
        src: "/img/sm-concept.jpg",
        alt: "Tesla Semi w studiu bez lusterek bocznych, srebrna kabina",
        caption: "Czysta kabina, bez lusterek. Europa dostaje 550 km przy 40 tonach.",
      },
      {
        type: "p",
        text: "Europejski Semi nie ma klasycznych lusterek. Zamiast nich kamery — tak wolno w Europie od 2016 r. Reflektory są bliższe Modelowi Y Standard niż amerykańskiej listwie.",
      },
      {
        type: "img",
        src: "/img/sm-kabina.jpg",
        alt: "Kabina europejskiego Semi: dwa ekrany, kamery wsteczne, fotel kierowcy na targach",
        caption: "Kabina na europejskim pokazie. Kamery na ekranach, nie lusterka w drzwiach.",
      },
      {
        type: "p",
        text: "Tesla planuje dostawy na 2027 rok. Formalne otwarcie europejskie ma być na targach w Hanowerze.",
      },
      {
        type: "p",
        text: "W USA Semi schodzi z linii nowej fabryki wybudowanej obok Giga Nevada. Na ten moment nie wiemy, czy europejska wersja będzie importowana ze Stanów, czy powstanie produkcja w Europie, w Berlinie.",
      },
    ],
  },
];
