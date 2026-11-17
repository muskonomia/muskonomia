import type { Post } from "./posts";

export const postsPwc: Post[] = [
  {
    slug: "tesla-powercore-pierwszy-transformator",
    kicker: "Powercore",
    topic: "tesla",
    title: "Tesla pokazała swój pierwszy transformator",
    excerpt:
      "Powercore ma dawać ciągle 7,4 MW przy 34,5 kV AC i wspierać grid-forming do 10 MVA mocy szczytowej. Tesla zapowiada produkcję w USA i start pracy w 2027 roku.",
    date: "17 listopada 2026",
    isoDate: "2026-11-17",
    img: "/img/powercore-okladka-1600x900.jpg",
    credit: "Tesla Powercore, pierwszy transformator Tesli. Źródło: Tesla (@Tesla_Megapack)",
    body: [
      {
        type: "p",
        text: "Nazywa się Powercore i w jednej obudowie łączy transformator średniego napięcia, falownik i wyłącznik. Przy 34,5 kV AC ma dawać ciągle 7,4 MW, czyli 9 MVA, i wspierać pracę w trybie grid-forming do 10 MVA mocy szczytowej. Tesla zapowiada produkcję w USA i start pracy w 2027 roku.",
      },
      {
        type: "p",
        text: "Te podstawowe parametry podało 17 listopada oficjalne konto [@Tesla_Megapack](https://x.com/Tesla_Megapack/status/2122721563493744771), razem z filmem. Szczegóły spoza wpisu, w tym sprawność szczytową 98,86 procent, zakresy napięć i 25 lat gwarancji, podajemy za [Sawyerem Merrittem](https://x.com/SawyerMerritt/status/2122724413036761244).",
      },
      { type: "x", id: "2122721563493744771", handle: "Tesla_Megapack" },
      {
        type: "img",
        src: "/img/powercore-karta-danych-1600x900.jpg",
        alt: "Dane techniczne Tesli Powercore",
        caption:
          "Dane techniczne Tesli Powercore. Liczby bez gwiazdki: oficjalny wpis @Tesla_Megapack. Liczby z gwiazdką: wg Sawyera Merritta / materiałów Tesli.",
      },
      { type: "h2", text: "Klasyczny transformator i kolejka po dostawy" },
      {
        type: "p",
        text: "W stacji energetycznej klasyczny transformator obniża napięcie z linii średniego napięcia do poziomu, z którym pracują urządzenia końcowe. Jest duży, ciężki, zwykle wypełniony olejem, z miedzianymi uzwojeniami na rdzeniu ze stali. Produkcja wymaga specjalistycznych materiałów i linii, a popyt z modernizacji sieci i z centrów danych wydłużył terminy dostaw.",
      },
      {
        type: "p",
        text: "Według [Wood Mackenzie](https://www.woodmac.com/news/opinion/mind-the-gap-tackling-supply-chain-challenges-in-the-electric-td-sector) średni czas oczekiwania na transformatory mocy wyniósł 128 tygodni w drugim kwartale 2025 roku, czyli prawie dwa i pół roku od zamówienia do dostawy. W praktyce transformator często decyduje o tym, kiedy projekt w ogóle ruszy.",
      },
      { type: "h2", text: "Co zmienia transformator półprzewodnikowy" },
      {
        type: "p",
        text: "Powercore to transformator półprzewodnikowy. Zamiast samej miedzi i żelaza opiera się na elektronice mocy, czyli półprzewodnikach, które przekształcają napięcie i prąd. Jedna obudowa zastępuje osobny transformator, falownik i wyłącznik. Na placu zostaje mniej sprzętu i połączeń do zrobienia na miejscu, a montaż może iść szybciej.",
      },
      {
        type: "img",
        src: "/img/powercore-schemat-1600x900.jpg",
        alt: "Klasycznie osobno transformator, falownik i wyłącznik, w Powercore razem",
        caption:
          "Klasycznie osobno: transformator, falownik i wyłącznik. W Powercore te trzy funkcje są w jednej obudowie. Zastosowania wg Sawyera Merritta / materiałów Tesli. Źródło wizualizacji: Tesla (@Tesla_Megapack).",
      },
      {
        type: "img",
        src: "/img/powercore-urzadzenie-sprawnosc-1600x900.jpg",
        alt: "Sprawność szczytowa Powercore 98,86 procent",
        caption:
          "Sprawność szczytowa Powercore: 98,86%, wg Sawyera Merritta / materiałów Tesli. Źródło: Tesla (@Tesla_Megapack).",
      },
      { type: "h2", text: "Co oznacza grid-forming" },
      {
        type: "p",
        text: "Grid-forming oznacza, że urządzenie samo ustawia i trzyma napięcie oraz częstotliwość lokalnej sieci, zamiast czekać na sygnał z zewnątrz. Dzięki temu obiekt może działać bez zewnętrznej sieci, jako wyspa. Według Sawyera Merritta Powercore ma umożliwić centra danych pracujące w pełni poza siecią. Tesla potwierdza wsparcie grid-forming do 10 MVA mocy szczytowej.",
      },
      { type: "h2", text: "800 V DC, Megablock i farmy solarne" },
      {
        type: "p",
        text: "Centra danych coraz częściej przechodzą na zasilanie 800 V prądem stałym. Mniej etapów konwersji oznacza mniejsze straty i cieńsze kable. Według [Sawyera Merritta](https://x.com/SawyerMerritt/status/2122724413036761244) Powercore bierze średnie napięcie AC z sieci i oddaje 800 V DC prosto do serwerów, a po stronie magazynów łączy się z Megapackiem i Megablockiem po szynie DC i ma ulepszyć sam Megablock. Na farmach solarnych przyjmuje 1500-2000 V DC prosto z paneli, bez dodatkowych stopni pośrednich. Zakres napięcia DC to według niego 800-2000 V, a AC 10-35 kV.",
      },
      {
        type: "img",
        src: "/img/powercore-centrum-danych-1600x900.jpg",
        alt: "Powercore zasila centra danych 800 V DC",
        caption:
          "Powercore ma zasilać centra danych 800 V DC. Źródło: Tesla (@Tesla_Megapack), via Sawyer Merritt.",
      },
      {
        type: "img",
        src: "/img/powercore-solary-1600x900.jpg",
        alt: "Powercore przyspiesza fotowoltaikę 1500–2000 V DC",
        caption:
          "W materiałach Tesli Powercore ma przyspieszać fotowoltaikę 1500–2000 V DC. Źródło: Tesla (@Tesla_Megapack), via Sawyer Merritt.",
      },
      {
        type: "img",
        src: "/img/powercore-megablock-1600x900.jpg",
        alt: "Powercore makes Megablock even better",
        caption:
          "W oficjalnym filmie Tesli: Powercore „makes Megablock even better”. Źródło: Tesla (@Tesla_Megapack).",
      },
      { type: "h2", text: "Magazyny Tesli i centra AI" },
      {
        type: "p",
        text: "Centra AI potrzebują ogromnej mocy i często walczą o przyłącze. Tesla Energy sprzedaje już Megapacki i Megablocki, gotowe bloki magazynów energii. Powercore dopełnia ten zestaw o konwersję mocy. Można się domyślać, że takie połączenie przyspiesza projekty, które chcą działać z ograniczonym przyłączem albo poza siecią. To zapowiedź produktu, który ma pracować od 2027 roku.",
      },
      {
        type: "img",
        src: "/img/powercore-gwarancje-systemowe-1600x900.jpg",
        alt: "Gwarancje systemowe Powercore 99,9 procent i więcej",
        caption:
          "W oficjalnym filmie Tesli: „System Guarantees 99.9% and greater”. Źródło: Tesla (@Tesla_Megapack).",
      },
      {
        type: "table",
        headers: ["Parametr", "Wartość", "Źródło"],
        rows: [
          ["Moc ciągła", "7,4 MW / 9 MVA przy 34,5 kV AC", "Tesla"],
          ["Grid-forming", "do 10 MVA mocy szczytowej", "Tesla"],
          ["Zakres AC", "10-35 kV", "Sawyer Merritt"],
          ["Zakres DC", "800-2000 V", "Sawyer Merritt"],
          ["Sprawność szczytowa", "98,86%", "Sawyer Merritt"],
          ["Gwarancja", "do 25 lat", "Sawyer Merritt"],
          ["Produkcja", "USA", "Tesla"],
          ["Start pracy", "2027", "Tesla"],
        ],
      },
    ],
  },
];
