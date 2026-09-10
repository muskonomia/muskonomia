import type { Post } from "./posts";

export const postsPwv: Post[] = [
  {
    slug: "powerwall-vpp-kalifornia-500-mw",
    kicker: "Powerwall",
    topic: "tesla",
    title: "Powerwalle w Kalifornii oddają do sieci ponad 500 MW",
    excerpt:
      "Około 69 tys. Powerwalli w Kalifornii oddaje do sieci ponad 500 MW podczas fali upałów. Tesla Energy: moc elektrowni, z baterii już stojących w domach.",
    date: "10 września 2026",
    isoDate: "2026-09-10",
    img: "/img/pw-vpp.jpg",
    contain: true,
    body: [
      {
        type: "p",
        text: "Około 69 tys. właścicieli Powerwalli w Kalifornii oddawało do sieci więcej niż 500 MW. To Tesla Energy podała 10 września, w trakcie utrzymującej się fali upałów.",
      },
      {
        type: "img",
        src: "/img/pw-vpp.jpg",
        alt: "Pulpit Tesla California Virtual Power Plant: 105 009 domów, 68 845 w evencie, 508 MW",
        caption: "Pulpit z 10 września, 19:16 PDT. 68 845 domów, 508 MW do sieci. Źródło: @teslaenergy.",
        contain: true,
        href: "https://x.com/teslaenergy/status/2097874342894096390",
      },
      {
        type: "p",
        text: "[Wpis Tesli Energy](https://x.com/teslaenergy/status/2097874342894096390) pokazał zrzut z pulpitu kalifornijskiego VPP. Drugi wpis odsyła do [strony na żywo](https://www.tesla.com/vpp/california). Tam widać, ile domów jest w programie, ile w trybie backupu i ile mocy idzie do sieci.",
      },
      { type: "x", id: "2097874342894096390", handle: "teslaenergy" },
      {
        type: "img",
        src: "/img/pw-sciana.jpg",
        alt: "Dwa Tesla Powerwalle na drewnianej ścianie domu, obok skrzynek elektrycznych",
        caption: "Baterie już stoją w domach. Stąd te 500 MW.",
      },
      {
        type: "p",
        text: "Wirtualna elektrownia składa się z tysięcy domowych baterii w jeden zasób. Gdy sieć jest pod presją, Powerwalle oddają zmagazynowany prąd naraz. Właściciel zostawia sobie rezerwę na dom. Reszta idzie do sieci elektroenergetycznej.",
      },
      {
        type: "img",
        src: "/img/pw-garaz.jpg",
        alt: "Tesla Powerwall 3 na czarnej ścianie w garażu",
        caption: "Powerwall 3. Rezerwa zostaje w domu. Reszta idzie do sieci.",
      },
      {
        type: "p",
        text: "Kalifornia ma największy zbiór VPP Tesli w Ameryce Północnej. Działa to przez programy DSGS i ELRP. Zapis jest w aplikacji Tesli. Za oddany prąd jest stawka płacona za każdy oddany kWh.",
      },
      {
        type: "img",
        src: "/img/pw-app.jpg",
        alt: "Aplikacja Tesla Virtual Power Plant: zapis i zdarzenie rozładowania",
        caption: "Zapis w aplikacji. Stawka za każdy oddany kWh.",
        contain: true,
      },
      {
        type: "p",
        text: "Sieć urosła szybko. W 2023 r. w kalifornijskim VPP Tesli było nieco ponad 7 tys. klientów. Na stronie Tesli widać teraz już ponad 105 tys. domów zapisanych do programu. W nocy z 9–10 września Tesla Energy miała około 69 tys. użytkowników jednocześnie oddających moc.",
      },
      {
        type: "p",
        text: "Tesla nie podała, ile zapłacono za ten konkretny przypadek i przez ile godzin trwało rozładowywanie z mocą 500 MW. Dla ciekawych udostępnia za to pulpit, gdzie można na bieżąco wszystkie dane sprawdzić.",
      },
    ],
  },
];
