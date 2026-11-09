import type { Post } from "./posts";

export const postsRsa: Post[] = [
  {
    slug: "tesla-robotaxi-san-antonio-austin-9-listopada",
    kicker: "Robotaxi",
    topic: "tesla",
    title: "Tesla uruchamia Robotaxi w San Antonio",
    excerpt:
      "9 listopada 2026 Tesla otworzyła Robotaxi w San Antonio od 5:00 i powiększyła Austin. Według @RobotaxiRadar zasięg w Teksasie urósł o ok. 59% do ~1194 mi² (~3092 km²).",
    date: "9 listopada 2026",
    isoDate: "2026-11-09",
    img: "/img/robotaxi-teksas-mapa-radar-1600x900-pelna.jpg",
    credit: "Mapa stref Robotaxi w Teksasie. Źródło: @RobotaxiRadar",
    body: [
      {
        type: "p",
        text: "9 listopada 2026 od godziny 5:00 czasu lokalnego (Central) Tesla otworzyła jazdy Robotaxi w San Antonio, a tego samego dnia powiększyła strefę w Austin. Konta śledzące mapy szacują, że łączny zasięg w Teksasie urósł o około 59 procent.",
      },
      {
        type: "p",
        text: "Oficjalne konto [@robotaxi](https://x.com/robotaxi/status/2119678179963187564) napisało „Robotaxi available in San Antonio starting tomorrow, 5am” i dołączyło mapę strefy. W odpowiedzi na pytanie doprecyzowało, że chodzi o [poniedziałek](https://x.com/robotaxi/status/2119680468392276192). Tego samego dnia konto ogłosiło [„Bigger Austin service area now live”](https://x.com/robotaxi/status/2119746828191027346) wraz z nową mapą.",
      },
      {
        type: "p",
        text: "Na stronie [tesla.com/robotaxi](https://www.tesla.com/robotaxi) San Antonio jest już na liście miast z jazdami obok Austin, Dallas, Fort Worth, Houston, Miami, Orlando i Tampa. Firma zapowiada kolejne miasta. Żywy licznik na [trackerze FSD](https://muskonomia.pl/fsd-tracker) pokazuje około 7,7 mln km autonomicznych. San Antonio figuruje tam od 9 listopada 2026, bez osobnego przebiegu, podobnie jak wcześniej Fort Worth.",
      },
      {
        type: "img",
        src: "/img/robotaxi-teksas-mapa-radar-1600x900-pelna.jpg",
        alt: "Mapa stref Robotaxi Tesli i Waymo w Austin, San Antonio, Houston, Dallas i Fort Worth",
        caption: "Mapa stref Robotaxi w Teksasie. Źródło: @RobotaxiRadar",
      },
      {
        type: "p",
        text: "Szacunki powierzchni pochodzą z kont trzecich, nie z Tesli. [@SawyerMerritt](https://x.com/SawyerMerritt/status/2119774779024548146) podał zaktualizowane wielkości geofence w milach kwadratowych. Austin ma według niego 443 mi² (ok. 1147 km²), co oznacza wzrost o 63 procent względem wcześniejszych około 272 mi². San Antonio to około 275 mi² (ok. 712 km²), Houston 254 mi² (ok. 658 km²), Fort Worth 143 mi² (ok. 370 km²), a Dallas 81 mi² (ok. 210 km²). Poza Teksasem wymienił Miami (31), Orlando (26) i Tampę (24). Sawyer zaznaczył, że wszystkie te obszary to w pełni autonomiczne, nienadzorowane Robotaxi.",
      },
      {
        type: "p",
        text: "Media wtórne, w tym [Electrek](https://electrek.co/2026/11/09/tesla-robotaxi-san-antonio-launch-geofence/) i [Not a Tesla App](https://www.notateslaapp.com/news/4969/tesla-launches-largest-robotaxi-zone-yet-in-san-antonio), piszą o strefie San Antonio rzędu 274 mi² (ok. 710 km²). To ich własne odczyty map, zbliżone do szacunku Sawyera.",
      },
      {
        type: "p",
        text: "[@RobotaxiRadar](https://x.com/RobotaxiRadar/status/2119795896720236812) podsumował cały Teksas. Po rozszerzeniu Austin i starcie San Antonio zasięg Robotaxi w stanie urósł według autora z około 751 do około 1194 mi², czyli z około 1945 do około 3092 km². To wzrost o około 59 procent. Radar ocenia, że to teraz około cztery razy więcej niż zasięg Waymo w Teksasie, i dodaje, że linia Cybercab jeszcze nie jest w pełni rozpędzona. Na mapie z jego wpisu czerwone strefy Tesli w Austin, San Antonio, Houston, Dallas i Fort Worth są większe od niebieskich obszarów Waymo.",
      },
      {
        type: "p",
        text: "Waymo oficjalnie działa w Austin, Dallas, Houston i San Antonio. Konto [@Waymo](https://x.com/Waymo/status/2110401438312485327) informowało 14 października 2026, że w San Antonio, San Diego i Tampie każdy może zamówić przejazd, także na lotnisko SAT. Waymo nie podaje łącznej powierzchni w Teksasie.",
      },
      {
        type: "p",
        text: "Aktualny stan miast i licznik przebiegu są na [trackerze FSD](https://muskonomia.pl/fsd-tracker).",
      },
    ],
  },
];
