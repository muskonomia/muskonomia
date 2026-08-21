import { SITE_URL } from "./site";
import { postsData } from "./posts-data";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "img"; src: string; alt: string; caption?: string; contain?: boolean };

export type TopicId = "tesla" | "spacex" | "xai" | "inne";

export type Post = {
  slug: string;
  kicker: string;
  title: string;
  excerpt: string;
  date: string;
  isoDate: string;
  img: string;
  object?: string;
  contain?: boolean;
  topic?: TopicId;
  body: Block[];
};

export const posts: Post[] = postsData;

export const TOPICS: {
  id: TopicId;
  label: string;
  cover: string;
  copy: string;
}[] = [
  { id: "tesla", label: "Tesla", cover: "/img/cover-cybercab.jpg", copy: "Robotaxi, Semi, Model Y, fabryki." },
  { id: "spacex", label: "SpaceX", cover: "/img/cover-falcon.jpg", copy: "Rakiety, Starlink, Księżyc, Mars." },
  { id: "xai", label: "xAI", cover: "/img/grok-bot.jpg", copy: "Grok, boty, Colossus." },
  { id: "inne", label: "Inne", cover: "/img/inline-rivian.jpg", copy: "Boring Company, Neuralink, reszta branży." },
];

export function postTopic(post: Post): TopicId {
  if (post.topic) return post.topic;
  const hay = `${post.kicker} ${post.slug} ${post.title}`.toLowerCase();
  if (/(boring|neuralink|rivian)/.test(hay)) return "inne";
  if (/(xai|grok|colossus)/.test(hay) && !/tesla/.test(hay)) return "xai";
  if (/(spacex|starlink|starship|falcon|rakiet|księżyc|ksiezyc|mars)/.test(hay)) return "spacex";
  if (/(tesla|cybercab|robotaxi|semi|model-y|cybertruck|megacharger|terafab)/.test(hay)) return "tesla";
  if (/(xai|grok)/.test(hay)) return "xai";
  return "inne";
}

export function postsByTopic(id: TopicId) {
  return posts.filter((p) => postTopic(p) === id);
}

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function postPlainText(post: Post) {
  return post.body
    .map((b) => {
      if (b.type === "ul") return b.items.join(" ");
      if (b.type === "img") return b.alt;
      return b.text;
    })
    .join(" ");
}

export function postJsonLd(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.img}`,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    inLanguage: "pl-PL",
    author: { "@type": "Organization", name: "muskonomia.pl" },
    publisher: {
      "@type": "Organization",
      name: "muskonomia.pl",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    articleSection: TOPICS.find((t) => t.id === postTopic(post))?.label ?? post.kicker,
    articleBody: postPlainText(post),
  };
}
