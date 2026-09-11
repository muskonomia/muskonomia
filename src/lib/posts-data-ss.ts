import type { Post } from "./posts";

export const postsSs: Post[] = [
  {
    slug: "uk-mod-starshield-1000-terminali",
    kicker: "Starshield",
    topic: "spacex",
    title: "Wielka Brytania ma już tysiąc terminali Starshield",
    excerpt:
      "Ministerstwo Obrony UK: około 1000 terminali Starshield i 500 Starlink. 13 mln funtów na Starshield, 16,5 mln na Starlink. Pierwsze państwo poza USA, które to potwierdza.",
    date: "11 września 2026",
    isoDate: "2026-09-11",
    img: "/img/ss-mod.jpg",
    body: [
      {
        type: "p",
        text: "Ministerstwo Obrony Wielkiej Brytanii potwierdziło Reutersowi, że ma około 1000 terminali Starshield i 500 terminali Starlink. Na Starshield, łącznie z czasem antenowym, wydało około 13 mln funtów (ok. 65 mln zł). Na Starlink 16,5 mln funtów (ok. 83 mln zł).",
      },
      {
        type: "img",
        src: "/img/ss-mod.jpg",
        alt: "Główny budynek Ministerstwa Obrony w Whitehall, Londyn",
        caption: "MoD potwierdziło liczby na wniosek o dostęp do informacji.",
      },
      {
        type: "p",
        text: "[Reuters](https://www.reuters.com/business/media-telecom/uk-deepens-reliance-musks-spacex-spending-nearly-40-million-satellite-services-2026-09-10/) dostał te liczby na wniosek o dostęp do informacji. To pierwsze państwo poza USA, które publicznie przyznaje się do Starshielda.",
      },
      {
        type: "img",
        src: "/img/ss-grafika.jpg",
        alt: "Grafika: UK MoD 500 Starlink, 1000 Starshield, 16,5 mln i 13 mln funtów",
        caption: "Pierwsze państwo poza USA, które mówi Starshield na głos.",
        contain: true,
      },
      { type: "x", id: "2098032121378209907", handle: "cb_doge" },
      {
        type: "p",
        text: "Starlink wszedł do wojska w połowie 2022 r. Własne terminale Starshield ministerstwo kupiło w 2025 r. Ruch operacyjno-wojskowy ma być obsługiwany właśnie przez Starshield. Ministerstwo opisuje tę wersję tak: mocniejsze szyfrowanie, warunki dla wojska, najwyższy priorytet w sieci, elastyczne licencje i szersze pokrycie.",
      },
      {
        type: "img",
        src: "/img/ss-term.jpg",
        alt: "Żołnierz z laptopem przy płaskim terminalu satelitarnym na pasie",
        caption: "Te same satelity co Starlink. Inne terminale i osobne bramy naziemne.",
      },
      {
        type: "p",
        text: "Te same satelity co Starlink. Inne terminale i osobne bramy naziemne.",
      },
      {
        type: "img",
        src: "/img/ss-sat.jpg",
        alt: "Satelita Starshield na orbicie, Ziemia w kadrze. Oficjalna strona SpaceX",
        caption: "Starshield: ta sama konstelacja, inny ładunek i bramy.",
      },
      {
        type: "p",
        text: "Cennik, który ministerstwo oddało Reutersowi, jest wyższy. Starshield: 5500 funtów miesięcznie za 5 TB albo 25 tys. funtów za dostęp bezlimitowy. Terminal Starshield, według osoby znającej sprawę, kosztuje 4–7 tys. funtów. To co najmniej dwa razy więcej niż terminal biznesowy Starlinka.",
      },
      {
        type: "img",
        src: "/img/ss-skynet.jpg",
        alt: "Anteny naziemne i kopuły radarowe, wojskowa stacja satelitarna",
        caption: "Wielka Brytania ma własny Skynet i udział w Eutelsacie. Tego zestawu nie zastąpiła.",
      },
      {
        type: "p",
        text: "Wielka Brytania ma własny Skynet. Jest też udziałowcem Eutelsata. Tego zestawu nie zastąpiła. Dodała drugi kanał, który stoi już na orbitach SpaceX.",
      },
      {
        type: "p",
        text: "W kwartalnym raporcie SpaceX amerykański rząd ma ponad 6 mld dolarów (ok. 22 mld zł) wieloletnich kontraktów Starshield, głównie przez dwa programy Space Force. Nowa Zelandia testuje ten sam produkt.",
      },
    ],
  },
];
