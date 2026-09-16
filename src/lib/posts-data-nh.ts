import type { Post } from "./posts";

export const postsNh: Post[] = [
  {
    slug: "nhtsa-av-tesla-26-zderzen",
    kicker: "Robotaxi",
    topic: "tesla",
    title: "NHTSA? Tesla ma dwa nowe zderzenia/wypadki drogowe. A Waymo ma 94.",
    excerpt:
      "NHTSA do 17 sierpnia: Tesla 26 zgłoszeń robotaxi, wszystkie w Teksasie. Waymo 2214. Zoox 156. Wpis nie oznacza winy. Bez przebiegu to nie ranking.",
    date: "16 września 2026",
    isoDate: "2026-09-16",
    img: "/img/nh-okladka.jpg",
    contain: true,
    body: [
      {
        type: "p",
        text: "NHTSA pokazała dane o zderzeniach aut bez kierowcy do 17 sierpnia tego roku. Tesla ma w tej tabeli 26 zdarzeń. Dwa doszły od lipca. Wszystkie w Teksasie. Waymo ma natomiast 2214, od lipca plus 94. Zoox 156, plus trzy.",
      },
      {
        type: "img",
        src: "/img/nh-okladka.jpg",
        alt: "Wykres NHTSA: Tesla 26 zgłoszeń, Waymo 2214, Zoox 156, do 17 sierpnia 2026",
        caption: "Dane do 17 sierpnia. Źródło: @mehauff7.",
        contain: true,
        href: "https://x.com/mehauff7/status/2099853692568469887",
      },
      {
        type: "p",
        text: "Federalny [obowiązek zgłoszeń](https://www.nhtsa.gov/laws-regulations/standing-general-order-crash-reporting) każe wpisać każdy wypadek drogowy, w którym auto z włączonym systemem autonomicznym brało udział, a ktoś odniósł obrażenia albo szkoda jest poważna. Auto mogło równie dobrze stać a ktoś mógł wjechać z tyłu. W tabeli i tak jest to zanotowane bez orzekania kogo to była wina.",
      },
      { type: "x", id: "2099853692568469887", handle: "mehauff7" },
      {
        type: "p",
        text: "Flota Tesli to około tysiąc aut na ten moment a Waymo ma ponad 3 tysiące aut.",
      },
      {
        type: "p",
        text: "[Robotaxi Radar](https://x.com/RobotaxiRadar/status/2099917036352577752) położył te trzy liczby obok siebie. Tesla ma najmniej wpisów. Ma też najmniej aut na drodze.",
      },
      { type: "x", id: "2099917036352577752", handle: "RobotaxiRadar" },
      {
        type: "img",
        src: "/img/nh-dwa.jpg",
        alt: "Dwa nowe zgłoszenia Tesli od lipca: słupek 1 mph i łańcuch 2 mph",
        caption: "Dwa nowe zgłoszenia Tesli od lipca. Źródło: @RobotaxiRadar.",
        contain: true,
        href: "https://x.com/RobotaxiRadar/status/2100184827504824641",
      },
      {
        type: "p",
        text: "W lipcu Tesla miała 24 zgłoszenia. Potem znów plus dwa. Waymo w tamtym oknie dostało plus 103, teraz plus 94. Inna flota, inna liczba kursów, inna tabela.",
      },
      {
        type: "p",
        text: "NHTSA publikuje pliki i wykresy. Przebiegu tam nie ma. Kto chce stawkę na kilometr, musi wziąć mile od operatorów i podzielić sam.",
      },
    ],
  },
];
