import type { Post } from "./posts";

export const postsG20: Post[] = [
  {
    slug: "musk-na-g20-prad-pod-ai-skonczy-sie-juz-w-2027",
    kicker: "xAI",
    topic: "xai",
    title: "Musk na G20: prąd pod AI skończy się już w 2027",
    excerpt:
      "Na ministerialnym G20 w Chapel Hill Musk zaczął od mocy, nie od chipów. 15 GW dziury w 2027. Google i Anthropic już dzierżawią compute od SpaceX.",
    date: "1 września 2026",
    isoDate: "2026-09-01",
    img: "/img/g20-musk.jpg",
    body: [
      {
        type: "p",
        text: "Elon Musk mówił 1 września na ministerialnym spotkaniu G20 ds. innowacji w Chapel Hill w Karolinie Północnej. W sali byli m.in. Jensen Huang i ministrowie z państw G20.",
      },
      {
        type: "img",
        src: "/img/g20-musk.jpg",
        alt: "Elon Musk na ekranie podczas ministerialnego spotkania G20, flagi USA w tle",
        caption: "Chapel Hill. Musk na łączu, ministrowie przy stole.",
      },
      {
        type: "img",
        src: "/img/g20-sala.jpg",
        alt: "Sala ministerialna G20: okrągły stół, flagi, ekrany z napisem G20",
        caption: "G20 ds. innowacji. Prąd, nie chipy.",
      },
      {
        type: "img",
        src: "/img/g20-doge.jpg",
        alt: "Podsumowanie DogeDesignera wystąpienia Muska na G20: prąd, AI, roboty, regulacje",
        caption: "Grok Bot złożył wystąpienie w cztery bloki. Źródło: @cb_doge.",
        contain: true,
      },
      {
        type: "p",
        text: "Węzeł, od którego zaczął, to prąd. Nie chipy. Konsensus analityków, który przytoczył: w 2027 braknie co najmniej 15 GW mocy pod układy AI. Produkcja chipów rośnie o 40–50% rocznie. Moc poza Chinami – o 10–20%. Szybsza krzywa zje wolniejszą.",
      },
      {
        type: "img",
        src: "/img/g20-prad.jpg",
        alt: "Centrum danych AI przy stacji transformatorowej, w tle elektrownia o zachodzie słońca",
        caption: "15 GW to nie brak waferów. To brak megawatów przy szafie.",
      },
      {
        type: "p",
        text: "Dlatego, mówił, Google, Anthropic i inni już dzierżawią moc obliczeniową od SpaceX. SpaceX postawił własne elektrownie i włączył serwery szybciej niż ci, którzy czekają na sieć. Chiny mają prąd, ale embargo na najnowsze GPU. Poza Chinami wąskim gardłem jest przyrost energii. Szansa dla innych państw: budować moce, stawiać centra i je opodatkowywać.",
      },
      {
        type: "p",
        text: "Sama cyfrowa AI, jego zdaniem, może podnieść światowy PKB o 20–30%, czyli o 20–30 bln dolarów rocznie (ok. 75–112 bln zł). Do końca przyszłego roku AI ma ogarnąć wszystko cyfrowe, co nie wymaga ręcznego układania atomów. W ciągu 12–18 miesięcy pisanie oprogramowania ma dojść do poziomu Stockfisha: człowiek nie konkuruje, tak jak telefon nie przegrywa z Carlsenem w szachy. To samo okno czasowe – inżynieria i cała reszta cyfrowa.",
      },
      {
        type: "p",
        text: "Fizyka idzie wolniej. Oprogramowanie kopiuje się od razu. Robot potrzebuje łańcucha dostaw. Użyteczność humanoida to iloczyn trzech rzeczy: oprogramowania AI, chipa na pokładzie i sprawności mechanicznej, zwłaszcza rąk. Gdy roboty zaczną składać roboty, wzrost staje się rekurencyjny. Dziesięcioletnia prognoza, którą nazwał ostrożną: znacznie ponad miliard humanoidów, każdy mniej więcej 5 razy wydajniejszy od człowieka. Wtedy ta warstwa, nie samo oprogramowanie, ma powiększyć gospodarkę nawet dziesięciokrotnie.",
      },
      {
        type: "img",
        src: "/img/g20-optimus.jpg",
        alt: "Tesla Optimus, zbliżenie torsu i głowy na tle napisu TESLA",
        caption: "AI × chip × ręce. Bez trzeciego czynnika software zostaje w chmurze.",
      },
      {
        type: "p",
        text: "Jak to w ogóle postawić? Nowe rzeczy powinny być domyślnie legalne, nie domyślnie zakazane. Regulacja UE, powiedział, postępu nie zabija, tylko mocno hamuje. Start-upy to sadzonki. Rządy podlewają stare drzewa, bo korporacje mają dostęp do polityków. Polityka powinna być celowo przechylona w stronę młodych firm.",
      },
      {
        type: "p",
        text: "Z wystąpienia, punkt po punkcie:",
      },
      {
        type: "ul",
        items: [
          "kryzys mocy pod AI jest teraz, nie w odległej przyszłości",
          "w 2027 braknie co najmniej 15 GW pod chipy AI",
          "produkcja chipów: +40–50% rocznie; moc poza Chinami: +10–20%",
          "Google, Anthropic i inni dzierżawią compute od SpaceX, bo SpaceX postawił własne elektrownie",
          "Chiny mają prąd, ale embargo odcina je od najnowszych GPU; poza Chinami wąskim gardłem jest wzrost mocy",
          "szansa dla innych państw: budować energię, hostować centra AI, opodatkowywać je",
          "cyfrowa AI: +20–30% światowego PKB, czyli 20–30 bln dolarów rocznie (ok. 75–112 bln zł)",
          "do końca przyszłego roku AI ma robić wszystko cyfrowe, bez ręcznego układania atomów",
          "za 12–18 miesięcy AI w pisaniu oprogramowania ma być na poziomie Stockfisha",
          "w tym samym oknie AI ma być bardzo dobra, może tak samo dobra, w inżynierii i całej cyfrze",
          "X to miejsce, w którym toczy się poważna dyskusja o AI",
          "hardware zawsze zostaje w tyle za softwarem",
          "humanoid = AI × chip na pokładzie × sprawność mechaniczna, zwłaszcza rąk",
          "gdy roboty zaczną składać roboty, wzrost staje się rekurencyjny",
          "na 10 lat, ostrożnie: ponad miliard humanoidów, każdy ok. 5 razy wydajniejszy od człowieka; wtedy roboty przewyższą łączną produkcję ludzi",
          "warstwa fizyczna ma dać wzrost gospodarki nawet 10 razy, nie tylko 20–30%",
          "nowe rzeczy: domyślnie legalne, nie domyślnie zakazane",
          "regulacja UE nie zabija postępu, ale mocno go hamuje",
          "start-upy jak sadzonki; rządy podlewają wielkie drzewa",
          "polityka powinna być celowo po stronie młodych firm",
        ],
      },
      {
        type: "p",
        text: "Źródło: [wpis DogeDesignera](https://x.com/cb_doge/status/2094805195104596384).",
      },
    ],
  },
];
