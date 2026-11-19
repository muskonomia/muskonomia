import type { Post } from "./posts";

export const postsStw: Post[] = [
  {
    slug: "strefy-tesla-robotaxi-kontra-waymo",
    kicker: "Robotaxi",
    topic: "tesla",
    title: "Strefy Tesla Robotaxi większe od Waymo w większości wspólnych miast",
    excerpt:
      "16 listopada Tesla powiększyła strefę Robotaxi w Miami, a Elon Musk napisał, że próby z prywatnymi autami w sieci mogą zacząć się w przyszłym miesiącu. Porównanie ośmiu miast.",
    date: "17 listopada 2026",
    isoDate: "2026-11-17",
    img: "/img/strefy-tesla-waymo-17-11-pl-1600x900.png",
    credit:
      "Obszary: Robotaxi Tracker (CC BY 4.0), @robotaxi; oprac. muskonomia.pl; mapa © OpenStreetMap",
    xPostId: "2122629378433564790",
    body: [
      {
        type: "p",
        text: "16 listopada konto [@robotaxi](https://x.com/robotaxi/status/2122234442328740005) napisało, że usługa obejmuje już większą część Miami. Tego samego dnia Elon Musk napisał, że prywatne auta w sieci Robotaxi pojawią się już wkrótce i że jeśli sprawy potoczą się dobrze, próby mogą zacząć się w przyszłym miesiącu.",
      },
      {
        type: "p",
        text: "Porównanie obejmuje Austin, San Antonio, Houston, Dallas, Miami, Orlando i Tampę. W czterech pierwszych według zestawienia [Sawyera Merritta](https://x.com/SawyerMerritt/status/2122352840475553818) z 16 listopada strefa Tesli jest większa. Na Florydzie większy pozostaje Waymo. Do tego dochodzi Fort Worth, gdzie jeździ tylko Tesla. Mapa poniżej zestawia powierzchnie według Sawyera (Tesla) i geometrii [Robotaxi Tracker](https://whereisrobotaxi.com/) (Waymo). Stan na 17 listopada 2026.",
      },
      {
        type: "img",
        src: "/img/strefy-tesla-waymo-17-11-pl-1600x900.png",
        alt: "Strefy robotaxi: Tesla kontra Waymo, osiem miast, stan na 17 listopada 2026",
        caption:
          "Obszary: Robotaxi Tracker (CC BY 4.0), @robotaxi; oprac. muskonomia.pl; mapa © OpenStreetMap",
      },
      {
        type: "table",
        headers: ["Miasto", "Tesla (Sawyer, 16.11)", "Waymo (Robotaxi Tracker)"],
        rows: [
          ["Austin", "1147 km²", "392 km²"],
          ["San Antonio", "712 km²", "153 km²"],
          ["Houston", "658 km²", "127 km²"],
          ["Fort Worth", "370 km²", "Waymo tu nie jeździ"],
          ["Dallas", "210 km²", "124 km²"],
          ["Miami", "153 km²", "375 km²"],
          ["Orlando", "67 km²", "304 km²"],
          ["Tampa", "62 km²", "114 km²"],
        ],
      },
      {
        type: "p",
        text: "Liczby Tesli pochodzą z zestawienia Sawyera Merritta, nie z komunikatu firmy. Powierzchnie Waymo wzięliśmy z geometrii [Robotaxi Tracker](https://github.com/Robotaxi-Tracker/robotaxi-service-areas) (licencja CC BY 4.0) oraz oficjalnych map konta @robotaxi. Opracowanie muskonomia.pl.",
      },
      { type: "h2", text: "Rozbudowa w Miami i liczby Sawyera" },
      {
        type: "p",
        text: "Konto @robotaxi ogłosiło 16 listopada: „Obsługujemy już większą część Miami”. Sawyer Merritt tego samego dnia zestawił osiem miast i zaznaczył, że wszystkie te obszary to wyłącznie w pełni autonomiczne, nienadzorowane robotaxi. Dla Miami podał 153 km² i dodał, że strefa „zwiększyła się dziś o 92 procent”.",
      },
      {
        type: "p",
        text: "Wcześniej, 9 listopada, [Teslaconomics](https://x.com/Teslaconomics/status/2119851177252893051) na nakładce Tesla-Waymo pokazywał w Miami 80 km² przy Waymo 376 km². Po rozbudowie Tesla według Sawyera ma 153 km², nadal mniej niż Waymo.",
      },
      { type: "x", id: "2122352840475553818", handle: "SawyerMerritt" },
      { type: "h2", text: "Fort Worth i FAQ Waymo" },
      {
        type: "p",
        text: "W Fort Worth jeździ tylko Tesla. Oficjalny [FAQ Waymo](https://waymo.com/faq/) wymienia między innymi Dallas, Houston, San Antonio, Miami, Orlando i Tampę. Fort Worth nie ma na liście. W Austin Waymo jeździ na razie wyłącznie przez Ubera.",
      },
      { type: "h2", text: "Prywatne auta w sieci Robotaxi" },
      {
        type: "p",
        text: "16 listopada [John Welty](https://x.com/apostlejohn/status/2122403531894214806), diamentowy kierowca Ubera w Austin, napisał, że jeździ wyłącznie na [FSD](https://muskonomia.pl/fsd-tracker). Od kwoty płaconej przez pasażera zostaje mu 49-63 proc. i wolałby wysłać swoją Model Y do pracy w Robotaxi bez siebie. Elon Musk [odpowiedział](https://x.com/elonmusk/status/2122449119570534680): „Już wkrótce. Jeśli sprawy potoczą się dobrze, próby mogą zacząć się w przyszłym miesiącu. Dużo lepiej zarządzać flotą samochodów, niż samemu prowadzić tylko jedno auto!”. To prognoza, nie ogłoszenie daty startu.",
      },
      { type: "x", id: "2122449119570534680", handle: "elonmusk" },
      {
        type: "p",
        text: "[@WorldlyReviewer](https://x.com/WorldlyReviewer/status/2122449457258377312) dopytał pod tą odpowiedzią, czy Musk mówi o Modelu Y i czy Tesla otworzy zamówienia na Cybercaba także dla zwykłych klientów. To pytania z wątku, nie decyzja Tesli.",
      },
      {
        type: "p",
        text: "O prywatnym Cybercabie [pisaliśmy 14 listopada](https://muskonomia.pl/blog/tesla-otwiera-sprzedaz-prywatnego-cybercaba): Tesla zaprasza wybranych klientów do zakupu za 29 990 USD. Na razie zaproszenia są dla wybranych, auto działa w strefach Robotaxi, a do jazdy potrzebny jest abonament.",
      },
      {
        type: "p",
        text: "Konto [@robotaxi](https://x.com/robotaxi/status/2122419204762820948) poinformowało też 16 listopada, że w aplikacji Robotaxi można już podpiąć X Money.",
      },
    ],
  },
];
