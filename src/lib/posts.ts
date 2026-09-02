import { SITE_URL } from "./site";
import { postsData } from "./posts-data";
import { HUBS } from "./hubs";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "img"; src: string; alt: string; caption?: string; contain?: boolean }
  | { type: "video"; src: string; poster?: string; caption?: string; loop?: boolean };

export const TOPIC_IDS = ["tesla", "spacex", "xai", "neuralink", "boring", "inne"] as const;
export type TopicId = (typeof TOPIC_IDS)[number];

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
  xPostId?: string;
  body: Block[];
};

function byNewest(a: Post, b: Post) {
  const d = b.isoDate.localeCompare(a.isoDate);
  if (d !== 0) return d;
  return a.slug.localeCompare(b.slug);
}

export const posts: Post[] = [...postsData].sort(byNewest);

export const TOPICS: {
  id: TopicId;
  label: string;
  cover: string;
  copy: string;
}[] = [
  { id: "tesla", label: "Tesla", cover: "/img/cover-cybercab.jpg", copy: "Robotaxi, Semi, Model Y, fabryki." },
  { id: "spacex", label: "SpaceX", cover: "/img/cover-falcon.jpg", copy: "Rakiety, Starlink, Księżyc, Mars." },
  { id: "xai", label: "xAI", cover: "/img/grok-bot.jpg", copy: "Grok, boty, Colossus." },
  { id: "neuralink", label: "Neuralink", cover: "/img/nl-implant-moneta.jpg", copy: "Implant N1, kariera, interfejs mózg–komputer." },
  { id: "boring", label: "Boring", cover: "/img/inline-vegas.jpg", copy: "Vegas Loop, tunele, stacje." },
  { id: "inne", label: "Inne", cover: "/img/inline-rivian.jpg", copy: "Rivian, Scout, reszta branży." },
];

export function isTopicId(value: string): value is TopicId {
  return (TOPIC_IDS as readonly string[]).includes(value);
}

export function topicLabel(id: TopicId) {
  return TOPICS.find((t) => t.id === id)?.label ?? id;
}

export function topicMeta(id: TopicId) {
  return TOPICS.find((t) => t.id === id);
}

export function postTopic(post: Post): TopicId {
  if (post.topic) return post.topic;
  const hay = `${post.kicker} ${post.slug} ${post.title}`.toLowerCase();
  if (/\bneuralink\b/.test(hay)) return "neuralink";
  if (/\bboring\b/.test(hay) || /vegas[\s-]?loop/.test(hay)) return "boring";
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

export function relatedPosts(post: Post, limit = 3) {
  const seen = new Set<string>([post.slug]);
  const out: Post[] = [];

  const take = (candidates: Post[]) => {
    for (const p of candidates) {
      if (out.length >= limit) return;
      if (seen.has(p.slug)) continue;
      seen.add(p.slug);
      out.push(p);
    }
  };

  take(postsByTopic(postTopic(post)));

  if (out.length < limit) {
    for (const hub of HUBS) {
      if (!hub.match(post)) continue;
      take(posts.filter((p) => hub.match(p)));
      if (out.length >= limit) break;
    }
  }

  if (out.length < limit) take(posts);

  return out;
}

export function postPlainText(post: Post) {
  return post.body
    .map((b) => {
      if (b.type === "ul") return b.items.join(" ");
      if (b.type === "img") return b.alt;
      if (b.type === "video") return b.caption ?? "";
      if (b.type === "p" || b.type === "h2") return b.text;
      return "";
    })
    .join(" ");
}

export function searchPosts(q: string) {
  const needle = q.trim().toLowerCase();
  if (!needle) return [];
  return posts.filter((p) => {
    const hay = `${p.title} ${p.excerpt} ${p.kicker} ${postPlainText(p)}`.toLowerCase();
    return hay.includes(needle);
  });
}

export function archiveParams(isoDate: string) {
  const [year = "", month = ""] = isoDate.split("-");
  return { year, month };
}

export function isYearMonth(year: string, month: string) {
  return /^\d{4}$/.test(year) && /^(0[1-9]|1[0-2])$/.test(month);
}

export function postsInMonth(year: string, month: string) {
  const prefix = `${year}-${month}`;
  return posts.filter((p) => p.isoDate.startsWith(prefix));
}

export function archiveMonths() {
  const map = new Map<string, { year: string; month: string; count: number }>();
  for (const p of posts) {
    const { year, month } = archiveParams(p.isoDate);
    if (!year || !month) continue;
    const key = `${year}-${month}`;
    const cur = map.get(key);
    if (cur) cur.count += 1;
    else map.set(key, { year, month, count: 1 });
  }
  return [...map.values()].sort((a, b) => `${b.year}-${b.month}`.localeCompare(`${a.year}-${a.month}`));
}

export const MONTHS_PL = [
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Październik",
  "Listopad",
  "Grudzień",
] as const;

export function monthTitle(year: string, month: string) {
  const i = Number(month) - 1;
  const name = MONTHS_PL[i] ?? month;
  return `${name} ${year}`;
}

export function wpisow(n: number) {
  if (n === 0) return "na razie pusto";
  if (n === 1) return "1 wpis";
  const m10 = n % 10;
  const m100 = n % 100;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return `${n} wpisy`;
  return `${n} wpisów`;
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
    articleSection: topicLabel(postTopic(post)),
    articleBody: postPlainText(post),
  };
}
