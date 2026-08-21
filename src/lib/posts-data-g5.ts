import type { Post } from "./posts";

export const postsG5: Post[] = [
  {
    slug: "grok-5-trenuje-na-colossus-ii",
    kicker: "xAI",
    topic: "xai",
    title: "Grok 5 trenuje na Colossus II – skala robi wrażenie",
    excerpt:
      "Około 220 tys. GPU NVIDIA, pobór mocy koło 1 GW, model w zakresie 6–10 bilionów parametrów. Trening od stycznia, premierę Elon zapowiada jeszcze w 2026. W danych: 25 lat inżynierii SpaceX.",
    date: "21 sierpnia 2026",
    isoDate: "2026-08-21",
    img: "/img/g5-colossus-trasy.jpg",
    body: [
      {
        type: "p",
        text: "Grok 5 jest w trakcie intensywnego treningu na klastrze Colossus II. Według informacji z X, w systemie pracuje już około 220 tysięcy wysokiej klasy GPU NVIDIA, a kolejne są dokładane. Pobór mocy oscyluje wokół 1 GW i rośnie.",
      },
      {
        type: "img",
        src: "/img/g5-colossus-trasy.jpg",
        alt: "Żółte koryta kablowe i siatki tras w hali Colossus II",
        caption:
          "Colossus II od środka: trasy zasilania i sieci nad halą. Tu trenuje Grok 5 — około 220 tys. GPU, moc koło 1 GW.",
      },
      {
        type: "h2",
        text: "6–10 bilionów parametrów",
      },
      {
        type: "p",
        text: "Model ma trafić w zakres 6–10 bilionów parametrów. To zupełnie inna liga niż to, co obecnie jest publicznie dostępne.",
      },
      {
        type: "p",
        text: "Trening trwa co najmniej od stycznia. Elon Musk potwierdził niedawno, że Grok 5 powinien pojawić się jeszcze przed końcem 2026 roku. Kluczowy element: model ma zostać wytrenowany na pełnym, 25-letnim zbiorze danych inżynierskich SpaceX.",
      },
      {
        type: "img",
        src: "/img/g5-colossus-swiatlowody.jpg",
        alt: "Zwoje fioletowych światłowodów w szafach Colossus II",
        caption:
          "Światłowody w szafach Colossusa. Na tym samym klastrze działa już Cursor — wzrost mocy ma być widoczny też w narzędziach programistycznych.",
      },
      {
        type: "h2",
        text: "Nie kolejny Grok 4.x",
      },
      {
        type: "p",
        text: "To nie jest kolejna, inkrementalna aktualizacja serii Grok 4.x. Mowa o wyraźnym skoku zarówno w skali compute’u, jak i w architekturze. Połączenie ogromnej mocy obliczeniowej z unikalnymi, rzeczywistymi danymi inżynierskimi SpaceX ma dać firmie konkretną przewagę w rozwiązywaniu problemów projektowych, symulacyjnych i inżynierskich, z którymi obecne modele wciąż mają kłopot.",
      },
      {
        type: "p",
        text: "Na tym samym klastrze działa już Cursor, więc wzrost możliwości powinien być widoczny także po stronie narzędzi programistycznych.",
      },
      {
        type: "p",
        text: "Na razie nie ma twardej daty premiery, ale zarówno skala infrastruktury, jak i zakres danych, na których model jest trenowany, wyglądają bardzo poważnie.",
      },
    ],
  },
];
