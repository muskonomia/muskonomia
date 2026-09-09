import type { Post } from "./posts";

export const postsPrf: Post[] = [
  {
    slug: "dwa-prufrocki-pod-nashville",
    kicker: "Boring",
    topic: "inne",
    title: "Dwa Prufrocki kopią naraz pod Nashville",
    excerpt:
      "The Boring Company pokazała 8 września nagranie z drona: Prufrock-MB1 i Prufrock-MB2 kopią jednocześnie pod Nashville. MB3 ma dojechać we wrześniu. Wapień z rdzeni ma około 14 000 psi.",
    date: "8 września 2026",
    isoDate: "2026-09-08",
    img: "/img/nashville-prufrock-tasm.jpg",
    body: [
      {
        type: "p",
        text: "The Boring Company pokazała 8 września nagranie z drona: Prufrock-MB1 i Prufrock-MB2 idą jednocześnie pod Nashville. Wapień z obu tarcz leci na taśmach do wyrobiska na powierzchni. Trzecia maszyna, MB3, ma dojechać w tym miesiącu.",
      },
      {
        type: "img",
        src: "/img/nashville-prufrock-tasm.jpg",
        alt: "Taśmy TBC zsypują wapień z dwóch Prufrocków do wyrobiska w Nashville",
        caption: "Nagranie z drona TBC, 8 września. Wapień z MB1 i MB2 spada taśmami do dołu na powierzchni.",
      },
      {
        type: "p",
        text: "[Wpis TBC](https://x.com/boringcompany/status/2097171928381616339) mówi o wapieniu powyżej 10 000 psi. [Blog z 1 sierpnia](https://www.boringcompany.com/blogaugust2026) podaje wyniki rdzeni bliżej 14 000 psi, czyli około 96 MPa. To twardy kamień. Maszyny i tak idą, bo skała wychodzi z tunelu bez przerwy.",
      },
      { type: "x", id: "2097171928381616339", handle: "boringcompany" },
      {
        type: "p",
        text: "Każda tarcza kruszy front. Urobek jedzie taśmą przez wyrobisko, potem przez pionową kasetę i dwa ułożone jeden nad drugim przenośniki. Spada do dołu na powierzchni. Druga kaseta, pod MB2, ruszyła po starcie z Lot 16 przy kapitole stanu. Tunele leżą obok siebie. W sierpniu TBC podała odstęp około 6 m.",
      },
      {
        type: "p",
        text: "Bez wywozu skały tarcza staje. [Mike Baier](https://x.com/Mike__Baier/status/2082602930645995685) z TBC liczy, że co stopa postępu napełnia wywrotkę. System taśm ma trzy silniki po 125 KM, trzyma około 380 m pasa i może przerzucić do 680 ton na godzinę. Z 375 KM starcza na około 3,2 km tunelu, zanim trzeba dołożyć mocy.",
      },
      {
        type: "p",
        text: "MB1 kopie od wiosny i dostaje poprawki w biegu. [Blog z 1 czerwca](https://www.boringcompany.com/blogjune2026) opisuje rytm: część, która przyspiesza albo uszczelnia maszynę, bywa projektowana, robiona i montowana w 48 godzin. Lekcje z pierwszej tarczy weszły w MB2. MB2 ma o 15 proc. więcej mocy i noże tarczowe 17 cali zamiast 15,5. MB3 ma zabrać z obu to, co działa, i od pierwszego dnia iść sprawniej.",
      },
      {
        type: "p",
        text: "To budowa Music City Loop. System ma spiąć śródmieście i Music City Center z lotniskiem BNA. [Tennessean](https://www.tennessean.com/story/money/transportation/2026/08/05/nashville-music-city-loop-musk-tunnel-construction/91169861007/) pisze o około 10 minutach z lotniska do centrum i starcie dla pasażerów na początku 2027 r. W planach i projektach jest już ponad 40 stacji, w tym lotnisko, centrum kongresowe, JW Marriott oraz wieże Prime, Alcove i Paramount.",
      },
      {
        type: "p",
        text: "Stan Tennessee dał TBC zgodę na 25 mil tunelu w pasie TDOT. Umowę dzierżawy firma dostała 25 lutego. Budowę ogłasza jako prywatną. Pas drogowy to zgoda stanu na kopanie pod drogą, nie czek z podatków.",
      },
      {
        type: "p",
        text: "Dwie tarcze naraz sprawdzają, czy da się kopać równolegle i wywozić skałę bez postoju. We wrześniu do Nashville ma dojechać trzeci Prufrock.",
      },
    ],
  },
];
