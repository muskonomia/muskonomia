import type { Post } from "./posts";

export const postsKut: Post[] = [
  {
    slug: "starlink-starshield-gps-limity-predkosci-drony-kutkov",
    kicker: "Starlink",
    topic: "spacex",
    title: "Analitycy i inżynierowie odpowiadają Muskowi w sprawie Starlinka na ukraińskich dronach",
    excerpt:
      "Elon Musk oświadczył, że SpaceX zamknęło lukę pozwalającą ukraińskiemu wojsku używać cywilnego Starlinka do ataków dronów, a na X rozeszła się teoria @tvguidemsk o wlutowywanych płytkach fałszujących GPS. Analitycy @BrennpunktUA, Andrej Fiskovec (@andrewofpolesia) i inżynier Oleg Kutkov wyjaśniają, jak działają białe listy terminali, dlaczego szybkie bezzałogowce latają na opłacanej przez Niemcy usłudze Starshield i po co w antenach przerabia się moduły GPS.",
    date: "25 października 2026",
    isoDate: "2026-10-25",
    img: "/img/starlink-terminal-uchwyt-magnetyczny-kutkov-okladka-v2.jpg",
    credit: "Terminal Starlink na uchwycie magnetycznym. Fot. Oleg Kutkov",
    body: [
      {
        type: "p",
        text: "W sobotę 24 października ukraińskie Ministerstwo Obrony [poinformowało](https://www.ukrinform.net/rubric-ato/4177752-khmara-starlink-and-starshield-speeds-above-400-kmh-have-resumed-says-dm.html), że łączność satelitarna Starlink i Starshield znów działa stabilnie przy prędkościach powyżej 400 km/h, po trwającym od 13 października ograniczeniu do ok. 160 km/h. Tego samego dnia wieczorem Elon Musk oświadczył na X, że ukraińskie wojsko wbrew regulaminowi używało cywilnego Starlinka do ofensywnych ataków dronów i że SpaceX w poprzednim tygodniu zamknęło tę lukę, natomiast za rządowy system Starshield odpowiada wyłącznie Waszyngton. Profil analityczny @BrennpunktUA, białorusko-czeski analityk Andrej Fiskovec (@andrewofpolesia) oraz kijowski inżynier Oleg Kutkov pokazują jednak, jak od lutego 2026 r. działa rejestracja terminali w Ukrainie, kto opłaca usługę Starshield dla szybkich dronów i do czego w rzeczywistości służą przeróbki GPS wewnątrz anten.",
      },
      { type: "x", id: "2114063986744275011", handle: "elonmusk" },
      {
        type: "p",
        text: "Musk zabrał głos pod [wpisem użytkownika @varifrank](https://x.com/varifrank/status/2113997959117561902), komentującym [doniesienia stacji CNBC](https://www.cnbc.com/2026/10/23/ukraine-says-starlink-restrictions-remain-despite-trump-assurances.html) o utrzymujących się ograniczeniach prędkości terminali w Ukrainie. Szef SpaceX [napisał](https://x.com/elonmusk/status/2114063986744275011), że wykorzystywanie cywilnej usługi komercyjnej Starlink do ofensywnych uderzeń dronów „w celu zabijania ludzi nigdy nie było dozwolone i nie powinno być”, a lukę, która na to pozwalała, zamknięto w poprzednim tygodniu. Zaznaczył przy tym, że Starshield to osobny system kontrolowany przez rząd USA i decyzje w jego sprawie należą do amerykańskich władz. Musk dodał, że sam Starlink pozostaje niezbędny dla obrony Ukrainy jako jedyny system odporny na zagłuszanie, bez którego linia frontu natychmiast by się załamała, co określił jako stwierdzenie faktu, a nie groźbę.",
      },
      { type: "x", id: "2113375807653703779", handle: "tvguidemsk" },
      {
        type: "p",
        text: "Wypowiedź Muska o „zamkniętej luce” zbiegła się z głośną na X tezą, że ukraińskie drony latały dotąd na cywilnych abonamentach dzięki wlutowywanym płytkom fałszującym sygnał GPS, dopóki SpaceX nie zablokowało tego sposobu na serwerach. Taki opis przedstawił 22 października w [piętnastoczęściowym wątku](https://x.com/tvguidemsk/status/2113375807653703779) oraz w [tekście na Telegra.ph](https://telegra.ph/What-was-really-going-on-with-the-Starlink-scandal-in-Ukraine-An-analysis-of-the-technical-modifications-hacker-boards-Elon-Musk-10-23) moskiewski użytkownik Denis Karablev (@tvguidemsk). Według niego w Ukrainie działały wyłącznie cywilne plany Starlinka, od podstawowego za 100 dolarów (ok. 390 zł) i mobilnego za 400 dolarów (ok. 1560 zł) po sztabowy za 2–4 tys. dolarów (ok. 7,8–15,6 tys. zł), natomiast plany lotnicze do 500 km/h są tam niedostępne, a Starshield w ogóle do Ukrainy nie trafił. Karablev twierdził, że przed wysyłką na front obudowy nowych terminali rozklejano, żeby montować wodoszczelne złącza i wlutowywać płytki podające stałe współrzędne. Miało to pozwalać najpierw omijać blokady geograficzne na froncie przy rozrzucie rzędu 150 km, a po obniżeniu limitu w planach komercyjnych do 160 km/h również latać szybkimi dronami, bo antena zgłaszała sieci, że stoi w miejscu. Według @tvguidemsk jesienią 2026 r. SpaceX wdrożyło kontrolę na serwerach, która zrywa sesję, gdy rzekomo nieruchomy terminal szybko przełącza się między kolejnymi satelitami. W [szesnastym wpisie](https://x.com/tvguidemsk/status/2113375867913306248) autor dopisał, że tekst powstał na podstawie zeszłorocznych gazet i „najpewniej jest nieprawdą oraz totalną bzdurą”.",
      },
      {
        type: "img",
        src: "/img/starlink-dron-terminal-tvguidemsk.jpg",
        alt: "Dron z zamontowanym terminalem Starlink",
        caption:
          "Dron z zamontowanym terminalem Starlink. Fot. @tvguidemsk / X",
      },
      { type: "x", id: "2114093742261215247", handle: "BrennpunktUA" },
      {
        type: "p",
        text: "Bezpośrednio pod wpisem Muska [odpowiedział niemiecko-ukraiński profil analityczny @BrennpunktUA](https://x.com/BrennpunktUA/status/2114093742261215247), oceniając, że w sprawie działania sieci w Ukrainie krąży wiele spekulacji i „najwyraźniej nawet sam Elon Musk nie jest dobrze poinformowany”. Autorzy wpisu podkreślają, że z technicznego punktu widzenia wykorzystanie szybkich dronów uderzeniowych nie jest możliwe bez rejestracji i autoryzacji terminala w wojskowym systemie Starshield. W [kolejnym komentarzu](https://x.com/BrennpunktUA/status/2114109014195806537) przywołali dane ukraińskiego dostawcy dronów Serhija Sternenki ([@sternenko](https://x.com/sternenko/status/2114084945723543780)), według którego bezzałogowce latają z prędkością 120 km/h lub większą, tymczasem cywilny Starlink w Ukrainie wyłącza się już przy 60–70 km/h. Zarzut Muska, że ukraińska armia złamała umowę na cywilną usługę przy atakach dronów, nie może więc być prawdziwy niezależnie od tego, czy uznać te loty za ofensywne, czy obronne. Jak wyjaśnia @BrennpunktUA, w debacie pomieszano dwie rzeczy: ukraińskie wojsko rzeczywiście korzysta z cywilnego Starlinka bez rejestracji w Starshieldzie, ale wyłącznie do łączności na froncie. Szybkie drony uderzeniowe wymagają natomiast usługi Starshield, działającej na podstawie umów między Pentagonem a ukraińskim resortem obrony. Skoro sam Musk przyznaje, że o autoryzacji i dławieniu prędkości w Starshieldzie decyduje wyłącznie Departament Obrony USA lub Biały Dom, to według @BrennpunktUA dyskusja o rzekomym łamaniu regulaminu cywilnego Starlinka odwraca uwagę od polityków odpowiedzialnych za październikową blokadę: sekretarza obrony Pete'a Hegsetha i Donalda Trumpa.",
      },
      { type: "x", id: "2114094016354807843", handle: "andrewofpolesia" },
      {
        type: "p",
        text: "Mechanizm kontroli terminali i finansowania usługi opisał też białorusko-czeski analityk Andrej Fiskovec ([@andrewofpolesia](https://x.com/andrewofpolesia/status/2114094016354807843)). Przypomniał on, że gdy Rosjanie zaczęli masowo sprowadzać na front terminale kupowane na czarnym rynku, ówczesny minister obrony Mychajło Fedorow wypracował ze SpaceX system „białych list”, [uruchomiony oficjalnie 5 lutego 2026 r.](https://mod.gov.ua/en/news/how-to-complete-starlink-verification-the-ministry-of-defence-answers-the-most-frequently-asked-questions) Od tego czasu nad Ukrainą, zarówno na terenach kontrolowanych przez Kijów, jak i okupowanych, działają wyłącznie zweryfikowane urządzenia: żołnierze rejestrują je przez wojskowe systemy DELTA lub Armija+, firmy i urzędnicy przez portal Dija, a cywile w centrach obsługi CNAP. Takie cywilne terminale działają tylko stacjonarnie lub przy małej prędkości, natomiast szybkie drony uderzeniowe i przechwytujące korzystają ze Starshielda. Fiskovec zwraca uwagę, że za obecny kontrakt Starshield dla Ukrainy nie płaci budżet USA, lecz rząd Niemiec poprzez amerykański program sprzedaży uzbrojenia Foreign Military Sales (FMS), a usługa jest opłacona do połowy maja 2027 r. Potwierdza to [notyfikacja w amerykańskim Federal Register](https://www.federalregister.gov/documents/full_text/text/2026/01/27/2026-01480.txt) na kwotę 150 mln dolarów (ok. 583 mln zł) z niemieckiego funduszu JUMPSTART oraz [wypowiedzi szefa niemieckiego MSZ Johanna Wadephula](https://newsukraine.rbc.ua/news/germany-warns-ukraine-s-air-defense-support-1792326827.html), który domagał się zniesienia październikowych ograniczeń, wskazując, że za sprzęt zapłacił Berlin. Według Fiskovca nagłe przycięcie opłaconej w procedurze FMS usługi, w której kupujący nie ma prawa do sądu ani arbitrażu, wywołało w Europie pytania o amerykański wyłącznik awaryjny i nasiliło spory o rezerwowanie pasm częstotliwości dla europejskich operatorów satelitarnych.",
      },
      { type: "x", id: "2113986509481144709", handle: "olegkutkov" },
      {
        type: "p",
        text: "Szczegółowo od strony sprzętowej sprawę [wyjaśnił Oleg Kutkov](https://x.com/olegkutkov/status/2113986509481144709), który naprawia terminale i bada ich oprogramowanie. Potwierdził on, że podczas gdy zgodnie z [dokumentacją pomocy technicznej Starlinka](https://www.starlink.com/support/article/5483745b-f8f0-d9c4-4d57-17c35a7c233a) cywilne plany mobilne Roam i Priority działają na świecie w ruchu do 160 km/h, to w samej Ukrainie niespełna rok temu, w porozumieniu z tamtejszymi władzami, na komercyjne terminale nałożono próg ok. 75–80 km/h właśnie po to, by wykluczyć montowanie cywilnych anten na dronach. Bezzałogowce korzystają z rządowej usługi [Starshield](https://www.spacex.com/starshield/), obecnej w Ukrainie od połowy 2023 r. Jak w grudniu 2024 r. [podał Bloomberg](https://www.bloomberg.com/news/articles/2024-12-06/spacex-gets-us-contract-to-expand-ukraine-s-access-to-starshield) za biurem łączności komercyjnej amerykańskich Sił Kosmicznych (Space Systems Command), kontrakt Pentagonu objął usługą Starshield dodatkowe 2500 terminali Starlink w Ukrainie, co razem z wcześniejszą umową na 500 urządzeń dało 3000 terminali. Dostęp ten potwierdza również [pismo senatora Richarda Blumenthala z 22 października 2026 r.](https://www.hsgac.senate.gov/wp-content/uploads/2026-10-22-Letter-from-Ranking-Member-Blumenthal-to-Hegseth.pdf) do Pete'a Hegsetha o wszczęciu dochodzenia w senackiej podkomisji śledczej po tym, jak wieczorem 13 października prędkość terminali Starshield w Ukrainie została bez uprzedzenia przycięta do ok. 160 km/h (wcześniej, jak [przytaczał sam @tvguidemsk](https://x.com/tvguidemsk/status/2113659883438383556) za wypowiedzią gen. bryg. Andrija Biłeckiego dla „New York Timesa”, drony z łącznością Starshield latały do ok. 400 km/h).",
      },
      {
        type: "p",
        text: "Kutkov [tłumaczy](https://x.com/olegkutkov/status/2114174300399841586), że po samym wyglądzie nie da się odróżnić terminala Starshield od cywilnego Starlinka, a w Ukrainie w tej roli najczęściej występuje model Starlink Mini. W [nocnych odpowiedziach pod wątkiem](https://x.com/olegkutkov/status/2114115354486042941) inżynier opisał, że każdy nieprzypisany jeszcze do konta terminal komercyjny może zostać zgłoszony przez uprawnione struktury wojskowe po numerze identyfikacyjnym do programu Starshield z osobnym rozliczeniem, centralnym zarządzaniem i zdjętym limitem prędkości nad Ukrainą. Zwrócił też [uwagę](https://x.com/olegkutkov/status/2114140481009406028), że ukraińscy politycy i media potocznie nazywają całą wojskową łączność satelitarną „Starlinkiem”, podobnie jak każdą kopiarkę nazywa się „kserem”, co dodatkowo napędza nieporozumienia. W późniejszych [komentarzach](https://x.com/tvguidemsk/status/2113863021776740416) pod [wątkiem](https://x.com/tvguidemsk/status/2113963273909346618) @tvguidemsk przyznał wprawdzie, że kontrakty na 500–3000 terminali Starshield istnieją, ale przekonywał, że przy wysyłaniu od 50 do ponad 100 jednorazowych dronów dziennie taka pula wyczerpałaby się w miesiąc, więc wojsko musi sięgać po tańsze zestawy cywilne za 500–1000 dolarów (ok. 1,9–3,9 tys. zł) zamiast wojskowych wycenianych przez niego na 3–8 tys. dolarów (ok. 11,7–31,1 tys. zł) albo dopisywać zwykłe anteny do wojskowej usługi. Kutkov [odpowiedział](https://x.com/olegkutkov/status/2113999543893111019), że zwykłe terminale są od blisko roku przycięte do 75–80 km/h i nie latają na szybkich dronach, a październikowe ograniczenie do 160 km/h dotknęło bezpośrednio usługę Starshield.",
      },
      {
        type: "img",
        src: "/img/starlink-odbiorniki-gnss-sta8089-kutkov.jpg",
        alt: "Odbiorniki GNSS na płytkach terminali Starlink",
        caption:
          "Odbiorniki GNSS na płytkach terminali Starlink. Fot. Oleg Kutkov",
      },
      {
        type: "p",
        text: "Z analizy oprogramowania terminali przeprowadzonej przez Kutkova wynika ponadto, że podmiana współrzędnych GPS nie pozwala oszukać blokady prędkości. Oprogramowanie nie opiera się wyłącznie na danych z odbiornika GPS, lecz porównuje wyliczoną z nich prędkość z dwoma innymi źródłami: pozycjonowaniem z samych satelitów Starlink oraz wbudowanym czujnikiem bezwładnościowym, który mierzy przyspieszenia anteny. W [kolejnych wyjaśnieniach](https://x.com/olegkutkov/status/2114116627046224038) Kutkov podkreślił, że podanie fałszywej, nieruchomej pozycji psuje obliczenia potrzebne do kierowania wąską wiązką radiową w stronę satelitów, przez co już po kilku kilometrach lotu od zadeklarowanego punktu antena traci połączenie. Co więcej, mechanizm wykrywający fałszowanie sygnału GPS [znajduje się w oprogramowaniu terminali od początku 2026 r.](https://x.com/olegkutkov/status/2114147310934306919), a pozycjonowanie z konstelacji Starlink działa od blisko trzech lat, więc w październiku nie wdrożono w tym zakresie żadnej nowej blokady. O tym, przy jakiej prędkości terminal może utrzymać połączenie, decyduje przypisana mu w sieci taryfa.",
      },
      {
        type: "p",
        text: "Podobnie działają blokady geograficzne. Jak wyjaśnia Kutkov, Starlink dzieli powierzchnię Ziemi na sześciokątne komórki siatki geograficznej. Fizyczna wiązka radiowa satelity nie ma ostrej krawędzi i przy granicy może sięgać na sąsiednie terytorium, ale dostęp do usługi zależy od uprawnień przypisanych do identyfikatora terminala i danej komórki. Nad terytorium Rosji komórki są wyłączone również dla terminali Starshield, a próba lotu w głąb kraju na sfałszowanych współrzędnych wywołuje konflikt z pozycjonowaniem satelitarnym Starlinka i zrywa łączność.",
      },
      {
        type: "img",
        src: "/img/starlink-modyfikacja-zewnetrzna-antena-gps-kutkov.jpg",
        alt: "Wnętrze terminala Starlink przystosowanego do zewnętrznej anteny GPS",
        caption:
          "Wnętrze terminala Starlink przystosowanego do zewnętrznej anteny GPS. Fot. Oleg Kutkov",
      },
      {
        type: "p",
        text: "Zdjęcia rozebranych terminali i dolutowanych elementów, które @tvguidemsk pokazał jako dowód na omijanie limitów, przedstawiają według Kutkova przeróbki poprawiające odbiór sygnału GPS w warunkach walki elektronicznej. Inżynier [opisał je na swoim blogu w listopadzie 2023 r.](https://olegkutkov.me/2023/11/07/connecting-external-gps-antenna-to-the-starlink-terminal/) Terminal potrzebuje dokładnego czasu i prawdziwej pozycji z nawigacji satelitarnej, żeby zsynchronizować zegar z siecią i prawidłowo formować wiązkę radiową. W nowszych, prostokątnych terminalach SpaceX zastąpiło dawne anteny kierunkowe małą anteną ceramiczną, która zbiera sygnały ze wszystkich stron. Przez to łatwo ulega zagłuszarkom, a silny sygnał zakłócający z bliska potrafi uszkodzić wzmacniacz wejściowy odbiornika GPS.",
      },
      {
        type: "p",
        text: "Żeby utrzymać odbiór na froncie, technicy wylutowują fabryczną antenkę i wyprowadzają na obudowę gniazdo z układem zasilania dla zewnętrznej, aktywnej anteny kierunkowej lub przeciwzakłóceniowej. W testach Kutkova w strefie ciągłego zagłuszania niemodyfikowany terminal przez 30 minut nie złapał sygnału ani jednego satelity GPS i pozostał bez połączenia, natomiast egzemplarz z zewnętrzną anteną aktywną w dwie minuty połączył się z 13 satelitami i wszedł do sieci. W [komentarzu pod wątkiem](https://x.com/olegkutkov/status/2114004672532877683) Kutkov zaznaczył, że większość terminali w Ukrainie działa bez żadnych przeróbek, a dołożenie zewnętrznej anteny GPS chroni urządzenie przed zagłuszaniem i nie zmienia uprawnień w sieci SpaceX.",
      },
      {
        type: "img",
        src: "/img/starlink-plytka-pcb-antena-fazowana-kutkov.jpg",
        alt: "Płytka główna terminala Starlink",
        caption:
          "Płytka główna terminala Starlink. Fot. Oleg Kutkov",
      },
      {
        type: "p",
        text: "Gdy sygnał GPS zostaje całkowicie zagłuszony albo odrzucony jako niewiarygodny, antena przełącza się na wyliczanie własnej pozycji na podstawie sygnałów z samych satelitów Starlink. We [wpisie z 16 października](https://x.com/olegkutkov/status/2111229557315444891) Kutkov wyjaśnił, że obliczenia te odbywają się programowo w krótkich przerwach między transmisją danych. W nowym stacjonarnym terminalu konsumenckim V5 SpaceX całkowicie zrezygnowało z osobnego układu GPS, ale do pracy w ruchu klasyczny odbiornik nawigacyjny wciąż okazuje się pewniejszy. Dlatego w samochodowej wersji tego terminala, używanej w Cybercabie Tesli, inżynierowie SpaceX zrezygnowali z kilku elementów anteny, żeby zmieścić na płytce tradycyjny układ GPS.",
      },
    ],
  },
];
