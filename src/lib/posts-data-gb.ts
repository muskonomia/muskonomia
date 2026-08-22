import type { Post } from "./posts";

export const postsGb: Post[] = [
  {
    slug: "grok-bot-ma-wlasny-komputer-i-dziala-gdy-ty-spisz",
    kicker: "xAI",
    topic: "xai",
    title: "Grok Bot ma własny komputer. I działa, gdy Ty śpisz",
    excerpt:
      "Bot ma własny komputer w chmurze. Zamykasz laptopa, a on dalej pracuje. SuperGrok Plus, Cursor Pro+ i Teams — plus darmowy trial.",
    date: "22 sierpnia 2026",
    isoDate: "2026-08-22",
    img: "/img/gb-poster.jpg",
    body: [
      {
        type: "p",
        text: "Większość ludzi wciąż traktuje Grok Bota jak zwykły czat. A to błąd. Najważniejsza rzecz, którą wielu pomija: bot ma własny komputer w chmurze. Zamykasz laptopa, a on dalej pracuje.",
      },
      {
        type: "video",
        src: "/video/grok-bot-komputer.mp4",
        poster: "/img/gb-poster.jpg",
        loop: true,
        caption: "Animacja @bot: Grok Bot ma własny komputer. Źródło: x.com/bot.",
      },
      {
        type: "p",
        text: "Przygotowałem konkretną listę rzeczy, które warto ustawić w pierwszej kolejności:",
      },
      {
        type: "ul",
        items: [
          "Skrzynka mailowa ogarnięta przez noc — posortowana, z gotowymi draftami i trzema najważniejszymi wiadomościami na górze.",
          "Wszystkie zaległe follow-upy, o których zapomniałeś (lead, który zamilkł, niezapłacona faktura, propozycja z marca).",
          "Jeden podcast → tydzień contentu (wątek, klipy, napisy, kolejka).",
          "Listy leadów budowane, gdy śpisz.",
          "CRM wreszcie posprzątany (duplikaty, puste pola — te, których sam nigdy nie ogarniesz).",
          "Research, który ciągle odkładasz na jutro — 40 kart, jedna strona, źródła na dole.",
          "Koniec miesiąca: paragony, dziwne obciążenia, faktury wychodzące 1.",
          "Rzeczy, o których ciągle zapominasz sprawdzić (cena konkurenta, słowo kluczowe, ogłoszenie).",
          "Podróż, którą „planujesz” od kwietnia — loty i hotele porównane, koszyk gotowy.",
          "Jedna stała rutyna ustawiona raz (raport poniedziałkowy, piątkowe sprzątanie).",
        ],
      },
      {
        type: "p",
        text: "Bot zawsze zatrzymuje się i pyta, zanim zrobi coś realnego. Nic nie wychodzi bez Twojej zgody.",
      },
      {
        type: "p",
        text: "Jeszcze dwa dni temu dostęp był ograniczony do drogiego planu. Teraz Grok Bot jest dostępny dla subskrybentów SuperGrok Plus, Cursor Pro+ i Cursor Teams. Jest też darmowy trial z ograniczonym limitem.",
      },
      {
        type: "p",
        text: "Masz weekend. On pracuje, gdy Ty śpisz. Idź zbuduj to, co ciągle odkładasz.",
      },
      {
        type: "p",
        text: "Jest to system, który realnie wykonuje pracę w tle, gdy Ty jesteś offline. I właśnie dlatego warto poświęcić te dwie godziny w weekend, żeby go dobrze ustawić.",
      },
    ],
  },
];
