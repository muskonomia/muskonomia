import type { Post } from "./posts";

export const postsG175: Post[] = [
  {
    slug: "grok-bot-175-proc-wiekszy-ruch-spacexai",
    kicker: "Grok Bot",
    topic: "xai",
    title: "Grok Bot obsłużył 175 proc. większy ruch w SpaceXAI",
    excerpt:
      "Połączenie z Cursorem podniosło zgłoszenia do wsparcia o 175 proc. SpaceXAI nie zatrudniło nikogo nowego. Grok Bot zamyka sprawę za 0,20–0,30 dolara.",
    date: "23 września 2026",
    isoDate: "2026-09-23",
    img: "/img/g175-phases.jpg",
    body: [
      {
        type: "p",
        text: "Po 14 sierpnia Cursor wszedł w skład SpaceXAI. Dwa zespoły wsparcia złożyły się wokół szerszej palety produktów, a w kolejce czekał start Grok Bota. We [wpisie z 22 września](https://x.ai/news/grok-bot-customer-support) firma podaje skutek: zgłoszeń przybyło o 175 proc., etatów w supporcie — zero. Bez Bota, pisze SpaceXAI, mogłoby dojść około 200 osób.",
      },
      { type: "x", id: "2102460785649959362", handle: "bot" },
      {
        type: "img",
        src: "/img/g175-phases.jpg",
        alt: "Trzy fazy wdrożenia Grok Bota we wsparciu: Crawl, Walk i Run",
        caption:
          "Trzy fazy: najpierw podłączenie i cień, potem rutyna z człowiekiem w pętli, na końcu autonomia. Źródło: [SpaceXAI](https://x.ai/news/grok-bot-customer-support).",
        href: "https://x.ai/news/grok-bot-customer-support",
      },
      { type: "h2", text: "Koszt" },
      {
        type: "p",
        text: "Tradycyjne narzędzia AI biorą 1–4 dolary za rozwiązanie, około 3,79–15,17 zł po średnim kursie NBP z 22 września (3,7934 zł za dolara). Grok Bot schodzi do 0,20–0,30 dolara, około 0,76–1,14 zł. Płaci się za zużycie, które i tak siedzi w planie. SpaceXAI pisze, że do tej stawki doszli drobnymi optymalizacjami.",
      },
      { type: "h2", text: "Jak to weszło" },
      {
        type: "p",
        text: "Zamiast rekrutacji puściła bota na te same narzędzia, których używa zespół. Najpierw podłączyli Plain do biletów i Linear do błędów. Bot udawał właściciela zgłoszenia, ale pisał tylko notatki wewnętrzne. Każdy zapis wymagał człowieka. Potem doszły ślady i oceny każdego przebiegu. Bot sam oglądał, gdzie zszedł z kursu. Pierwszego dnia ludzie sprawdzali ton, treść i to, czy trzyma się instrukcji. Pod koniec dnia zaczął odpowiadać klientom sam. Zakres rósł stopniowo, od najprostszych spraw.",
      },
      { type: "h2", text: "Od wejścia do zamknięcia" },
      {
        type: "p",
        text: "Większość czasu na zgłoszeniu schodzi na szukanie, sprawdzanie i próby. Bot wchodzi w każde zgłoszenie w chwili, gdy wpada do systemu, zanim człowiek je otworzy. Żeby nie palić tokenów, częste sprawy są już sklasyfikowane. Prosta odpowiedź z centrum pomocy nie uruchamia długiego śledztwa.",
      },
      {
        type: "p",
        text: "Znany błąd dopisuje do istniejącego zgłoszenia w Linear albo zakłada nowe. To samo przy błędzie w Datadogu. Do inżynierów idzie nagranie, na którym bot sam odtwarza problem. Ton wziął z ponad miliona rozmów z klientami. Pyta tylko wtedy, gdy odpowiedzi nie ma już w logach. Ma pchać sprawę do zamknięcia, nie do kolejnej wymiany zdań.",
      },
      {
        type: "img",
        src: "/img/g175-refund.jpg",
        alt: "Przykład rozmowy, w której bot sprawdza i wykonuje zwrot",
        caption:
          "Przykład ze strony SpaceXAI: bot sprawdza zwrot i sam go wykonuje. 99 proc. wniosków o zwrot zamyka się bez człowieka. Źródło: [SpaceXAI](https://x.ai/news/grok-bot-customer-support).",
        href: "https://x.ai/news/grok-bot-customer-support",
        contain: true,
      },
      {
        type: "p",
        text: "Bot robi też rzeczy za klienta. Przy zwrotach dostał jasną instrukcję. 99 proc. wniosków zamyka bez człowieka.",
      },
      { type: "h2", text: "Kolejka" },
      {
        type: "p",
        text: "Zamknięcie jednej sprawy to nie cała robota. Bot patrzy na napływ, przesuwa priorytety, przepisuje właściciela według pilności i ostrzega, gdy zbliża się limit czasu odpowiedzi. Gdy ten sam problem przekroczy próg, sam ogłasza incydent. Patrzy też na X: nastrój i powtarzające się zgłoszenia od ludzi, którzy w ogóle nie piszą do wsparcia.",
      },
      {
        type: "p",
        text: "Przy tej skali sam alarm od wolumenu robi szum. Bot najpierw sprawdza, czy skok to realny problem, i zaczyna śledztwo. Dopiero potem woła zespół.",
      },
      { type: "h2", text: "Co z tego wychodzi" },
      {
        type: "p",
        text: "Bot czyta rozmowy ludzi i botów, wskazuje, co poprawić, i podsuwa coaching konkretnym osobom. Co tydzień kierownictwo dostaje podsumowanie, gdzie odpowiedzi AI siadają. Czasem brakuje szkolenia albo dokumentacji. Czasem widać, że barierki działają. Zmiany w kodzie sam przekłada na propozycje poprawek w centrum pomocy, bo stamtąd Grok bierze odpowiedzi.",
      },
      {
        type: "p",
        text: "Boty zaczęły uczyć inne boty. Znajdują dziury w bazie wiedzy, uzupełniają je i wrzucają to z powrotem do systemu. Pętla ma objąć każdy produkt.",
      },
      {
        type: "p",
        text: "Dziennie składa ponad 20 tys. punktów opinii o produkcie w tematy dla inżynierów. Jeśli rozmowa odbija się więcej niż trzy razy między klientem a zespołem, flaguje ją kierownictwu, póki da się jeszcze uratować doświadczenie. Z czasem raport staje się ciaśniejszy, bo bot uczy się, które sygnały zespół naprawdę czyta.",
      },
      {
        type: "p",
        text: "Ludzie schodzą z powtarzalnej kolejki. Zostają przy barierkach, przy sprawach, które wymagają oceny, i przy decyzji, jak operacja ma się zmienić. SpaceXAI pisze, że ten model dopiero się uczy.",
      },
      {
        type: "p",
        text: "Źródło: [SpaceXAI, 22 września](https://x.ai/news/grok-bot-customer-support). Wpis: [@bot](https://x.com/bot/status/2102460785649959362).",
      },
    ],
  },
];
