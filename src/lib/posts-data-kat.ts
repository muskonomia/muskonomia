import type { Post } from "./posts";

export const postsKat: Post[] = [
  {
    slug: "tesla-uruchomila-pierwsza-na-duza-skale-fabryke-katod-w-ameryce-polnocnej",
    kicker: "Tesla",
    topic: "tesla",
    title: "Tesla uruchomiła pierwszą na dużą skalę fabrykę katod w Ameryce Północnej",
    excerpt:
      "Giga Texas produkuje katody na dużą skalę przy linii 4680. Własny proces ma być o ok. 74% czystszy emisyjnie niż typowi dostawcy tier-1. Katoda to ponad 35% kosztu ogniwa.",
    date: "22 sierpnia 2026",
    isoDate: "2026-08-22",
    img: "/img/kat-cathode.jpg",
    body: [
      {
        type: "p",
        text: "Tesla oficjalnie potwierdziła, że prowadzi już produkcję katod na dużą skalę w Austin w Teksasie. To pierwsza tego typu instalacja w Ameryce Północnej i ważny element łańcucha dostaw ogniw 4680.",
      },
      {
        type: "p",
        text: "Katoda to jeden z najdroższych i najbardziej krytycznych elementów ogniwa litowo-jonowego. Do tej pory produkcja tego materiału na większą skalę była zdominowana przez Azję. Uruchomienie własnej linii w Giga Texas zmniejsza zależność Tesli od zewnętrznych dostawców i wzmacnia lokalną niezależność energetyczną.",
      },
      {
        type: "video",
        src: "/video/katody-giga-texas.mp4",
        poster: "/img/kat-cathode.jpg",
        caption:
          "Film Tesli z Giga Texas: linie, piece, mieszanie prekursorów i big-bagi z logo. Źródło: @tesla_na.",
      },
      { type: "h2", text: "Co pokazuje film" },
      {
        type: "p",
        text: "W materiale widać wnętrze zakładu — linie produkcyjne, piece, procesy mieszania prekursorów (nikiel, mangan, kobalt + wodorotlenek litu) oraz gotowy materiał pakowany w big-bagi z logo Tesli. Firma podkreśla, że stosuje nowatorski, bardziej efektywny proces, który ma być tańszy, czystszy i łatwiejszy do skalowania niż rozwiązania dostawców zewnętrznych.",
      },
      {
        type: "img",
        src: "/img/kat-mieszanie.jpg",
        alt: "Mieszanie prekursorów katody w Giga Texas — kadzie i taśmy",
        caption:
          "Mieszanie prekursorów: nikiel, mangan, kobalt i wodorotlenek litu. Stąd wychodzi materiał, który idzie prosto do 4680.",
      },
      {
        type: "p",
        text: "Według zapowiedzi proces ma być o około 74% bardziej efektywny pod względem emisji gazów cieplarnianych w porównaniu z typowymi dostawcami tier-1. Tesla buduje też większe piece, które mają podwoić zdolności produkcyjne zakładu.",
      },
      {
        type: "img",
        src: "/img/kat-bigbagi.jpg",
        alt: "Big-bagi z katodą Tesli na linii pakowania w Giga Texas",
        caption:
          "Gotowa katoda w big-bagach z logo Tesli. Nie jedzie z Azji — schodzi z hali obok linii ogniw.",
      },
      { type: "h2", text: "Znaczenie" },
      {
        type: "p",
        text: "Katoda stanowi ponad 35% kosztu ogniwa. Posiadanie własnej produkcji na miejscu przy fabryce 4680 to konkretny krok w kierunku pełnej integracji pionowej i obniżenia kosztów. Ogniwa 4680 zasilają już Cybertrucka i wybrane wersje Modelu Y.",
      },
      {
        type: "img",
        src: "/img/kat-4680.jpg",
        alt: "Ogniwa 4680 Tesli na linii w Giga Texas",
        caption:
          "4680 zasilają Cybertrucka i wybrane Model Y. Katoda z tej hali schodzi prosto do tych ogniw.",
      },
      {
        type: "p",
        text: "To nie jest spektakularny pokaz nowej technologii, ale właśnie takie „nudne” elementy infrastruktury decydują o realnej niezależności i skali. Tesla pokazuje, że konsekwentnie domyka kluczowe ogniwa łańcucha dostaw baterii w Stanach Zjednoczonych.",
      },
    ],
  },
];
