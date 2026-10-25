import type { Post } from "./posts";

export const postsTel: Post[] = [
  {
    slug: "grok-bot-telefon-kalendarz-przypomnienia-kontakty",
    kicker: "Grok",
    topic: "xai",
    title: "Grok Bot dostał dostęp do kalendarza, przypomnień i kontaktów w telefonie",
    excerpt:
      "Grok Bot może korzystać z kalendarza, przypomnień, kontaktów, wiadomości i innych aplikacji w telefonie. Funkcja trafia na iOS i Androida, a każdą aplikację włącza się osobno.",
    date: "25 października 2026",
    isoDate: "2026-10-25",
    img: "/img/grok-bot-telefon-okladka.jpg",
    credit:
      "Grok Bot prosi o dostęp do aplikacji w telefonie. Grafika: [x.com/@bot](https://x.com/bot/status/2113393684209176718)",
    body: [
      {
        type: "p",
        text: "Asystent może od czwartku korzystać z aplikacji w smartfonie, w tym z kalendarza, przypomnień i kontaktów, [ogłosiło oficjalne konto @bot](https://x.com/bot/status/2113393684209176718) wieczorem 22 października. Funkcja trafia do użytkowników aplikacji na iOS i Androida.",
      },
      { type: "x", id: "2113393684209176718", handle: "bot" },
      {
        type: "p",
        text: "Grok Bot może m.in. wysyłać wiadomości, dodawać wydarzenia w kalendarzu, ustawiać przypomnienia i sterować urządzeniami w aplikacji Dom. Dostęp do każdej aplikacji użytkownik włącza osobno.",
      },
      {
        type: "img",
        src: "/img/grok-bot-telefon-uprawnienia-zblizenie.jpg",
        alt: "Ekran zgód w aplikacji Grok Bot",
        caption:
          "Ekran zgód w aplikacji Grok Bot. Grafika: [x.com/@bot](https://x.com/bot/status/2113393684209176718)",
      },
      {
        type: "p",
        text: "„Grok Bot integruje się teraz z aplikacjami w Twoim telefonie” – [podał dalej ogłoszenie Elon Musk](https://x.com/elonmusk/status/2113444022408937913). W [kolejnym wpisie](https://x.com/elonmusk/status/2113506269260595431) nazwał bota „niesamowitym menedżerem życia i biznesu”, który „może pomóc niemal we wszystkim”.",
      },
      { type: "h2", text: "1Password i raporty" },
      {
        type: "p",
        text: "Kilka godzin wcześniej, również w czwartek, [@bot ogłosił](https://x.com/bot/status/2113332983226831339) połączenie z 1Password. Użytkownik zatwierdza loginy, które chce udostępnić, a bot loguje się za niego. Ta funkcja ma trafiać do użytkowników stopniowo w ciągu kilku dni.",
      },
      {
        type: "img",
        src: "/img/grok-bot-1password-integracja.jpg",
        alt: "Grok Bot łączy się z 1Password",
        caption:
          "Grok Bot łączy się z 1Password. Grafika: [x.com/@bot](https://x.com/bot/status/2113332983226831339)",
      },
      {
        type: "p",
        text: "W środę 21 października [@bot pokazał](https://x.com/bot/status/2112992872857252082), że Grok Bot tworzy raporty, notatki i panele z danymi. Taką stronę można edytować razem z botem albo zlecić mu jej bieżące aktualizowanie.",
      },
      {
        type: "img",
        src: "/img/grok-bot-raporty-strony.jpg",
        alt: "Raporty i panele tworzone przez Grok Bota",
        caption:
          "Raporty i panele tworzone przez Grok Bota. Kadr z wideo [x.com/@bot](https://x.com/bot/status/2112992872857252082)",
      },
    ],
  },
];
