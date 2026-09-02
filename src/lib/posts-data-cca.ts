import type { Post } from "./posts";

export const postsCca: Post[] = [
  {
    slug: "cybercaby-w-centrum-austin",
    kicker: "Robotaxi",
    topic: "tesla",
    title: "Austin najazd Cybercabów",
    excerpt:
      "W centrum Austin Cybercaby stoją rzędem przy krawężniku i mieszają się ze zwykłym ruchem. Tyle tych aut naraz na ulicy wcześniej nie było.",
    date: "2 września 2026",
    isoDate: "2026-09-02",
    img: "/img/inv-flota.jpg",
    xPostId: "2094613003530326396",
    body: [
      {
        type: "p",
        text: "W centrum Austin Cybercaby stoją już rzędem przy krawężniku i wjeżdżają w skrzyżowania razem ze zwykłym ruchem. Część otwiera drzwi na chodnik. Piesi idą obok, autobusy też.",
      },
      {
        type: "video",
        src: "https://video.twimg.com/amplify_video/2094594736199696386/vid/avc1/1280x720/H6zE37v52m_sD9AA.mp4",
        poster: "/img/cc-skrzydla.jpg",
        caption: "Nagranie: Cyber Owl / Rima Sukhadia.",
      },
      {
        type: "img",
        src: "/img/cc-skrzydla.jpg",
        alt: "Złoty Cybercab z otwartymi drzwiami motylowymi, dwa fotele, bez kierownicy",
        caption: "Drzwi jak motyl. Dwa fotele. Kierownicy nie ma.",
      },
      {
        type: "img",
        src: "/img/cc-wnetrze.jpg",
        alt: "Wnętrze Cybercaba: dwa fotele i ekran, bez kierownicy i pedałów",
        caption: "Kabina z testów w Austin. Dwa miejsca, środkowy ekran, zero kierownicy.",
      },
      {
        type: "p",
        text: "[Nic Cruz Patane](https://x.com/niccruzpatane/status/2094613003530326396) wrzucił nagranie z downtown i napisał, że to na razie największe skupisko tych aut na publicznej ulicy. Musk zapowiadał, że Tesla zaleje Austin Cybercabami. Na tym filmie widać, jak to wygląda.",
      },
    ],
  },
];
