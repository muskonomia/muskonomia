import type { Post } from "./posts";

export const postsScout: Post[] = [
  {
    slug: "scout-motors-pokazal-materialy-i-kolory",
    kicker: "Inne",
    topic: "inne",
    title: "Scout Motors pokazał materiały i kolory. I ujawnił, czego naprawdę chcą klienci",
    excerpt:
      "Ponad 160 tys. rezerwacji. 87% wybiera generator benzynowy i 805 km zamiast czystego BEV. Traveler i Terra, produkcja 2027–2028.",
    date: "22 sierpnia 2026",
    isoDate: "2026-08-22",
    img: "/img/scout-para.jpg",
    body: [
      {
        type: "p",
        text: "Scout Motors, marka grupy VW, opublikowała nowy film o materiałach i kolorach nadchodzących modeli. Przy okazji przypomniała kluczowe dane techniczne Traveler (SUV) i Terra (pickup) oraz ujawniła ciekawą statystykę z rezerwacji.",
      },
      {
        type: "video",
        src: "/video/scout-materialy.mp4",
        poster: "/img/scout-poster.jpg",
        caption: "Oficjalny materiał Scout Motors o kolorach i wykończeniach. Źródło: @SawyerMerritt.",
      },
      {
        type: "img",
        src: "/img/scout-para.jpg",
        alt: "Scout Traveler SUV i Scout Terra pickup na wzgórzach",
        caption: "Traveler z przodu, Terra z tyłu. Ten sam stack: 800 V, NACS, opcjonalny generator.",
      },
      {
        type: "p",
        text: "Oba modele mają podobne założenia.",
      },
      { type: "h2", text: "Scout Traveler (SUV)" },
      {
        type: "ul",
        items: [
          "Zasięg do 563 km (czysto elektryczny) lub do 805 km z opcjonalnym generatorem benzynowym",
          "Holowanie do 3175 kg",
          "0–96 km/h nawet w 3,5 s",
          "Architektura 800 V, NACS, ładowanie do 350 kW, dwukierunkowe",
          "Opcja 35-calowych opon, 30 cm prześwitu, możliwość brodzenia w 90 cm wody",
        ],
      },
      {
        type: "img",
        src: "/img/scout-traveler.jpg",
        alt: "Pomarańczowy Scout Traveler SUV w terenie",
        caption: "Traveler: SUV, 563 km na prądzie albo 805 km z Harvesterem na pokładzie.",
      },
      { type: "h2", text: "Scout Terra (pickup)" },
      {
        type: "ul",
        items: [
          "Zasięg taki sam jak w Travelerze",
          "Holowanie do 4535 kg",
          "0–96 km/h nawet w 3,5 s",
          "Ławka z przodu",
          "Skrzynia 1,68 m z gniazdami 120 V i 240 V",
          "Te same możliwości terenowe co Traveler",
        ],
      },
      {
        type: "img",
        src: "/img/scout-terra.jpg",
        alt: "Szary Scout Terra pickup, widok z tyłu",
        caption: "Terra: 10 000 funtów holowania i skrzynia z 240 V. Pickup, nie crossover z klapą.",
      },
      {
        type: "img",
        src: "/img/scout-wnetrze.jpg",
        alt: "Wnętrze Scouta: skóra, drewno, ławka z przodu",
        caption: "Materiały i kolory, o których jest film: skóra, drewno, fizyczne przełączniki, ławka z przodu.",
      },
      {
        type: "p",
        text: "Najciekawsze jest jednak to, co wynika z rezerwacji. Scout Motors zebrał już ponad 160 tys. zamówień. Aż 87% klientów wybiera wersję z generatorem benzynowym i zasięgiem 805 km zamiast czysto elektrycznej. Produkcja ma ruszyć w latach 2027–2028.",
      },
      {
        type: "p",
        text: "To jasny sygnał, że nawet wśród osób zainteresowanych nową, „elektryczną” marką terenową, realna potrzeba większego zasięgu i braku strachu przed brakiem ładowarki nadal wygrywa z czystym BEV.",
      },
      {
        type: "p",
        text: "Widać, że rynek ciężkich pojazdów terenowych i użytkowych wciąż bardzo mocno stawia na elastyczność. 87% to nie jest drobna preferencja — to dominacja. Scout najwyraźniej dobrze wyczuł, że w tym segmencie generator na pokładzie wciąż jest dla wielu klientów ważniejszy niż pełna elektryfikacja.",
      },
    ],
  },
];
