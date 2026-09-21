import type { Post } from "./posts";

export const postsAs: Post[] = [
  {
    slug: "boring-austin-san-antonio-200-mph",
    kicker: "Boring",
    topic: "boring",
    title: "Boring pracuje nad tunelem Austin–San Antonio powyżej 200 mph",
    excerpt:
      "TBC bierze się za prosty tunel, prekursor Hyperloopa, Austin–San Antonio. Musk: powyżej 200 mph, ponad 320 km/h, poniżej 30 minut zamiast 2,5 godziny. Westgate–lotnisko: około trzy minuty.",
    date: "21 września 2026",
    isoDate: "2026-09-21",
    img: "/img/tbc-vegas.jpg",
    body: [
      {
        type: "p",
        text: "The Boring Company bierze się za prosty tunel, prekursor Hyperloopa, między Austin i San Antonio. Musk podał prędkość powyżej 200 mph, czyli ponad 320 km/h, i stały czas poniżej 30 minut zamiast nawet 2,5 godziny w korku.",
      },
      { type: "x", id: "2101732496396439751", handle: "elonmusk" },
      {
        type: "img",
        src: "/img/as-xf.jpg",
        alt: "Grafika: Austin–San Antonio, 200+ mph, 2,5 godziny do poniżej 30 minut",
        caption: "Austin–San Antonio. Powyżej 200 mph. Źródło: @XFreeze.",
        contain: true,
        href: "https://x.com/XFreeze/status/2101738029794648097",
      },
      { type: "x", id: "2101738029794648097", handle: "XFreeze" },
      {
        type: "p",
        text: "Firma odpowiada, że z parkingu w Austin do restauracji w San Antonio da się dojechać w około 30 minut, jeśli na obu końcach staną stacje Loop. Linia ma być bezpośrednia, bez przystanków po drodze.",
      },
      { type: "x", id: "2101743162838647183", handle: "boringcompany" },
      {
        type: "p",
        text: "Tego samego weekendu przy Westgate w Las Vegas wjazd do tunelu na lotnisko jest już prawie gotowy. Hotel liczy przejazd na około trzy minuty.",
      },
      {
        type: "img",
        src: "/img/as-wg1.jpg",
        alt: "Wjazd do tunelu Vegas Loop przy Westgate",
        caption: "Westgate. Wjazd na lotnisko prawie gotowy.",
      },
      {
        type: "img",
        src: "/img/as-wg2.jpg",
        alt: "Stacja Vegas Loop przy Westgate, dwa portale",
        caption: "Dwa portale. Kosmetyka i bramy jeszcze nie.",
      },
      { type: "x", id: "2101466375776833874", handle: "Mic_VegasSphere" },
      { type: "x", id: "2101839637610426618", handle: "LasVegasLocally" },
    ],
  },
];
