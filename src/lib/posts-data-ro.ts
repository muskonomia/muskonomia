import type { Post } from "./posts";

export const postsRo: Post[] = [
  {
    slug: "falcon-heavy-wyniosl-teleskop-roman",
    kicker: "SpaceX",
    topic: "spacex",
    title: "Falcon Heavy wyniósł teleskop Roman z padu 39A",
    excerpt:
      "13. lot Heavy. Nancy Grace Roman leci ponad trzy miesiące do L2. Boczne boostery wylądowały na LZ-2 i LZ-40.",
    date: "30 sierpnia 2026",
    isoDate: "2026-08-30",
    img: "/img/ro-slonce.jpg",
    body: [
      {
        type: "p",
        text: "Falcon Heavy wystartował dziś o 7:26 ET z LC-39A na Florydzie z teleskopem NASA Nancy Grace Roman. To 13. lot Heavy. Roman leci ponad trzy miesiące do punktu L2, milion mil od Ziemi — pole widzenia stokrotnie szersze niż Hubble, ciemna energia i egzoplanety.",
      },
      {
        type: "video",
        src: "/video/roman-falcon-heavy.mp4",
        poster: "/img/ro-start.jpg",
        caption: "Start z 39A. Film z oficjalnej strony SpaceX.",
      },
      {
        type: "img",
        src: "/img/ro-slonce.jpg",
        alt: "Falcon Heavy z teleskopem Roman przechodzi przed tarczą Słońca po starcie z LC-39A",
        caption: "NASA / John Kraus. Oficjalne zdjęcie startu.",
      },
      {
        type: "img",
        src: "/img/ro-ladowanie.jpg",
        alt: "Boczne boostery Falcon Heavy lądują na LZ-2 i LZ-40",
        caption: "LZ-2 i LZ-40. Środkowy rdzeń zużyty zgodnie z planem. Źródło: SpaceX.",
      },
      {
        type: "p",
        text: "Źródło: [SpaceX — Roman Space Telescope Mission](https://www.spacex.com/launches/roman) oraz [NASA](https://www.nasa.gov/news-release/nasas-dark-universe-seeking-nancy-grace-roman-space-telescope-launches/).",
      },
    ],
  },
];
