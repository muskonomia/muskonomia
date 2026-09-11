import type { Post } from "./posts";

export const postsCp: Post[] = [
  {
    slug: "cursor-odpala-projects",
    kicker: "Cursor",
    topic: "inne",
    title: "Cursor odpala Projects z koordynatorem jak Grok Bot",
    excerpt:
      "10 września Cursor puścił Projects. Jeden koordynator trzyma wątek przez miesiące, rozdaje robotę podagentom i działa jak Grok Bot, tylko w repozytorium.",
    date: "11 września 2026",
    isoDate: "2026-09-11",
    img: "/img/cursor-projects-okladka.png",
    contain: true,
    body: [
      {
        type: "p",
        text: "10 września Cursor puścił Projects. Zamiast nowego czatu na każde zadanie siada się z jednym koordynatorem w wątku, który zostaje na miesiące. Firma podaje, że nowi użytkownicy mergują o 30 proc. więcej PR-ów, a ci, którzy siedzą głównie w Projects, sześć razy więcej. W [ogłoszeniu](https://x.com/cursor_ai/status/2098162488013455784) porównała to wprost do Grok Bota: agent jest zawsze włączony, rozdaje robotę podagentom i z czasem się uczy.",
      },
      {
        type: "img",
        src: "/img/cursor-projects-okladka.png",
        alt: "Kadr z ogłoszenia Cursora: Introducing Projects",
        caption: "Introducing Projects. Źródło: @cursor_ai.",
        contain: true,
        href: "https://x.com/cursor_ai/status/2098162488013455784",
      },
      { type: "x", id: "2098162488013455784", handle: "cursor_ai" },
      {
        type: "p",
        text: "Koordynator sam kodu nie pisze. Układa plan, oddelegowuje implementację i wraca z gotowym kawałkiem do sprawdzenia. Project leci na własnym komputerze w chmurze, więc zamknięcie laptopa nic nie przerywa. Jak trzeba odpalić coś lokalnie, stawia agenta na twojej maszynie.",
      },
      {
        type: "img",
        src: "/img/cp-koord.jpg",
        alt: "Wątek koordynatora Projects: czat, plan, agenci w tle",
        caption: "Jeden wątek, jeden koordynator. Kod piszą podagenci.",
        contain: true,
        href: "https://x.com/cursor_ai/status/2098162488013455784",
      },
      {
        type: "p",
        text: "W projekcie „Design System” notatka z audytu liczy 386 skasowań, 161 przepisań, około 6,5 tys. linii i pięć zaproponowanych PR-ów. Polecenie dla koordynatora: słuchaj mergowanych zgłoszeń i flaguj odejścia od systemu designu. Współautorką notki o starcie jest Fredrika Lindh z etykietą xAI, obok Alexiego Robbinsa.",
      },
      {
        type: "img",
        src: "/img/cp-plan.jpg",
        alt: "Koordynator układa plan: research, implementacja, testy, review",
        caption: "Plan, potem delegacja. Źródło: @cursor_ai.",
        contain: true,
      },
      {
        type: "p",
        text: "Agenci w jednym Project dzielą pliki. Notatki, plany, dema i to, czego jeden już się nauczył o repozytorium, synchronizują się między chmurą a komputerem. Jeśli ktoś raz rozgryzł, jak testować serwis, kolejny agent nie zaczyna od zera.",
      },
      {
        type: "img",
        src: "/img/cp-pliki.jpg",
        alt: "Wspólne pliki Projectu: notatki, plan, artefakty agentów",
        caption: "Wspólne pliki. Kolejny agent nie zaczyna od zera.",
        contain: true,
      },
      {
        type: "p",
        text: "Wewnątrz firmy narzędzie chodziło już od kilku miesięcy. Migracje po kilkaset PR-ów, pilnowanie systemu designu, wreszcie sam start Projects. Blog Cursora mówi o delegowaniu do tysięcy podagentów. Jeden inżynier od systemu designu dochodzi do 20–100 PR-ów dziennie. Koordynator skanuje nowe zgłoszenia, wyciąga komponenty, które powinny wpaść do systemu, i dokłada regułę linta, gdy ten sam błąd wraca drugi raz.",
      },
      {
        type: "img",
        src: "/img/cp-pamiec.jpg",
        alt: "Agenci w Project dzielą pamięć i artefakty między chmurą a laptopem",
        caption: "Pamięć i artefakty idą za Projectem, nie za czatem.",
        contain: true,
        href: "https://x.com/cursor_ai/status/2098162491754741780",
      },
      {
        type: "p",
        text: "Koordynator nie czeka na nowe polecenie. Ustawia przypomnienia, idzie według harmonogramu, łapie padające CI przy PR-ach i nasłuchuje zgłoszeń na Slacku. Kanał z bugami sam odpala delegację.",
      },
      {
        type: "video",
        src: "/img/cp-sub.mp4",
        poster: "/img/cp-sub.jpg",
        caption: "Przypomnienia, harmonogram, CI, Slack. Źródło: @cursor_ai.",
        href: "https://x.com/cursor_ai/status/2098162490026697134",
      },
      {
        type: "p",
        text: "Alexi Robbins, współautor notki, dziś w SpaceXAI, rozdzielił role krótko. Projects to narzędzie pod kod. Grok Bot lepiej niesie pracę na wiedzy. W środku firmy ludzie używają obu. Osobno dopisał, że główny agent w Project potrafi zestawić dziesiątki albo setki podagentów, a interfejs pokazuje ich maszyny i pliki.",
      },
      {
        type: "p",
        text: "Fatih Arslan z SpaceXAI opisał ten sam układ od drugiej strony. Ma kilka Projectów. Każdy koordynator ogarnia dziesiątki agentów, stawia ich lokalnie, zdalnie albo w chmurze. We własnej notce trzyma dla billing, storage, fleet i hub osobne `coordinator-notes.md`. Koordynatorzy przekazują sobie robotę plikami w gicie, a nie nowym czatem.",
      },
      {
        type: "p",
        text: "Projects jest w wersji testowej i od 10 września wchodzi do wszystkich.",
      },
    ],
  },
];
