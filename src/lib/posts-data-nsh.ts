import type { Post } from "./posts";

export const postsNsh: Post[] = [
  {
    slug: "prufrock-mb3-nashville",
    kicker: "Boring Company",
    topic: "boring",
    title: "Trzecia tarcza Prufrock-MB3 jest już w Nashville",
    excerpt:
      "The Boring Company przywiozła do Nashville trzecią tarczę Prufrock-MB3. Czwarta, Prufrock-MB4, ma dotrzeć w ciągu ośmiu tygodni. Firma rekrutuje na Music City Loop, spotkanie 24 listopada.",
    date: "18 listopada 2026",
    isoDate: "2026-11-18",
    img: "/img/nashville-okladka-1600x900.jpg",
    credit: "Źródło: The Boring Company (@boringcompany)",
    xPostId: "2123006253982982471",
    body: [
      {
        type: "p",
        text: "Czwarta, Prufrock-MB4, ma dotrzeć w ciągu ośmiu tygodni. The Boring Company rekrutuje na budowę Music City Loop i zaprasza na spotkanie we wtorek 24 listopada.",
      },
      { type: "h2", text: "Trzecia i czwarta tarcza" },
      {
        type: "p",
        text: "[Firma ogłosiła](https://x.com/boringcompany/status/2122814382363308535) 17 listopada, że Prufrock-MB3 już stoi na miejscu. To trzecia tarcza, która pracuje przy Music City Loop. Prufrock-MB4 dojedzie w ciągu następnych ośmiu tygodni.",
      },
      { type: "x", id: "2122814382363308535", handle: "boringcompany" },
      {
        type: "p",
        text: "Wcześniej, 1 października, [blog firmy](https://boringcompany.com/blogoct2026) podawał, że MB1 i MB2 już drążą, MB3 ruszy pod koniec października, a MB4 jest w budowie. Cel był wtedy taki: cztery maszyny pod ziemią do końca roku. Nowy komunikat przesuwa termin MB4 na „w ciągu ośmiu tygodni” od 17 listopada. We wrześniu [pisaliśmy](https://muskonomia.pl/blog/dwa-prufrocki-pod-nashville), że MB1 i MB2 kopią naraz, a MB3 „ma dojechać w tym miesiącu”.",
      },
      {
        type: "p",
        text: "Trzecia i czwarta tarcza oznaczają, że na tej samej budowie może pracować więcej maszyn jednocześnie.",
      },
      {
        type: "img",
        src: "/img/nashville-timeline-mb1-mb4-1600x900.jpg",
        alt: "Cztery maszyny Music City Loop: Prufrock-MB1 do MB4",
        caption: "Stan maszyn Music City Loop według The Boring Company. Opracowanie: muskonomia.pl",
      },
      { type: "h2", text: "Music City Loop" },
      {
        type: "p",
        text: "[Music City Loop](https://www.boringcompany.com/projects/music-city-loop) to początkowy system o długości około 40 km. Łączy śródmieście, Music City Center i Lower Broadway z West End Avenue oraz lotniskiem BNA. Z lotniska na Lower Broadway ma jechać około 10 minut.",
      },
      {
        type: "p",
        text: "System finansuje w całości The Boring Company. Na budowę i eksploatację nie idą pieniądze podatników. Pasażerowie jadą flotą Tesli, na start Model Y i Model X, z kierowcami Loop. Nie ma przystanków po drodze.",
      },
      {
        type: "p",
        text: "Trasa lotniskowa biegnie od Lot 16 przy kapitole stanu, Rosa L. Parks Boulevard, 8th Avenue South, Lafayette Street, Murfreesboro Pike i Donelson Pike, i kończy się w odległości do około 30 m od BNA. Trasa Broadway idzie od Lower Broadway wzdłuż West End Avenue obok Centennial Park i Vanderbilt, a kończy się w okolicach I-440. Dodatkowe stacje firma wciąż ustala.",
      },
      {
        type: "img",
        src: "/img/nashville-trasa-schemat-1600x900.jpg",
        alt: "Oficjalny przebieg tras Music City Loop",
        caption: "Oficjalny przebieg tras Music City Loop. Opracowanie: muskonomia.pl",
      },
      {
        type: "p",
        text: "Koszt całkowity firma określa jako „kilkaset milionów dolarów”. Więcej o wcześniejszych etapach i centrum operacyjnym w Bastrop pisaliśmy [w tym tekście](https://muskonomia.pl/blog/boring-company-bastrop-centrum-operacyjne-music-city-loop-wilson).",
      },
      { type: "h2", text: "Rekrutacja" },
      {
        type: "p",
        text: "Firma szuka ludzi do Engineering, Ops, Weld, Maintenance, Electrical, Facilities, Safety i Security. Spotkanie rekrutacyjne odbędzie się we wtorek 24 listopada w Nashville. Zgłoszenia idą przez [formularz](https://www.boringcompany.com/applynashville).",
      },
      {
        type: "img",
        src: "/img/nashville-rekrutacja-1600x900.jpg",
        alt: "Osiem działów rekrutacji The Boring Company w Nashville",
        caption: "Działy z oficjalnego wpisu The Boring Company. Opracowanie: muskonomia.pl",
      },
      {
        type: "table",
        headers: ["Element", "Dane"],
        rows: [
          ["Maszyny", "Prufrock-MB3 na miejscu; Prufrock-MB4 w ciągu 8 tygodni"],
          ["Długość trasy", "ok. 40 km"],
          ["Czas z BNA na Lower Broadway", "ok. 10 min"],
          ["Finansowanie", "w całości prywatne, bez pieniędzy podatników na budowę i eksploatację"],
          ["Spotkanie rekrutacyjne", "wtorek 24 listopada 2026, Nashville"],
        ],
      },
    ],
  },
];
