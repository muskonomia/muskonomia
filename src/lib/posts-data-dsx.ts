import type { Post } from "./posts";

export const postsDsx: Post[] = [
  {
    slug: "megapack-nvidia-dsx-ready",
    kicker: "Megapack",
    topic: "tesla",
    title: "Nvidia wpisała Megapack Tesli na listę do fabryk AI",
    excerpt:
      "Nvidia wpisała 21 września Megapack Tesli na listę DSX Ready. Obok stoją Hitachi Energy i LG Energy Solution. To kwalifikacja produktu, nie zamówienie na halę.",
    date: "21 września 2026",
    isoDate: "2026-09-21",
    img: "/img/dsx-okladka.jpg",
    contain: true,
    body: [
      {
        type: "p",
        text: "Nvidia otworzyła 21 września program DSX Ready. Na starcie w magazynach energii są trzy nazwiska: Hitachi Energy, LG Energy Solution i Tesla. Obok baterii firma kwalifikuje też chłodzenie cieczą.",
      },
      {
        type: "img",
        src: "/img/dsx-nvidia.jpg",
        alt: "Grafika Nvidii DSX Ready: fabryka AI, magazyn energii i jednostka chłodzenia cieczą",
        caption:
          "DSX Ready startuje od magazynów energii i chłodzenia. Źródło: [@NVIDIAAIInfra](https://x.com/NVIDIAAIInfra/status/2102096871426543816).",
        href: "https://x.com/NVIDIAAIInfra/status/2102096871426543816",
      },
      {
        type: "p",
        text: "DSX to projekt referencyjny Nvidii na całe fabryki AI. DSX Ready ma z tego zrobić listę konkretnych produktów — które magazyny i które układy chłodzenia przeszły testy pod ten projekt.",
      },
      {
        type: "p",
        text: "Konto Tesli Megapack odpisało tego samego dnia: Megapack jest DSX Ready. Ma karmić duże odbiory centrów danych, tłumić wahania mocy, pomagać przy przyłączu i odciążać lokalne bloki na paliwach kopalnych.",
      },
      { type: "x", id: "2102131965835321688", handle: "Tesla_Megapack" },
      {
        type: "img",
        src: "/img/dsx-okladka.jpg",
        alt: "Rzędy Tesli Megapack na placu magazynu energii",
        caption: "Megapack na liście. Kontraktu przy pieczątce nie ma.",
        contain: true,
      },
      {
        type: "p",
        text: "To nie zamówienie i nie umowa na konkretną halę. Nvidia zastrzega, że zaliczenie testów nie zastępuje projektu na działce. Kwalifikacja kończy się na zaciskach prądu przemiennego magazynu.",
      },
      {
        type: "p",
        text: "Po co bateria przy klastrze GPU: magazyn ma łapać skoki mocy, zakłócenia w sieci, wezwania operatora i przejście na zasilanie własne. Klastry uczące model biorą prąd falami. Bez bufora przyłącze się nie zgadza albo trzeba dokładać agregat.",
      },
      {
        type: "p",
        text: "Hitachi i LG Energy Solution stoją obok Tesli w tej samej szufladzie BESS. Nvidia nie podała, która wersja Megapacka weszła na listę ani ile sztuk ma iść do fabryk AI. Tesla też tego nie dopisała. Pieczątka jest, kontraktu przy niej nie ma.",
      },
    ],
  },
];
