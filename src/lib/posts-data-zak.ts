import type { Post } from "./posts";

export const postsZak: Post[] = [
  {
    slug: "tesla-to-nie-tylko-samochody",
    kicker: "Zakłady",
    topic: "tesla",
    title: "Tesla to nie tylko auta",
    excerpt:
      "Od fabryki we Fremoncie kupionej za 42 mln dolarów po wniosek o 10,1 mld na ogniwa słoneczne pod Houston. Tesla ma rafinerię litu, trzy fabryki Megapacków, klaster Cortex i buduje fabrykę Optimusa.",
    date: "29 września 2026",
    isoDate: "2026-09-29",
    xPostId: "2104859370869682622",
    img: "/img/tesla-zaklady-mapa.jpg",
    credit:
      "Gigafactory Texas pod Austin, budynek 1 (czerwiec 2022). Fot. Larry D. Moore, Wikimedia Commons, CC BY 4.0",
    body: [
      {
        type: "p",
        text: "Większość ludzi wciąż patrzy na Teslę jak na producenta samochodów elektrycznych. Postanowiłem sprawdzić, co ta firma naprawdę dziś produkuje i buduje. Wyszło mi siedemnaście zakładów: od rafinerii litu, przez fabryki magazynów energii, po fabrykę chipów stawianą razem ze SpaceX.",
      },
      {
        type: "p",
        text: "W 2010 r. Tesla kupiła fabrykę we Fremoncie za 42 mln dolarów (ok. 162 mln zł). Dziś w Teksasie stara się o ulgi dla fabryki ogniw słonecznych za 10,1 mld dolarów (ok. 38,9 mld zł), a razem ze SpaceX buduje fabrykę chipów, której pierwsza faza ma kosztować 16,8 mld dolarów. Punktem wyjścia była lista, którą przygotował inwestor [Cole Grinde](https://x.com/GrindeOptions/status/2104732040939933751). Część tych obiektów działa od lat, część dopiero powstaje, a część istnieje na razie wyłącznie we wnioskach o ulgi podatkowe.",
      },
      { type: "x", id: "2104732040939933751", handle: "GrindeOptions" },
      {
        type: "img",
        src: "/img/tesla-zaklady-fremont.jpg",
        alt: "Fabryka Tesli we Fremoncie, fasada z logo Tesli i samochody Model S przed halą",
        caption: "Fremont, Kalifornia (2012). Fot. Steve Jurvetson, Wikimedia Commons, CC BY 2.0",
        contain: true,
      },
      {
        type: "p",
        text: "Fremont Tesla odkupiła od zamkniętej spółki NUMMI, wspólnego przedsięwzięcia Toyoty i General Motors. Zakład ma ok. 511 tys. m², a [Reuters](https://www.reuters.com/article/business/environment/tesla-gears-up-42-million-fremont-factory-for-model-s-idUS3594289396/) opisywał tę transakcję, gdy firma dopiero przygotowywała produkcję Modelu S. Dziś z Fremontu wyjeżdżają Model 3 i Model Y. Produkcję Modeli S i X Tesla zakończyła 9 maja 2026 r., a ich linia [ma teraz służyć robotom Optimus](https://www.dallasexpress.com/business-markets/tesla-shuts-down-model-s-x-line-elon-musks-honorable-discharge-as-fremont-goes-to-robots/). Z fabryki w Szanghaju pierwsze samochody wyjechały w grudniu 2019 r., a fabryki pod Berlinem i w Austin ruszyły w 2022 r. Przy otwarciu Giga Texas Elon Musk mówił o ponad 10 mln stóp kwadratowych (ok. 930 tys. m²) i inwestycji przekraczającej 10 mld dolarów. Według [Austin American-Statesman](https://www.statesman.com/projects/2026/explore-tesla-gigafactory/) pracuje tam dziś 16 500 osób, które produkują Model Y, Cybertrucka, Cybercaba i baterie.",
      },
      {
        type: "img",
        src: "/img/tesla-zaklady-szanghaj.jpg",
        alt: "Giga Shanghai z lotu ptaka, hale fabryki Tesli w Szanghaju",
        caption: "Giga Shanghai, Szanghaj, Chiny (2024). Fot. China News Service, Wikimedia Commons, CC BY 3.0",
        contain: true,
      },
      {
        type: "img",
        src: "/img/tesla-zaklady-berlin.jpg",
        alt: "Budynek wejściowy Giga Berlin w Grünheide z logo Tesli",
        caption: "Giga Berlin, Grünheide, Niemcy (2024). Fot. Ot, Wikimedia Commons, CC BY 4.0",
        contain: true,
      },
      {
        type: "img",
        src: "/img/tesla-zaklady-teksas.jpg",
        alt: "Giga Texas w budowie, widok od południowego zachodu",
        caption: "Giga Texas, Austin, Teksas (2022). Fot. Larry D. Moore, Wikimedia Commons, CC BY 4.0",
      },
      {
        type: "p",
        text: "Obok samochodów rośnie energetyka. Fabryka Megapacków w Lathrop w Kalifornii działa od 2022 r., a szanghajska od lutego 2025 r. Trzecia, w Brookshire pod Houston, w sierpniu zaczęła produkować Megapack 3. [Tesla Megapack](https://x.com/Tesla_Megapack/status/2085163367506059461) podał wtedy, że od rozpoczęcia budowy minęło 16 miesięcy, a zakład ma wytwarzać magazyny o łącznej pojemności 50 GWh rocznie. Plan z marca 2025 r. zakładał, że inwestycja pochłonie ok. 200 mln dolarów (ok. 770 mln zł). W raporcie za drugi kwartał Tesla wykazała 40 GWh mocy w Kalifornii i 20 GWh w Szanghaju, więc Brookshire niemal podwoi jej zdolności w tej dziedzinie.",
      },
      { type: "x", id: "2066722886073667850", handle: "SawyerMerritt" },
      { type: "x", id: "1950092123245809874", handle: "Tesla_Asia" },
      { type: "x", id: "2085163367506059461", handle: "Tesla_Megapack" },
      {
        type: "p",
        text: "Lit Tesla przerabia już sama. Rafineria w Robstown koło Corpus Christi kosztowała ponad 1 mld dolarów i działa od stycznia 2026 r. Podczas lipcowego Lithium Day [kierownik zakładu ogłosił](https://evwire.com/p/tesla-lithium-day-refinery-fully-ramped-giga-texas), że rafineria osiągnęła pełną wydajność, choć w kwartalnym raporcie z 22 lipca Tesla wciąż opisywała ją jako zakład na początku rozruchu. Według raportu wpływu spółki rafineria ma dawać ok. 20 tys. ton wodorotlenku litu rocznie, czyli surowiec na ok. 30 GWh ogniw. 4 września Tesla podała, że lit z Teksasu trafił do ogniw 4680 w Cybertrucku, a 23 września, że Cybercab z Giga Texas dostaje katodę produkowaną na miejscu.",
      },
      { type: "x", id: "2103911761036648464", handle: "JoeTegtmeyer" },
      {
        type: "p",
        text: "Na terenie Giga Texas powstają kolejne obiekty. Po wschodniej stronie kampusu Tesla i SpaceX wspólnie budują badawczą fabrykę chipów o powierzchni ok. 45 tys. m². W połowie września [Joe Tegtmeyer pokazał](https://x.com/JoeTegtmeyer/status/2100609709925429590) wylewanie jej płyty, którą odizolowano od drgań. Zakład ma przygotować grunt pod Terafab. Na północ od głównej fabryki rośnie fabryka Optimusa. Musk mówił o niej w rozmowie z Peterem Diamandisem jako o obiekcie na 8 mln stóp kwadratowych (ok. 743 tys. m²). Pierwsze elementy stalowej konstrukcji postawiono 27 maja, we wrześniu szkielet był bliski ukończenia, a produkcję na dużą skalę [Tesla planuje od lata 2027 r.](https://www.teslarati.com/tesla-dedicated-optimus-factory-construction-officially-underway-giga-texas/) Klaster obliczeniowy Cortex, na którym Tesla trenuje FSD i Optimusa, w pierwszym półroczu [ponad dwukrotnie zwiększył moc](https://www.notateslaapp.com/news/4509/tesla-doubles-texas-ai-compute-capacity-in-q2-2026), do ok. 260 MW. Do końca roku ma to być blisko 400 MW.",
      },
      { type: "x", id: "2102383381916930554", handle: "JoeTegtmeyer" },
      { type: "x", id: "2102408682025758958", handle: "JoeTegtmeyer" },
      { type: "x", id: "2085035812010258797", handle: "JoeTegtmeyer" },
      {
        type: "p",
        text: "Największa pozycja na liście jest na razie projektem. Project Crystal Sun to [wniosek o ulgi dla fabryki za 10,1 mld dolarów](https://electrek.co/2026/08/11/tesla-solar-cell-factory-texas-project-crystal-sun/) w hrabstwie Fort Bend pod Houston. Tesla chce tam produkować cały łańcuch fotowoltaiki, od krzemowych wlewków przez wafle i ogniwa po gotowe moduły. Teren ma ok. 1230 ha, budowa ma trwać od 2026 do 2028 r., a produkcja ruszyć w pierwszym kwartale 2029 r. Przy pełnej wydajności zakład ma zatrudniać 9712 osób. Według Electreka to największa inwestycja produkcyjna w USA, jaką Tesla kiedykolwiek zgłosiła w oficjalnych dokumentach. 15 września rada okręgu szkolnego Lamar [jednogłośnie przyjęła wniosek](https://communityimpact.com/katy-fulshear/development/lamar-cisd-votes-to-move-tesla-s-jeti-application-forward/) o dziesięcioletnią ulgę, ale program stanowy JETI wciąż czeka na decyzję gubernatora. Tesla zaznacza w dokumentach, że rozważa też lokalizację w innym stanie. 20 września [S.E. Robinson Jr.](https://x.com/SERobinsonJr/status/2102071420427592100) sfotografował z powietrza teren przy drogach FM 762 i FM 1994. Leży on ok. 10 minut drogi od magazynu Megapacków w Needville, który działa przy farmie słonecznej Old 300 należącej do Ørsted.",
      },
      { type: "x", id: "2102071420427592100", handle: "SERobinsonJr" },
      {
        type: "p",
        text: "Terafab w hrabstwie Grimes to wspólny projekt z SpaceX. 6 sierpnia firmy ogłosiły, że pierwsza faza ma kosztować 16,8 mld dolarów (ok. 64,6 mld zł). Docelowo zakład ma zająć ponad 100 mln stóp kwadratowych (ok. 9,3 mln m²) i produkować chipy dla Optimusa, Cybercaba oraz orbitalnych centrów danych SpaceX. Według [Reutersa](https://www.reuters.com/business/media-telecom/spacex-says-terafab-be-built-texas-with-initial-investment-168-billion-2026-08-06/) inwestują obie spółki, ale w komunikacie gubernatora Teksasu jako inwestor figuruje tylko spółka zależna SpaceX. O tym, jak szybko wylano tam fundamenty, pisaliśmy w [tekście o Terafabie](https://muskonomia.pl/blog/terafab-grimes-stopy-fundamentowe).",
      },
      { type: "x", id: "2104022517904011462", handle: "JoeTegtmeyer" },
      {
        type: "p",
        text: "Pozostałe zakłady działają od lat. W styczniu 2023 r. Tesla podała, że zainwestowała w Giga Nevada 6,2 mld dolarów i [dołoży 3,6 mld](https://techcrunch.com/2023/01/24/tesla-invests-3-6b-in-two-new-nevada-factories-to-build-semis-and-cells/) na fabrykę ogniw 4680 o wydajności 100 GWh oraz pierwszą wielkoseryjną fabrykę Semi. Tę drugą uruchomiono w tym miesiącu, o czym pisaliśmy przy [starcie seryjnej produkcji Semi](https://muskonomia.pl/blog/tesla-semi-seryjna-produkcja-nevada). Fabryka w Buffalo produkuje dachy solarne Solar Roof i ładowarki Supercharger. W Szanghaju od 2021 r. działa osobny zakład produkujący Superchargery, a holenderskie Tilburg jest europejskim centrum dystrybucji części. Przy Kato Road we Fremoncie działa pilotażowa linia ogniw 4680.",
      },
      {
        type: "img",
        src: "/img/tesla-zaklady-nevada.jpg",
        alt: "Giga Nevada z lotu ptaka, główny budynek fabryki z panelami słonecznymi na dachu",
        caption: "Giga Nevada, Sparks, Nevada (2019). Fot. Smnt, Wikimedia Commons, CC BY-SA 4.0",
        contain: true,
      },
      {
        type: "img",
        src: "/img/tesla-zaklady-buffalo.jpg",
        alt: "Giga New York w Buffalo, znak Tesli przed halą fabryki",
        caption: "Giga New York, Buffalo, Nowy Jork (2018). Fot. Buffaboy, Wikimedia Commons, CC BY-SA 4.0",
        contain: true,
      },
      {
        type: "img",
        src: "/img/tesla-zaklady-tilburg.jpg",
        alt: "Zakład Tesli w Tilburgu z lotu ptaka, dach pokryty panelami słonecznymi",
        caption: "Tilburg, Holandia (2017). Fot. Jakob Härter, Wikimedia Commons, CC BY-SA 2.0",
        contain: true,
      },
    ],
  },
];
