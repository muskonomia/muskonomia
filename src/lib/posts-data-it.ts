import type { Post } from "./posts";

export const postsIt: Post[] = [
  {
    slug: "starlink-italo-192-mbps",
    kicker: "Starlink",
    topic: "spacex",
    title: "Starlink na pociągach, samolotach a polskie LOT i PKP jak zwykle spią",
    excerpt:
      "Na Bolonia–Mediolan Starlink na Italo doszedł do 192 Mbps przy 300 km/h. 19 z 51 pociągów już ma zestaw. Cała flota w marcu 2027. Wi-Fi darmowe.",
    date: "10 września 2026",
    isoDate: "2026-09-10",
    img: "/img/it-peron.jpg",
    body: [
      {
        type: "p",
        text: "Na odcinku Bolonia–Mediolan łącze Starlinka na pociągu Italo ciągnęło z prędkością do 192 Mbps. Pociąg jechał 300 km/h. W podziemnej stacji w Bolonii było 11,2 Mbps. Po wyjeździe na otwarty szlak speedtest skoczył najpierw do 137 Mbps, potem do 192.",
      },
      {
        type: "img",
        src: "/img/it-peron.jpg",
        alt: "Czerwony pociąg Italo na peronie, numer 21",
        caption: "Italo. 19 z 51 składów już ze Starlinkiem. Reszta do marca 2027.",
      },
      {
        type: "p",
        text: "[Il Sole 24 Ore](https://www.ilsole24ore.com/art/starlink-test-dell-alta-velocita-cosi-internet-300-all-ora-treni-italo-AJPNDP8) zmierzyło upload po wyjeździe: 8,7 Mbps.",
      },
      {
        type: "img",
        src: "/img/it-doge.jpg",
        alt: "Grafika: Starlink na włoskich pociągach 300 km/h, 192 Mbps",
        caption: "192 Mbps przy 143 pasażerach naraz. Wi-Fi zostaje darmowe. Źródło: @cb_doge.",
        contain: true,
        href: "https://x.com/cb_doge/status/2098025448047563037",
      },
      { type: "x", id: "2098025448047563037", handle: "cb_doge" },
      {
        type: "p",
        text: "To nie jest sam Starlink, a łącze hybrydowe Starlinka z siecią komórkową. Pod ziemią i w tunelu zostaje 5G. Na otwartym odcinku i tam, gdzie masztów jest mało, wchodzi Starlink.",
      },
      {
        type: "img",
        src: "/img/it-szlak.jpg",
        alt: "Czerwono-żółty pociąg Italo na wiadukcie przez pola, Włochy",
        caption: "Na szlaku 192 Mbps. W tunelu zostaje 5G.",
      },
      {
        type: "p",
        text: "Dziś zestaw ma 19 z 51 pociągów. Do końca września ma być 27.",
      },
      {
        type: "p",
        text: "Szef Italo, Gianbattista La Rocca, powiedział „Sole”, że do końca roku pokryją 45 z 51 składów, a w marcu skończą resztę. Instalacja kosztowała nieco ponad 10 mln euro (ok. 43 mln zł). Do tego dochodzi kilka milionów euro rocznie za usługę i serwis.",
      },
      {
        type: "img",
        src: "/img/it-laptop.jpg",
        alt: "Wnętrze Italo: laptop na stoliku, fotele z czerwonymi zagłówkami",
        caption: "Wcześniejsze próby Italo, bez dziennikarzy na pokładzie, dawały ponad 400 Mbps przy 300 km/h.",
      },
      {
        type: "p",
        text: "Wcześniejsze próby Italo, jeszcze bez dziennikarzy na pokładzie, dawały ponad 400 Mbps przy 300 km/h.",
      },
      {
        type: "img",
        src: "/img/it-pkp.jpg",
        alt: "Pendolino PKP Intercity na peronie, tablica Wejście na peron",
        caption: "PKP Intercity się przygląda. Alan Beroud mówi o kilku dostawcach, nie tylko o SpaceX.",
      },
      {
        type: "p",
        text: "PKP Intercity też temu się przygląda, a my czekamy na efekty. W polskich liniach lotniczych LOT na razie cisza, a Starlink jest już zainstalowany na ponad 1000 samolotów pasażerskich, wzmacniając ich pozycję rynkową. [TVP World](https://tvpworld.com/95300664/poland-pkp-intercity-to-test-satellite-internet-on-pendolino-trains) napisał 9 września, że polski przewoźnik testował już Starlinka wewnętrznie i szykuje próby z pasażerami. Alan Beroud mówi o kilku dostawcach, nie tylko o SpaceX.",
      },
      {
        type: "img",
        src: "/img/it-lot.jpg",
        alt: "Pasażer z laptopem przy oknie samolotu, ekran mapy lotu",
        caption: "Ponad 1000 samolotów ze Starlinkiem. LOT na razie milczy.",
      },
    ],
  },
];
