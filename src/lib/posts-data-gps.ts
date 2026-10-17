import type { Post } from "./posts";

export const postsGps: Post[] = [
  {
    slug: "zgloszenie-patentowe-tesli-poprawki-gps-nie-starlink",
    kicker: "Starlink",
    topic: "spacex",
    title: "Zgłoszenie patentowe Tesli dotyczy poprawek GPS, a nie Starlinka",
    excerpt:
      "Według Muska Starlink umożliwia nawigację bez GPS. Zgłoszenie patentowe Tesli, które na X przedstawiano jako patent na Starlinka, opisuje jednak auta dzielące się poprawkami GPS.",
    date: "17 października 2026",
    isoDate: "2026-10-17",
    img: "/img/starlink-satelity-spacex-cc0.jpg",
    credit:
      "Satelity Starlink przed rozmieszczeniem na orbicie, 24 maja 2019 r. Fot. SpaceX, CC0",
    xPostId: "2111357248886731239",
    body: [
      {
        type: "p",
        text: "Konto @seti_park [przekonywało](https://x.com/seti_park/status/2111092550237085812) w piątek 16 października, że to Tesla, a nie SpaceX, złożyła patent na lokalizowanie aut satelitami Starlink, i podało numer zgłoszenia US 2026/0309876 A1. Pod tym wpisem odpowiedział Elon Musk. Sam dokument Starlinka jednak nie wymienia.",
      },
      { type: "x", id: "2111134744574333093", handle: "elonmusk" },
      {
        type: "p",
        text: "„Starlink od SpaceX umożliwia precyzyjną nawigację bez potrzeby korzystania z satelitów GPS” – [odpisał Musk](https://x.com/elonmusk/status/2111134744574333093). Do treści zgłoszenia Tesli się nie odniósł.",
      },
      { type: "h2", text: "Co jest w zgłoszeniu" },
      {
        type: "p",
        text: "US 2026/0309876 A1 to opublikowane zgłoszenie patentowe, a nie przyznany patent. Nosi tytuł „Systems and Methods for Vehicle Positioning”. Według [publikacji amerykańskiego urzędu patentowego USPTO](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/20260309876) Tesla złożyła je 22 czerwca 2026 r., a opublikowano je 8 października. Wynalazcy to Neda Cvijetic, Robert Cofield, Mark McClelland, Zeljko Popovic i Francis Havlak. Zgłoszenie jest kontynuacją rodziny, która zaczyna się od wniosku z 1 czerwca 2017 r. Wyrosły z niej już patenty [US 10,534,092](https://patents.google.com/patent/US10534092B2/en), US 11,366,238 i [US 12,693,432](https://patents.google.com/patent/US12693432B2/en).",
      },
      {
        type: "img",
        src: "/img/tesla-zgloszenie-us20260309876-uspto-strona1.jpg",
        alt: "Strona tytułowa zgłoszenia patentowego Tesli US 2026/0309876 A1",
        caption: "Strona tytułowa zgłoszenia US 2026/0309876 A1. Źródło: USPTO",
        contain: true,
      },
      {
        type: "p",
        text: "Abstrakt opisuje poprawę dokładności lokalizacji auta mimo czynników, które zakłócają sygnał satelitów nawigacyjnych. Dokładność ma rosnąć dzięki wyznaczaniu i przekazywaniu poprawki albo dzieleniu się surowymi danymi pozycyjnymi między urządzeniami, z których co najmniej jedno wystarczająco dokładnie zna swoje położenie. Dane te trafiają do algorytmów różnicowych. Jako przykłady systemów satelitarnych dokument wymienia GPS, rosyjski GLONASS i europejski Galileo. Słowa „Starlink” ani „SpaceX” w nim nie ma.",
      },
      {
        type: "p",
        text: "Pierwsze zastrzeżenie opisuje auto, które ustala swoje położenie i orientację, porównując obraz z kamer z mapą. Uśrednia pomiary pozycji, wylicza poprawkę i razem z surowym pomiarem wysyła ją na serwer. Serwer przekazuje te dane innym autom, które znajdują się w pobliżu w tym samym czasie, a one korygują na ich podstawie własną pozycję. Dokument opisuje też sytuację, w której auto pełni rolę stacji referencyjnej dla innych pojazdów. Serwis [Patentlyze](https://patentlyze.com/patent/tesla-cars-sharing-gps-corrections-each-other/) streszcza zgłoszenie jako system, w którym auta Tesli dzielą się między sobą poprawkami GPS.",
      },
      { type: "h2", text: "Starlink jako zapasowa nawigacja" },
      {
        type: "p",
        text: "Wpis Muska dotyczy osobnej sprawy. Jak [opisała Ars Technica](https://arstechnica.com/gadgets/2026/05/starlink-blocks-access-to-its-gps-alternative-ahead-of-spacex-ipo/), SpaceX w liście do amerykańskiej FCC z maja 2025 r. przyznało, że Starlink może świadczyć usługi pozycjonowania, nawigacji i synchronizacji czasu. Część użytkowników korzystała z funkcji lokalizacji anteny z opcją oparcia się wyłącznie na Starlinku, która działała także przy zakłóceniach GPS. W kwietniu Starlink zawiadomił klientów, że od 20 maja 2026 r. te dane nie będą dostępne. Według [PCMag](https://me.pcmag.com/en/networking/37356/starlink-revives-gps-function-but-only-for-priority-plans) SpaceX zachowało jednak tę funkcję w biznesowych planach Priority.",
      },
      {
        type: "p",
        text: "Prof. Todd Humphreys z Uniwersytetu Teksasu w Austin mówił Ars Technice, że Starlink jako zapas dla GNSS jest zupełnie innym systemem. Działa na częstotliwościach dziesięć razy wyższych niż GPS, w paśmie od 10 do 100 razy szerszym i z sygnałem od 100 do 1000 razy silniejszym, więc trudniej go zagłuszyć i sfałszować. Dokładność jest jednak gorsza niż w GPS. Zespół Humphreysa pokazał, że symulowana usługa oparta na Starlinku dawałaby dokładność rzędu 10 m, gdyby SpaceX dostarczało poprawki zegara i orbit, na razie z kilkuminutowym opóźnieniem obliczeń.",
      },
      {
        type: "p",
        text: "Zespół prof. Zaka Kassasa z Ohio State University korzysta z sygnałów Starlinka bez współpracy ze SpaceX. W 2021 r. na podstawie sygnałów sześciu satelitów [ustalił położenie z dokładnością do 8 m](https://engineering.osu.edu/news/2021/09/spacex-satellite-signals-used-gps-pinpoint-location-earth). W nowszych badaniach, opisanych w [Inside GNSS](https://insidegnss.com/exploiting-starlink-leo-for-pnt/), nieruchomy odbiornik określał swoją pozycję z dokładnością do 2 m w 20 sekund. Auto przejechało też prawie 3 km po Pittsburghu, nawigując tylko z pomocą satelitów Starlink, z błędem rzędu metrów i z poprawkami od odbiornika referencyjnego w Columbus.",
      },
      {
        type: "p",
        text: "Zakłócenia GPS dotyczą także Polski. Według Instytutu Łączności, na który powołuje się [TVP World](https://tvpworld.com/95036347/russian-gps-interference-disrupts-signal-in-polands-tricity), stacja pomiarowa w Gdańsku w maju i czerwcu 2026 r. rejestrowała wielogodzinne zakłócenia wszystkich pasm GNSS przez 70 proc. dni. Instytut wiąże je z walką elektroniczną w rejonie Bałtyku. Litwa podawała, że sprzęt do fałszowania sygnału w obwodzie królewieckim może działać na odległość do 450 km.",
      },
    ],
  },
];
