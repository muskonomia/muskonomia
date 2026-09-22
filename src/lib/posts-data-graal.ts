import type { Post } from "./posts";

export const postsGraal: Post[] = [
  {
    slug: "film-starship-swiety-graal",
    kicker: "Starship",
    topic: "spacex",
    title: "SpaceX wrzucił film o odzysku Starshipa z oceanu",
    excerpt:
      "SpaceX wrzucił trzeci odcinek serii o Starshipie. Od Grasshoppera i Falcona do Ship 40 na oceanie. Film jest po to, żeby go zobaczyć.",
    date: "22 września 2026",
    isoDate: "2026-09-22",
    img: "/img/graal-okladka.jpg",
    body: [
      {
        type: "p",
        text: "SpaceX wrzucił na YouTube trzeci odcinek serii o Starshipie. [„The Holy Grail of Rocketry”](https://www.youtube.com/watch?v=EthkNLasUa8) nie jest relacją ze startu. To film o wielokrotnym locie: od Grasshoppera i Falcona do Ship 40, który po wodowaniu został na Oceanie Indyjskim.",
      },
      {
        type: "img",
        src: "/img/graal-okladka.jpg",
        alt: "Kadr z filmu SpaceX The Holy Grail of Rocketry",
        caption: "[Obejrzyj na YouTube](https://www.youtube.com/watch?v=EthkNLasUa8).",
        href: "https://www.youtube.com/watch?v=EthkNLasUa8",
      },
      {
        type: "p",
        text: "Najpierw widać, jak firma uczyła rakietę wracać. Potem kamera schodzi na pokład wyprawy po górny stopień. Statek leży w wodzie. Tarcza cieplna jest już po ogniu, a nie z renderu.",
      },
      {
        type: "p",
        text: "[Obejrzyj na YouTube](https://www.youtube.com/watch?v=EthkNLasUa8). Reszty nie da się opisać.",
      },
    ],
  },
];
