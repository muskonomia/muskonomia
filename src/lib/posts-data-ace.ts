import type { Post } from "./posts";

export const postsAce: Post[] = [
  {
    slug: "fsd-wlacza-sie-przed-zderzeniem",
    kicker: "FSD",
    topic: "tesla",
    title: "FSD samo się włącza, gdy hamowanie nie wystarczy",
    excerpt:
      "Tesla AI wysyła FSD Supervised v14.3.9. System może sam się włączyć, gdy zderzenie jest blisko, a hamowanie awaryjne może nie wystarczyć, albo gdy kierowca jest mocno rozproszony.",
    date: "4 września 2026",
    isoDate: "2026-09-04",
    img: "/img/fsd-amsterdam.jpg",
    body: [
      {
        type: "p",
        text: "Tesla AI zaczyna wysyłać FSD Supervised v14.3.9. Nowa warstwa bezpieczeństwa potrafi włączyć FSD za kierowcę, gdy zderzenie jest blisko, a samo hamowanie może nie zdążyć.",
      },
      {
        type: "p",
        text: "Do tej pory FSD jechało dopiero po świadomym starcie z dźwigni albo kółka. Teraz kawałek stosu v14 ma czekać w tle także przy ręcznej jeździe. [Tesla AI](https://x.com/Tesla_AI/status/2095767350070890688) napisała wprost: system może się włączyć, gdy wykryje bliskie zderzenie i uzna, że automatyczne hamowanie awaryjne może nie wystarczyć. Może też wejść, gdy uzna, że kierowca jest mocno rozproszony albo wyłączył FSD przez przypadek.",
      },
      {
        type: "img",
        src: "/img/fsd-amsterdam.jpg",
        alt: "Wnętrze Tesli z FSD Supervised, ręce z dala od kierownicy",
        caption: "FSD nadzorowane. Kierowca nadal odpowiada za jazdę.",
      },
      {
        type: "p",
        text: "Funkcja nazywa się Automatic Collision Evasion, po polsku automatyczne unikanie zderzenia. Drive Tesla Canada cytuje wewnętrzny opis: FSD ma utrzymać auto w bezpiecznym torze i jechać dalej. Przykład z notatek jest zwyczajny. Kierowca sięga na tylną kanapę. Kamera w kabinie widzi, że wzrok zszedł z drogi. Albo ktoś ociera kierownicą o kolano i zrzuca FSD, choć wcale nie chciał przejąć kontroli.",
      },
      {
        type: "img",
        src: "/img/fsd-ekran.jpg",
        alt: "Ekran Tesli ze statystykami FSD Supervised",
        caption: "Ten sam stos v14, teraz także jako siatka przy ręcznej jeździe.",
        contain: true,
      },
      {
        type: "p",
        text: "[Electrek](https://electrek.co/2026/09/04/tesla-fsd-active-safety-collision-avoidance/) oddziela to od zwykłego AEB. Hamowanie awaryjne tylko wciska pedał. Tu FSD bierze też kierownicę i gaz, żeby zejść z toru zderzenia, gdy samo hamowanie zostawi auto w przeszkodzie. [Not a Tesla App](https://www.notateslaapp.com/news/4648/tesla-fsd-1439-adds-automatic-collision-evasion-for-manual-driving) spisał warunki z testów: droga dwujezdniowa, prędkość poniżej 137 km/h. Auto może zjechać na sąsiedni pas albo na pobocze.",
      },
      {
        type: "img",
        src: "/img/fsd-noc.jpg",
        alt: "Tesla z FSD Supervised nocą, wizualizacja na ekranie",
        caption: "Droga dwujezdniowa, poniżej 137 km/h.",
      },
      {
        type: "p",
        text: "W czasie manewru pedał gazu nic nie robi. Hamulec tylko mocniej zwalnia i nie kasuje FSD. Żeby przerwać unik, trzeba mocno przeciwstawić się kierownicą. Potem kierowca znów prowadzi sam.",
      },
      {
        type: "p",
        text: "To wciąż jest FSD nadzorowane. Pracownicy już to testują, a early access zacznie w ten weekend. Tesla na ten moment nie podała, jak często unik ma się odpalać, czy da się go wyłączyć i jak system waży skręt kontra hamowanie.",
      },
    ],
  },
];
