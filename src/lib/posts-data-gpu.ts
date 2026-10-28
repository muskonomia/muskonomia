import type { Post } from "./posts";

export const postsGpu: Post[] = [
  {
    slug: "musk-uwieziona-moc-obliczeniowa-niedokonczone-centra-danych",
    kicker: "SpaceX",
    topic: "xai",
    title: "Musk ostrzega przed uwięzioną mocą obliczeniową w niedokończonych centrach danych",
    excerpt:
      "Kupione na kredyt serwery AI coraz częściej trafiają do magazynów przez brak prądu i pięcioletnie kolejki po transformatory. Elon Musk ocenia, że w niedokończonych centrach danych utknie duża ilość mocy obliczeniowej, a mniejszych operatorów czeka fala upadłości.",
    date: "25 października 2026",
    isoDate: "2026-10-25",
    img: "/img/nvidia-hgx-b200-okladka.jpg",
    credit:
      "Moduł serwerowy Nvidia HGX B200. Fot. [Pokiiri](https://commons.wikimedia.org/wiki/File:Nvidia_DGX-B200-HGX.jpg), CC BY-SA 4.0",
    xPostId: "2114271229171335569",
    body: [
      {
        type: "p",
        text: "Kupione na kredyt procesory graficzne Nvidii coraz częściej trafiają do magazynów i niewykończonych hal, bo inwestorom brakuje prądu, transformatorów i chłodzenia. W niedzielę 25 października Elon Musk ocenił na X, że ten zastój doprowadzi do fali upadłości wśród mniejszych operatorów.",
      },
      { type: "x", id: "2114168277882581486", handle: "elonmusk" },
      {
        type: "p",
        text: "Dyskusję wywołał dzień wcześniej [wpis Yuchena Jina](https://x.com/Yuchenj_UW/status/2114043133734637735), inżyniera systemów AI w Databricks i byłego dyrektora technicznego przejętego przez Nvidię startupu OctoAI. Przytoczył on słowa znajomego z młodego laboratorium AI, według którego nawet jeśli firmie nie uda się wytrenować najlepszego modelu, wcześnie zarezerwowana moc procesorów H100, B200 i B300 podrożała na rynku najmu dwu- lub trzykrotnie, więc laboratorium może odsprzedać przydział i zarabiać na pośrednictwie. Musk [odpisał pod tym wpisem](https://x.com/elonmusk/status/2114168277882581486), że spora część zamówionych układów utknie w częściowo zbudowanych halach. Gdy z kolei inwestor piszący jako @zephyr_z9 [ocenił](https://x.com/zephyr_z9/status/2114106143341678710), że w przyszłym roku branżę czeka konsolidacja, której większość takich podmiotów nie przetrwa, szef SpaceX i Tesli [odpisał krótko](https://x.com/elonmusk/status/2114168569064047029), że dojdzie do masowego wymierania drobnych graczy.",
      },
      { type: "x", id: "2114167331056140414", handle: "elonmusk" },
      {
        type: "p",
        text: "Kilka minut wcześniej Musk [podał dalej](https://x.com/elonmusk/status/2114167331056140414) wyliczenie inżyniera występującego pod nickiem [@Object_Zero_](https://x.com/Object_Zero_/status/2114100925077885381), który w dyskusji z [Chamathem Palihapitiyą](https://x.com/chamath/status/2114093525059174868) wskazał dwanaście barier blokujących dziś zasilanie serwerowni, od dostępu do gruntów, pozwoleń środowiskowych i przyłączy sieciowych, przez brak transformatorów, rozdzielnic oraz maszyn do produkcji części turbin, po priorytet prądu dla gospodarstw domowych i opór lokalnych władz. Musk zaznaczył, że jeśli przy budowie superkomputera zabraknie choćby jednego, pozornie błahego elementu z tej listy, cała moc obliczeniowa nie ruszy.",
      },
      {
        type: "img",
        src: "/img/wykres-a16z-ceny-wynajmu-gpu-2026.jpg",
        alt: "Indeks stawek wynajmu procesorów Nvidii w 2026 r.",
        caption:
          "Indeks stawek wynajmu procesorów Nvidii w 2026 r. (styczeń = 100). Źródło: Ornn Data / [Andreessen Horowitz](https://x.com/a16z/status/2113741008550990191)",
      },
      {
        type: "p",
        text: "Ostrzeżenie Muska nie oznacza spadku zapotrzebowania na sztuczną inteligencję. Działające klastry drożeją właśnie dlatego, że tak trudno podłączyć nowe hale do prądu. Według opublikowanego 23 października [zestawienia funduszu Andreessen Horowitz](https://www.a16z.news/p/charts-of-the-week-attention-is-all) ([@a16z](https://x.com/a16z/status/2113741008550990191)), opartego na danych Ornn Data, po wiosennym skoku zużycia tokenów stawki wynajmu wszystkich generacji kart Nvidii są wyższe niż na początku roku i wyraźnie wyprzedzają sześcioletnią ścieżkę amortyzacji księgowej. Komentując [drugi wykres a16z](https://x.com/a16z/status/2113986385908842870), Musk [napisał](https://x.com/elonmusk/status/2114205004340854795), że popyt na moc obliczeniową należy mierzyć jednym pytaniem: jak wielu niezwykle bystrych i oddanych pracowników chce się zatrudnić, skoro z każdym miesiącem stają się coraz lepsi. Rosnące ceny wynajmu w mniejszych chmurach, także w przypadku starszych układów H100 wprowadzonych do sprzedaży w 2022 r., potwierdzają dane Silicon Data przytoczone przez fundusz [Social Capital](https://x.com/socialcapital/status/2114070426137894967).",
      },
      {
        type: "img",
        src: "/img/wykres-social-capital-h100-h200.png",
        alt: "Stawki wynajmu układów Nvidia H100 i H200",
        caption:
          "Stawki wynajmu układów Nvidia H100 i H200. Źródło: Silicon Data / [Social Capital](https://x.com/socialcapital/status/2114070426137894967)",
      },
      {
        type: "p",
        text: "W tym samym raporcie analitycy a16z zwrócili uwagę, skąd bierze się zator na placach budowy. O ile producenci półprzewodników i sprzętu telekomunikacyjnego rozbudowali w USA fabryki, o tyle amerykańskie zakłady wytwarzające sprzęt elektroenergetyczny, przede wszystkim transformatory i rozdzielnice, nie zwiększyły mocy wytwórczych, przez co krajowa produkcja lekko spadła mimo gwałtownego wzrostu cen. Według analizy firmy Sightline Climate, omawianej w podcaście „All-In” i [opisanej przez serwis Tech Fund](https://www.techinvestments.io/p/power-bottlenecks-and-the-ai-data), ze 140 projektów centrów danych zapowiedzianych w USA na 2026 r. w fizycznej budowie znajduje się tylko 5 GW mocy, natomiast 11 GW tkwi na etapie deklaracji, a czas oczekiwania na transformatory wysokiego napięcia wydłużył się z ok. dwóch lat przed 2020 r. do pięciu lat.",
      },
      {
        type: "p",
        text: "Skutki widać już u największych graczy. Jak 19 października ujawnił „Business Insider”, na który powołuje się [Yahoo Finance](https://finance.yahoo.com/energy/articles/ai-hyperscalers-energy-problem-160259036.html), wewnętrzne dokumenty Amazon Web Services z sierpnia pokazują, że firma wdrożyła procedurę wcześniejszego odbierania i magazynowania szaf serwerowych Nvidia GB300 NVL72. AWS przyjął w sierpniu szafy o wartości ok. 5 mld dolarów (ok. 19,4 mld zł), a w kolejnych miesiącach odbiera sprzęt za następne 3 mld dolarów (ok. 11,7 mld zł) miesięcznie, ale trzyma go w magazynach przejściowych, bo w halach brakuje mocy elektrycznej, żeby go uruchomić. W tym samym tygodniu [„Wall Street Journal” podał](https://www.wsj.com/tech/microsoft-pulls-out-of-nscale-u-k-data-center-deal-over-power-supply-issues-f804c434), że Microsoft wycofał się z najmu centrum danych Nscale na 50 MW i ok. 23 tys. układów GB300 w Loughton pod Londynem, ponieważ lokalny operator sieci przesyłowej przesunął termin przyłączenia na lata 30., o czym [pisaliśmy na Muskonomii](https://muskonomia.pl/blog/spacex-pol-gigawata-miesiecznie-uk-siec).",
      },
      {
        type: "img",
        src: "/img/szafa-serwerowa-nvidia-gb200.jpg",
        alt: "Szafa serwerowa Nvidia GB200",
        caption:
          "Szafa serwerowa Nvidia GB200. Fot. [Pokiiri](https://commons.wikimedia.org/wiki/File:Nvidia_DGX_GB200.jpg), CC BY-SA 4.0",
      },
      {
        type: "p",
        text: "Dla mniejszych operatorów chmurowych i laboratoriów kupujących karty na kredyt taki przestój oznacza pułapkę finansową. Jak wskazuje platforma finansowania infrastruktury [@Compute_Labs](https://x.com/Compute_Labs/status/2114257437683552495), dostawcy serwerów wymagają płatności przy dostawie, natomiast klienci płacą za wynajem dopiero wtedy, gdy klaster przejdzie testy i zostanie oddany do użytku. Jeśli procesory przyjadą kilka miesięcy przed transformatorem, pozwoleniem albo instalacją chłodzenia cieczą, zadłużona firma musi obsługiwać dług za sprzęt, który jeszcze nie zarabia, a jednocześnie starzeje się wraz z kolejnymi premierami Nvidii.",
      },
      {
        type: "img",
        src: "/img/colossus-2-macrohard-chlodnie-spacex.jpg",
        alt: "Chłodnie wentylatorowe przy hali Macrohard w kampusie Colossus II",
        caption:
          "Chłodnie wentylatorowe przy hali Macrohard w kampusie Colossus II. Fot. [SpaceX](https://www.spacex.com/Mid-South)",
      },
      {
        type: "p",
        text: "Na tym tle widać, dlaczego podczas [konferencji wynikowej SpaceX za III kwartał](https://muskonomia.pl/blog/spacex-q3-2026-wnioski-z-konferencji) Musk podkreślał, że firma traktuje energetykę i chłodzenie jako część własnej produkcji, odlewając elementy turbin z wykorzystaniem technologii z silników rakietowych i uruchamiając zasilanie o 12–18 miesięcy szybciej niż rynek. Musk podał też dalej [wpis inwestora @Timboo](https://x.com/Timboo/status/2114177757227712690) z szacunkami Davida Sacksa z podcastu „All-In”: dzięki finansowaniu budowy z własnego bilansu i krótkim kontraktom odnawianym po bieżących stawkach rynkowych SpaceX uzyskuje ok. 50 mld dolarów (ok. 194 mld zł) rocznego przychodu z każdego gigawata mocy przy okresie zwrotu rzędu roku, podczas gdy zadłużone CoreWeave, związane długoterminowymi umowami zawartymi po niższych cenach, generuje ok. 20 mld dolarów (ok. 78 mld zł) z gigawata przy zwrocie szacowanym na 2,5 roku.",
      },
    ],
  },
];
