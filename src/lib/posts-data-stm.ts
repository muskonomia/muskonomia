import type { Post } from "./posts";

export const postsStm: Post[] = [
  {
    slug: "superkomputer-starlink-to-jeszcze-nie-starmind",
    kicker: "Starmind",
    topic: "spacex",
    title: "Superkomputer na Starlinku to jeszcze nie Starmind",
    excerpt:
      "Komentarz Muska o 10 Tb, 250 kW i Vera Rubin NVL72 nie oznacza, że Starlink V3 i Starmind to jeden satelita. SpaceX dzieli ramę i Starship, nie ładunek.",
    date: "23 września 2026",
    isoDate: "2026-09-23",
    img: "/img/starmind-okladka.jpg",
    body: [
      {
        type: "p",
        text: "Komentarz Elona Muska z 20 września 2026 o Starlinku V3 przekonał wielu, że SpaceX zszywa Starlink i Starmind w jednego satelitę. Oba projekty korzystają z tych samych części: paneli, laserów, silników i dispensera Starshipa, więc fuzja brzmi wiarygodnie. SpaceX konsoliduje fabrykę i platformę, a nie przykleja pełnej stacji bazowej i pełnego centrum danych do jednego kadłuba.",
      },
      { type: "h2", text: "Co Musk powiedział 20 września" },
      {
        type: "p",
        text: "Tego dnia Musk odpowiedział na informację, że FCC przyjęła do rozpatrzenia wniosek SpaceX o 100 tys. satelitów Gen3 Starlink. Wniosek obejmuje dwie powłoki na bardzo niskiej orbicie Ziemi — 323–327,5 km i 473–477,5 km — oraz inklinacje od 26° do 96,9° (SSO).",
      },
      {
        type: "p",
        text: "Musk napisał, że łączność na satelitę będzie raczej rzędu 10 Tb w obu kierunkach, z ścieżką do ponad 100 Tb, a każdy satelita ma 250 kW i będzie miał komputer Nvidia Vera Rubin NVL72 zaprojektowany przez SpaceX.",
      },
      { type: "x", id: "2101466638939832365", handle: "elonmusk" },
      {
        type: "p",
        text: "Vera Rubin NVL72 to nie modem. To komputer AI w skali szafy: 72 GPU Rubin, rzędu 140–250 kW — ta sama klasa maszyny, którą SpaceX i Nvidia projektują dla Starmind, konstelacji orbitalnych centrów danych. Liczby z odpowiedzi zawieszono na wątku Gen3: kierunek produktu, nie oświadczenie, że bieżące V3 są data center ani że jeden kadłub wykona obie misje w pełnej specyfikacji.",
      },
      {
        type: "p",
        text: "Starlink V3 leci pierwszy. Lot 14 Starshipa ma umieścić pierwszą partię operacyjną — około 26 satelitów V3. Specyfikacje z lipca 2026: mniej więcej 1 Tbps w dół i 160 Gbps w górę, 2048 niezależnie sterowanych wiązek w każdą stronę, sześć laserów 400 Gbps, czterozakresowy backhaul RF, panele około dwa razy większe niż V2 (cztery zszyte segmenty 19-metrowe), masa około 2000 kg. To satelita broadbandowy, nie szafa GPU na 250 kW.",
      },
      {
        type: "p",
        text: "Gen3 to późniejszy system 100 tys. satelitów z wniosku FCC, na który Musk odpowiadał: łączność klasy 10 Tbps, 250 kW i NVL72. Wniosek nadal opisuje konstelację komunikacyjną — 2000–2500 kg, 300–400 m² powierzchni, pięcioletni żywot, VLEO, mieszane inklinacje, spektrum Ku przez pasma W i D.",
      },
      {
        type: "p",
        text: "Starmind AI1 to inny statek. Nazwa potwierdzona w czerwcu. Koperta FCC: do miliona satelitów, masa poniżej 4000 kg, panele poniżej 1500 m², radiatory poniżej 200 m². Projekt: około 70 m rozpiętości, około 20 m wysokości, 175 kW średnio i 250 kW szczytowo na compute, ciekłe radiatory, SSO koło 600 km, bez konsumenckich anten fazowanych. Według Muska z czerwca satelita AI jest prostszy niż Starlink, bo nie niesie gigantycznych anten — panele, radiator, lasery i szafa.",
      },
      {
        type: "img",
        src: "/img/starmind-okladka.jpg",
        alt: "Render satelity Starmind z rozłożonymi skrzydłami nad Ziemią",
        caption:
          "Render Starminda. Źródło: [SpaceX](https://x.com/SpaceX/status/2084723854534951218).",
        href: "https://www.spacex.com/spacexai/starmind",
      },
      {
        type: "img",
        src: "/img/starmind-skrzydla.jpg",
        alt: "Zbliżenie skrzydła i radiatora satelity Starmind",
        caption:
          "Skrzydło i radiator. Źródło: [SpaceX](https://x.com/SpaceX/status/2084723854534951218).",
        href: "https://x.com/SpaceX/status/2084723854534951218",
      },
      { type: "h2", text: "Dlaczego jeden satelita nie zrobi obu" },
      {
        type: "p",
        text: "Moc. NVL72 chce 140–250 kW; anteny V3 i 2048 wiązek biorą dziesiątki kilowatów. 250 kW łącznie nie pociągnie obu. Trzeba 300–400 kW paneli, więcej radiatorów, więcej masy i mniej satelitów na Starshipa.",
      },
      {
        type: "p",
        text: "Ciepło. AI1 potrzebuje 110–160 m² ciekłych radiatorów; na 325 km Earthshine pogarsza odrzut ciepła względem 600 km.",
      },
      {
        type: "p",
        text: "Zaćmienia. Broadband chce VLEO ze względu na latencję (350 km wobec 550 km to mniej więcej połowa minimalnej latencji, podłoga poniżej 5 ms). Dziewięćdziesięciominutowa orbita to około 35 minut w cieniu; 250 kW przez zaćmienie to około 150 kWh baterii na okrążenie. Starmind rysowany jest pod SSO świt–zmierzch.",
      },
      {
        type: "p",
        text: "Opór. Gen3 z 300–400 m² na 325 km ma żywot pięć lat; Starmind do 1500 m² — argon na utrzymanie orbity staje się ładunkiem. V3 zoptymalizowano pod opór, Starmind pod około 210 kW.",
      },
      {
        type: "p",
        text: "Naprowadzanie. Anteny na Ziemię, panele na Słońce, radiatory krawędzią do Słońca — każdy gimbal to masa i awarie. AI1 działa, bo zrzucono anteny.",
      },
      {
        type: "p",
        text: "Pokrycie. Broadband wymaga wielu inklinacji od 26° do 97°; compute praktycznie jednej płaszczyzny około 98° SSO.",
      },
      { type: "h2", text: "Co jest łączone" },
      {
        type: "p",
        text: "Rama oraz fabryka, w której to wszystko będzie składane w jedną całość. Bastrop to ponad 11 mln stóp kwadratowych. Wspólne: panele słoneczne (V3: cztery segmenty 19 m na skrzydło), lasery (V3: sześć po 400 Gbps), silniki Halla na argon (instalacje ASU przy Starbase i KSC), pętle termiczne, awionika, flota 10 tys. satelitów, Starship. Nie dzieli się zestawu ładunku. W latach 2027–28: lekki compute na warstwie łączności oraz dedykowane AI1 na SSO; lasery spinają sieć.",
      },
    ],
  },
];
