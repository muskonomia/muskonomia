import type { Post } from "./posts";

export const postsFaa: Post[] = [
  {
    slug: "faa-ocena-456-startow-starshipa-starbase",
    kicker: "Starship",
    topic: "spacex",
    title: "FAA rozpoczyna ocenę środowiskową wniosku SpaceX o 456 startów Starshipa rocznie",
    excerpt:
      "FAA otwiera ocenę środowiskową wniosku SpaceX o do 456 startów i 912 lądowań Starshipa rocznie w Starbase. To nie jest zgoda, a do czasu decyzji obowiązuje limit 25 startów i 50 lądowań.",
    date: "13 października 2026",
    isoDate: "2026-10-13",
    img: "/img/starbase-wieza-startowa-plougmann-2021.jpg",
    credit:
      "Starbase w Teksasie we wrześniu 2021 r. Od lewej booster Super Heavy, statek SN20, zbiorniki paliwa i wieża startowa. Fot. Lars Plougmann, [CC BY-SA 2.0](https://commons.wikimedia.org/wiki/File:SpaceX_Starbase_launch_facility_%2851438071556%29.jpg) (Wikimedia Commons)",
    body: [
      {
        type: "p",
        text: "SpaceX chce wysyłać rakiety ze Starbase w Teksasie znacznie częściej niż dziś, a do tego potrzebuje nowej oceny oddziaływania na środowisko. Federalna Administracja Lotnictwa dopiero ją otwiera, więc nie jest to zgoda na zwiększenie liczby lotów.",
      },
      {
        type: "p",
        text: "Zawiadomienie FAA o zamiarze przygotowania programowej oceny oddziaływania na środowisko (PEIS) [trafiło do Federal Register](https://www.federalregister.gov/public-inspection/2026-20963/environmental-impact-statements-availability-etc-spacex-starship-super-heavy-launch-and-landing) jako dokument 2026-20963 i zostanie oficjalnie opublikowane 14 października ([PDF](https://public-inspection.federalregister.gov/2026-20963.pdf)). Agencja oceni w nim wniosek SpaceX o do 456 startów rocznie ze Starbase i do 912 lądowań rocznie na tym terenie. Dziś SpaceX może wykonać tam najwyżej 25 startów i 50 lądowań w roku, po 25 dla statku Starship i boostera Super Heavy. Limit wynika z oceny środowiskowej z 2025 r.",
      },
      {
        type: "p",
        text: "Wniosek ma dwie fazy. W pierwszej SpaceX mogłoby wykonywać do 100 startów i 200 lądowań rocznie, w dowolny dzień tygodnia i o dowolnej porze. „W miarę dojrzewania pojazdu i poprawy niezawodności liczba startów i lądowań ma rosnąć. Starship i Super Heavy są projektowane tak, by po locie wymagały minimalnej regeneracji” – pisze FAA. Druga faza, opisana jako etap dojrzałego programu, który miałby zostać wdrożony w ciągu kilku lat, zakłada już 456 startów i 912 lądowań. Starty mogłyby się wtedy odbywać o każdej porze, ale tylko od poniedziałku do piątku.",
      },
      {
        type: "p",
        text: "Z naszych wyliczeń wynika, że 456 startów to ok. 18 razy więcej niż obecny limit i średnio ponad jeden start dziennie. Ponieważ w drugiej fazie loty byłyby dopuszczone tylko w dni robocze, wypadałoby blisko dwa starty na każdy taki dzień. Liczba 912 lądowań to według FAA górna granica dla Starbase niezależnie od tego, skąd rakieta wystartowała. Super Heavy ma lądować na stanowisku startowym, wodować w Zatoce Meksykańskiej albo zostać zużyty w locie. Starship może wracać na stanowisko, wodować w zatoce lub na otwartym oceanie albo zostać tam celowo zatopiony. Na potrzeby analizy FAA przyjęła, że połowa startów i lądowań odbędzie się w dzień, a połowa w nocy.",
      },
      {
        type: "p",
        text: "Tak częste loty mają sens tylko wtedy, gdy oba stopnie wracają i mogą szybko polecieć ponownie. Booster SpaceX łapie wieżą od 2024 r., a [złapanie statku Musk zapowiada na 15. lot](https://muskonomia.pl/blog/starship-lot-15-proba-zlapania-statku). SpaceX uzasadnia wniosek potrzebami programu Starship i szerszymi celami eksploracji kosmosu. Dokument nie wymienia konkretnych misji, ale Starship ma wynosić satelity Starlink V3 i jest przygotowywany do lądowań na Księżycu.",
      },
      {
        type: "p",
        text: "Jedyną alternatywą, jaką FAA porówna z wnioskiem, jest wariant bez zmian, w którym zostaje obecny limit 25 startów i 50 lądowań. Komentarze można składać do 30 listopada 2026 r. przez [regulations.gov](https://www.regulations.gov/docket/FAA-2026-12808) w postępowaniu FAA-2026-12808. Spotkania z mieszkańcami odbędą się 17 listopada w Brownsville i 19 listopada w Port Isabel, a 18 listopada FAA zorganizuje spotkanie online. Szczegóły są na [stronie projektu FAA](https://www.faa.gov/space/stakeholder_engagement/spacex_starship). Projekt PEIS ukaże się później i zostanie poddany osobnym konsultacjom.",
      },
    ],
  },
];
