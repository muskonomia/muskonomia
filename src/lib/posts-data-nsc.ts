import type { Post } from "./posts";

export const postsNsc: Post[] = [
  {
    slug: "spacex-pol-gigawata-miesiecznie-uk-siec",
    kicker: "Energia",
    topic: "xai",
    title:
      "SpaceX dokłada w miesiąc dziesięć razy więcej mocy, niż potrzebuje na start centrum danych czekające na prąd pod Londynem",
    excerpt:
      "Według naszych wyliczeń z danych SpaceX firma dołoży w październiku ok. 0,5 GW mocy obliczeniowej. Centrum danych Nscale na 50 MW w Essex będzie mogło zostać podłączone do sieci dopiero w 2030 r. albo jeszcze później.",
    date: "21 października 2026",
    isoDate: "2026-10-21",
    img: "/img/nscale-loughton-wizualizacja-centrum-danych.jpg",
    credit: "Planowane centrum danych Nscale w Loughton w hrabstwie Essex. Wizualizacja: Nscale",
    xPostId: "2112838473023435022",
    body: [
      {
        type: "p",
        text: "Na koniec września SpaceX miała 1,7 GW nominalnej mocy obliczeniowej, a pod koniec października ma mieć blisko 2,2 GW. W tym samym czasie brytyjski Nscale usłyszał, że jego centrum danych na 50 MW w Essex będzie mogło zostać podłączone do sieci dopiero w 2030 r. albo jeszcze później.",
      },
      {
        type: "p",
        text: "Liczba za wrzesień pochodzi z [raportu SpaceX złożonego w SEC](https://www.sec.gov/Archives/edgar/data/1181412/000162828026066482/spaceexplorationtechnologi.htm). Trzy miesiące wcześniej firma miała 1,4 GW, a rok wcześniej 0,6 GW. Prognozę na październik podał dyrektor finansowy Bret Johnsen podczas [konferencji z wyników kwartalnych 20 października](https://www.fool.com/earnings/call-transcripts/2026/10/20/spacex-spcx-q3-2026-earnings-call-transcript/). Według niego SpaceX dojdzie do „blisko 2,2 GW mocy nominalnej na koniec samego października”, a do końca roku do 2,5–3 GW. Z tych dwóch liczb wyliczyliśmy, że w październiku przybędzie około pół gigawata. W całym trzecim kwartale było to 300 MW, czyli średnio około 100 MW miesięcznie.",
      },
      {
        type: "p",
        text: "Elon Musk mówił na tej samej konferencji, że SpaceX jest w stanie uruchamiać „mniej więcej 200 tys.” układów Nvidia GB300 miesięcznie do końca roku i utrzymać to tempo w 2027 r., kiedy dominować mają już układy Vera Rubin. W odpowiedzi na jedno z pytań, [jak relacjonuje Yahoo Finance](https://finance.yahoo.com/markets/stocks/articles/nvidia-stock-pops-hours-elon-013406375.html), nazwał „absolutnym szaleństwem” zapewnienie zasilania i chłodzenia dla 220 tys. GB300 miesięcznie, „ale właśnie to teraz robimy”. Na 2027 r. jest „dość pewny” dodatkowych 10 GW mocy obliczeniowej, a infrastrukturę zasilania i chłodzenia SpaceX chce budować pod 20 GW. Według Muska firma wykorzystuje technologię odlewania z produkcji silników rakietowych do wytwarzania części turbin i dzięki temu uruchamia zasilanie o 12–18 miesięcy szybciej niż konkurencja.",
      },
      {
        type: "img",
        src: "/img/colossus-2-budowa-macrohard-z-lotu-spacex.jpg",
        alt: "Kampus Colossus II w Memphis w trakcie rozbudowy, z widocznym budynkiem Macrohard",
        caption:
          "Kampus Colossus II w Memphis w trakcie rozbudowy, z widocznym budynkiem Macrohard, zdjęcie opublikowane przez SpaceX na stronie Mid-South. Fot. SpaceX",
      },
      {
        type: "img",
        src: "/img/colossus-memphis-hala-serwerow-spacex.jpg",
        alt: "Hala z serwerami w kampusie Colossus w Memphis",
        caption:
          "Hala z serwerami w kampusie Colossus w Memphis, zdjęcie opublikowane przez SpaceX na stronie Mid-South. Fot. SpaceX",
      },
      {
        type: "p",
        text: "Loughton w Essex, na wschód od Londynu, miało być siedzibą największego brytyjskiego superkomputera AI. Nscale planowało tam 50 MW na start i do 90 MW docelowo, [podaje Euronews](https://www.euronews.com/2026/09/29/uks-biggest-ai-supercomputer-may-have-to-wait-until-2030s-for-enough-power). Według [Data Centre Review](https://datacentrereview.com/2026/10/microsoft-pulls-out-of-nscales-essex-ai-data-centre-amid-grid-delays/) obiekt miał pomieścić ponad 23 tys. układów GB300. Ogłaszając projekt w styczniu 2025 r., firma zakładała uruchomienie w czwartym kwartale 2026 r., później dostawę układów przesunięto na pierwszy kwartał 2027 r.",
      },
      {
        type: "p",
        text: "We wrześniu [Guardian napisał](https://www.theguardian.com/technology/2026/sep/24/construction-largest-supercomputer-delayed), że UK Power Networks, operator lokalnej sieci dystrybucyjnej, przekazał Nscale, że wystarczającej mocy nie będzie do „początku lub połowy lat 30.”. Rzecznik operatora tłumaczył, że wiele centrów danych czeka w kolejce, bo przed uruchomieniem potrzebują prac w krajowej sieci przesyłowej. Regulator rynku energii Ofgem ostrzegał przed zatorem we wnioskach o przyłącza. W czerwcu podał, że na podłączenie do krajowej sieci czeka 315 centrów danych o łącznym zapotrzebowaniu 73 GW, podczas gdy szczytowe zapotrzebowanie całego kraju wynosi 45 GW. W tym tygodniu Microsoft wycofał się z roli głównego najemcy, [podał Guardian](https://www.theguardian.com/uk-news/2026/oct/18/microsoft-drops-huge-ai-datacentre-project-in-essex-over-power-supply-concerns). Nscale zapewniło, że pozostaje przy projekcie i szuka alternatywnych źródeł zasilania, a „ten niefortunny problem z siecią w całym Londynie” nie wpływa na jego inne kontrakty.",
      },
      {
        type: "img",
        src: "/img/podstacja-northfleet-kent-danny-robinson.jpg",
        alt: "Podstacja Northfleet w hrabstwie Kent",
        caption: "Podstacja Northfleet w hrabstwie Kent, 2014 r. Fot. Danny P Robinson, CC BY-SA 2.0",
      },
      {
        type: "p",
        text: "Loughton nie jest wyjątkiem. W Cardiff deweloper Curtis Hall potrzebuje docelowo przyłącza 150 MW, które może powstać dopiero w latach 2030–2034, [pisze BBC](https://www.bbc.co.uk/news/articles/c639mg9d1vp0o). Do tego czasu chce postawić tymczasową elektrownię gazową o mocy 49,9 MW. Microsoft w kampusie Thames Valley Park w Reading dostanie z sieci 1,8 MW i do około 2037 r. ma korzystać z gazowych ogniw paliwowych, [podaje Computer Weekly](https://www.computerweekly.com/news/366651682/Microsoft-campus-datacentre-to-rely-on-gas-fuel-cells-until-2037). Z badania firmy Roadnight Taylor, które [przytacza Property Week](https://www.propertyweek.com/news/674409), wynika, że deweloperzy zakładają rok lub dwa oczekiwania na przyłącze, a w praktyce czekają od trzech do ośmiu lat.",
      },
      {
        type: "p",
        text: "Z tego zestawienia widać, gdzie dziś leży ograniczenie. Układy Nvidii da się kupić i zamontować w ciągu miesięcy, a przyłącze w Wielkiej Brytanii liczy się w latach. SpaceX nie czeka na operatora sieci, tylko buduje własne zasilanie w tym samym rytmie co kolejne hale z serwerami. Pół gigawata w jeden miesiąc to dziesięć razy więcej niż startowa moc centrum w Loughton, na którą jego właściciel może czekać do następnej dekady. Różnica wynika z tego, że jedna firma traktuje energię jako część własnej budowy, a brytyjskie projekty muszą czekać w kolejce do sieci przesyłowej.",
      },
    ],
  },
];
