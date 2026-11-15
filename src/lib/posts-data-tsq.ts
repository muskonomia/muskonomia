import type { Post } from "./posts";

export const postsTsq: Post[] = [
  {
    slug: "pierwsza-reklama-fsd-tesli-na-times-square",
    kicker: "FSD",
    topic: "tesla",
    title: "Pierwsza reklama FSD Tesli pojawiła się na Times Square",
    excerpt:
      "Sawyer Merritt pisze, że na Times Square pojawiła się pierwsza reklama FSD Tesli i zostanie do końca listopada. Oficjalny licznik Tesli pokazuje około 28,3 mld km przejechanych z systemem.",
    date: "15 listopada 2026",
    isoDate: "2026-11-15",
    img: "/img/fsd-times-square-billboard-sawyer-1600x900.jpg",
    credit: "Źródło: @SawyerMerritt",
    body: [
      {
        type: "p",
        text: "Sawyer Merritt napisał 14 listopada, że billboard będzie wyświetlany do końca miesiąca. We wpisie przytoczył hasło „7x safer than a human when engaged” oraz hasło o łącznym przebiegu aut jeżdżących z FSD.",
      },
      { type: "x", id: "2121643363296317915", handle: "SawyerMerritt" },
      {
        type: "p",
        text: "To, że materiał pochodzi od Tesli, że jest pierwszą reklamą FSD na Times Square i że potrwa do końca listopada, podajemy za [Sawyerem Merrittem](https://x.com/SawyerMerritt/status/2121643363296317915). [The Tesla Newswire](https://x.com/TeslaNewswire/status/2121743127425741153) opisuje, że przekaz leci na zakrzywionym ekranie z logo Chase.",
      },
      {
        type: "p",
        text: "Hasło z reklamy o przebiegu odpowiada ponad 24 mld km i jest zaokrągleniem w dół wobec oficjalnego licznika. [Raport bezpieczeństwa FSD (Supervised)](https://www.tesla.com/fsd/safety) podawał 15 listopada około 28,3 mld km przejechanych z systemem, w tym około 11,3 mld km w mieście. Licznik biegnie od 2020 roku i nie obejmuje Chin.",
      },
      {
        type: "p",
        text: "W porównaniu z szacowaną średnią dla USA dane z ostatnich 12 miesięcy, aktualizowane co kwartał, pokazują 9 razy mniej poważnych kolizji, przy których wystrzeliły poduszki, 7 razy mniej drobnych kolizji i 6 razy mniej kolizji poza autostradami. Tesla liczy jako kolizję z FSD każdą, przy której system był aktywny w ciągu 5 sekund przed zdarzeniem. Hasło „7x” odpowiada więc drobnym kolizjom.",
      },
      {
        type: "p",
        text: "FSD (Supervised) jest według tej strony dostępne między innymi w USA, Kanadzie, Meksyku, Portoryko, Australii, Nowej Zelandii, Korei Południowej, Holandii, Litwie, Estonii, Danii, Belgii, Słowenii, Czechach, Chorwacji, Słowacji, Łotwie i Finlandii. Polski na liście nie ma. Aktualny stan krajów śledzimy w [trackerze FSD](https://muskonomia.pl/fsd-tracker). Tesla przez lata unikała klasycznej reklamy płatnej, więc billboard w Nowym Jorku, o którym pisze Sawyer, jest odejściem od dotychczasowego zwyczaju firmy.",
      },
    ],
  },
];
