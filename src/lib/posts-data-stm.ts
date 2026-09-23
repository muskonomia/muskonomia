import type { Post } from "./posts";

export const postsStm: Post[] = [
  {
    slug: "superkomputer-starlink-to-jeszcze-nie-starmind",
    kicker: "Starmind",
    topic: "spacex",
    title: "Superkomputer na Starlinku to jeszcze nie Starmind",
    excerpt:
      "Musk o V3 brzmi jak zszycie Starlinka ze Starmindem. SpaceX składa fabrykę i platformę, a nie pełną stację i centrum danych w jednym kadłubie.",
    date: "23 września 2026",
    isoDate: "2026-09-23",
    img: "/img/starmind-okladka.jpg",
    body: [
      {
        type: "p",
        text: "Komentarz Elona Muska z 20 września 2026 o Starlinku V3 przekona wielu, że SpaceX zszywa Starlink i Starmind w jednego satelitę. Oba projekty korzystają z tych samych części: paneli, laserów, silników i dispensera Starshipa, więc fuzja brzmi wiarygodnie. SpaceX konsoliduje fabrykę i platformę, a nie przykleja pełnej stacji bazowej i pełnego centrum danych do jednego kadłuba.",
      },
      { type: "h2", text: "Co Musk powiedział 20 września" },
      {
        type: "p",
        text: "Tego dnia Musk odpowiedział na informację, że FCC przyjęła do rozpatrzenia wniosek SpaceX o 100 tys. satelitów Gen3 Starlink. Wniosek obejmuje dwie powłoki na bardzo niskiej orbicie Ziemi — 323–327,5 km i 473–477,5 km oraz inklinacje od 26° do 96,9° (SSO).",
      },
      { type: "x", id: "2101466638939832365", handle: "elonmusk" },
      {
        type: "img",
        src: "/img/starmind-okladka.jpg",
        alt: "Render satelity Starmind z rozłożonymi skrzydłami nad Ziemią",
        caption:
          "Render Starminda. Źródło: [SpaceX](https://x.com/SpaceX/status/2084723854534951218).",
        href: "https://www.spacex.com/spacexai/starmind",
      },
      {
        type: "img",
        src: "/img/starmind-skrzydla.jpg",
        alt: "Zbliżenie skrzydła i radiatora satelity Starmind",
        caption:
          "Skrzydło i radiator. Źródło: [SpaceX](https://x.com/SpaceX/status/2084723854534951218).",
        href: "https://x.com/SpaceX/status/2084723854534951218",
      },
    ],
  },
];
