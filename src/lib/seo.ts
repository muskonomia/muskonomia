import type { Post } from "./posts";
import { postJsonLd, postTopic, topicLabel } from "./posts";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG,
  SITE_URL,
  absoluteUrl,
} from "./site";

const DEFAULT_ROBOTS = "index,follow,max-image-preview:large";

function documentTitle(pageTitle: string) {
  return pageTitle.includes(SITE_NAME) ? pageTitle : `${pageTitle} | ${SITE_NAME}`;
}

function postDocumentTitle(post: Post) {
  const hay = post.title.toLowerCase();
  const topic = postTopic(post);
  const extra: string[] = [];
  if (topic === "tesla" && !hay.includes("tesla")) extra.push("Tesla");
  if (topic === "spacex" && !hay.includes("spacex")) extra.push("SpaceX");
  if (topic === "xai" && !hay.includes("xai") && !hay.includes("grok")) extra.push("xAI");
  if (topic === "neuralink" && !hay.includes("neuralink")) extra.push("Neuralink");
  if (topic === "boring" && !hay.includes("boring") && !hay.includes("loop")) extra.push("Boring");
  return [post.title, ...extra, SITE_NAME].join(" | ");
}

function imageType(url: string) {
  const ext = /\.([a-z0-9]+)(?:[?#].*)?$/i.exec(url)?.[1]?.toLowerCase();
  if (ext === "jpg" || ext === "jpeg") return "image/jpeg";
  if (ext === "png") return "image/png";
  if (ext === "webp") return "image/webp";
  return undefined;
}

/** `</script>` inside a JSON-LD string would end the script element early. */
export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        inLanguage: "pl-PL",
        publisher: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: SITE_NAME,
        url: SITE_URL,
        email: "sebanrgcrypto@gmail.com",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/img/logo.png`,
        },
        sameAs: ["https://x.com/Muskonomia"],
      },
    ],
  };
}

export function pageHead(opts: {
  title: string;
  description?: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  robots?: string;
  article?: { publishedTime: string; modifiedTime?: string; section?: string };
  jsonLd?: unknown;
}) {
  const title = documentTitle(opts.title);
  const description = opts.description ?? SITE_DESCRIPTION;
  const url = absoluteUrl(opts.path);
  const image = absoluteUrl(opts.image ?? SITE_OG);
  const imageAlt = opts.imageAlt ?? opts.title;
  const type = opts.type ?? "website";
  const jsonLd = opts.jsonLd ?? (type === "article" ? undefined : websiteJsonLd());
  const mime = imageType(image);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: opts.robots ?? DEFAULT_ROBOTS },
      { name: "author", content: SITE_NAME },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:type", content: type },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: imageAlt },
      ...(mime ? [{ property: "og:image:type", content: mime }] : []),
      ...(opts.imageWidth && opts.imageHeight
        ? [
            { property: "og:image:width", content: String(opts.imageWidth) },
            { property: "og:image:height", content: String(opts.imageHeight) },
          ]
        : []),
      ...(opts.article
        ? [
            { property: "article:published_time", content: opts.article.publishedTime },
            {
              property: "article:modified_time",
              content: opts.article.modifiedTime ?? opts.article.publishedTime,
            },
            ...(opts.article.section
              ? [{ property: "article:section", content: opts.article.section }]
              : []),
          ]
        : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Muskonomia" },
      { name: "twitter:creator", content: "@Muskonomia" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: imageAlt },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLd
      ? [
          {
            type: "application/ld+json",
            children: jsonLdScript(jsonLd),
          },
        ]
      : undefined,
  };
}

export function postHead(post: Post) {
  return pageHead({
    title: postDocumentTitle(post),
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    image: post.card ?? post.img,
    imageWidth: post.card ? 1200 : undefined,
    imageHeight: post.card ? 630 : undefined,
    imageAlt: post.title,
    article: { publishedTime: post.isoDate, section: topicLabel(postTopic(post)) },
    jsonLd: postJsonLd(post),
  });
}
