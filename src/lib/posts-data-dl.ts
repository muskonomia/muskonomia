import type { Post } from "./posts";

export const postsDl: Post[] = [
  {
    slug: "tesla-cybercab-dallas-listopad-2026",
    kicker: "Tesla",
    topic: "tesla",
    title: "Cybercab ma ruszyć w Dallas w listopadzie, wynika z relacji z konferencji Tesli",
    excerpt:
      "Tesla zapowiedziała na konferencji wynikowej, że w listopadzie uruchomi w Dallas publiczne przejazdy Cybercabem bez nadzoru, relacjonuje Sawyer Merritt. W raporcie kwartalnym Tesla pisze tylko o Austin.",
    date: "24 października 2026",
    isoDate: "2026-10-24",
    img: "/img/tesla-cybercab-austin-raport-q3-okladka.jpg",
    credit: "Cybercaby w Austin. Fot. Tesla",
    body: [
      {
        type: "p",
        text: "Tesla zapowiedziała na konferencji po wynikach za III kwartał, że w przyszłym miesiącu uruchomi w Dallas publiczne przejazdy Cybercabem bez nadzoru, [relacjonuje Sawyer Merritt](https://x.com/SawyerMerritt/status/2113025279593504931). Tak wynika z jego wpisu z 21 października, który pojawił się w trakcie [transmisji konferencji na koncie @Tesla](https://x.com/Tesla/status/2113019308356039038).",
      },
      { type: "x", id: "2113025279593504931", handle: "SawyerMerritt" },
      {
        type: "p",
        text: "W [raporcie za III kwartał](https://assets-ir.tesla.com/tesla-contents/IR/TSLA-Q3-2026-Update.pdf) Tesla pisze o przejazdach Cybercabem tylko w Austin, gdzie wozi nimi pasażerów od 3 września, a usługa działa od 6:00 do północy. Konto [@robotaxi](https://x.com/robotaxi/status/2112988567500902438) wymieniło w dniu wyników jako miasta, w których Robotaxi pojawi się „wkrótce”, Las Vegas, Jacksonville, Phoenix i San Antonio. Dallas wspomniał wcześniej szef działu AI Tesli Ashok Elluswamy, który 10 października [napisał](https://x.com/aelluswamy/status/2108986941127696515): „Dwa lata po pokazie Cybercaba na We, Robot te taksówki są już wszędzie w Austin. Wkrótce Dallas”. Konto @robotaxi podało ten wpis dalej.",
      },
      {
        type: "img",
        src: "/img/tesla-robotaxi-jazda-noca.jpg",
        alt: "Robotaxi Tesli w nocnej jeździe bez kierowcy",
        caption:
          "Robotaxi Tesli w nocnej jeździe bez kierowcy. Kadr z wideo @robotaxi, fot. Tesla ([wpis @robotaxi](https://x.com/robotaxi/status/2112993544243937383))",
      },
      {
        type: "p",
        text: "W dniu wyników Tesla opublikowała też [raport bezpieczeństwa Robotaxi](https://x.com/robotaxi/status/2112988112330924269). Według @robotaxi flota nikogo nie zraniła, w żadnym aucie nie otworzyła się poduszka powietrzna i żaden pieszy ani rowerzysta nie został potrącony. Miasta, w których jeżdżą robotaxi Tesli, pokazuje nasz [FSD Tracker](https://muskonomia.pl/fsd-tracker).",
      },
      {
        type: "img",
        src: "/img/tesla-robotaxi-przebieg-statystyki.jpg",
        alt: "Przebieg Robotaxi bez kierowcy do 18 października 2026 r.",
        caption:
          "Przebieg Robotaxi bez kierowcy do 18 października 2026 r. Grafika: Tesla ([wpis @robotaxi](https://x.com/robotaxi/status/2112988413091803331))",
      },
      {
        type: "img",
        src: "/img/tesla-robotaxi-raport-bezpieczenstwa.jpg",
        alt: "Raport bezpieczeństwa Robotaxi",
        caption:
          "Raport bezpieczeństwa Robotaxi. Grafika: Tesla ([wpis @robotaxi](https://x.com/robotaxi/status/2112988112330924269))",
      },
    ],
  },
];
