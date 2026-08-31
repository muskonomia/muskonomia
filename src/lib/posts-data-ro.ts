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
    img: "/img/ro-start.jpg",
    body: [
      {
        type: "p",
        text: "Falcon Heavy wystartował dziś rano z LC-39A na Florydzie z teleskopem Nancy Grace Roman. To 13. lot Heavy. Roman leci ponad trzy miesiące do punktu L2, milion mil od Ziemi — pole widzenia stokrotnie szersze niż Hubble, ciemna energia i egzoplanety.",
      },
      {
        type: "video",
        src: "/video/roman-falcon-heavy.mp4",
        poster: "/img/ro-start.jpg",
        caption: "Start z 39A. Ten sam klip co na Instagramie — źródło: @SpaceX.",
      },
      {
        type: "img",
        src: "/img/ro-wieza.jpg",
        alt: "Falcon Heavy odchodzi od wieży na LC-39A z teleskopem Roman",
        caption: "Pad 39A. Kennedy Space Center, 30 sierpnia 2026.",
      },
      {
        type: "img",
        src: "/img/ro-ladowanie.jpg",
        alt: "Boczne boostery Falcon Heavy lądują na LZ-2 i LZ-40",
        caption: "LZ-2 i LZ-40. Środkowy rdzeń zużyty zgodnie z planem.",
      },
      {
        type: "p",
        text: "Źródło: @SpaceX oraz reel na Instagramie.",
      },
    ],
  },
];
