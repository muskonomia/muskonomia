import type { Post } from "./posts";

export const postsGx: Post[] = [
  {
    slug: "elon-musk-grok-wycina-klipy-i-doklada-napisy",
    kicker: "xAI",
    topic: "xai",
    title: "Elon Musk: Grok wycina klipy i dokłada napisy. Photoshop może poczekać",
    excerpt:
      "Sam wyciął i poprawił konkretny kadr w aplikacji Grok. Potem cytuje demo: napisy w kilka sekund. Bot to nie wszystko.",
    date: "31 sierpnia 2026",
    isoDate: "2026-08-31",
    img: "/img/gx-napisy.jpg",
    body: [
      {
        type: "p",
        text: "Musk nie chowa, że Grok Bot to nie wszystko. Do trudnych zadań sam otwiera aplikację Grok. I akurat pokazał, co umie: montaż.",
      },
      {
        type: "p",
        text: "Najpierw, w niedzielę wieczorem: „byłem w stanie wyciąć i poprawić bardzo konkretny klip”. Link prowadzi do sesji na grok.com. Kadr z Aliens. Bishop. „Not bad for a human.” Grok ściąga fragment z Yarn, tnie, wydłuża o sekundę, żeby zmieścić całe „human”, normalizuje dźwięk. To nie jest prompt „zrób ładny filmik”. To ręczne cięcie jednego, bardzo konkretnego ujęcia.",
      },
      {
        type: "img",
        src: "/img/gx-telefon.jpg",
        alt: "Aplikacja Grok na iPhonie z przyciskiem Create Videos",
        caption: "Aplikacja Grok. Create Videos, Voice Mode, Ask Anything. Musk: do niektórych zadań wciąż lepsza niż Bot.",
      },
      {
        type: "p",
        text: "Kilka godzin później cytuje Japończyka @Hanya_po. Kazał Grokowi dodać napisy. Zrobione w sekundy. Komentarz: może nie potrzebuję już Photoshopa ani CapCut. Musk odpowiada jednym słowem: Grok.",
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
        caption: "Ten sam kadr po edycji. Napisy po japońsku i angielsku. Bez CapCut.",
      },
      {
        type: "img",
        src: "/img/gx-app.jpg",
        alt: "Grok na pulpicie i w telefonie: Create images, Edit image, Voice Mode",
        caption: "Grok 4 w przeglądarce i w aplikacji. Edit image jest na wierzchu, obok Create images.",
        contain: true,
      },
      {
        type: "p",
        text: "Wcześniej w tym samym wątku doprecyzował: osobiście wciąż uważa aplikację Grok za użyteczniejszą od Bota przy części zadań. Warto wrócić do trudnych rzeczy, jeśli ktoś dawno nie sprawdzał. Link do App Store poszedł w tym samym tweecie.",
      },
      {
        type: "p",
        text: "DogeDesigner przy tym wątku milczy. Nie ma grafiki BREAKING. Jest Musk, sesja na grok.com i jeden klip z napisami, który w kilka godzin nabiera milionów wyświetleń.",
      },
      {
        type: "p",
        text: "Łatwo było myśleć, że Grok to czat albo generator 10-sekundowych filmików. Musk pokazuje coś ciaśniejszego: weź ten kadr, dociąć, poprawić, dopisać. Jeśli to działa na jednym zdaniu z Aliens i na napisach w sekundach, CapCut nie znika z rynku. Znika z codziennej kolejki.",
      },
      {
        type: "p",
        text: "Źródło: [Musk o montażu klipu](https://x.com/elonmusk/status/2094155810234335302), [sesja Grok](https://grok.com/share/bGVnYWN5_0e357843-9f62-4e7d-b5dc-770b7ad8f302), [„Grok” pod demo z napisami](https://x.com/elonmusk/status/2094259860976103823).",
      },
    ],
  },
];
