import type { Post } from "./posts";
import { postJsonLd } from "./posts";
import { SITE_DESCRIPTION, SITE_NAME, absoluteUrl } from "./site";

export function pageHead(opts: {
  title: string;
  description?: string;
  path: string;
  type?: "website" | "article";
}) {
  const title = opts.title.includes(SITE_NAME) ? opts.title : `${opts.title} | ${SITE_NAME}`;
  const description = opts.description ?? SITE_DESCRIPTION;
  const url = absoluteUrl(opts.path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index,follow" },
      { name: "author", content: SITE_NAME },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function postHead(post: Post) {
  const path = `/blog/${post.slug}`;
  const base = pageHead({
    title: post.title,
    description: post.excerpt,
    path,
    type: "article",
  });
  return {
    ...base,
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(postJsonLd(post)),
      },
    ],
  };
}
