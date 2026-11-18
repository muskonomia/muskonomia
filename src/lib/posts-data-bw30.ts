import type { Post } from "./posts";

export const postsBw30: Post[] = [
  {
    slug: "spacex-kolejne-30-mln-usd-woda-brownsville",
    kicker: "SpaceX",
    topic: "spacex",
    title: "SpaceX przekazał Brownsville kolejne 30 mln dolarów na wodę",
    excerpt:
      "SpaceX przekazał BPUB kolejne 30 mln USD na wodociągi, łącznie 70 z 220 mln. Osobno relacje o dwóch pozwoleniach na prąd: 31,14 MW przy zakładzie i ok. 748 MW dla centrum danych AI oraz aneks NSSL o łącznym pułapie 985 mln USD dla trzech firm.",
    date: "18 listopada 2026",
    isoDate: "2026-11-18",
    img: "/img/teksas-okladka-1600x900.jpg",
    credit: "Źródło: SpaceX, spacex.com/updates",
    body: [
      {
        type: "p",
        text: "Łącznie firma oddała już 70 mln z zadeklarowanych 220 mln USD, czyli około 280 mln zł z około 880 mln zł według średniego kursu NBP z 17 listopada (1 USD = 4,0022 zł). Środki mają dać miastu i hrabstwu Cameron około 75 700 m³ wody pitnej na dobę niezależnie od Rio Grande.",
      },
      { type: "h2", text: "Woda niezależnie od Rio Grande" },
      {
        type: "p",
        text: "[SpaceX](https://x.com/SpaceX/status/2122718036138287610) napisał 17 listopada 2026, że kolejne 30 mln USD, czyli około 120 mln zł, trafiło do Brownsville Public Utilities Board. Firma podkreśla, że to część zobowiązania na 220 mln USD na infrastrukturę wodną i kanalizacyjną Brownsville oraz hrabstwa Cameron. Według oficjalnego opisu na [spacex.com/updates](https://www.spacex.com/updates/building-the-future) chodzi o około 75 700 m³ na dobę. Z tego około 30 300 m³ na dobę ma pochodzić z ponownego wykorzystania już oczyszczanej wody, a około 45 400 m³ na dobę z rozbudowy uzdatniania wód słonawych.",
      },
      { type: "x", id: "2122718036138287610", handle: "SpaceX" },
      {
        type: "p",
        text: "Jak ogłosiło miasto Brownsville, o czym informuje [BTX Today](https://btxtoday.com/brownsville-secures-additional-spacex-water-infrastructure-deposit-2026/), kolejne 30 mln USD wpłynęło 13 listopada na konto escrow Project Quantum. To pierwsza rata kwartalna po wcześniejszych 40 mln. O zobowiązaniu 220 mln USD i kampusie superkomputera [pisaliśmy wcześniej](https://muskonomia.pl/blog/spacex-74-mld-usd-superkomputery-starbase-arizona).",
      },
      {
        type: "p",
        text: "SpaceX podaje, że bez tej wpłaty domknięcie luki tradycyjnym finansowaniem mogłoby kosztować lokalnych odbiorców ponad 370 mln USD, czyli około 1,48 mld zł, przez 25 lat, łącznie z odsetkami.",
      },
      {
        type: "img",
        src: "/img/teksas-woda-70-z-220-mln-1600x900.jpg",
        alt: "Wpłaty i zdolności wodne według SpaceX. Opracowanie: muskonomia.pl",
        caption: "Wpłaty i zdolności wodne według SpaceX. Opracowanie: muskonomia.pl",
      },
      { type: "h2", text: "Własność zostaje przy mieście" },
      {
        type: "p",
        text: "Infrastruktura zostaje własnością miasta i BPUB. SpaceX nie kupuje praw do wody, nie przedpłaca taryf i nie dostaje preferencyjnego dostępu do systemu.",
      },
      {
        type: "p",
        text: "W ramach wcześniejszego porozumienia Brownsville wyłączyło z granic miasta około 180 ha przy porcie i wysypisku i przekazało je miastu Starbase. O tym też [pisaliśmy](https://muskonomia.pl/blog/spacex-74-mld-usd-superkomputery-starbase-arizona). Kampus superkomputera przy Starbase ma, według strony SpaceX, sam wytwarzać prąd i nie pobierać go z publicznej sieci.",
      },
      { type: "h2", text: "Dwa osobne pozwolenia na prąd" },
      { type: "p", text: "To dwa różne wnioski i dwa różne rzędy wielkości." },
      { type: "p", text: "**31,14 MW przy zakładzie produkcyjnym, według @cb_doge**" },
      {
        type: "p",
        text: "16 listopada 2026 [@cb_doge](https://x.com/cb_doge/status/2122687898155954285) napisał, że TCEQ zatwierdził pozwolenie powietrzne na własną elektrownię SpaceX przy zakładzie produkcyjnym w Starbase. Według wpisu chodzi o trzy turbiny gazowe o łącznej mocy 31,14 MW. Cały prąd ma zostać na miejscu. Układy mają ograniczać tlenki azotu (NOx) i tlenek węgla (CO). To nie jest elektrownia kampusu superkomputera.",
      },
      {
        type: "img",
        src: "/img/teksas-elektrownia-31mw-1600x900.jpg",
        alt: "Dane według @cb_doge. Opracowanie: muskonomia.pl",
        caption: "Dane według @cb_doge. Opracowanie: muskonomia.pl",
      },
      { type: "p", text: "**Około 748 MW dla centrum danych AI, według Vantix Research**" },
      {
        type: "p",
        text: "Osobno [Vantix Research](https://x.com/VantixResearch/status/2122827636216897806) napisał 17 listopada 2026, że TCEQ wydał pozwolenie powietrzne dla centrum danych AI SpaceX w Starbase, według Vantix na inwestycję 24 mld USD, czyli około 96 mld zł, na działce około 180 ha. Według Vantix Research chodzi o 35 turbin gazowych o łącznej mocy około 748 MW.",
      },
      {
        type: "p",
        text: "Według tego samego wpisu zestaw tymczasowy to 18 turbin Solar SMT-130 (Solar Turbines, spółka Caterpillar; ten sam model pracuje w Colossus xAI w Memphis), 9 turbin Mitsubishi FT8 i 8 turbin GE Vernova TM2500, mobilnych, na naczepach. Wszystkie mają być używane lub odnowione, żadna niekupiona bezpośrednio od producenta, bo nowe turbiny są wyprzedane na lata. Później ma je zastąpić osiem dużych turbin GE 7E o łącznej mocy około 708 MW, też używanych.",
      },
      {
        type: "p",
        text: "Limit emisji NOx wynosi według Vantix Research 248,86 t rocznie, czyli 1,14 t poniżej federalnego progu 250 t rocznie, od którego zaczyna się pełna procedura dla dużego źródła emisji. Według lokalnego medium cytowanego przez Vantix pełna moc dawałaby około 458 t rocznie, więc przy tym limicie elektrownia może średnio pracować na mniej więcej połowie mocy. Szczegóły wniosku TCEQ z września opisało wcześniej [The 956 Report](https://www.the956report.com/post/35-gas-turbines-one-data-processing-code-inside-spacex-s-filing-for-a-power-plant-at-the-port-of-b).",
      },
      {
        type: "p",
        text: "TCEQ wydaje pozwolenia powietrzne. Sieć ERCOT od sierpnia nie zatwierdziła przyłączenia żadnego nowego dużego odbiorcy, stąd własne źródła prądu.",
      },
      {
        type: "p",
        text: "O budowie superkomputera i wcześniejszych liczbach, 12 turbin i około 400 MW, pisaliśmy w tekście [o superkomputerze i turbinach Vera Rubin](https://muskonomia.pl/blog/spacex-starbase-supercomputer-budowa-400-mw-turbin-vera-rubin). Doniesienie o około 748 MW dotyczy osobnego, nowszego pozwolenia.",
      },
      {
        type: "table",
        headers: ["Model", "Producent", "Liczba (tymczasowa konfiguracja, według Vantix Research)"],
        rows: [
          ["Solar SMT-130", "Solar Turbines (Caterpillar)", "18"],
          ["Mitsubishi FT8", "Mitsubishi", "9"],
          ["GE Vernova TM2500", "GE Vernova", "8"],
          ["**Razem**", "", "**35 (ok. 748 MW)**"],
        ],
      },
      { type: "h2", text: "Aneks kontraktów NSSL" },
      {
        type: "p",
        text: "16 listopada 2026 Departament Wojny USA opublikował komunikat „Contracts for Nov. 16, 2026”. SpaceX (aneks P00006 do FA8811-25-D-B002), United Launch Services (P00004 do FA8811-25-D-B003) i Blue Origin (P00006 do FA8811-25-D-B005) dostały aneksy o łącznym maksymalnym pułapie 985 mln USD, czyli około 3,94 mld zł. Dotyczą usług startowych National Security Space Launch, Phase Three, Lane Two.",
      },
      {
        type: "p",
        text: "Prace mają się odbywać w zakładach firm oraz na Cape Canaveral SFS, Kennedy Space Center i Vandenberg SFB. Zakończenie do kwietnia 2033 roku. W chwili przyznania nie zobowiązano żadnych środków. Zamawiający to Space Systems Command, Space Access, Los Angeles AFB. Pułap dotyczy trzech firm razem.",
      },
      {
        type: "p",
        text: "To nie jest nowy kontrakt i nie jest to wypłata 985 mln USD dla SpaceX. To podniesienie łącznego pułapu istniejących umów z 4 kwietnia 2025 roku. Pierwotny kontrakt SpaceX (FA8811-25-D-B002) miał wartość 5 923 580 297 USD, czyli około 23,7 mld zł. Space Systems Command podawał wtedy, że SpaceX jako Requirement 1 ma dostać 28 misji, około 60 proc. misji Lane 2 w latach budżetowych 2025-2029. Oficjalny komunikat z 16 listopada jest pod [tym adresem](https://www.defense.gov/News/Contracts/Contract/Article/4649088/contracts-for-nov-16-2026/). Treść ogłoszenia potwierdza też [AwardTape](https://awardtape.com/contracts/2026-11-16/). Pierwotne przyznanie z kwietnia 2025 roku jest [tutaj](https://www.defense.gov/News/Contracts/Contract/Article/4146543/), a komunikat Space Systems Command z tego dnia [tutaj](https://www.ssc.spaceforce.mil/Newsroom/Article-Display/Article/4146459/space-systems-command-awards-national-security-space-launch-phase-3-lane-2-cont).",
      },
      {
        type: "img",
        src: "/img/teksas-kontrakt-nssl-1600x900.jpg",
        alt: "Aneks NSSL według komunikatu Departamentu Wojny USA. Opracowanie: muskonomia.pl",
        caption: "Aneks NSSL według komunikatu Departamentu Wojny USA. Opracowanie: muskonomia.pl",
      },
      {
        type: "table",
        headers: ["Pozycja", "Wartość"],
        rows: [
          ["Kolejne przekazane środki (woda)", "30 mln USD (ok. 120 mln zł)"],
          ["Łącznie oddane do tej pory", "70 mln USD (ok. 280 mln zł)"],
          ["Zadeklarowane zobowiązanie", "220 mln USD (ok. 880 mln zł)"],
          ["Docelowa pojemność niezależna od Rio Grande", "ok. 75 700 m³/d"],
          [
            "Aneks NSSL Phase 3 Lane 2",
            "łączny maksymalny pułap 985 mln USD (ok. 3,94 mld zł) dla trzech firm; żadnych środków nie zobowiązano",
          ],
          ["Elektrownia przy zakładzie produkcyjnym (relacja @cb_doge)", "31,14 MW, trzy turbiny gazowe"],
          [
            "Elektrownia centrum danych AI (według Vantix Research)",
            "ok. 748 MW (35 turbin tymczasowych), później ok. 708 MW (8 turbin GE 7E); NOx 248,86 t/rok",
          ],
        ],
      },
    ],
  },
];
