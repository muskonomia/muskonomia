import type { Post } from "./posts";

export const postsAv: Post[] = [
  {
    slug: "starlink-w-samolotach-7000",
    kicker: "Starlink",
    topic: "spacex",
    title: "Starlink na ponad 7000 samolotów wkrótce",
    excerpt:
      "Kontrakty Starlink Aviation obejmują ponad 7000 samolotów. SeatWiFi 13 września: 21 linii i 1214 potwierdzonych maszyn w powietrzu.",
    date: "13 września 2026",
    isoDate: "2026-09-13",
    xPostId: "2099132791954788614",
    img: "/img/sl7-okladka.jpg",
    body: [
      {
        type: "p",
        text: "Valour Consultancy w czerwcu policzyła kontrakty Starlink Aviation na ponad 7000 maszyn. [Reuters](https://www.reuters.com/business/aerospace-defense/musks-starlink-leads-bezos-amazon-airlines-rush-boost-in-flight-wi-fi-2026-06-09/) podał wtedy też tempo: 8 linii w 2024, 22 w 2025, 11 w pierwszych miesiącach 2026.",
      },
      {
        type: "img",
        src: "/img/sl7-okladka.jpg",
        alt: "Samolot ze Starlinkiem na ogonie, noc, pas startowy",
        caption: "Ponad 7000 maszyn w kontraktach. Źródło: @cb_doge.",
        href: "https://x.com/cb_doge/status/2099014553799688602",
      },
      { type: "x", id: "2099014553799688602", handle: "cb_doge" },
      {
        type: "p",
        text: "Tracker StarlinkFlights trzyma 46 linii i 893 maszyny zgłoszone przez przewoźników, z czego samodzielnie sprawdził 121. [SeatWiFi](https://seatwifi.com/starlink-rollout) 13 września liczy 21 linii już z pasażerami na Starlinku i 1214 potwierdzonych samolotów; 23 kolejne podpisały, ale jeszcze nie latają.",
      },
      {
        type: "img",
        src: "/img/sl7-48.jpg",
        alt: "Grafika: 48 linii i ponad 7000 samolotów ze Starlinkiem",
        caption: "48 linii. Ponad 7000 maszyn: już wyposażone, w montażu albo w umowie.",
        contain: true,
      },
      {
        type: "img",
        src: "/img/sl7-flota.jpg",
        alt: "Hawaiian i United na pasie, dwa widebody, góry w tle",
        caption: "Hawaiian i United. Dwie z linii, które już wożą pasażerów na Starlinku.",
      },
      {
        type: "img",
        src: "/img/sl7-emirates.jpg",
        alt: "Infografika Emirates: 232 samoloty na Starlink, Wi-Fi we wszystkich klasach",
        caption: "Emirates: 232 widebody na Starlink. Źródło: Emirates.",
        contain: true,
      },
    ],
  },
];
