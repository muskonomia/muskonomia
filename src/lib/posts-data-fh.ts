import type { Post } from "./posts";

export const postsFh: Post[] = [
  {
    slug: "falcon-heavy-lc-39a-teleskop-roman-l2",
    kicker: "Start z Florydy",
    topic: "spacex",
    title: "Falcon Heavy z LC-39A. Teleskop Roman odłączony, boczne stopnie na LZ-2 i LZ-40",
    excerpt:
      "Falcon Heavy wystartował z LC-39A z teleskopem NASA Nancy Grace Roman. To 13. lot z tego pada. Boczne stopnie usiadły na LZ-2 i LZ-40, Roman odłączony — ponad 3 miesiące do L2.",
    date: "30 sierpnia 2026",
    isoDate: "2026-08-30",
    img: "/img/falcon-sunset.jpg",
    contain: true,
    body: [
      {
        type: "p",
        text: "SpaceX wyniosła z LC-39A teleskop NASA Nancy Grace Roman. To 13. lot Falcon Heavy z tego pada.",
      },
      {
        type: "p",
        text: "Rakieta [wystartowała z padu 39A na Florydzie](https://x.com/SpaceX/status/2094024852881469477). Boczne stopnie [usiadły na LZ-2 i LZ-40](https://x.com/SpaceX/status/2094030749485646043). SpaceX [potwierdziła uwolnienie Roman](https://x.com/SpaceX/status/2094032495024951364). Teleskop leci do punktu Lagrange’a L2 Słońce–Ziemia — ok. 1,5 mln km od Ziemi, cztery razy dalej niż Księżyc. Na L2 grawitacja Słońca i Ziemi da mu stabilny punkt i czysty widok w głąb kosmosu.",
      },
      {
        type: "img",
        src: "/img/falcon-sunset.jpg",
        alt: "Falcon Heavy na LC-39A z teleskopem Nancy Grace Roman",
        caption: "Falcon Heavy. Źródło: SpaceX.",
        contain: true,
      },
      {
        type: "p",
        text: "Podróż zajmie ponad trzy miesiące. Stamtąd Roman ma robić zdjęcia wszechświata, jakich wcześniej nie było — [pisze SpaceX](https://x.com/SpaceX/status/2094081879150403768). Elon Musk nazwał lot [misją eksploracyjną](https://x.com/elonmusk/status/2094073761485988104). DogeDesigner dodał, że to 13. sukces na 13 lotów Heavy, start dziewięć miesięcy przed terminem i w budżecie; rdzeń nie wracał, oba boczne stopnie wróciły ([wpis](https://x.com/cb_doge/status/2094028432682205200), [wideo](https://x.com/cb_doge/status/2094061665910493218)).",
      },
      {
        type: "p",
        text: "Na L2 Roman zacznie przeglądać niebo z miejsca, z którego widać więcej niż z Ziemi.",
      },
    ],
  },
];
