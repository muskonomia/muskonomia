import { SITE_NAME, SITE_URL, absoluteUrl } from "./site";

export type Block =
  | { type: "p"; text: string }
  | { type: "quote"; paragraphs: string[] }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "img"; src: string; alt: string; caption?: string; contain?: boolean; href?: string }
  | { type: "video"; src: string; poster?: string; caption?: string; loop?: boolean; href?: string }
  | { type: "x"; id: string; handle: string }
  | { type: "youtube"; id: string };

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
  card?: string;
  credit?: string;
  object?: string;
  contain?: boolean;
  topic?: TopicId;
  xPostId?: string;
  body: Block[];
};

/** A post with its topic resolved, as sent to the browser for the article page. */
export type ResolvedPost = Post & { topic: TopicId };

/** What a post card needs. Listing pages ship only this, never the article body. */
export type PostSummary = Pick<Post, "slug" | "title" | "excerpt" | "date" | "isoDate" | "img" | "contain"> & {
  topic: TopicId;
};

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

export function postTopic(post: Pick<Post, "topic" | "kicker" | "slug" | "title">): TopicId {
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

export function toSummary(post: Post): PostSummary {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    isoDate: post.isoDate,
    img: post.img,
    contain: post.contain,
    topic: postTopic(post),
  };
}

export function postPlainText(post: Post) {
  return post.body
    .map((b) => {
      if (b.type === "ul") return b.items.join(" ");
      if (b.type === "table") {
        return [b.headers.join(" "), ...b.rows.map((row) => row.join(" "))].join(" ");
      }
      if (b.type === "img") return b.alt;
      if (b.type === "video") return b.caption ?? "";
      if (b.type === "x") return `Wpis @${b.handle} na X`;
      if (b.type === "p" || b.type === "h2" || b.type === "h3") return b.text;
      if (b.type === "quote") return b.paragraphs.join(" ");
      return "";
    })
    .join(" ");
}

export function archiveParams(isoDate: string) {
  const [year = "", month = ""] = isoDate.split("-");
  return { year, month };
}

export function isYearMonth(year: string, month: string) {
  return /^\d{4}$/.test(year) && /^(0[1-9]|1[0-2])$/.test(month);
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

export function postUrl(slug: string) {
  return `${SITE_URL}/blog/${slug}`;
}

export function postJsonLd(post: Post) {
  const url = postUrl(post.slug);
  const publisher = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#org`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.png` },
  };
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    image: [...new Set([post.card, post.img].filter(Boolean).map((src) => absoluteUrl(src as string)))],
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    inLanguage: "pl-PL",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher,
    isAccessibleForFree: true,
    articleSection: topicLabel(postTopic(post)),
    articleBody: postPlainText(post),
  };
}
