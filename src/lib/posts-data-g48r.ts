import type { Post } from "./posts";

export const postsG48r: Post[] = [
  {
    slug: "grok-4-8-miekki-rollout-w-tym-tygodniu",
    kicker: "Grok",
    topic: "xai",
    title: "Musk zapowiada miękki rollout Groka 4.8",
    excerpt:
      "Musk zapowiada, że pre-training Groka 4.8 jest skończony, model jest w RL, a miękki rollout dla użytkowników Bota nastąpi później w tym tygodniu. Stos RL i inferencji przepisano od zera w C i C++.",
    date: "10 listopada 2026",
    isoDate: "2026-11-10",
    img: "/img/grok-4-7-ogloszenie-spacexsi-1600x900.jpg",
    credit: "Grafika z ogłoszenia Groka 4.7. Źródło: SpaceXSI",
    body: [
      {
        type: "p",
        text: "Elon Musk napisał 10 listopada, że pre-training jest skończony, model wszedł w fazę uczenia ze wzmacnianiem, a wyniki ewaluacji zaczynają rosnąć.",
      },
      {
        type: "p",
        text: "Musk odpowiadał na pytanie o termin kolejnej wersji. Jak napisał, zespół SpaceXSI porzucił JAX i SGLang, a cały stos RL oraz inferencji przepisano od zera w C i C++. To zajęło dodatkowy czas. JAX to biblioteka Google’a do obliczeń numerycznych i uczenia maszynowego. SGLang to środowisko do wydajnego serwowania dużych modeli językowych. Inferencja to etap, w którym model generuje odpowiedź na zapytanie.",
      },
      {
        type: "p",
        text: "Trening, czyli pre-training, to pierwsze, masowe uczenie na ogromnym zbiorze danych. Według Muska ten etap jest zakończony. Dane do dostrajania nadzorowanego (SFT), które uczy model konkretnych sposobów odpowiadania na podstawie przykładów, wymagały sporo sprzątania, żeby było w miarę dobrze. Teraz 4.8 jest w fazie RL, czyli uczenia ze wzmacnianiem, w której model poprawia się na podstawie ocen odpowiedzi. Miękki rollout dla użytkowników Grok Bota ma nastąpić później w tym tygodniu.",
      },
      {
        type: "p",
        text: "„Wyrzuciliśmy JAX/SGLang i przepisaliśmy cały stos RL i inferencji od zera w C/C++, co zajęło dodatkowy czas. Trening (czyli pre-training) jest skończony. Dane SFT wymagały sporo sprzątania, żeby było w miarę dobrze. Teraz 4.8 jest w RL, a wyniki ewaluacji zaczynają rosnąć. Zrobimy miękki rollout dla użytkowników Bota później w tym tygodniu i zobaczymy, jak pójdzie. Grok 4.8 w ogóle nie będzie przypominał 4.7 (na szczęście). Jeszcze nie jest niesamowity, ale tym razem fundamenty są zbudowane dobrze, więc spodziewam się, że wyewoluuje w coś szczególnego”, napisał Musk we [wpisie](https://x.com/elonmusk/status/2120088070443655190).",
      },
      { type: "x", id: "2120088070443655190", handle: "elonmusk" },
      {
        type: "p",
        text: "Grok 4.7 wyszedł 21 września 2026 jako najmocniejszy wówczas model SpaceXSI do kodowania i pracy z wiedzą. Według [oficjalnego ogłoszenia](https://x.ai/news/grok-4-7) był dwa razy szybszy i o połowę tańszy od porównywalnych modeli, dostępny od razu w Cursorze, Grok Build i przez API. Musk zapowiada, że 4.8 w ogóle nie będzie go przypominał.",
      },
    ],
  },
];
