import type { Post } from "./posts";

export const postsGbx: Post[] = [
  {
    slug: "grok-bot-nowosci-pazdziernik-2026",
    kicker: "Grok Bot",
    topic: "xai",
    title:
      "Grok Bot będzie wybierał do każdego zadania najlepszy model, także Claude Opus 5.5 od Anthropica",
    excerpt:
      "Elon Musk zapowiedział, że Grok Bot będzie korzystał z najlepszego modelu do zadania, także z Claude Opus 5.5, Midjourney i Suno. Bot przeszukuje już X bez konektora, a od sierpnia dostał m.in. Team Boty w Slacku, 1Password, głos, rutyny i dostęp do finansów.",
    date: "8 października 2026",
    isoDate: "2026-10-08",
    img: "/img/grok-bot-nowosci-pazdziernik-2026.jpg",
    credit: "Grafika: Grok Bot / [@XFreeze](https://x.com/XFreeze/status/2107827336146202679)",
    body: [
      {
        type: "p",
        text: "Elon Musk zapowiedział w środę, że asystent SpaceXAI będzie korzystał nie tylko z modeli Grok, ale też z Claude Opus 5.5, Midjourney, Suno i innych zewnętrznych usług. Tego samego dnia Grok Bot zaczął samodzielnie przeszukiwać i monitorować X. Od premiery 11 sierpnia dostał też m.in. wspólne Boty dla zespołów w Slacku, logowanie przez 1Password, rozmowy głosowe, rutyny i dostęp do finansów.",
      },
      { type: "x", id: "2107949161878606089", handle: "bot" },
      { type: "h2", text: "Najlepszy model do zadania" },
      {
        type: "p",
        text: "„Ważna informacja w sprawie Grok Bota: od teraz SpaceX będzie używać najlepszego modelu do każdego zadania, w tym Claude Opus 5.5, Midjourney, Suno i innych czołowych API. Tego, który najprawdopodobniej da najlepszy wynik” – napisał Musk.",
      },
      { type: "x", id: "2107724314451878104", handle: "elonmusk" },
      {
        type: "p",
        text: "Musk [dodał](https://x.com/elonmusk/status/2107849623364895151), że proste pytania będą trafiać do małych, szybkich modeli, a złożone do dużych. Większość próśb kierowanych do Bota ma według niego [obsługiwać](https://x.com/elonmusk/status/2107894231922876510) bardzo szybka wersja Groka 4.8, gdy ten model się ukaże. Midjourney i Suno są na razie zapowiedzią.",
      },
      { type: "h2", text: "X bez konektora" },
      {
        type: "p",
        text: "Grok Bot potrafi teraz sam przeszukiwać, czytać i monitorować X. Można go poprosić o śledzenie opinii o własnym produkcie, obserwowanie bieżących wydarzeń albo cotygodniowe podsumowanie wiadomości z branży. Funkcja jest dostępna dla wszystkich użytkowników i [nie wymaga podłączania konektora X](https://x.com/bot/status/2107949163191353358). Pod koniec sierpnia, gdy Bot [dostał pierwszą integrację z X](https://x.ai/news/grok-bot-and-x), trzeba było jeszcze połączyć z nim własne konto, a SpaceXAI zakładało użytkownikowi konto deweloperskie.",
      },
      { type: "h2", text: "Nowości z sierpnia i września" },
      { type: "p", text: "Najważniejsze zmiany z ostatnich tygodni:" },
      { type: "h3", text: "Team Boty i Slack" },
      {
        type: "p",
        text: "Team Boty to wspólni asystenci całego zespołu, którzy uczą się w trakcie pracy. Taki Bot dostaje umiejętności, wtyczki, pliki i dane dostępowe potrzebne do swojej roli, a zespół pracuje z nim w Slacku albo w aplikacji Grok Bot. W Slacku Team Bot czyta kanały, do których dołączył, odpowiada w wątkach i sam publikuje informacje. Rozmowy każdej osoby z Botem pozostają prywatne. SpaceXAI udostępniło Team Boty pod koniec września w publicznej becie dla planów Teams i Enterprise.",
      },
      { type: "x", id: "2104661562715967548", handle: "bot" },
      { type: "h3", text: "1Password" },
      {
        type: "p",
        text: "Bot loguje się na stronach danymi zapisanymi w 1Password. Użytkownik udostępnia mu wybrane elementy sejfu i zatwierdza każde wypełnienie, a hasła zostają w menedżerze haseł.",
      },
      { type: "x", id: "2100335532597502311", handle: "bot" },
      { type: "h3", text: "Gmail i Outlook" },
      {
        type: "p",
        text: "Bot przygotowuje e-maile w Gmailu i Outlooku jako szkice, które użytkownik przegląda, a potem wysyła albo odrzuca. Szkic może mieć formatowanie, takie jak nagłówki, pogrubienia i listy, i może wyjść z dodatkowego adresu ustawionego w Gmailu.",
      },
      { type: "h3", text: "Repozytoria kodu" },
      {
        type: "p",
        text: "Bot pracuje w repozytoriach na GitHubie, GitLabie, Bitbuckecie i Azure DevOps. Gdy potrzebuje dostępu, prosi o połączenie konta i po jego uzyskaniu kontynuuje zadanie. Od końca września może też [przekazywać zadania programistyczne do Cursora](https://x.com/bot/status/2105373767568621895), zarządzać zmianami w kodzie przez wtyczki GitHub i Origin oraz pokazywać nagrania tego, co zbudował.",
      },
      { type: "h3", text: "Rutyny" },
      {
        type: "p",
        text: "Rutyny to powtarzalne zadania, które Bot wykonuje według harmonogramu albo po określonym zdarzeniu, np. po wiadomości w Microsoft Teams, nowym zgłoszeniu w Linear, alercie z Sentry albo wywołaniu webhooka. Rutynę można wstrzymać i wznowić.",
      },
      { type: "h3", text: "Cloud Agents i projekty" },
      {
        type: "p",
        text: "Większą pracę Bot może przekazać agentowi w chmurze. W ramach projektu taki agent sam planuje zadanie i uruchamia kolejnych agentów.",
      },
      { type: "h3", text: "Głos" },
      {
        type: "p",
        text: "Z Botem można rozmawiać głosowo, dyktować mu wiadomości i dostawać od niego notatki głosowe. Rozmowy głosowe działają także z Team Botami.",
      },
      { type: "x", id: "2100659463569170779", handle: "bot" },
      { type: "h3", text: "Szablony Botów" },
      {
        type: "p",
        text: "Gotowego Bota można udostępnić jako szablon swojemu zespołowi albo każdemu, kto dostanie link. Szablony są też w sklepie z dodatkami. SpaceXAI udostępniło tam m.in. Haggle Bota, który negocjuje umowy z dostawcami i wyszukuje nieużywane licencje.",
      },
      { type: "h3", text: "Główny Bot" },
      {
        type: "p",
        text: "Użytkownik wybiera jednego głównego Bota, oznaczonego gwiazdką. Od października taki Bot sam wypatruje pracy, którą może przejąć, i proponuje pomoc, zanim użytkownik o nią poprosi. Sugestie nie liczą się do limitu.",
      },
      { type: "x", id: "2105713240701538538", handle: "bot" },
      { type: "h2", text: "Finanse i inne zmiany" },
      {
        type: "p",
        text: "Bot łączy się też z kontami bankowymi, kartami i inwestycjami przez Plaid. „Dostęp jest tylko do odczytu, Grok Bot nigdy nie widzi twoich danych logowania i możesz w każdej chwili odłączyć konto” – zapewnia SpaceXAI.",
      },
      { type: "x", id: "2103936247995752705", handle: "bot" },
      {
        type: "p",
        text: "Od września Bot obsługuje Microsoft Teams, Dokumenty, Arkusze i Prezentacje Google oraz narzędzia sprzedażowe, m.in. Salesforce i HubSpot. Przygotowuje prezentacje w formacie PowerPoint albo Google Slides i ma aplikację na iPada. Interfejs można przełączyć na polski. Jest też wersja [Grok Bot for Enterprise](https://x.ai/news/grok-bot-for-enterprise) dla firm. SpaceXAI przebudowało wokół Bota własną obsługę klienta, o czym pisaliśmy w tekście o tym, że [Grok Bot obsłużył 175 proc. większy ruch w SpaceXAI](https://muskonomia.pl/blog/grok-bot-175-proc-wiekszy-ruch-spacexai).",
      },
      {
        type: "p",
        text: "Musk [porównuje](https://x.com/elonmusk/status/2108038296572137792) korzystanie z Grok Bota do zatrudnienia bardzo kompetentnego pracownika i zapowiada, że [SpaceX dogoni czołówkę AI w pół roku](https://muskonomia.pl/blog/spacex-chce-dogonic-czolowke-ai-w-pol-roku). Pisaliśmy też o [FSD w Polsce i Grok Bocie](https://muskonomia.pl/blog/fsd-w-polsce-plus-grok-bot).",
      },
    ],
  },
];
