import type { Post } from "./posts";

export const postsCcab: Post[] = [
  {
    slug: "cybercab-od-srodka-giga-texas-25-stacji-brak-lakierni-munro",
    kicker: "Cybercab",
    topic: "tesla",
    title: "Tesla pokazała w Giga Texas linię produkcyjną Cybercaba bez lakierni",
    excerpt:
      "Linia produkcyjna Cybercaba w Giga Texas liczy tylko 25 stacji montażu końcowego i działa tak szybko, że wyprzedza wdrożenia aut na ulice. W 87-minutowym materiale Munro Live zespół Larsa Moravy'ego pokazał budowę auta bez lakierni, baterię 4680 z czterema wymiennymi modułami, bezprzewodowy BMS oraz napęd 5. generacji wspólny z ciężarówką Semi.",
    date: "27 października 2026",
    isoDate: "2026-10-27",
    img: "/img/cybercab-munro-lars-moravy-giga-texas.jpg",
    credit: "Lars Moravy i zespół Tesli prezentują przedni moduł Cybercaba w Giga Texas. Fot. Munro Live / Tesla",
    xPostId: "2114918463638564969",
    body: [
      {
        type: "p",
        text: "Montaż autonomicznej taksówki w Teksasie działa już tak szybko, że fabryka nie uruchamia linii codziennie, bo produkcja aut wyprzedza tempo ich wprowadzania na ulice. W [reportażu kanału Munro Live](https://www.youtube.com/watch?v=UIrK8oStl-0) wiceprezes ds. inżynierii pojazdów Lars Moravy oraz szefowie poszczególnych działów zaprezentowali modułowy proces „Unboxed”, półstrukturalną baterię 4680, napęd współdzielony z ciężarówką Semi oraz wtryskownię tworzyw, która zastąpiła malowanie nadwozia.",
      },
      { type: "x", id: "2114774891002273935", handle: "SawyerMerritt" },
      {
        type: "p",
        text: "Nagranie powstało podczas całodniowej wizyty inżynierów firmy konsultingowej Munro & Associates w zakładzie pod Austin, a w poniedziałek 26 października udostępniły je [zespół Munro Live](https://x.com/live_munro/status/2114739987271073944) oraz [oficjalne konto @robotaxi](https://x.com/robotaxi/status/2114770449083277403). Moravy przyznał przed kamerą, że wąskim gardłem przestała być fabryka, a stało się nim tempo otwierania kolejnych ulic i miast dla autonomicznych taksówek. Po tym jak we wrześniu [pierwsze seryjne partie wyjechały na dach sześciopiętrowego garażu w Giga Texas](https://muskonomia.pl/blog/produkcja-cybercaba-nowe-zdjecia-giga-texas), a flota w stolicy Teksasu [przekroczyła 300 pojazdów](https://muskonomia.pl/blog/tesla-300-cybercabow-obsluguje-austin), wewnętrzny wyścig toczy się dziś między halą montażową a zespołem wdrażającym przejazdy, które [w listopadzie mają ruszyć również w Dallas](https://muskonomia.pl/blog/tesla-cybercab-dallas-listopad-2026). Rozwój autonomicznych przejazdów i łączny przebieg floty śledzimy w naszym [FSD Trackerze](https://muskonomia.pl/fsd-tracker).",
      },
      { type: "h2", text: "Sześć modułów i montaż odwrócony do góry nogami" },
      {
        type: "p",
        text: "Koncepcja rozbicia samochodu na osobne podzespoły powstała w Tesli przed kilku laty, gdy inżynierowie uznali, że dalszą automatyzację blokuje stuletni sposób budowy zamkniętego nadwozia. Trzy lata temu firma wynajęła zewnętrzną halę i zamknęła w jednym pomieszczeniu na trzy tygodnie konstruktorów, technologów produkcji, automatyków oraz programistów, każąc im rozrysować proces na białych tablicach od zera. Jak ujawnił szef integracji pojazdu Eric Earley, pierwsze chwytaki i stacje pozycjonujące dla architektury „Unboxed” zespół testował i walidował jeszcze na konstrukcjach Cybertrucka oraz Modelu Y.",
      },
      {
        type: "img",
        src: "/img/cybercab-modul-przedni-unboxed-giga-texas.jpg",
        alt: "Linia montażowa Cybercaba w Giga Texas",
        caption: "Linia montażowa Cybercaba w Giga Texas. Fot. Munro Live / Tesla",
      },
      {
        type: "p",
        text: "Zamiast prowadzić przez całą fabrykę długi szkielet nadwozia, do którego ludzie i roboty muszą sięgać przez otwory drzwiowe, Tesla podzieliła Cybercaba na sześć części: przód, tył, lewy i prawy bok, podłogę z baterią i fotelami oraz dach z konsolą górną. Każdy z tych modułów powstaje na własnej linii dopływowej, gdzie roboty mają do niego dostęp z każdej strony przy odstępie między stacjami wynoszącym na linii przedniej zaledwie 2 m. Moduły przechodzą pełny test elektryczny i ciśnieniowy jeszcze przed połączeniem z resztą auta.",
      },
      {
        type: "p",
        text: "Dzięki temu główna linia montażu końcowego, którą pokazał odpowiadający za produkcję Hector, jest kilkukrotnie krótsza niż klasyczna linia Modelu Y, a spawanie i składanie ramy wraz z dowozem części przez autonomiczne wózki odbywa się w pełni automatycznie. Odwrócono nawet sam sposób łączenia podwozia z przodem: podczas gdy w tradycyjnych fabrykach podramę z zawieszeniem i silnikiem podnosi się od dołu do nadwozia, w Giga Texas kompletny układ jezdny, napędowy i chłodzący czeka na palecie geometrycznej, a odlewaną strukturę przednią z zamontowaną już deską rozdzielczą robot opuszcza na niego z góry. Koła zakłada na przedostatniej stacji złoto-czerwony robot nazwany przez załogę „Hulk Hogan”, dzięki czemu Cybercab po raz pierwszy dotyka oponami podłogi dopiero w chwili zjazdu z linii.",
      },
      { type: "h2", text: "Hamulce bez przewodów między osiami i dostęp serwisowy od góry" },
      {
        type: "p",
        text: "Przedni moduł skupia około połowy wszystkich części i elektroniki samochodu. Zespół umieścił tam 48-woltowy akumulator niskiego napięcia oraz komputery pokładowe, które są podłączone i gotowe do jazdy jeszcze przed złożeniem nadwozia. Na prośbę mechaników serwisowych dostęp do falownika trakcyjnego zaprojektowano od góry: wystarczy wyjąć zawór spryskiwaczy i zintegrowany blok chłodzenia, aby wymienić elektronikę bez podnoszenia auta na podnośniku i bez demontażu zawieszenia czy silnika. Sam falownik pełni jednocześnie funkcję lokalnej rozdzielnicy wysokiego napięcia, z której bezpośrednio zasilana jest sprężarka klimatyzacji, co pozwoliło usunąć osobne wiązki kablowe biegnące przez auto z akumulatora.",
      },
      {
        type: "p",
        text: "Z przodu zastosowano kolumny MacPhersona z pochylonymi sprężynami i osią zwrotnicy przesuniętą przed środek koła, aby zmieścić zawieszenie pod nisko opadającą maską. Cybercab otrzymał też pierwszy w historii Tesli układ hamulcowy sterowany elektronicznie (brake-by-wire), pozbawiony przewodów hydraulicznych łączących przód z tyłem pojazdu. Rozwiązanie to wymusił sam proces „Unboxed”: bez rozdzielenia hydrauliki nie dałoby się osobno złożyć, odpowietrzyć i przetestować hamulców w przednim oraz tylnym module przed połączeniem samochodu w całość.",
      },
      {
        type: "img",
        src: "/img/wykres-cybercab-inzynieria-kluczowe-liczby.png",
        alt: "Parametry produkcyjne i konstrukcyjne Cybercaba",
        caption: "Parametry produkcyjne i konstrukcyjne Cybercaba. Opracowanie: Muskonomia.pl",
      },
      {
        type: "p",
        text: "Moduły boczne pełnią rolę głównej klatki bezpieczeństwa przy uderzeniach w bok. Każdy bok składa się z dwóch jednoczęściowych wytłoczek ze stali borowej (wewnętrznej i zewnętrznej) tworzących sztywny pierścień drzwiowy chroniący kabinę i baterię. Zapytani przez prowadzącego Jordana Giesige'a o powód zastosowania unoszonych drzwi motylkowych, które wymagają masywnego odlewu przy zawiasie, Moravy i Earley przyznali, że nie stał za tym żaden wymóg techniczny, lecz wybrali je dlatego, że dobrze wyglądają. Dopiero przy okazji okazało się, że wycięcie dachu i wysuwający się na zewnątrz dół drzwi ułatwiają obrót nóg w ciasnych miejscach, chronią przed deszczem i pozwalają na wygodne przesiadanie się z wózka inwalidzkiego, którego siedzisko znajduje się na tej samej wysokości co fotel Cybercaba.",
      },
      { type: "h2", text: "Wtryskownia zamiast lakierni" },
      {
        type: "p",
        text: "Jedną z największych oszczędności w Giga Texas przyniosła całkowita rezygnacja z tradycyjnej lakierni, której budowa pochłania zwykle kilkaset milionów dolarów (ok. 1–1,5 mld zł) i około miliona roboczogodzin. W Cybercabie powłokę antykorozyjną otrzymują wyłącznie stalowe moduły boczne. Przedni i tylny odlew aluminiowy ze stopu serii 356 utwardzanego do stanu T6 pozostają całkowicie surowe, ponieważ materiał ten nie traci wytrzymałości wskutek utleniania, a w miarę starzenia twardnieje. Brak wygrzewania całego nadwozia w piecach lakierniczych wyeliminował też odkształcenia cieplne blach, co w połączeniu ze składaniem modułów od wewnątrz na zewnątrz pozwoliło uzyskać znacznie lepsze spasowanie szczelin niż w tradycyjnych autach czy przemyśle lotniczym, gdzie według Moravy'ego tolerancje rzędu 6,4 mm na kolejnych sekcjach kadłuba potrafią zsumować się na końcu do kilkudziesięciu centymetrów różnicy.",
      },
      {
        type: "p",
        text: "Zamiast malować nadwozie, Tesla przeniosła nadawanie koloru do wtryskowni tworzyw sztucznych, którą kieruje Jyotsna. Przy procesie „Unboxed” klasyczna lakiernia zmuszałaby fabrykę do złożenia wszystkich części w jedno pudło tylko po to, by pomalować je tym samym odcieniem, a następnie do ponownego rozebrania auta na moduły. Tesla przetestowała więc trzy alternatywy: laminowanie folią wewnątrz formy, które wdrożono już produkcyjnie w ciągniku siodłowym Tesla Semi, tłoczenie blachy z nałożoną wcześniej folią lakierniczą oraz wtrysk reaktywny (RIM), który wygrał w Cybercabie. W maszynie wtryskowej na podkład z tworzywa termoplastycznego nakładana jest od razu warstwa poliuretanu wymieszanego z barwnikiem w głowicy tuż przed wtryskiem. Daje to gładką powierzchnię pozbawioną efektu „skórki pomarańczy”, którą w razie zarysowania można polerować i naprawiać tak samo jak zwykły lakier samochodowy. Cały pojazd zaprojektowano na ponad 800 tys. km przebiegu, czyli dwukrotnie więcej niż w samochodach prywatnych.",
      },
      { type: "h2", text: "Bateria z czterema wymiennymi modułami i bezprzewodowym sterowaniem" },
      {
        type: "p",
        text: "Szczegółową budowę akumulatora pokazał dyrektor inżynierii baterii Robbie Sumpf, zaczynając od oceny wcześniejszych konstrukcji Tesli. Pierwszą baterię strukturalną z Modelu Y, w której wszystkie ogniwa zalano na stałe sztywną pianką poliuretanową, Sumpf ocenił w amerykańskiej skali szkolnej na „D” (mierny), ponieważ mimo dobrych właściwości jezdnych okazała się zbyt trudna i droga w produkcji, a awaria pojedynczego ogniwa zmuszała serwis do wymiany całego pakietu. Baterii Cybertrucka wystawił ocenę „B-”, natomiast nowy, półstrukturalny pakiet Cybercaba otrzymał od Larsa Moravy'ego notę „A-”.",
      },
      {
        type: "img",
        src: "/img/cybercab-bateria-4680-cztery-moduly.jpg",
        alt: "Przekrój półstrukturalnej baterii Cybercaba z czterema modułami ogniw 4680",
        caption: "Przekrój półstrukturalnej baterii Cybercaba z czterema modułami ogniw 4680. Fot. Munro Live / Tesla",
      },
      {
        type: "p",
        text: "W Cybercabie Tesla wróciła do podziału baterii na cztery moduły, a żywica usztywniająca zalewana jest wyłącznie wewnątrz każdego z nich. Jeśli przed osiągnięciem 805 tys. km w pakiecie zepsuje się jedno ogniwo, serwis nie wyrzuca całej baterii, lecz wymienia pojedynczy moduł wart ok. 1500 dolarów (ok. 5,8 tys. zł), ratując trzy pozostałe. Przy okazji Sumpf zdradził, że w humanoidalnym robocie Optimus bateria to pojedynczy moduł o pojemności 2,5–3 kWh. W obudowie akumulatora Cybercaba celowo zostawiono też wolne miejsce po bokach i pod modułami, aby w miarę skalowania produkcji można było bez przebudowy podłogi zastosować tańsze ogniwa żelazowo-fosforanowe (LFP) o mniejszej gęstości energii.",
      },
      {
        type: "p",
        text: "Po raz pierwszy w Tesli zarówno górna pokrywa baterii (będąca jednocześnie podłogą kabiny, do której przyspawane są poprzeczki foteli), jak i dolna wanna ochronna zostały wykonane z tłoczonej stali zamiast z kilkukrotnie droższego aluminium, a pięć podłużnic przechodzących przez pakiet przenosi siły zderzenia bocznego i czołowego bez zgniatania ogniw. Elektronikę sterującą przeniesiono z górnego wybrzuszenia w jedną linię z płaskim pakietem i zamknięto w pojedynczym odlewie aluminiowym, który odkręca się od spodu auta jak tacę, bo z danych serwisowych Tesli wynika, że elektronika wymaga interwencji znacznie częściej niż same ogniwa.",
      },
      {
        type: "p",
        text: "Z wnętrza baterii zniknęły również wiązki sygnałowe. Płytki nadzorujące moduły komunikują się z głównym sterownikiem bezprzewodowo przez układ radiowy i mają własne procesory wykrywające przegrzanie ogniw. Dołożenie chipu radiowego kosztowało kilkadziesiąt centów na płytkę, ale pozwoliło usunąć droższą wiązkę kablową i koszt jej ręcznego montażu. Tesla opatentowała też nowe, szybkie styczniki wlutowane bezpośrednio w płytkę sterownika, które potrafią wielokrotnie rozłączyć obwód wysokiego napięcia pod pełnym obciążeniem. Dzięki temu z Cybercaba całkowicie usunięto jednorazowy bezpiecznik pirotechniczny, który w dotychczasowych autach elektrycznych po drobnej stłuczce parkingowej unieruchamiał pojazd i wymuszał kosztowną naprawę.",
      },
      { type: "h2", text: "Napęd wspólny z ciężarówką Semi i nowa pompa ciepła" },
      {
        type: "p",
        text: "O układzie napędowym i chłodzeniu opowiedzieli szef działu jednostek napędowych Nick Verzeni (były konstruktor silników Formuły 1 w Hondzie) oraz odpowiadający za podwozie i termikę Brian Dorlag. Wykorzystując dane z 9 milionów aut Tesli, które przejechały z pompami ciepła łącznie ok. 161 mld km, inżynierowie stworzyli trzecią generację pompy ciepła, nazwaną pośrednim układem termicznym. W dotychczasowych modelach najwięcej strat ciśnienia, nieszczelności i problemów w automatyzacji generowała strona gazowego czynnika chłodniczego. W Cybercabie cały obieg czynnika chłodniczego zamknięto więc w jednym hermetycznym bloku, do którego bezpośrednio, bez osobnych wsporników i bez ani jednego węża, przykręcona jest sprężarka klimatyzacji. Moduł ten jest składany przez roboty, napełniany gazem i sprawdzany na szczelność jeszcze przed montażem w aucie, a całe ciepło w pojeździe rozprowadza prosty w odpowietrzaniu obieg glikolu etylenowego.",
      },
      {
        type: "img",
        src: "/img/cybercab-naped-5du-pompa-ciepla-3gen.jpg",
        alt: "Prezentacja przedniego napędu 5. generacji w Giga Texas",
        caption: "Prezentacja przedniego napędu 5. generacji w Giga Texas. Fot. Munro Live / Tesla",
      },
      {
        type: "p",
        text: "Cybercab ma napęd na przednie koła z pionowo ustawioną jednostką piątej generacji (5DU) oraz nowym falownikiem 5DI, którego płaska obudowa została skierowana w stronę przeciwną do kabiny, by nie przenosić drgań do wnętrza. Z płytki falownika usunięto zbędne elementy, zachowując kompatybilność zarówno z instalacją 12 V, jak i 48 V, a każdy układ scalony ma przygotowanych dwóch lub trzech alternatywnych dostawców na wypadek niedoborów chipów wywołanych popytem ze strony centrów danych AI. Falownik 5DI powstaje na tej samej linii produkcyjnej co dotychczasowy model 4DI, jeszcze w tym roku trafi do seryjnych Modeli 3 i Y, a cały zespół napędowy jest współdzielony z ważącą kilkadziesiąt ton ciężarówką Tesla Semi.",
      },
      {
        type: "p",
        text: "Ponieważ miejska taksówka nie musi rozpędzać się do 225 km/h, przełożenie przekładni zmieniono z typowego w Teslach 9:1 na 11:1 (zespół bada też wariant 14:1), a opracowany przez Teslę nowy olej przekładniowy obniży w tym roku straty tarcia na kołach zębatych o kolejne 7 proc. W stojanie z uzwojeniem prętowym (15 zwojów, po 5 miedzianych prętów w żłobku) zrezygnowano z wycinania kanałów chłodzących w drogiej stali elektrotechnicznej: olej płynie teraz w kanałach odlanych bezpośrednio w tańszej aluminiowej obudowie silnika, tłoczony przez prostą pompę mechaniczną, która zastąpiła droższą pompę elektryczną z własną elektroniką i oprogramowaniem. Według wyliczeń zespołu Munro, gdyby do nadwozia Cybercaba włożyć napęd z elektrycznego Chevroleta Bolta, zasięg auta przy tej samej baterii spadłby o ok. 50–65 km. Verzeni dodał, że w pogoni za niskim kosztem zakazał nawet umieszczania na odlewach ukrytych logotypów i „easter eggów”: jeśli wyfrezowanie znaczka w matrycy podnosi koszt części choćby o jednego centa, nie ma na nie zgody.",
      },
      { type: "h2", text: "Odchudzanie konstrukcji i ładowanie na Superchargerach" },
      {
        type: "p",
        text: "Wszystkie te oszczędności podporządkowano utrzymaniu niskiej masy własnej pojazdu. Moravy wyjaśnił, że w tradycyjnych koncernach motoryzacyjnych auto tyje, bo każdy dział, od zderzeniowego po hamulcowy, dokłada własne 20 proc. marginesu bezpieczeństwa, co uruchamia spiralę cięższych hamulców, zawieszenia i baterii. W projekcie Cybercaba wiceprezes Tesli wprowadził odwrotną zasadę podczas testów niszczących: jeśli element konstrukcyjny nie pęknie między 95 a 100 proc. założonego obciążenia, zespół poniósł porażkę, bo wzmocnienie części z 95 do 103 proc. normy jest proste, a odchudzenie gotowego auta niezwykle trudne.",
      },
      {
        type: "p",
        text: "W rozmowie poruszono także kwestię ładowania indukcyjnego oraz powód, dla którego produkcyjny Cybercab zachował klasyczne gniazdo ładowania. Moravy zaznaczył, że największą przewagą kosztową Tesli nad konkurentami pokroju Waymo czy Zooxa, obok własnej rafinerii litu, produkcji katod i fabryki aut, jest gotowa, globalna sieć Superchargerów, z której flota musi korzystać od pierwszego dnia. W najbliższym czasie podłączaniem wtyczek i obsługą aut w bazach mają zająć się roboty humanoidalne Optimus, natomiast sam Cybercab jest już konstrukcyjnie przystosowany do w pełni automatycznego ładowania bez udziału człowieka lub robota, które będzie wdrażane wraz z rozbudową stacji. Oprócz przewozu pasażerów, dla których auto ma pokryć 80 proc. rocznych potrzeb transportowych, automatycznie przenosząc z chmury ustawienia fotela, klimatyzacji, playlisty i konto na Netfliksie, Earley wskazał na drugą funkcję gęstej sieci Cybercabów: tanie, autonomiczne dostawy towarów i posiłków wewnątrz miast.",
      },
    ],
  },
];
