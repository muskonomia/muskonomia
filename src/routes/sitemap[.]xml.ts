import { createFileRoute } from "@tanstack/react-router";
import { posts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

function xml() {
  const staticPaths = ["/", "/tematy", "/blog"];
  const urls = [
    ...staticPaths.map(
      (path) => `  <url><loc>${SITE_URL}${path}</loc><changefreq>weekly</changefreq></url>`,
    ),
    ...posts.map(
      (p) =>
        `  <url><loc>${SITE_URL}/blog/${p.slug}</loc><lastmod>${p.isoDate}</lastmod><changefreq>monthly</changefreq></url>`,
    ),
  ].join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(xml(), {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        }),
    },
  },
});
