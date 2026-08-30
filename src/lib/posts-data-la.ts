import type { Post } from "./posts";

export const postsLa: Post[] = [
  {
    slug: "spacex-oglasza-starbase-louisiana",
    kicker: "SpaceX",
    topic: "spacex",
    title: "SpaceX ogłasza Starbase Louisiana. 100 mld dolarów, 10 padów, tysiące startów rocznie",
    excerpt:
      "Vermilion Parish, Pecan Island. 125 tys. akrów. Budowa od 2027, pierwszy start 2029. Shotwell: własny gaz, własne paliwo, własny port.",
    date: "30 sierpnia 2026",
    isoDate: "2026-08-30",
    img: "/img/la-pady.jpg",
    body: [
      {
        type: "p",
        text: "We wtorek SpaceX i gubernator Luizjany Jeff Landry ogłosili Starbase Louisiana. To nie kolejny pad przy Boca Chica. To drugi Starbase: około 125 tysięcy akrów bagna w Vermilion Parish, na Pecan Island, na dawnym terenie Exxona. Inwestycja: 100 miliardów dolarów. Pięć kompleksów, dwa wieże na każdy — razem 10 platform startowych.",
      },
      {
        type: "img",
        src: "/img/la-logo.jpg",
        alt: "Oficjalna grafika SpaceX: Starbase, Louisiana",
        caption: "Oficjalny teaser @SpaceX. Nie render z Twittera — komunikat firmy.",
        contain: true,
      },
      {
        type: "video",
        src: "/video/starbase-louisiana.mp4",
        poster: "/img/la-pady.jpg",
        caption:
          "Film SpaceX: Starbase Louisiana ma obsłużyć tysiące lotów Starshipa rocznie. Orbita, Księżyc, Mars.",
      },
      {
        type: "p",
        text: "Budowa ma ruszyć w 2027. Pierwszy start: 2029. Firma mówi o 3 tysiącach miejsc pracy bezpośrednio i ponad 8 tysiącach pośrednio. Gwynne Shotwell rozrysowała, co ma tam stanąć: produkcja paliwa na miejscu, własna energetyka, głębokowodny port, hale montażu, prawdopodobnie lotnisko. „Dzięki zasobom Luizjany mamy gaz, którym te rakiety lecą na orbitę”.",
      },
      {
        type: "img",
        src: "/img/la-pady.jpg",
        alt: "Wizualizacja dziesięciu platform startowych Starbase Louisiana nad Zatoką Meksykańską",
        caption:
          "Dziesięć padów. Starbase w Teksasie ma FAA na 25 lotów Starshipa rocznie. Tu projektują pod tysiące.",
      },
      {
        type: "p",
        text: "Oficjalny cel to tysiące lotów Starshipa rocznie. W wpisach na X — w tym u @CosmosEuropa — pojawia się skala 30 startów dziennie. Tyle wychodzi, gdy 10 padów pracuje w rytmie, o jakim Musk mówi od lat: więcej niż 24 loty w 24 godziny. SpaceX w komunikacie trzyma się ostrożniejszego „thousands a year”. Różnica jest w kalendarzu, nie w kierunku.",
      },
      {
        type: "img",
        src: "/img/la-start.jpg",
        alt: "Wizualizacja nocnego startu Starshipa z kompleksu w Luizjanie",
        caption: "Nocny start z Zatoki. Render SpaceX, ten sam zestaw co w ogłoszeniu.",
      },
      {
        type: "p",
        text: "Landry na nagraniu, które podał DogeDesigner: „Prezydent wydał executive order — 1000 startów do 2030. Elon odpowiedział. Żeby wyprzedzić Chiny, trzeba miejsc tej skali”. Shotwell dokłada część, której nie widać na renderze: ochrona brzegu, rekultywacja bagien, partnerstwo z stanowym planem wybrzeża. Bo 125 tysięcy akrów to nie tylko pady. To bufor, żeby sąsiad nie dostał boomu przy każdym Raptorze.",
      },
      {
        type: "img",
        src: "/img/la-widok.jpg",
        alt: "Widok z lotu ptaka na planowany kompleks startowy Starbase Louisiana",
        caption:
          "Pecan Island, Vermilion Parish. Teren większy niż obecny Starbase razy sto.",
      },
      {
        type: "p",
        text: "Morgan Stanley, też przez DogeDesignera, policzył dalej: 15 padów w całej firmie, dwa starty z pada dziennie, prognoza 5800 lotów w 2040. Luizjana otwiera też południowe korytarze na orbity polarne — te, które liczą się przy orbitalnym compute.",
      },
      {
        type: "p",
        text: "Teksas zostaje kolebką. Luizjana ma być taśmą. Jeśli 10 padów naprawdę wstanie z bagna, pytanie nie będzie brzmiało „czy Starship lata często”. Będzie brzmiało: kto pierwszy zapełni te wieże ładunkiem.",
      },
      {
        type: "p",
        text: "Źródło: @SpaceX, 25 sierpnia 2026; gubernator Jeff Landry; @cb_doge; @CosmosEuropa.",
      },
    ],
  },
];
