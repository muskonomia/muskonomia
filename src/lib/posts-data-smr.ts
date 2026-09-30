import type { Post } from "./posts";

export const postsSmr: Post[] = [
  {
    slug: "male-reaktory-jadrowe-jak-wodor",
    kicker: "Energetyka",
    topic: "inne",
    title: "Małe reaktory jądrowe przyciągają miliardy, tak jak kilka lat temu wodór",
    excerpt:
      "Budowy w USA, 900 mln dolarów dotacji i plany OSGE w Polsce. Działające SMR-y w Rosji i Chinach pracują jednak średnio na około jedną trzecią mocy, a energia z nowych bloków ma kosztować według Lazarda około 214 dolarów za MWh. Kilka lat temu podobne obietnice dotyczyły wodoru.",
    date: "30 września 2026",
    isoDate: "2026-09-30",
    img: "/img/smr-yt-fabryka-modulow.jpg",
    credit: "Kadr z filmu kanału Undecided na YouTube (wizualizacja: Ultra Safe Nuclear Corporation)",
    body: [
      {
        type: "p",
        text: "W 2026 r. w USA ruszyła budowa pierwszej komercyjnej elektrowni z reaktorem nowej generacji, a Departament Energii rozdzielił niemal 900 mln dolarów (ok. 3,5 mld zł) na małe reaktory modułowe (SMR). Działające już SMR-y w Rosji i Chinach wykorzystują jednak tylko część swojej mocy, a pierwszy zaawansowany projekt NuScale w USA upadł z powodu kosztów. Podobne zapowiedzi, dotacje i daty docelowe na 2030 r. kilka lat temu miał wodór, a dziś audytorzy i analitycy uznają te cele za nierealne.",
      },
      {
        type: "p",
        text: "Małe reaktory modułowe mają moc od kilkudziesięciu do około 300 MW, podczas gdy klasyczne bloki jądrowe mają zwykle 1000 MW i więcej. Większość elementów SMR-a ma powstawać w fabryce, a na budowie ma być tylko składana. Według zwolenników seryjna produkcja jednego projektu obniży koszt każdego kolejnego reaktora, podobnie jak stało się to z panelami fotowoltaicznymi. Warunkiem jest jednak duża liczba zamówień na ten sam projekt. W zestawieniu Agencji Energii Jądrowej OECD z lipca 2025 r. [naliczono 127 różnych konstrukcji SMR](https://www.world-nuclear-news.org/articles/there-are-now-127-different-smr-designs-finds-nea-report), z czego 74 opisano szczegółowo.",
      },
      {
        type: "p",
        text: "Najbardziej zaawansowanym projektem SMR w USA był Carbon Free Power Project stowarzyszenia miejskich zakładów energetycznych UAMPS z Utah, które miało kupić reaktory firmy NuScale i postawić je na terenie Idaho National Laboratory. W 2015 r. elektrownia z 12 modułami o łącznej mocy 600 MW miała kosztować około 3 mld dolarów (ok. 11,6 mld zł) bez kosztów finansowania. W 2018 r. szacunek wynosił 4,2 mld dolarów, a w 2020 r. już [6,1 mld dolarów](https://www.utilitydive.com/news/design-updates-financial-shakeup-prompt-utilities-to-rethink-structure-of/589262/) dla 720 MW, tym razem z kosztami finansowania. W 2021 r. projekt zmniejszono do sześciu modułów i 462 MW. W styczniu 2023 r. koszt budowy wzrósł z 5,3 do 9,3 mld dolarów (ok. 35,8 mld zł), a docelowa cena energii z 58 do 89 dolarów za MWh, i to przy 1,4 mld dolarów wsparcia Departamentu Energii oraz ulgach podatkowych [według IEEFA](https://ieefa.org/resources/eye-popping-new-cost-estimates-released-nuscale-small-modular-reactor). 8 listopada 2023 r. [UAMPS i NuScale zakończyły projekt](https://www.nuscalepower.com/press-releases/2023/utah-associated-municipal-power-systems-and-nuscale-power-agree-to-terminate-the-carbon-free-power-project), bo zbyt mało członków stowarzyszenia chciało kupować z niego energię.",
      },
      {
        type: "img",
        src: "/img/smr-yt-nuscale-koszty-uamps.jpg",
        alt: "Kadr z filmu kanału Undecided na YouTube. Kolejne szacunki kosztu projektu NuScale i UAMPS dotyczyły elektrowni o różnej mocy i obejmowały różny zakres kosztów",
        caption: "Kadr z filmu kanału Undecided na YouTube. Kolejne szacunki kosztu projektu NuScale i UAMPS dotyczyły elektrowni o różnej mocy i obejmowały różny zakres kosztów",
      },
      {
        type: "p",
        text: "Najnowsze zestawienie [Lazard LCOE+ z lipca 2026 r.](https://www.lazard.com/research-insights/levelized-cost-of-energyplus-lcoeplus/) wycenia uśredniony koszt energii z nowej dużej elektrowni jądrowej w USA na 175–255 dolarów za MWh (ok. 674–983 zł). Dla fotowoltaiki w skali sieciowej to 40–98 dolarów, a dla wiatraków na lądzie 37–99 dolarów za MWh, bez ulg podatkowych. Lazard po raz pierwszy podał też orientacyjny koszt energii z SMR-ów, liczony na podstawie projektów Clinch River, Darlington i Natrium. Wynosi on 214 dolarów za MWh (ok. 825 zł). Firma zastrzega, że to szacunek bardzo orientacyjny i nie w pełni porównywalny z innymi źródłami, bo pierwsze takie bloki mają ruszyć dopiero w 2030 r. i później.",
      },
      {
        type: "img",
        src: "/img/smr-yt-lcoe-lazard.jpg",
        alt: "Kadr z filmu kanału Undecided na YouTube (dane: Lazard, LCOE+ 2026)",
        caption: "Kadr z filmu kanału Undecided na YouTube (dane: Lazard, LCOE+ 2026)",
      },
      {
        type: "p",
        text: "Punktem odniesienia dla atomu w USA jest elektrownia Vogtle w Georgii. Budowa bloków 3 i 4 ruszyła w 2009 r., miała kosztować 14 mld dolarów i zakończyć się w latach 2016–2017. [Blok 3 zaczął komercyjną pracę 31 lipca 2023 r., a blok 4 29 kwietnia 2024 r.](https://www.georgiapower.com/news-hub/press-releases/vogtle-unit-4-enters-commercial-operation.html) To pierwsze od ponad 30 lat nowo zbudowane bloki jądrowe w USA. Według [Goldman Sachs](https://www.goldmansachs.com/insights/articles/new-nuclear-age-why-the-world-is-rethinking-atomic-power) budowa trwała około 15 lat i kosztowała ponad 35 mld dolarów (ok. 135 mld zł). Zespół MIT, który przeanalizował 50 lat budów elektrowni jądrowych w USA, [ustalił](https://news.mit.edu/2020/reasons-nuclear-overruns-1118), że kolejne bloki według istniejącego projektu kosztowały więcej, a nie mniej niż pierwszy. Dużą część nadwyżek wywołały opóźnienia i zmiany projektu w ostatniej chwili, dostosowane do warunków na konkretnej budowie.",
      },
      {
        type: "p",
        text: "Na świecie komercyjnie pracują dwie elektrownie z SMR-ami. Rosyjska pływająca elektrownia Akademik Łomonosow w arktycznym porcie Pewek ma dwa reaktory KLT-40S o mocy 35 MW brutto każdy. Dostarcza ciepło do miasta i prąd do lokalnego, wydzielonego systemu energetycznego. Budowa ruszyła w kwietniu 2007 r., a komercyjna eksploatacja [zaczęła się 22 maja 2020 r.](https://world-nuclear.org/nuclear-reactor-database/details/Akademik-Lomonosov-1), czyli po 13 latach. Według danych MAEA w 2022 r. współczynnik wykorzystania mocy wyniósł 26,4 proc. w pierwszym reaktorze i [30,5 proc. w drugim](https://world-nuclear.org/nuclear-reactor-database/details/Akademik-Lomonosov-2). Łącznie od startu do końca 2025 r. było to 33,1 i 28,7 proc.",
      },
      {
        type: "img",
        src: "/img/smr-yt-akademik-lomonosow-klt-40s.jpg",
        alt: "Kadr z filmu kanału Undecided na YouTube (materiał: Rosatom). Pływająca elektrownia Akademik Łomonosow w Pewku",
        caption: "Kadr z filmu kanału Undecided na YouTube (materiał: Rosatom). Pływająca elektrownia Akademik Łomonosow w Pewku",
      },
      {
        type: "p",
        text: "Chiński HTR-PM w Shidaowan w prowincji Szantung ma dwa reaktory wysokotemperaturowe chłodzone helem, które napędzają jedną turbinę o mocy 210 MW. Pierwszy beton wylano w grudniu 2012 r., do sieci elektrownię podłączono w grudniu 2021 r., a [komercyjną pracę ogłoszono 6 grudnia 2023 r.](https://world-nuclear-news.org/Articles/Chinese-HTR-PM-Demo-begins-commercial-operation) W 2024 r. współczynnik wykorzystania mocy wyniósł [15,6 proc., a w 2025 r. 43,8 proc.](https://world-nuclear.org/nuclear-reactor-database/details/Shidaowan-HTR-PM-1) Za 2022 r. baza MAEA nie podaje żadnych danych o pracy tej elektrowni. Według Goldman Sachs rosyjskie i chińskie SMR-y przekroczyły pierwotne kosztorysy o 300–400 proc.",
      },
      {
        type: "p",
        text: "W 2026 r. w USA ruszyły pierwsze budowy. 9 marca NRC, amerykański dozór jądrowy, [wydał TerraPower pozwolenie na budowę](https://www.energy.gov/ne/articles/nrc-issues-construction-permit-terrapowers-natrium-advanced-reactor) elektrowni Natrium w Kemmerer w stanie Wyoming. To pierwsze w historii pozwolenie NRC dla komercyjnego reaktora, który nie jest chłodzony wodą. [Budowa ruszyła 23 kwietnia](https://www.terrapower.com/TerraPower-Commences-Construction-on-Americas-First-Utility-Scale-Advanced-Nuclear-Power-Plant). Reaktor prędki chłodzony sodem ma mieć 345 MW, a magazyn ciepła w stopionych solach ma pozwolić chwilowo podnieść moc do 500 MW. Departament Energii spodziewa się zakończenia budowy w 2030 r. Przed uruchomieniem TerraPower musi jeszcze dostać osobną licencję na eksploatację. W Oak Ridge w stanie Tennessee firma Kairos Power [buduje od lipca 2024 r.](https://www.kairospower.com/updates/kairos-power-begins-construction-on-hermes-low-power-demonstration-reactor) Hermes, demonstracyjny reaktor małej mocy.",
      },
      {
        type: "p",
        text: "Budowy wspiera też budżet federalny. W programie Departamentu Energii dla SMR-ów trzeciej generacji plus [do rozdziału było 900 mln dolarów](https://www.energy.gov/ne/generation-iii-small-modular-reactor-program). Po 400 mln dolarów (ok. 1,5 mld zł) dostały TVA na reaktor BWRX-300 w Clinch River w stanie Tennessee oraz Holtec na dwa reaktory SMR-300 przy elektrowni Palisades w stanie Michigan. W maju 2026 r. kolejne około 94 mln dolarów trafiło do ośmiu firm na lokalizacje i łańcuch dostaw.",
      },
      {
        type: "p",
        text: "Część nowych konstrukcji potrzebuje paliwa HALEU, czyli uranu wzbogaconego do 5–20 proc. Według Goldman Sachs we wrześniu 2025 r. jedynym komercyjnym producentem HALEU na świecie był Tenex, spółka zależna Rosatomu. Import rosyjskiego nisko wzbogaconego uranu do USA [zakazuje ustawa z 2024 r.](https://www.congress.gov/bill/118th-congress/house-bill/1042) Amerykański Centrus wyprodukował w zakładzie w Piketon w stanie Ohio łącznie ponad 1900 kg HALEU w ramach kontraktu demonstracyjnego. W lipcu 2026 r. [podpisał z Departamentem Energii kontrakt na 900 mln dolarów](https://www.centrusenergy.com/news/centrus-signs-contract-with-department-of-energy-for-900-million-award-intends-to-transition-haleu-production-cascade-to-commercial-operation/) (ok. 3,5 mld zł) na produkcję na skalę przemysłową. Pierwszy etap ma dać 12 t HALEU rocznie, a nowe moce mają ruszyć do 2029 r. Departament Energii [szacuje](https://www.energy.gov/ne/articles/what-high-assay-low-enriched-uranium-haleu), że zapotrzebowanie w USA może dojść do 50 t rocznie w 2035 r.",
      },
      {
        type: "p",
        text: "Międzynarodowa Agencja Energetyczna (IEA) w raporcie z 2025 r. [przewiduje](https://www.iea.org/reports/the-path-to-a-new-era-for-nuclear-energy/executive-summary), że przy obecnej polityce moc SMR-ów na świecie dojdzie do 40 GW w 2050 r. W scenariuszu szybkiego wzrostu byłoby to 120 GW i ponad tysiąc reaktorów, ale wymagałoby to łącznych inwestycji rzędu 670 mld dolarów do 2050 r. Według IEA pierwsze komercyjne projekty SMR mają ruszyć około 2030 r.",
      },
      {
        type: "p",
        text: "Na Zachodzie najdalej zaszedł projekt Ontario Power Generation w Darlington w Kanadzie. 4 kwietnia 2025 r. kanadyjski dozór jądrowy [wydał licencję na budowę](https://www.world-nuclear-news.org/articles/canadian-regulator-issues-smr-construction-licence) pierwszego z czterech reaktorów BWRX-300 firmy GE Vernova Hitachi. [Według OPG](https://www.opg.com/projects-services/projects/nuclear/smr/darlington-smr/) pierwszy blok ma kosztować 6,1 mld dolarów kanadyjskich, do tego 1,6 mld na część wspólną, a wszystkie cztery 20,9 mld dolarów kanadyjskich (ok. 56,8 mld zł). Daje to około 17 mln dolarów kanadyjskich na każdy megawat mocy. Spółka chce skończyć budowę pierwszego bloku pod koniec dekady i podłączyć go do sieci do końca 2030 r.",
      },
      {
        type: "p",
        text: "Ten sam reaktor chce budować w Polsce Orlen Synthos Green Energy (OSGE), spółka Orlenu i Synthosu, która planuje flotę 26 bloków BWRX-300. Prezes Państwowej Agencji Atomistyki [wydał 23 maja 2023 r. ogólną opinię](https://www.gov.pl/web/paa/ogolna-opinia-prezesa-paa-w-sprawie-reaktora-bwrx-300) o wybranych założeniach technicznych tej konstrukcji. W czerwcu 2026 r. OSGE [wystąpiło do Ministerstwa Energii](https://www.wnp.pl/energia/osge-liczy-na-wsparcie-rzadu-przy-budowie-reaktorow-smr-zlozono-wniosek-do-ministerstwa-energii,1076765.html) o kontrakty różnicowe dla 14 bloków we Włocławku, w Stawach Monowskich koło Oświęcimia i w Stalowej Woli. Spółka ma decyzje zasadnicze dla wszystkich tych bloków oraz decyzje środowiskowe dla Włocławka i Stawów Monowskich. Pierwszy blok ma ruszyć we Włocławku w 2032 r. Prezes OSGE Rafał Kasprów szacuje koszt jednego bloku na około 2 mld euro (ok. 8,7 mld zł), a oczekiwaną cenę w kontrakcie różnicowym na 115–135 euro za MWh (ok. 503–590 zł).",
      },
      {
        type: "p",
        text: "Kilka lat temu podobne zapowiedzi dotyczyły wodoru. Polska przyjęła [strategię wodorową](https://www.gov.pl/web/premier/uchwala-w-sprawie-przyjecia-polskiej-strategii-wodorowej-do-roku-2030-z-perspektywa-do-2040-r) w listopadzie 2021 r. Do 2030 r. miało powstać 2 GW instalacji do produkcji wodoru, co najmniej 32 stacje tankowania i co najmniej pięć dolin wodorowych, a po drogach miało jeździć 800–1000 nowych autobusów wodorowych. W lutym 2026 r. współautor strategii, były wiceminister klimatu Ireneusz Zyska, [mówił](https://www.wnp.pl/energia/wodor-schodzi-z-afisza-polityczny-hype-gasnie-zostaje-twardy-biznes,1028762.html), że założenia „częściowo zostały zrealizowane, częściowo jednak pozostały na papierze i są obecnie już nieaktualne”. Ministerstwo Klimatu i Środowiska pracuje nad aktualizacją dokumentu.",
      },
      {
        type: "p",
        text: "Niemcy w strategii wodorowej z 2023 r. zapisały 10 GW elektrolizerów do 2030 r. W marcu 2026 r. bank KfW [policzył](https://www.kfw.de/PDF/Download-Center/Konzernthemen/Research/PDF-Auf-einen-Blick/2026_03_04_Elektrolyse.pdf), że w kraju działa około 0,2 GW, w budowie jest kolejne 1,1 GW, a do końca 2030 r. może powstać najwyżej około 2,4 GW. W czerwcu 2025 r. ArcelorMittal [zrezygnował](https://www.reuters.com/sustainability/climate-energy/arcelormittal-drops-plans-green-steel-germany-due-high-energy-costs-2025-06-19/) z przestawienia hut w Bremie i Eisenhüttenstadt na wodór i odrzucił 1,3 mld euro dotacji (ok. 5,7 mld zł), bo energia w Niemczech jest według koncernu zbyt droga.",
      },
      {
        type: "p",
        text: "Unia Europejska w planie REPowerEU założyła na 2030 r. produkcję 10 mln t odnawialnego wodoru, import kolejnych 10 mln t i 40 GW elektrolizerów. W lipcu 2024 r. Europejski Trybunał Obrachunkowy [ocenił](https://www.eca.europa.eu/ECAPublications/SR-2024-11/SR-2024-11_EN.pdf), że te cele są nierealne i wynikały z „woli politycznej”, a nie z rzetelnej analizy. Według [Reutersa](https://www.reuters.com/business/energy/eus-green-hydrogen-goals-not-realistic-auditors-say-2024-07-17/), choć na zielony wodór udostępniono 18,8 mld euro unijnych pieniędzy, do zaawansowanego etapu doszły projekty o mocy poniżej 5 GW.",
      },
      {
        type: "p",
        text: "Według raportu [IEA Global Hydrogen Review 2026](https://www.iea.org/reports/global-hydrogen-review-2026) w 2025 r. na świecie wyprodukowano niemal 1 mln t niskoemisyjnego wodoru przy łącznym zapotrzebowaniu ponad 100 mln t. Łączna moc elektrolizerów na świecie przekroczyła 4 GW, czyli jedną dziesiątą samego unijnego celu na 2030 r. Zapowiadane projekty na 2030 r. skurczyły się do 27 mln t rocznie, a te przesądzone lub z dużą szansą realizacji spadły z 10 do nieco ponad 6 mln t. Wśród wycofanych projektów jest FlagshipONE Ørsteda w szwedzkim Örnsköldsvik, fabryka e-metanolu z zielonego wodoru. Decyzję inwestycyjną podjęto w grudniu 2022 r., a budowę rozpoczęto w maju 2023 r. W sierpniu 2024 r. Ørsted [zakończył projekt](https://bioenergyinternational.com/orsted-halts-development-of-flagshipone/), bo nie udało się podpisać długich umów sprzedaży po opłacalnych cenach, a koszty wyraźnie wzrosły.",
      },
      {
        type: "p",
        text: "Z rynku znikają też stacje tankowania wodoru dla samochodów osobowych. W lutym 2024 r. Shell [zamknął wszystkie siedem](https://insideevs.com/news/708156/shell-closes-california-hydrogen-stations/) swoich stacji dla aut osobowych w Kalifornii, podając jako powód problemy z dostawami wodoru i warunki rynkowe. W Niemczech H2 Mobility, największy operator stacji wodorowych, [zamknął w 2025 r. 22 stacje](https://www.electrive.net/2025/03/03/h2-mobility-schliesst-22-h2-tankstellen/). Według [serwisu electrive](https://www.electrive.net/2026/01/15/nur-noch-rund-50-oeffentliche-wasserstoff-tankstellen-in-deutschland/) liczba publicznych stacji wodorowych w Niemczech spadła w ciągu dwóch lat z około 80 do około 50. W całym 2025 r. zarejestrowano tam 49 nowych samochodów z ogniwami paliwowymi, o 69 proc. mniej niż rok wcześniej. W Austrii OMV zamknął wszystkie pięć swoich stacji wodorowych.",
      },
      {
        type: "p",
        text: "Moim zdaniem SMR-y są zapowiadane z wielką pompą, ale na razie wygląda to dokładnie tak jak z wodorem kilka lat temu. Będzie szum, popłyną pieniądze, a i tak nic z tego nie wyjdzie.",
      },
    ],
  },
];
