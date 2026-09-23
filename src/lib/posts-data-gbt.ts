import type { Post } from "./posts";

export const postsGbt: Post[] = [
  {
    slug: "fsd-w-polsce-plus-grok-bot",
    kicker: "Grok Bot",
    topic: "tesla",
    title: "FSD w Polsce plus Grok Bot to będzie niesamowity tandem",
    excerpt:
      "Tesla 22 września udostępniła Grok Bota w kabinie. W Polsce FSD jeszcze nie ma; Bot pewnie będzie pierwszy, bo nie czeka na przepisy państwowe.",
    date: "23 września 2026",
    isoDate: "2026-09-23",
    xPostId: "2102640264451932316",
    img: "/img/grok-bot-fsd-kabina.jpg",
    contain: true,
    body: [
      {
        type: "p",
        text: "Tesla 22 września udostępniła Grok Bota w kabinie. Na filmie z Cybertrucka widzimy, jak asystent czyta skrzynkę, sprawdza kalendarz i dopisuje godzinę zameldowania do planu wyjazdu nad Tahoe. Ręce zostają wolne.",
      },
      {
        type: "img",
        src: "/img/grok-bot-fsd-kabina.jpg",
        alt: "Ekran Cybertrucka: Grok w kabinie dopisuje rezerwację do planu wyjazdu",
        caption:
          "Kadr z filmu Tesli. Źródło: [@Tesla](https://x.com/Tesla/status/2102430656349544590).",
        contain: true,
        href: "https://x.com/Tesla/status/2102430656349544590",
      },
      {
        type: "p",
        text: "W Polsce na ten moment jeszcze nie mamy FSD, ale Grok Bot pewnie będzie pierwszy, bo nie musi czekać na żadne państwowe przepisy, żeby zostać udostępniony. Tam, gdzie FSD już jest, tandem zrobi cuda. Powyższy filmik pokazywał zamawianie kawy, ale możemy sobie wyobrazić, jak Bot zadziała przy planowanym serwisie, wymianie opon albo przy sprawie, którą w ostatniej chwili wypadnie załatwić.",
      },
    ],
  },
];
