import type { Post } from "./posts";

export const postsPw: Post[] = [
  {
    slug: "elon-musk-prad-to-dopiero-poczatek",
    kicker: "xAI / SpaceX",
    topic: "xai",
    title: "Elon Musk: prąd to dopiero początek",
    excerpt:
      "Około 15 GW compute’u AI z 2027 nie da się w tym roku uruchomić. Nie tylko prąd — transformatory, chłodzenie cieczą, chillery i sieć.",
    date: "30 sierpnia 2026",
    isoDate: "2026-08-30",
    img: "/img/pw-colossus.jpg",
    body: [
      {
        type: "p",
        text: "Elon Musk napisał w sobotę, że według konsensusowych szacunków około 15 GW mocy obliczeniowej AI wyprodukowanej w 2027 roku nie da się w tym samym roku uruchomić. I od razu doprecyzował: to nie jest tylko problem „skąd wziąć prąd”.",
      },
      {
        type: "img",
        src: "/img/pw-colossus.jpg",
        alt: "Rzędy szaf GPU w klastrze xAI Colossus",
        caption:
          "Colossus. Szafa z GPU bez transformatora i chillera to bardzo drogi grzejnik w kartonie.",
      },
      {
        type: "p",
        text: "Potrzeba jeszcze transformatorów, okablowania, chłodzenia cieczą, wielkich chillerów i skomplikowanej sieci. Bez tego szafa z GPU stoi w magazynie. Wpis prowadzi do analizy na Grok.com, którą Musk podlinkował jako punkt odniesienia.",
      },
      {
        type: "img",
        src: "/img/pw-chlodzenie.jpg",
        alt: "Chłodzenie cieczą bezpośrednie na akceleratorach AI, cold plate i węże",
        caption:
          "Direct-to-chip. Chip, którego nie da się schłodzić, nie jest chipem.",
      },
      {
        type: "p",
        text: "Liczby z tej analizy są brutalnie proste. Globalna produkcja akceleratorów na 2027 rok to mniej więcej 45–50 GW obciążenia IT. To, co da się realnie podłączyć i schłodzić w kalendarzowym 2027, to raczej 28–40 GW, w środku przedziału około 33 GW. Różnica — te około 15 GW — to mniej więcej jedna trzecia rocznego „plonu” chipów. W Ameryce Północnej, gdzie ląduje większość zachodnich GPU, luka jest jeszcze szersza: popyt rzędu 33–35 GW, dostawa na miejsce bliżej 17–23 GW.",
      },
      {
        type: "img",
        src: "/img/pw-transformatory.jpg",
        alt: "Transformatory wysokiego napięcia przy linii przesyłowej",
        caption:
          "Nie brakuje elektrowni. Brakuje dostawy na konkretną działkę w konkretnym roku. Kolejka po transformator ciągnie się do 2030.",
      },
      {
        type: "p",
        text: "Nie chodzi o to, że USA nie mają elektrowni. Krajowa generacja liczy się w terawatach. Chodzi o dostawę na konkretną działkę w konkretnym roku: kolejki przyłączeniowe, duże turbiny gazowe z terminem na 2030–2031, transformatory, rozdzielnice i pozwolenia.",
      },
      {
        type: "img",
        src: "/img/pw-szafa.jpg",
        alt: "Zbliżenie szafy GPU z wężami chłodzenia cieczą w klastrze xAI",
        caption: "Węże, cold plate, zasilanie. Tego nie dokupisz w tygodniu.",
      },
      {
        type: "p",
        text: "To ten sam weekend, w którym SpaceX potwierdził własną odlewnię łopatek turbin, żeby skrócić czekanie nawet o 18 miesięcy. Obrazek się składa. Chipów przybędzie szybciej niż hal, które umieją je nakarmić prądem i odebrać z nich ciepło.",
      },
      {
        type: "p",
        text: "SpaceX sam celuje w 10 GW compute do końca 2027 i mówi o portfelu projektów na 20 GW po stronie prądu i chłodzenia, z realistycznym „blisko 15 GW”, jeśli część inwestycji się poślizgnie. Jeśli cała branża zostawia w magazynie 15 GW rocznego urodzaju, to nie jest już wyścig o kolejną kartę Nvidii. To wyścig o to, kto pierwszy postawi transformator, chiller i rurę z gazem.",
      },
      {
        type: "p",
        text: "Łatwo było myśleć, że wąskim gardłem sztucznej inteligencji będzie model albo wafer. Okazuje się, że może nim być chłopak od HVAC i kolejka po transformator. Chip, którego nie da się schłodzić, nie jest chipem. Jest bardzo drogim grzejnikiem w kartonie.",
      },
      {
        type: "p",
        text: "Źródło: wpis Muska z 29 sierpnia 2026.",
      },
    ],
  },
];
