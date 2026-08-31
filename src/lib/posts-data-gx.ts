import type { Post } from "./posts";

export const postsGx: Post[] = [
  {
    slug: "elon-musk-grok-wycina-klipy-i-doklada-napisy",
    kicker: "xAI",
    topic: "xai",
    title: "Elon Musk: Grok wycina klipy i dokłada napisy",
    excerpt:
      "Musk nie udaje, że Grok Bot jest do wszystkiego. Do trudnych rzeczy sam otwiera aplikację Grok. I właśnie pokazał, po co.",
    date: "31 sierpnia 2026",
    isoDate: "2026-08-31",
    img: "/img/gx-napisy.jpg",
    body: [
      {
        type: "p",
        text: "Musk nie udaje, że Grok Bot jest do wszystkiego. Do trudnych rzeczy sam otwiera aplikację Grok. I właśnie pokazał, po co.",
      },
      {
        type: "p",
        text: "W niedzielę wieczorem napisał, że „był w stanie wyciąć i poprawić bardzo konkretny klip”. Link prowadzi do sesji na grok.com. Kadr z Aliens. Bishop. „Not bad for a human.” Grok ściąga fragment z Yarn, tnie, wydłuża o sekundę, żeby zmieściło się całe „human”, i normalizuje dźwięk. To nie jest prompt „zrób ładny filmik”. To precyzyjne cięcie jednego ujęcia.",
      },
      {
        type: "img",
        src: "/img/gx-telefon.jpg",
        alt: "Aplikacja Grok na iPhonie z przyciskiem Create Videos",
        caption: "Aplikacja Grok. Create Videos, Voice Mode, Ask Anything.",
      },
      {
        type: "p",
        text: "Kilka godzin później cytuje @Hanya_po. Japończyk kazał Grokowi dodać napisy. Gotowe w sekundy. Komentarz: może nie potrzebuję już Photoshopa ani CapCut. Musk odpowiada jednym słowem: Grok.",
      },
      {
        type: "video",
        src: "/video/grok-napisy.mp4",
        poster: "/img/gx-napisy.jpg",
        loop: true,
        caption: "Demo, które Musk podbił: Grok dokłada napisy w kilka sekund. Źródło: @Hanya_po.",
      },
      {
        type: "img",
        src: "/img/gx-napisy.jpg",
        alt: "Kadr z napisami dołożonymi przez Grok: japoński i angielski tekst na dole obrazu",
        caption: "Ten sam kadr po edycji. Napisy po japońsku i angielsku.",
      },
      {
        type: "img",
        src: "/img/gx-app.jpg",
        alt: "Grok na pulpicie i w telefonie: Create images, Edit image, Voice Mode",
        caption: "Grok 4 w przeglądarce i w aplikacji. Edit image obok Create images.",
        contain: true,
      },
      {
        type: "p",
        text: "Wcześniej w tym samym wątku doprecyzował, że aplikację Grok wciąż uważa za lepszą od Bota przy części zadań.",
      },
      {
        type: "p",
        text: "Źródła: [Musk o montażu klipu](https://x.com/elonmusk/status/2094155810234335302), [sesja Grok](https://grok.com/share/bGVnYWN5_0e357843-9f62-4e7d-b5dc-770b7ad8f302), [„Grok” pod demo z napisami](https://x.com/elonmusk/status/2094259860976103823).",
      },
    ],
  },
];
