import type { Post } from "./posts";

export const postsTxd: Post[] = [
  {
    slug: "dyrektor-txdot-o-cybercabie",
    kicker: "Robotaxi",
    topic: "tesla",
    title: "Cybercab za 30 tys. dolarów. Szef teksańskiego transportu wraca z Austin",
    excerpt:
      "Marc Williams z TxDOT po evencie w Austin: Cybercab bez kierownicy za 30 tys. dolarów, flota już po mieście, 1 mln mil bez nadzoru. Na sali niewidomi i osoby na wózkach.",
    date: "7 września 2026",
    isoDate: "2026-09-07",
    img: "/img/txdot-cybercab-okladka.jpg",
    contain: true,
    body: [
      {
        type: "p",
        text: "Marc Williams z teksańskiego departamentu transportu był na starcie Cybercaba w Austin. Auto bez kierownicy i pedałów wycenił na 30 tys. dolarów, około 111 tys. zł. Potem [napisał na LinkedInie](https://x.com/SawyerMerritt/status/2096265654743527433), że pojazd w końcu zszedł z deski kreślarskiej oraz testów do pełnoprawnego działania na naszych ulicach.",
      },
      { type: "x", id: "2096265654743527433", handle: "SawyerMerritt" },
      {
        type: "img",
        src: "/img/txdot-cybercab-okladka.jpg",
        alt: "Dwie szkoły widzenia: kombinezon z kamerami i złoty garnitur",
        caption: "Kamery kontra reszta czujników. Tesli wystarcza wizja.",
        contain: true,
      },
      {
        type: "p",
        text: "Williams podkreśla, że Cybercab został specjalnie wyprodukowany i zbudowany pod autonomię: nie ma fizycznych sterów, jest ekran, a cena wychodzi niżej niż u większości nowych aut konsumenckich.",
      },
      {
        type: "p",
        text: "Po evencie widział flotę. Cybercaby i Model Y z Robotaxi jeździły po Austin przez kilka dni, a Williams spodziewa się, że będzie ich więcej. Zamawianie taksówek Robotaxi przez aplikację działa od 4 września na ograniczonym obszarze miasta. Poza tym teksańskie Robotaxi to nadal Y-ki bez nadzoru w Austin, Dallas i Houston.",
      },
      {
        type: "p",
        text: "Inżynierowie Tesli podali na sali trzy liczby. Flota Robotaxi zrobiła 1 mln mil bez kierowcy w kabinie. Do treningu na trudnych sytuacjach poszły dane z aut klientów — firma mówi o tysiącach lat jazdy doświadczenia pojedynczego kierowcy. Samochód i oprogramowanie traktują jak aktywne urządzenie bezpieczeństwa, które ma reagować szybciej i równo niż człowiek. Kamery mają wystarczyć, a lidaru w tym układzie nie ma.",
      },
      {
        type: "p",
        text: "Williams nie rozstrzyga sporu o czujniki. Powtarza, co usłyszał: Tesla stawia na wizję, konkurencja dokłada lidar. Po starcie Cybercaba federalna NHTSA zapowiedziała, że przygląda się autu bez tradycyjnych sterów. Williams o agencji milczy i pisze o ludziach na sali.",
      },
      {
        type: "p",
        text: "Byli niewidomi, osoby na wózkach i pasażerowie z innymi ograniczeniami ruchu. Dla szefa teksańskich dróg to prosta sprawa: auto bez kierowcy może dać samodzielny przejazd komuś, kto dziś zostaje w domu.",
      },
      {
        type: "p",
        text: "Ja natomiast obstawiam, że Tesla dzięki Cybercabowi wygra wojnę z Waymo o autonomię.",
      },
    ],
  },
];
