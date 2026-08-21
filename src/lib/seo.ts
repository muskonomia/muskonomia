import type { Post } from "./posts";
import { postJsonLd, postTopic } from "./posts";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG,
  SITE_URL,
  SITE_X_HANDLE,
  SITE_X_URL,
  absoluteUrl,
} from "./site";

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
  return [post.title, ...extra, SITE_NAME].join(" | ");
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
        email: "muskonomia.pl@gmail.com",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/img/logo.png`,
        },
        sameAs: [SITE_X_URL],
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
  jsonLd?: unknown;
}) {
  const title = documentTitle(opts.title);
  const description = opts.description ?? SITE_DESCRIPTION;
  const url = absoluteUrl(opts.path);
  const image = absoluteUrl(opts.image ?? SITE_OG);
  const type = opts.type ?? "website";
  const jsonLd = opts.jsonLd ?? (type === "article" ? undefined : websiteJsonLd());

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { name: "author", content: SITE_NAME },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:type", content: type },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: SITE_X_HANDLE },
      { name: "twitter:creator", content: SITE_X_HANDLE },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLd
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify(jsonLd),
          },
        ]
      : undefined,
  };
}

export function postHead(post: Post) {
  const path = `/blog/${post.slug}`;
  return pageHead({
    title: postDocumentTitle(post),
    description: post.excerpt,
    path,
    type: "article",
    image: post.img,
    jsonLd: postJsonLd(post),
  });
}
