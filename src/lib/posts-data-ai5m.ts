import type { Post } from "./posts";

export const postsAi5m: Post[] = [
  {
    slug: "tesla-ai5-96-gb-ai6-144-gb",
    kicker: "AI5",
    topic: "tesla",
    title: "Tesla AI5 dostanie 96 GB pamięci zamiast 144 GB",
    excerpt: "Musk obciął pamięć w chipach Tesli pod produkcję Optimusa, a potem podniósł AI5 z 72 do 96 GB LPDDR5, bo inaczej Tesla byłaby jedynym kupcem najmniejszej wersji kości. AI6 zostaje przy 144 GB LPDDR6, a przepustowość pamięci się nie zmienia.",
    date: "2 października 2026",
    isoDate: "2026-10-02",
    xPostId: "2105983442580038016",
    img: "/img/optimus-dwa-roboty-sztokholm-2024.jpg",
    credit: "Dwa roboty Optimus wystawione w Sztokholmie w maju 2024 r. Fot. Ulf Klingström / Wikimedia Commons, domena publiczna",
    body: [
      {
        type: "p",
        text: "Elon Musk najpierw podał, że Tesla obcina pamięć w chipie AI5 o połowę, do 72 GB LPDDR5, a w AI6 o jedną trzecią, do 144 GB LPDDR6. Następnego ranka poprawił plan dla AI5, bo przy 72 GB Tesla byłaby jedyną firmą kupującą najmniejszą wersję kości LPDDR5. Przepustowość pamięci w obu chipach ma zostać bez zmian.",
      },
      { type: "x", id: "2105747471045370250", handle: "elonmusk" },
      {
        type: "p",
        text: "Pierwszą zmianę Musk ogłosił 1 października o 21:51 czasu polskiego w odpowiedzi na wpis konta Dirty Tesla o zapotrzebowaniu robotów na pamięć. „Obcięliśmy RAM o połowę w chipie Tesla AI5 (teraz 72 GB LP5) i o jedną trzecią w AI6 (teraz 144 GB LP6). Tylko tak dało się uzyskać wolumen wystarczający do produkcji Optimusa, a do tego znacznie obniża to koszt” – [napisał](https://x.com/elonmusk/status/2105747471045370250). Dodał, że według Tesli zmiana będzie miała pomijalny wpływ na działanie Optimusa, bo przepustowość pamięci ogranicza bardziej niż jej całkowita pojemność. „Przepustowość zostawiliśmy bez zmian” – zaznaczył. Z proporcji podanych przez Muska wynika, że wcześniej AI5 miał mieć 144 GB, a AI6 216 GB pamięci.",
      },
      {
        type: "p",
        text: "Plan dla AI5 Musk zmienił 2 października o 9:56 czasu polskiego. „Właściwie zdecydowaliśmy się trochę podnieść AI5, do 96 GB, bo inaczej Tesla byłaby jedyną firmą używającą wersji LP5 z minimalną ilością RAM” – [dopisał](https://x.com/elonmusk/status/2105930010205024419) w tym samym wątku. LP5 i LP6 to skróty od LPDDR5 i LPDDR6, czyli energooszczędnej pamięci operacyjnej, jaką montuje się w telefonach, laptopach i komputerach samochodowych. Po korekcie AI5 ma o jedną trzecią mniej pamięci niż w poprzednim planie, czyli tyle samo procentowo, ile stracił AI6. Specyfikacji AI6 Musk w drugim wpisie nie zmienił, więc ten chip zostaje przy 144 GB LPDDR6. W tym samym wątku [potwierdził](https://x.com/elonmusk/status/2105802473147699212) też, że pamięć można zwiększyć później, tak jak Tesla robi to w komputerze AI4+. Tesla nie opublikowała osobnego komunikatu w tej sprawie, więc jedynym źródłem specyfikacji są wpisy Muska.",
      },
      {
        type: "p",
        text: "Pojemność pamięci określa, ile danych chip może przechowywać jednocześnie, na przykład wagi sieci neuronowej, obrazy z kamer i bieżący kontekst zadania. Przepustowość określa, ile danych na sekundę pamięć przekazuje do jednostek obliczeniowych. Jeśli model mieści się w mniejszej pamięci, o szybkości jego działania decyduje głównie przepustowość. Na tym opiera się teza Muska, że Optimus prawie nie odczuje zmiany. Podobny argument Musk podawał w czerwcu przy FSD V14 Lite dla starszych samochodów. [Pisał wtedy](https://x.com/elonmusk/status/2071542122184921221), że komputer AI3 ma tylko ok. 15 proc. efektywnej przepustowości pamięci komputera AI4, dlatego przeniesienie na niego nowego oprogramowania było trudnym zadaniem.",
      },
      {
        type: "p",
        text: "Tło zmiany to podaż pamięci. Wpis, na który odpowiedział Musk, przyjmował 200 GB pamięci RAM na jednego humanoidalnego robota i liczył, że przy 10 mld robotów potrzeba by 2 bln GB. Liczba 200 GB pochodzi od Microna, jednego z trzech największych producentów pamięci DRAM. W [materiałach do wyników za IV kwartał roku obrotowego 2026](https://s25.q4cdn.com/621799436/files/doc_financials/2026/q4/Q4-FY26-Prepared-Remarks.pdf), opublikowanych 30 września, Micron podał, że samochody autonomiczne poziomu 4 i wyższego mają zwykle ponad 200 GB pamięci i kilka terabajtów pamięci masowej. To ponad dziesięć razy więcej niż w dzisiejszych samochodach z systemami poziomu 2+ i 3. Według Microna humanoidalne roboty będą miały podobne wymagania, a cała tak zwana fizyczna SI może do końca dekady stać się ważnym źródłem popytu na pamięć. Firma dodała, że kilku klientów z tej branży testuje już próbki jej układów nowej generacji.",
      },
      {
        type: "p",
        text: "Po korekcie AI5 ma mniej niż połowę pamięci, którą Micron przypisuje robotom i autom poziomu 4. Przy tej samej puli kości pamięci Tesla może wyposażyć półtora raza więcej chipów AI5 z 96 GB niż ze 144 GB. Ta sama proporcja dotyczy AI6, który zszedł z 216 do 144 GB. Micron rozbudowuje produkcję w Stanach Zjednoczonych i według tych samych materiałów fabryka ID1 w Idaho ma zacząć produkować wafle w połowie 2027 r., ID2 pod koniec 2028 r., a pierwsza fabryka w stanie Nowy Jork w 2030 r. Wśród rynków, które mają zasilać te zakłady, Micron wymienia też humanoidalne roboty.",
      },
      {
        type: "p",
        text: "Doniesienia o próbnej produkcji AI5 w fabryce Samsunga w Taylor zebraliśmy we wrześniu w [osobnym tekście](https://muskonomia.pl/blog/tesla-ai5-probna-produkcja-taylor). Na niedobór chipów Tesla wskazywała już w sierpniu, gdy na swoim koncie na X [ogłosiła](https://x.com/Tesla/status/2085365278276284803), że Terafab powstanie w hrabstwie Grimes w Teksasie, bo Tesla i SpaceX będą potrzebować znacznie więcej chipów, niż zapewni obecna i przyszła produkcja na świecie. Celem zakładu jest ponad 1 TW mocy obliczeniowej rocznie. Pierwsze prace przy budowie Terafabu opisaliśmy w tekście o [rozpoczęciu budowy](https://muskonomia.pl/blog/terafab-ruszyly-pierwsze-prace-budowlane).",
      },
    ],
  },
];
