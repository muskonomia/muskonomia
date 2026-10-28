import type { Post } from "./posts";

export const postsA120: Post[] = [
  {
    slug: "anthropic-s1-do-120-5-mld-dolarow-za-moc-spacex",
    kicker: "SpaceXAI",
    topic: "xai",
    title: "Anthropic może wydać do 120,5 mld dolarów na moc obliczeniową od SpaceX",
    excerpt:
      "Z prospektu emisyjnego S-1 wynika, że Anthropic może wydać do 120,5 mld dolarów do 2029 r. na moc obliczeniową procesorów Nvidii od SpaceXAI. Od grudnia 2026 r. miesięczne płatności sięgną ok. 3,1 mld dolarów, a po pierwszym kwartale 2027 r. każda ze stron będzie mogła wypowiedzieć umowy z 90-dniowym wyprzedzeniem.",
    date: "26 października 2026",
    isoDate: "2026-10-26",
    img: "/img/anthropic-s1-nvidia-dgx-b200-klaster.jpg",
    credit: "Serwery Nvidia DGX w szafie centrum danych. Fot. Javils00, CC0",
    xPostId: "2114753421836247290",
    body: [
      {
        type: "p",
        text: "Po dostawie pełnej zamówionej mocy, zaplanowanej na grudzień tego roku, twórca modelu Claude ma płacić spółce zależnej SpaceX ok. 3,1 mld dolarów miesięcznie (ok. 12,1 mld zł), czyli ok. 37,2 mld dolarów rocznie (ok. 144,7 mld zł) za dostęp do klastrów procesorów Nvidii. Tak wynika z opublikowanego w poniedziałek 26 października [prospektu emisyjnego S-1](https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm), który ujawnia umowy ze SpaceXAI obowiązujące do 2029 r.",
      },
      { type: "x", id: "2114705042817110293", handle: "AnthropicAI" },
      {
        type: "p",
        text: "Dokument, który Anthropic, PBC złożył w amerykańskiej Komisji Papierów Wartościowych i Giełd (SEC) przed planowanym debiutem na giełdzie Nasdaq pod symbolem ANT, po raz pierwszy pokazuje pełną skalę porozumień zawartych i kilkukrotnie aneksowanych między majem a październikiem 2026 r. Stroną kontraktów jest SpaceX.AI LLC (działająca pod nazwą SpaceXAI, dawniej X.AI LLC), czyli spółka przejęta w całości przez SpaceX w lutym tego roku. W okresie rozruchu i przekazywania kolejnych klastrów obowiązują zmienne stawki przejściowe, natomiast od grudnia 2026 r. miesięczny rachunek ma sięgnąć ok. 3,1 mld dolarów, a łączny pułap wydatków do 2029 r. wynosi 120,5 mld dolarów (ok. 468,6 mld zł).",
      },
      {
        type: "img",
        src: "/img/zrzut-prospekt-s1-anthropic-spacexai.jpg",
        alt: "Fragment formularza S-1 spółki Anthropic o umowach ze SpaceXAI",
        caption: "Fragment formularza S-1 spółki Anthropic o umowach ze SpaceXAI. Źródło: SEC",
        contain: true,
      },
      {
        type: "p",
        text: "Kwota 120,5 mld dolarów oznacza górny limit potencjalnych wydatków, a nie sztywne zobowiązanie na trzy lata. Zgodnie z prospektem początkowe okresy nieodwołalne w poszczególnych umowach kończą się w styczniu oraz w marcu 2027 r. Po tych datach każda ze stron, zarówno Anthropic, jak i SpaceXAI, może rozwiązać kontrakt za 90-dniowym pisemnym wypowiedzeniem. W części opisującej strategię sprzętową Anthropic wskazuje, że współpraca ze SpaceXAI, Microsoftem, Nscale i Lambdą zapewnia mu dostęp do układów Nvidii, w tym systemów Grace Blackwell oraz nadchodzącej generacji Vera Rubin.",
      },
      {
        type: "img",
        src: "/img/wykres-anthropic-spacexai-harmonogram-120-mld.png",
        alt: "Wzrost pułapu umów Anthropica ze SpaceXAI i harmonogram wypowiedzenia",
        caption:
          "Wzrost pułapu umów Anthropica ze SpaceXAI i harmonogram wypowiedzenia. Opracowanie: Muskonomia.pl",
      },
      {
        type: "p",
        text: "Nowe dane pokazują, jak szybko w ciągu pół roku rosło zapotrzebowanie twórcy Claude'a na serwery budowane przez zespół Elona Muska. Gdy w maju swój prospekt publikowało SpaceX, pierwsza umowa obejmująca całe centrum danych Colossus 1 w Memphis opiewała na 1,25 mld dolarów miesięcznie (ok. 4,9 mld zł), a po doliczeniu kontraktu z Google na 920 mln dolarów miesięcznie (ok. 3,6 mld zł) [obie firmy miały płacić SpaceX od października ponad 2 mld dolarów miesięcznie](https://muskonomia.pl/blog/anthropic-i-google-placa-spacex-2-mld-miesiecznie). Pod koniec września agencja Reuters informowała na podstawie poufnej wersji dokumentów ofertowych, że po letnich aneksach [pułap wydatków Anthropica w SpaceX wzrósł do 84,5 mld dolarów](https://muskonomia.pl/blog/anthropic-do-84-mld-dolarow-za-moc-spacex). Październikowe poprawki podniosły tę granicę o kolejne 36 mld dolarów (ok. 140 mld zł).",
      },
      {
        type: "img",
        src: "/img/hala-serwerow-colossus-memphis-spacex.jpg",
        alt: "Hala serwerowa w kampusie Colossus w Memphis",
        caption: "Hala serwerowa w kampusie Colossus w Memphis. Fot. SpaceX",
      },
      {
        type: "p",
        text: "W pierwszym półroczu 2026 r. spółka kierowana przez Daria Amodeiego osiągnęła 16,3 mld dolarów przychodu (ok. 63,4 mld zł), wobec 1,16 mld dolarów rok wcześniej oraz [16,8 mld dolarów w samym trzecim kwartale według „Financial Times”](https://muskonomia.pl/blog/anthropic-16-8-mld-q3-spacex-colossus), przy stracie operacyjnej 693 mln dolarów (ok. 2,7 mld zł) i stracie netto 80,7 mld dolarów (ok. 313,8 mld zł), wynikającej w 72,4 mld dolarów z księgowej wyceny obligacji zamiennych, instrumentów pochodnych i umów SAFE. Oznacza to, że po osiągnięciu pełnej mocy w grudniu sam roczny rachunek wystawiany przez SpaceX będzie ponaddwukrotnie wyższy niż przychód Anthropica z całego pierwszego półrocza. Łącznie siedem głównych umów obliczeniowych opisanych w prospekcie opiewa na ok. 637 mld dolarów (ok. 2,48 bln zł), przy czym w przeciwieństwie do wieloletnich, nieodwołalnych zobowiązań wobec Broadcomu, Google Cloud, Amazon Web Services i Microsoft Azure kontrakt ze SpaceXAI daje obu stronom możliwość wyjścia z umowy już w przyszłym roku.",
      },
      {
        type: "img",
        src: "/img/wykres-kontrakty-obliczeniowe-anthropic-s1.png",
        alt: "Siedem głównych umów obliczeniowych Anthropica w prospekcie S-1",
        caption: "Siedem głównych umów obliczeniowych Anthropica w prospekcie S-1. Opracowanie: Muskonomia.pl",
      },
      {
        type: "p",
        text: "Równolegle SpaceX poinformowało w [raporcie bieżącym 8-K złożonym w SEC](https://www.sec.gov/Archives/edgar/data/1181412/000110465926118614/tm2628247d1_8k.htm), opisanym przez [agencję Reuters](https://www.reuters.com/business/media-telecom/spacex-enters-40-billion-deal-with-apollo-ai-chip-financing-2026-10-26), o podpisaniu 24 października wiążącego zobowiązania z podmiotem zarządzanym przez fundusz Apollo Global Management na około pięcioletni leasing finansowy szaf procesorów GPU i wyposażenia serwerowni o wartości kapitałowej ok. 40 mld dolarów (ok. 155,6 mld zł), z dostawami ruszającymi w pierwszej połowie 2027 r. Choć mniejsze chmury obliczeniowe i wielkie koncerny czekają dziś w kilkuletnich kolejkach na transformatory i przyłącza, przed czym [Musk ostrzegał dzień wcześniej w dyskusji o uwięzionej mocy obliczeniowej](https://muskonomia.pl/blog/musk-uwieziona-moc-obliczeniowa-niedokonczone-centra-danych), własna produkcja zasilania i chłodzenia pozwala SpaceX oddawać kolejne klastry już w grudniu. Zarazem połączenie pięcioletniego finansowania sprzętu z Apollo z 90-dniowym oknem wypowiedzenia dla Anthropica po pierwszym kwartale 2027 r. wpisuje się w zapowiedzi z [konferencji wynikowej SpaceX za trzeci kwartał](https://muskonomia.pl/blog/spacex-q3-2026-wnioski-z-konferencji), podczas której Musk podkreślał, że firma celowo unika długich, sztywnych kontraktów, aby odnawiać najem po wyższych stawkach rynkowych albo w razie potrzeby przekierować procesory na własne modele Grok i Grok Bot.",
      },
    ],
  },
];
