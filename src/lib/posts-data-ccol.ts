import type { Post } from "./posts";

export const postsCcol: Post[] = [
  {
    slug: "cybercaby-pojechaly-kolumna-przez-centrum-austin",
    kicker: "Tesla",
    topic: "tesla",
    title: "Cybercaby pojechały kolumną przez centrum Austin",
    excerpt:
      "Dzień przed wydarzeniem Teslarati nagrało kilka złotych Cybercabów jeden za drugim w downtown. Teksas dopisał 45 sztuk do rejestru komercyjnego. Aplikacja Robotaxi 26.8.0 dostała wsparcie Cybercaba.",
    date: "3 września 2026",
    isoDate: "2026-09-03",
    img: "/img/ccol-meme.jpg",
    contain: true,
    body: [
      {
        type: "p",
        text: "Dzień przed oficjalnym wydarzeniem w Austin Tesla pokazała na ulicach więcej niż pojedynczy prototyp. Teslarati opublikowało nagranie, na którym kilka złotych Cybercabów jedzie jeden za drugim przez downtown. Źródło: [Teslarati](https://x.com/Teslarati/status/2095208257686048938).",
      },
      {
        type: "video",
        src: "/video/cybercab-kolumna-austin.mp4",
        poster: "/img/ccol-film.jpg",
        caption: "Kolumna złotych Cybercabów przez centrum Austin. Źródło: @Teslarati.",
      },
      {
        type: "img",
        src: "/img/ccol-kolumna.jpg",
        alt: "Kilka złotych Cybercabów Tesli jeden za drugim przy chodniku w Austin",
        caption: "Nie jeden prototyp. Kolumna.",
      },
      {
        type: "p",
        text: "31 sierpnia teksański DMV dopisał **45** Cybercabów do rejestru pojazdów komercyjnych. cms.gettesla.com podał tę liczbę jako pierwszy twardy trop, że to nie są już tylko samochody testowe przy fabryce. Produkcja ruszyła w drugim kwartale, jazdy pracownicze w lipcu. Źródło: [cms.gettesla.com](https://cms.gettesla.com/).",
      },
      {
        type: "img",
        src: "/img/ccol-capitol.jpg",
        alt: "Złoty Cybercab Tesli na ulicy w Austin, w tle kapitol Teksasu",
        caption: "Downtown Austin. Kapitol w tle.",
      },
      {
        type: "img",
        src: "/img/ccol-przod.jpg",
        alt: "Przód złotego Cybercaba Tesli bez kierownicy, na drodze w Austin",
        caption: "Dwa miejsca. Bez pedałów. Bez kierownicy.",
      },
      {
        type: "p",
        text: "Sama usługa Robotaxi w Austin działa od dawna, ale na Modelu Y. Dallas, Houston, Miami, Orlando i Tampa też jeżdżą na Y-kach. Cybercab ma dołączyć do tej samej aplikacji jako auto zbudowane od zera pod przejazd bez kierowcy: dwa miejsca, bez pedałów, bez kierownicy. Aplikacja Robotaxi **26.8.0** na iOS dostała w changelogu wpis o wsparciu Cybercaba właśnie w Austin. Tesla Newswire to wychwycił. Źródło: [Tesla Newswire](https://x.com/TeslaNewswire/status/2095430222640222425).",
      },
      {
        type: "img",
        src: "/img/ccol-app.jpg",
        alt: "Changelog aplikacji Tesla Robotaxi 26.8.0: Supports Cybercab in Austin, Texas",
        caption: "Robotaxi 26.8.0 na iOS. Supports Cybercab in Austin, Texas. Źródło: @TeslaNewswire.",
        contain: true,
      },
      {
        type: "img",
        src: "/img/ccol-palo.jpg",
        alt: "Złoty Cybercab przed siedzibą Tesla Engineering w Palo Alto",
        caption: "Ten sam dzień, inny brzeg. Cybercab przed HQ w Palo Alto. Źródło: @cb_doge.",
      },
      {
        type: "p",
        text: "Wszyscy ze zniecierpliwieniem czekamy, co nam dzisiaj Tesla pokaże na specjalnym wydarzeniu.",
      },
    ],
  },
];
