import { posts, type Post } from "./posts";

export type Hub = {
  id: string;
  title: string;
  copy: string;
  cover: string;
  match: (post: Post) => boolean;
};

function titleHay(post: Post) {
  return `${post.slug} ${post.title}`.toLowerCase();
}

function cardHay(post: Post) {
  return `${post.slug} ${post.title} ${post.excerpt} ${post.kicker}`.toLowerCase();
}

export const HUBS: Hub[] = [
  {
    id: "rodzina-w-tesli",
    title: "Rodzina w Tesli",
    copy: "Model Y na co dzień: miejsce, foteliki, bagażnik i spokój na trasie — nie tylko starty rakiet.",
    cover: "/img/interior.jpg",
    match: (p) =>
      p.slug === "tesla-model-y-dla-rodziny" || /rodzin|fotelik|wózek|wozek/.test(cardHay(p)),
  },
  {
    id: "terafab",
    title: "TERAFAB",
    copy: "Fabryka chipów Tesli i SpaceX: teren, render, liczby. Tyle, ile jest w wpisach.",
    cover: "/img/terafab-render-night.jpg",
    match: (p) => /terafab/.test(cardHay(p)),
  },
  {
    id: "cybercab",
    title: "Cybercab i Robotaxi",
    copy: "Cybercab, Robotaxi, zezwolenia i testy na drogach — z istniejących wpisów.",
    cover: "/img/cover-cybercab.jpg",
    match: (p) => /cybercab|robotaxi/.test(titleHay(p)),
  },
  {
    id: "fsd-w-ue",
    title: "FSD i Tesla w UE",
    copy: "Full Self-Driving oraz wejście Tesli na rynki europejskie. Cienko? i tak tylko to, co jest na blogu.",
    cover: "/img/fsd-rowerzysta-1.jpg",
    match: (p) =>
      p.slug === "tesla-pokazuje-fsd-ktore-nie-wchodzi-w-rowerzyste" ||
      p.slug === "tesla-oficjalnie-wchodzi-na-lotwe" ||
      /\bfsd\b|autopilot|łotw|lotwe|europ/.test(cardHay(p)),
  },
  {
    id: "starship",
    title: "Starship",
    copy: "Starship, Ship 40 i pivot z Marsa na Księżyc.",
    cover: "/img/starship-scifi.jpg",
    match: (p) =>
      p.slug === "elon-musk-starship-is-so-sci-fi" ||
      p.slug === "spacex-ship-40-probki-oslony-polzanurzalny" ||
      p.slug === "spacex-stawia-ksiezyc-przed-marsem-elon-musk-oglasza-pivot-na-self-growing-city" ||
      p.slug === "musk-baza-na-marsie-jednym-z-najwiekszych-wyzwan-w-historii" ||
      p.slug === "musk-tansza-orbita-odblokuje-nieskonczony-wzrost" ||
      /starship|ship-40|starbase/.test(titleHay(p)),
  },
];

export function getHub(id: string) {
  return HUBS.find((h) => h.id === id);
}

export function hubPosts(hub: Hub) {
  return posts.filter(hub.match);
}
