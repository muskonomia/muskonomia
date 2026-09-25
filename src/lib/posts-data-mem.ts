import type { Post } from "./posts";

export const postsMem: Post[] = [
  {
    slug: "kampus-colossusa-memphis-2-gw",
    kicker: "xAI",
    topic: "xai",
    title: "Kampus Colossusa w Memphis ma mieć ponad 2 GW mocy",
    excerpt:
      "Hale Colossus I i II w Memphis i Southaven dostaną ponad 2 GW mocy. Magazyn energii przy kampusie będzie ponad trzy razy większy od największego w Europie.",
    date: "25 września 2026",
    isoDate: "2026-09-25",
    img: "/img/colossus-2-wizualizacja.jpg",
    body: [
      {
        type: "p",
        text: "SpaceX AI opublikował [stronę](https://www.spacex.com/Mid-South) o swoim ośrodku w Memphis i sąsiednim Southaven. Wynika z niej, że hale Colossus I i II zajmą łącznie ponad 230 tys. m², pomieszczą miliony procesorów graficznych i dostaną ponad 2 GW mocy. Firma szacuje swoje inwestycje w regionie od 2024 r. na ponad 90 mld dolarów (ok. 346 mld zł), a zatrudnia tam ponad 7500 osób i współpracuje z ponad 630 dostawcami.",
      },
      { type: "x", id: "2103512363886694847", handle: "SpaceXAIMemphis" },
      {
        type: "p",
        text: "Zasilanie ma zabezpieczyć największy w Stanach Zjednoczonych magazyn energii podłączony do sieci, o pojemności 3,3 GWh. Według firmy wystarczyłby do zasilania całego Memphis przez dwie godziny. Dla porównania największy działający magazyn bateryjny w Europie, szkocki [Coalburn 1](https://www.pv-magazine.com/2026/08/12/europes-largest-battery-comes-online-in-scotland/) uruchomiony w sierpniu, ma 1 GWh, a największy w Polsce, w [Turośni Kościelnej](https://green-news.pl/4783-greenvolt-magazyn-energii-turosn-koscielna-bialystok) pod Białymstokiem, ma 800 MWh. [Sawyer Merritt](https://x.com/SawyerMerritt/status/2103515250737758442) podaje, że magazyn przy Colossusie II składa się z Megapacków Tesli. SpaceX AI dokłada też 55 mln dolarów do budowy dwóch stacji dla miejskiego dostawcy energii MLGW i zapewnia, że superkomputer nie podniósł taryf dla mieszkańców, firm ani przemysłu.",
      },
      { type: "x", id: "2103515250737758442", handle: "SawyerMerritt" },
      {
        type: "p",
        text: "Za 360 mln dolarów firma buduje oczyszczalnię, która ma przerabiać do 38 mln litrów wody dziennie. Dzięki niej z warstwy wodonośnej, z której pije Memphis, ma ubywać rocznie ok. 14 mld litrów mniej. Colossus II pracuje w obiegu zamkniętym, więc zużycie świeżej wody w kampusie ma spaść nawet o 70 proc.",
      },
      {
        type: "p",
        text: "Tymczasowe turbiny gazowe są stopniowo wyłączane. Według firmy stężenie dwutlenku azotu przy pobliskich stacjach pomiarowych wynosi 6–9 ppb przy federalnym limicie 53 ppb. Porozumienie z władzami stanu Missisipi nakazuje usunąć pozostałe turbiny do lipca 2027 r., ale SpaceX AI zapowiada, że zrobi to wcześniej.",
      },
    ],
  },
];
