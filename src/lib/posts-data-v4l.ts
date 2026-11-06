import type { Post } from "./posts";

export const postsV4l: Post[] = [
  {
    slug: "starlink-v4-lacza-laserowe-10-terabitow",
    kicker: "Starlink",
    topic: "spacex",
    title: "Starlink V4 ma mieć dziesięć razy większą pojemność niż V3",
    excerpt:
      "Elon Musk na Baron Investment Conference mówił o Starlink V4 z dziesięciokrotnie większą pojemnością niż V3 i łączach laserowych 10 Tb/s. We wpisie na X dopisał o około 100 laserach na satelitę i konkurencji z kablami podmorskimi.",
    date: "6 listopada 2026",
    isoDate: "2026-11-06",
    img: "/img/starlink-v4-lasery-okladka-1600x900.jpg",
    credit: "Antena Starlink pod nocnym niebem. Fot. Starlink",
    body: [
      {
        type: "p",
        text: "Na 33. Baron Investment Conference w Nowym Jorku Elon Musk mówił o satelitach Starlink następnej generacji i łączach laserowych o przepustowości 10 Tb/s. Kilka godzin później dopisał na X, że przy około 100 laserach na satelitę i ponad 100 tysiącach satelitów sieć mogłaby konkurować z kablami podmorskimi.",
      },
      {
        type: "img",
        src: "/img/starlink-v4-lasery-okladka-1600x900.jpg",
        alt: "Antena Starlink pod nocnym niebem",
        caption: "Antena Starlink pod nocnym niebem. Fot. Starlink",
      },
      {
        type: "p",
        text: "Rozmowa z Ronem Baronem odbyła się 6 listopada 2026 r. Elon łączył się zdalnie, Baron siedział na scenie. Oficjalne nagranie opublikował [Baron Capital](https://x.com/BaronCapital/status/2118765607122260177). Fragment o Starlinku wrzucił [Sawyer Merritt](https://x.com/SawyerMerritt/status/2118783107189076137); to on jest autorem klipu, a nie źródłem liczb. W 38-sekundowym nagraniu Musk mówi, że „wciąż widzimy możliwość poprawy o rząd wielkości w pojemności satelitów”. Potem dodaje: „Myślę, że Starlink wersji 4 będzie miał dziesięć razy większą pojemność niż wersja trzecia. Szczególnie dzięki łączom laserowym na duże odległości.”",
      },
      { type: "x", id: "2118783107189076137", handle: "SawyerMerritt" },
      {
        type: "p",
        text: "Dalej precyzuje parametry laserów. „Nasze obecne łącza laserowe to około 100 gigabitów na sekundę. Łącza laserowe następnej generacji będą miały 10 terabitów na sekundę. Sto razy lepiej. I wtedy założymy ich dziesięć.” To dokładny fragment z klipu. W tym samym nagraniu nie pada wzmianka, że V3 samo było dziesięciokrotnie lepsze od V2. Takie zdanie pojawia się w opisie wpisu Sawyera, nie w wypowiedzi Muska.",
      },
      {
        type: "p",
        text: "Później Musk [zacytował ten klip](https://x.com/elonmusk/status/2118788513365954734) i dopisał: „Około 100 laserów na satelitę, każdy działający powyżej 10 Tb/s, przy ponad 100 tysiącach satelitów powinno być w stanie konkurować z kablami podmorskimi. Prędkość światła w kosmosie jest o około 40 procent wyższa niż w kablu, a ścieżka jest prosta, zamiast podążać za zarysem lądów.” W nagraniu mówi o założeniu dziesięciu łączy. We wpisie na X pisze o około stu laserach. To dwa różne sformułowania z dwóch źródeł. Nie scalamy ich w jedną liczbę.",
      },
      { type: "x", id: "2118788513365954734", handle: "elonmusk" },
      {
        type: "p",
        text: "Dla porównania, według [oficjalnej strony Starlink o satelitach V3](https://www.starlink.com/updates/starlink-version-3-satellites) satelity V3 mają sześć wysokopojemnościowych laserów kosmicznych po 400 Gb/s każdy. Tworzą one siatkę laserową o pojemności petabitowej z redundantnymi ścieżkami. Ta sama strona podaje, że V3 ma ok. 1 Tbps przepustowości w dół, mniej więcej dziesięć razy więcej niż V2. Musk w klipie mówił o obecnych łączach „około 100 gigabitów”, co nie pokrywa się jeden do jednego z oficjalną specyfikacją V3.",
      },
      {
        type: "p",
        text: "Punktem końcowym wypowiedzi Muska jest konkurencja z kablami podmorskimi. Przy ponad 100 tysiącach satelitów i laserach powyżej 10 Tb/s sieć miałaby wyprzedzać kable zarówno prędkością światła w próżni, jak i trasą. To nie jest prognoza daty, tylko sformułowanie z jego wpisu. Można się domyślać, że SpaceX liczy na to, że laserowa siatka w kosmosie stanie się równorzędną alternatywą dla światłowodów pod oceanami, a nie tylko uzupełnieniem.",
      },
    ],
  },
];
