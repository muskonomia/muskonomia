import type { Post } from "./posts";

export const postsZl: Post[] = [
  {
    slug: "chinczycy-zaprezentowali-najwieksza-czysto-elektryczna-wywrotke-gornicza",
    kicker: "Inne",
    topic: "inne",
    title: "Chińczycy zaprezentowali największą czysto elektryczną wywrotkę górniczą",
    excerpt:
      "Zijin Longking ZL230E: 350 t masy, 230 t ładunku, bateria 1400 kWh i ładowanie do 90% w 25 minut. Największa czysto elektryczna wywrotka górnicza w Chinach.",
    date: "21 sierpnia 2026",
    isoDate: "2026-08-21",
    img: "/img/zl-wywrotka.jpg",
    body: [
      {
        type: "p",
        text: "Zijin Longking oficjalnie zjechała z linii produkcyjnej największą w Chinach czysto elektryczną ciężarówkę górniczą — model ZL230E (wcześniej oznaczany jako LK350E).",
      },
      {
        type: "img",
        src: "/img/zl-wywrotka.jpg",
        alt: "Zijin Longking ZL230E, elektryczna wywrotka górnicza w kopalni odkrywkowej",
        caption:
          "ZL230E w kopalni: 350 ton masy całkowitej, 230 ton ładunku. Na razie największa czysto elektryczna wywrotka w Chinach.",
      },
      { type: "h2", text: "Podstawowe dane" },
      {
        type: "ul",
        items: [
          "Masa całkowita: 350 ton",
          "Ładowność: 230 ton",
          "Pojemność skrzyni: 125 m³",
          "Bateria: 1400 kWh",
          "Ładowanie do 90%: 25 minut",
          "Napęd: dwa silniki po 800 kW każdy",
        ],
      },
      {
        type: "p",
        text: "Pojazd przeznaczony jest do intensywnej pracy w odkrywkowych kopalniach. Konstrukcja opiera się na wieloosiowym, rozproszonym napędzie niezależnym, a system zarządza mocą w czasie rzeczywistym, co ma pomagać przy podjazdach z pełnym ładunkiem.",
      },
      {
        type: "img",
        src: "/img/zl-linia.jpg",
        alt: "ZL230E na linii produkcyjnej Zijin Longking, prezentacja zjazdu z taśmy",
        caption:
          "Zjazd z linii w Longyan. Wcześniejsze oznaczenie: LK350E — od 350 ton DMC.",
      },
      { type: "h2", text: "Kontekst" },
      {
        type: "p",
        text: "Zijin Mining intensywnie elektryfikuje swoją flotę. Jeszcze w 2020 roku firma miała zaledwie 13 elektrycznych wywrotek. Do 2025 liczba ta wzrosła do ponad 1700 pojazdów. Nowa maszyna to kolejny krok w kierunku pełnej rezygnacji z diesla w największych kopalniach.",
      },
      {
        type: "img",
        src: "/img/zl-ladowanie.jpg",
        alt: "ZL230E podłączona do szybkiego ładowania w kopalni",
        caption:
          "1400 kWh do 90% w 25 minut. W odkrywce przestoje na ładowanie mają realną cenę.",
      },
      {
        type: "p",
        text: "Ładowanie 1400 kWh w 25 minut do 90% to wynik, który w warunkach przemysłowych ma realne znaczenie — ogranicza przestoje i pozwala utrzymać wysoką dostępność floty.",
      },
      {
        type: "img",
        src: "/img/zl-przod.jpg",
        alt: "Przód elektrycznej wywrotki ZL230E z oznaczeniem Zijin Longking",
        caption:
          "Dwa silniki po 800 kW. To nie jest pojazd drogowy — czysto przemysłowa maszyna do urobku.",
      },
      {
        type: "p",
        text: "To nie jest pojazd drogowy. To czysto przemysłowa maszyna do transportu urobku, ale pokazuje, jak szybko segment ciężkiego sprzętu górniczego przechodzi na napęd elektryczny — szczególnie w Chinach.",
      },
    ],
  },
];
