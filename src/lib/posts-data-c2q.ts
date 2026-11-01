import type { Post } from "./posts";

export const postsC2q: Post[] = [
  {
    slug: "colossus-2-spacex-przychod-q4-scenariusz-wanga",
    kicker: "SpaceX",
    topic: "spacex",
    title: "Colossus 2 rośnie tak szybko, że SpaceX może podwoić przychód w jeden kwartał",
    excerpt:
      "Elon Musk podał, ile układów GB300 trafia do kolejnych hal Colossus 2 i kiedy ruszą Gun Range i Spam. Brian Wang z NextBigFuture wylicza z tego 30–32 mld USD przychodu SpaceX w Q4 2026, ponad dwa razy więcej niż 14,6 mld USD w Q3.",
    date: "1 listopada 2026",
    isoDate: "2026-11-01",
    img: "/img/okladka-colossus2-spacex-przychod-1600x900.png",
    credit: "Colossus 2 i scenariusz przychodów SpaceX. Opracowanie: Muskonomia.pl",
    body: [
      {
        type: "p",
        text: "Elon Musk napisał w sobotę, ile układów GB300 trafia do kolejnych hal Colossus 2 i kiedy mają ruszyć dwie następne. Brian Wang z NextBigFuture przełożył te informacje na scenariusz, w którym przychód SpaceX w Q4 2026 wynosi 30–32 mld USD (ok. 116,7–124,4 mld zł). To ponad dwa razy więcej niż w Q3, ale to wyłącznie jego prognoza.",
      },
      {
        type: "img",
        src: "/img/okladka-colossus2-spacex-przychod-1600x900.png",
        alt: "Colossus 2 przyspiesza: cztery hale GB300 i scenariusz 30–32 mld USD przychodu SpaceX w Q4",
        caption: "Colossus 2 i scenariusz przychodów SpaceX. Opracowanie: Muskonomia.pl",
      },
      { type: "h2", text: "Co napisał Musk" },
      {
        type: "p",
        text: "Według [wpisu Muska](https://x.com/elonmusk/status/2116587474021691629) hale Macroharder i Minihard mają po 220 tys. GB300 z kartami sieciowymi 800G, skonfigurowanych do treningu, a Gun Range dostanie to samo. Hala Spam, w której wcześniej mieścił się magazyn produktów firmy Hormel, ma mieć ok. 200 tys. GB300 skonfigurowanych pod inferencję, więc z dużo prostszą siecią i mniej niż połową światłowodów.",
      },
      {
        type: "p",
        text: "Musk dodał, że obszedł cały teren Colossus 2 około północy i ponownie rano. Pochwalił postępy zespołu SpaceX i wykonawców. Gun Range ma według niego ruszyć do końca listopada, a Spam w grudniu.",
      },
      {
        type: "p",
        text: "Musk odpowiadał na [wpis Herberta Onga](https://x.com/herbertong/status/2116554538593276269), który streścił nagranie z @CernBasher. Ong podał, że Macroharder zajmuje ok. 75 tys. m², a Minihard ok. 29 tys. m². Według @CernBashera Minihard mieści znacznie więcej mocy obliczeniowej mimo dużo mniejszej powierzchni.",
      },
      {
        type: "p",
        text: "Cztery hale z wpisu Muska to razem ok. 860 tys. GB300. Tę liczbę policzyliśmy sami, dodając jego dane.",
      },
      {
        type: "img",
        src: "/img/colossus2-hale-gb300-musk-1600x900.png",
        alt: "Tabela hal Colossus 2: Macroharder, Minihard, Gun Range i Spam",
        caption: "Hale Colossus 2 według Muska. Opracowanie: Muskonomia.pl",
      },
      { type: "h2", text: "Twarde dane z Q3" },
      {
        type: "p",
        text: "Punktem wyjścia są wyniki z [komunikatu SpaceX za trzeci kwartał](https://www.sec.gov/Archives/edgar/data/1181412/000162828026066482/spaceexplorationtechnologi.htm) i [raportu kwartalnego 10-Q złożonego w SEC](https://www.sec.gov/Archives/edgar/data/1181412/000162828026066880/spcx-20260930.htm). Przychód wyniósł 14,575 mld USD (ok. 56,7 mld zł), o 161% więcej niż rok wcześniej, gdy było to 5,576 mld USD (ok. 21,7 mld zł). W Q2 SpaceX miał 7,814 mld USD (ok. 30,4 mld zł), więc kwartał do kwartału przychód urósł ok. 1,87 raza.",
      },
      {
        type: "p",
        text: "Najwięcej przyniósł segment SI (Super Intelligence) z przychodem 7,56 mld USD (ok. 29,4 mld zł). Connectivity, czyli głównie Starlink, dał 5,248 mld USD (ok. 20,4 mld zł), a segment Space ze startami 1,767 mld USD (ok. 6,9 mld zł). SpaceX zarobił na czysto 4,4 mld USD (ok. 17,1 mld zł), a Adjusted EBITDA wyniosła 8,8 mld USD (ok. 34,2 mld zł). Capex segmentu SI sięgnął w samym Q3 16,4 mld USD (ok. 64 mld zł).",
      },
      {
        type: "p",
        text: "Według SpaceX wzrost SI napędzały nowe umowy na usługi chmurowe, przejęcie Cursora oraz rosnące wykorzystanie modeli i aplikacji, w tym Grok Bota. Za trzy kwartały 2026 r. przychód wyniósł 27,083 mld USD (ok. 105,3 mld zł).",
      },
      { type: "h2", text: "Scenariusz Briana Wanga dla mocy" },
      {
        type: "p",
        text: "Wang [zakłada](https://x.com/nextbigfuture/status/2116632152364421540), że na koniec Q3 Colossus 1 i Colossus 2 miały razem ok. 1,70 GW mocy nominalnej. Każde 220 tys. GB300 dodaje według niego ok. 0,44 GW. W jego rachunku Macroharder na początku października, Minihard w październiku i Gun Range pod koniec listopada dokładają po 0,44 GW, a Spam w grudniu 0,38 GW. Razem daje to ok. 3,40 GW na 31 grudnia 2026 r.",
      },
      {
        type: "p",
        text: "Arytmetyka się zgadza, a terminy Gun Range i Spam pokrywają się z tym, co napisał Musk. Przeliczenie układów na gigawaty to jednak model Wanga, a nie dane SpaceX. Sam autor zaznacza, że wcześniejsze wytyczne firmy mówiły o 2,5–3,0 GW.",
      },
      {
        type: "img",
        src: "/img/spacex-moc-gw-koniec-2026-wang-1600x900.png",
        alt: "Wykres mocy SpaceX do ok. 3,4 GW na koniec 2026 roku",
        caption: "Moc na koniec 2026 r. w scenariuszu Wanga. Opracowanie: Muskonomia.pl",
      },
      { type: "h2", text: "Scenariusz Wanga dla przychodu w Q4" },
      {
        type: "p",
        text: "Wang pisze, że w październiku ruszyły dwa Minihardy, a pozostałe budowy przesunęły się o miesiąc do przodu. Przyspieszenie trzech budów o miesiąc oznacza w jego scenariuszu dodatkowe 3 mld USD (ok. 11,7 mld zł) przychodu z centrów danych w październiku, 5 mld USD (ok. 19,4 mld zł) w listopadzie i 7 mld USD (ok. 27,2 mld zł) w grudniu, razem 15 mld USD (ok. 58,3 mld zł) w Q4. Do tego dolicza 1–2 mld USD (ok. 3,9–7,8 mld zł) z Groka, Grok Bota i Cursora oraz 1,5 mld USD (ok. 5,8 mld zł) ze Starlinka i startów.",
      },
      {
        type: "p",
        text: "Wynik Wanga to 30–32 mld USD w Q4, czyli 2,05–2,19 raza więcej niż w Q3. Na Q1 2027 prognozuje ponad 45 mld USD (ok. 175 mld zł), a dodatkowe centra danych uruchomione w tym kwartale mają ten wynik jeszcze podnieść. Za cały 2026 r. podaje 56–58 mld USD (ok. 217,8–225,6 mld zł).",
      },
      {
        type: "p",
        text: "Rachunek ma dwie drobne nieścisłości. Suma składników (14,6 + 15 + 1–2 + 1,5) daje 32,1–33,1 mld USD, a Wang tłumaczy niższy wynik przesunięciami w czasie. Z kolei 27,083 mld USD za trzy kwartały plus 30–32 mld USD w Q4 to 57–59 mld USD za cały rok, a nie 56–58 mld USD. Różnice są niewielkie, ale to wciąż prognoza autora, a nie zapowiedź SpaceX.",
      },
      {
        type: "p",
        text: "Wang twierdzi też, że w Q4 i Q1 SpaceX będzie miał większe przychody niż Anthropic. To jego teza, której nie da się sprawdzić w oficjalnych danych.",
      },
      {
        type: "img",
        src: "/img/spacex-przychod-q4-scenariusz-wanga-1600x900.png",
        alt: "Scenariusz przychodu SpaceX: 30–32 mld USD w Q4 2026",
        caption: "Scenariusz przychodu na Q4 według Wanga. Opracowanie: Muskonomia.pl",
      },
      { type: "h2", text: "Projekcja na 2027 r." },
      {
        type: "p",
        text: "Wang przygotował też wariant bazowy rozbudowy na 2027 r. Po czterech halach GB300 w Q4 2026 miałyby powstawać hale z układami Rubin, po jednej miesięcznie w Q1, po dwie w Q2 i Q3 i po trzy w Q4 2027. Daje to 24 hale Rubin, a razem z halami GB300 28 hal. Według modelu NBF oznaczałoby to ok. 19,64 GW (19,2 GW plus 0,44 GW z Macroharder) i przychód w tempie (run-rate) ok. 1366 mld USD (ok. 5,3 bln zł) rocznie, bez dodatkowego przychodu z Macroharder.",
      },
      {
        type: "p",
        text: "To czysta projekcja autora, a sam Wang zaznacza na grafice, że nie jest to prognoza firmy.",
      },
      {
        type: "img",
        src: "/img/spacex-minihard-rubin-2027-wang-1600x900.png",
        alt: "Projekcja rozbudowy Minihardów SpaceX o hale Rubin w 2027 roku",
        caption: "Projekcja hal Rubin na 2027 r. według Wanga. Opracowanie: Muskonomia.pl",
      },
      { type: "h2", text: "Jak duże jest 1,2 mln GPU? Przeliczenie @tslaming" },
      {
        type: "p",
        text: "Później Musk [dopisał w odpowiedzi na wpis @XFreeze](https://x.com/elonmusk/status/2116596535433871630), że do końca roku w Colossus 2 będzie łącznie ok. 1,2 mln układów Blackwell. To liczba dla całego Colossus 2, a nie tylko dla czterech hal z pierwszego wpisu, więc zapewne obejmuje też działającą wcześniej halę Macrohard z układami GB200. Musk nie podał, jak 1,2 mln rozkłada się na poszczególne hale.",
      },
      {
        type: "p",
        text: "Konto @tslaming (Ming) [przełożyło tę liczbę na skalę, którą łatwiej sobie wyobrazić](https://x.com/tslaming/status/2116741200812405002). „Za około dwa miesiące kilka budynków w Memphis pomieści ok. 1,2 mln GPU Nvidia Blackwell”, napisał. Ming liczy, że układy są montowane w szafach po 72 sztuki, a każda szafa waży ok. 1,4 tony. Przyjmuje też, że po doliczeniu chłodzenia i sieci jeden GPU pobiera ok. 2 kW. Moc obliczeniową przy 8-bitowej precyzji używanej w treningu AI szacuje na ok. 6 tryliardów operacji na sekundę i porównuje ją z ludzkością, w której każdy człowiek wykonywałby jedno obliczenie na sekundę bez przerwy.",
      },
      {
        type: "p",
        text: "Liczbę 1,2 mln potwierdza wpis Muska, a szafy po 72 GPU to standardowa konfiguracja NVL72. Rachunki Minga są spójne, ale tonaż, zapotrzebowanie na prąd i porównanie z ludzkością to jego szacunki. Na koniec przypomina, że celem xAI na 2030 r. jest moc obliczeniowa odpowiadająca 50 mln układów H100, czyli ponad piętnaście razy więcej niż opisany klaster.",
      },
      {
        type: "img",
        src: "/img/colossus2-1-2-mln-gpu-skala-tslaming-1600x900.png",
        alt: "Skala 1,2 mln GPU Blackwell w Colossus 2: szafy, masa, moc i czas obliczeń",
        caption: "Skala Colossus 2 według @tslaming. Opracowanie: Muskonomia.pl",
      },
      { type: "h2", text: "Co z tego wynika" },
      {
        type: "p",
        text: "Sprawdzić da się dwie rzeczy. SpaceX już w Q3 niemal podwoił przychód kwartał do kwartału, głównie dzięki segmentowi SI. Musk podał też liczbę układów w czterech halach i terminy uruchomienia dwóch ostatnich. Gigawaty, miesięczne przyrosty przychodu i hale Rubin pochodzą już z arkusza Briana Wanga. Ile z niego się sprawdzi, pokaże raport SpaceX za Q4.",
      },
    ],
  },
];
