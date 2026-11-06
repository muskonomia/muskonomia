import type { Post } from "./posts";

export const postsCtgt: Post[] = [
  {
    slug: "tesla-wygasi-cybertrucka-w-teksasie-pod-cybercaba",
    kicker: "Cybertruck",
    topic: "tesla",
    title: "Tesla wygasi Cybertrucka w Giga Texas, by zrobić miejsce na Cybercaba",
    excerpt:
      "Elon Musk ogłosił wygaszenie produkcji Cybertrucka w Giga Texas około połowy 2027 r. pod większą produkcję Cybercaba. Wes Morrill mówi, że ciężarówka żyje dalej przez robotaxi, a Tesla utrzyma części i serwis.",
    date: "6 listopada 2026",
    isoDate: "2026-11-06",
    img: "/img/cybertruck-giga-texas-okladka-1600x900.jpg",
    credit: "Cybertruck. Fot. Tesla",
    body: [
      {
        type: "p",
        text: "Elon Musk [napisał](https://x.com/elonmusk/status/2118591788701421573) w piątek, że Tesla będzie wygaszać produkcję Cybertrucka w Gigafactory Texas około połowy przyszłego roku. Powodem ma być zwiększenie produkcji Cybercaba, dwuosobowego robotaxi bez kierownicy i pedałów.",
      },
      {
        type: "img",
        src: "/img/cybertruck-giga-texas-okladka-1600x900.jpg",
        alt: "Biały Cybertruck ciągnie przyczepę z silnikiem rakietowym",
        caption: "Cybertruck. Fot. Tesla",
      },
      { type: "x", id: "2118591788701421573", handle: "elonmusk" },
      {
        type: "p",
        text: "Główny inżynier Cybertrucka Wes Morrill [zacytował](https://x.com/wmorrill3/status/2118598887258644883) wpis Muska i dodał, że ciężarówka „była niesamowitą platformą rozwoju technologii i żyje dalej przez Cybercaba”. Podziękował zespołowi oraz właścicielom, których przygody nadal będzie śledził. Na pytanie o wsparcie serwisowe [odpowiedział](https://x.com/wmorrill3/status/2118608440318636202): „Tak, oczywiście! Tesla utrzyma zapas części, a serwis będzie nadal wspierać”.",
      },
      {
        type: "p",
        text: "Później Musk zgodził się z użytkownikiem, który nazwał decyzję końcem ery i Cybertrucka najlepszym pojazdem, jaki Tesla kiedykolwiek zrobiła. „Prawda, ale flota Cybertrucków będzie jeździć jeszcze długo”, [odpisał](https://x.com/elonmusk/status/2118628806277951825).",
      },
      { type: "h2", text: "Co pokazują oficjalne liczby" },
      {
        type: "p",
        text: "W [aktualizacji za trzeci kwartał 2026 r.](https://www.sec.gov/Archives/edgar/data/1318605/000162828026066738/exhibit9914.htm) Tesla podała zainstalowaną roczną pojemność powyżej 125 tys. sztuk zarówno dla Cybertrucka, jak i dla Cybercaba w Giga Texas. W tym samym kwartale kategoria „inne modele”, czyli pojazdy poza Modelami 3 i Y, dała 7004 sztuki produkcji i 8295 dostaw.",
      },
      {
        type: "p",
        text: "Szacunki mediów pokazują znacznie mniejszą skalę niż dawne plany. Według [Cox Automotive i Kelley Blue Book](https://www.coxautoinc.com/wp-content/uploads/2026/01/Q4-2025-Kelley-Blue-Book-EV-Sales-Report.pdf) w USA w 2025 r. sprzedano 20 237 Cybertrucków, o 48,1% mniej niż 38 965 rok wcześniej. [Finbold](https://finbold.com/tesla-cybertruck-sales-top-70700-since-2024/), na bazie tych szacunków, liczy ok. 70,8 tys. sztuk sprzedanych w USA od 2024 r. do końca trzeciego kwartału 2026 r. Wcześniej Musk mówił o docelowych ok. 250 tys. sztuk rocznie ([TechCrunch](https://techcrunch.com/2023/10/18/elon-musk-warns-cybertruck-wont-be-profitable-until-2025/), za konferencją wynikową Tesli z października 2023 r.).",
      },
      { type: "h2", text: "Cybercab już jeździ" },
      {
        type: "p",
        text: "Cybercab z kolei jest już na ulicach. Tesla zaczęła dawać płatne przejazdy tym robotaxi w Austin 3 września. Do końca trzeciego kwartału usługa Robotaxi miała ok. 3,2 mln km przejechanych bez nadzoru, a skumulowany przebieg w tym trybie urósł ośmiokrotnie kwartał do kwartału. W tej samej aktualizacji firma podała, że produkcja Cybercaba ruszyła na linii w Teksasie. Postępy floty śledzimy w [FSD Trackerze](https://muskonomia.pl/fsd-tracker).",
      },
      {
        type: "p",
        text: "Można się domyślać, że Tesla woli teraz powierzchnię i ludzi w Austin przeznaczyć na pojazd, który ma być trzonem własnej floty Robotaxi, a nie na ciężarówkę sprzedawaną klientom w tempie kilkunastu tysięcy sztuk rocznie.",
      },
    ],
  },
];
