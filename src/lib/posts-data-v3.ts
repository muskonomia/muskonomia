import type { Post } from "./posts";

export const postsV3: Post[] = [
  {
    slug: "spacex-fcc-15-wrzesnia-starlink-v3-operacyjne",
    kicker: "SpaceX",
    topic: "spacex",
    title:
      "SpaceX w wniosku do FCC stawia 15 września jako datę wystrzelenia na orbitę pierwszych operacyjnych Starlinków V3",
    excerpt:
      "We wniosku spektralnym do FCC data wdrożenia to 15 września. V3 ma dać ponad 10× pojemności. Starship, nie Falcon 9.",
    date: "1 września 2026",
    isoDate: "2026-09-01",
    img: "/img/v3-starship.jpg",
    body: [
      {
        type: "p",
        text: "W nowym wniosku do amerykańskiej FCC SpaceX podaje 15 września jako planowany termin umieszczenia na orbicie pierwszych operacyjnych satelitów Starlink V3. To data wdrożenia wpisana w papierach spektralnych.",
      },
      {
        type: "img",
        src: "/img/v3-doge.jpg",
        alt: "Grafika DogeDesignera: SpaceX stawia 15 września jako datę pierwszych operacyjnych Starlinków V3 na Starshipie",
        caption: "15 września. Data z wniosku, nie z konferencji. Źródło: @cb_doge.",
        contain: true,
      },
      {
        type: "img",
        src: "/img/v3-starship.jpg",
        alt: "Starship z logo Starlink nocą na stanowisku startowym",
        caption: "Starship z napisem Starlink. V3 nie wchodzi na Falcona 9.",
      },
      {
        type: "p",
        text: "V3 ma dać ponad 10 razy więcej przepustowości niż obecne satelity floty. Żeby tę pojemność sprowadzić na ziemię, SpaceX prosi o 60-dniową zgodę na pasmo 42,0–42,5 GHz dla łączy downlink ze stacji naziemnych w USA. Ma to oznaczać wyższe prędkości tam, gdzie światłowodu nie ma: farmy, szlaki, wsie.",
      },
      {
        type: "img",
        src: "/img/v3-skala.jpg",
        alt: "Porównanie satelitów Starlink V1.5, V2 i V3 obok astronauty",
        caption: "V1.5, V2, V3. Oficjalna skala SpaceX. V3 to już inna liga masy.",
        contain: true,
      },
      {
        type: "img",
        src: "/img/v3-orbita.jpg",
        alt: "Satelita Starlink V3 nad Ziemią z rozłożonymi panelami słonecznymi",
        caption: "V3 na orbicie. 1 Tbps w dół, ok. 10× downlinku obecnej floty.",
      },
      {
        type: "p",
        text: "Satelita V3 waży 2–2,5 tony. Falcon 9 wyniósłby na orbitę dwie takie sztuki. Starship – około 60. W lipcu, na 13. locie testowym, Starship krótko wypuścił 20 sztuk V3 na trajektorię suborbitalną; satelity połączyły się z siecią i spaliły się w atmosferze zgodnie z planem. Teraz wniosek dotyczy satelitów, które mają zostać na orbicie.",
      },
      {
        type: "img",
        src: "/img/v3-zrzut.jpg",
        alt: "Starship zrzuca satelity Starlink V3 na orbicie",
        caption: "Zrzut z ładowni. Lipiec był suborbitalny. Wrzesień ma zostawić je na orbicie.",
      },
      {
        type: "img",
        src: "/img/v3-talos.jpg",
        alt: "Porównanie: jeden Starship z 60 satelitami V3 kontra 24 starty Falcona 9 z V2 Mini",
        caption: "Jeden Starship, 60 V3, 60 Tbps. 24 Falcony 9, 625 Mini. Źródło: @TalosDreams.",
        contain: true,
      },
      {
        type: "p",
        text: "Cel, który SpaceX powtarza od miesięcy: internet z satelity bliższy światłowodowi. Czy V3 naprawdę tam dotrze, okaże się przy następnym starcie Starshipa. Najpewniej 15 września.",
      },
      {
        type: "p",
        text: "Źródła: [wpis DogeDesignera](https://x.com/cb_doge/status/2094546442841202943), [Starlink V3](https://www.starlink.com/updates/starlink-version-3-satellites).",
      },
    ],
  },
];
