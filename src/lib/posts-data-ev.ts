import type { Post } from "./posts";

export const postsEv: Post[] = [
  {
    slug: "fsd-omija-zderzenie-ponizej-137",
    kicker: "FSD",
    topic: "tesla",
    title: "FSD Supervised skręci z toru zderzenia poniżej 137 km/h",
    excerpt:
      "Tesla wdraża FSD Supervised v14.3.9 w paczce 2026.27.6. Przy ręcznej jeździe system może kontrolować kierownicę, gaz i hamulec — skręt z toru zderzenia poniżej 137 km/h albo wejście przy nieuwadze.",
    date: "9 września 2026",
    isoDate: "2026-09-09",
    img: "/img/fsd-ace-unik.jpg",
    body: [
      {
        type: "p",
        text: "Tesla 8 września zaczęła wdrażać FSD Supervised v14.3.9 w paczce 2026.27.6. W notatkach jest Automatic Collision Evasion. Przy ręcznej jeździe system może sam wziąć kierownicę, gaz i hamulec.",
      },
      {
        type: "img",
        src: "/img/fsd-ace-unik.jpg",
        alt: "Wizualizacja uniku FSD z toru zderzenia",
        caption: "Skręt z toru zderzenia: drogi o ograniczonym dostępie, poniżej 137 km/h.",
      },
      {
        type: "p",
        text: "[Tesla AI](https://x.com/Tesla_AI/status/2095767350070890688) zapowiedziała to 4 września. FSD może wejść samo, gdy zderzenie jest blisko, a zwykłe hamowanie awaryjne może nie wystarczyć. Drugi przypadek: kamera widzi, że kierowca jest mocno rozproszony albo zrzucił FSD przez przypadek.",
      },
      {
        type: "p",
        text: "Instrukcja, którą [ściągnięto wraz z paczką](https://x.com/SawyerMerritt/status/2097517561239707949), rozdziela te dwa przypadki. Skręt z toru zderzenia działa, gdy włączone są jednocześnie AEB i FSD nadzorowane, a FSD w tej chwili nie prowadzi.",
      },
      {
        type: "p",
        text: "Widełki są wąskie. Chodzi o zderzenie czołowe z innym pojazdem, gdy hamowanie w linii prostej może nie zdążyć, a zjazd na sąsiedni pas albo na pobocze daje większą szansę. Wtedy Model Y skręca, hamuje albo przyspiesza i jedzie dalej. AEB samo tylko wciska pedał.",
      },
      {
        type: "p",
        text: "To działanie włącza się jedynie na drogach o ograniczonym dostępie: rozdzielone jezdnie, bez skrzyżowań w poziomie, prędkość poniżej 137 km/h.",
      },
      {
        type: "p",
        text: "Przy pieszym, rowerzyście, ruchu z przeciwka albo z boku FSD nie skręca. Zostaje samo AEB.",
      },
      {
        type: "p",
        text: "Przykład z instrukcji: sięgasz na tylną kanapę. Albo ocierasz kolanem kierownicę i FSD się wyłącza, choć nie chciałeś przejąć auta. System wchodzi, trzyma tor i jedzie dalej już jako zwykłe FSD nadzorowane.",
      },
    ],
  },
];
