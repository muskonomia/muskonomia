import { createFileRoute } from "@tanstack/react-router";
import { posts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

function xml() {
  const today = new Date().toISOString().slice(0, 10);
  const recentCutoff = Date.now() - 14 * 24 * 60 * 60 * 1000;
  const staticUrls = [
    { path: "/", changefreq: "daily", priority: "1.0", lastmod: today },
    { path: "/blog", changefreq: "daily", priority: "0.9", lastmod: today },
    { path: "/tematy", changefreq: "weekly", priority: "0.8", lastmod: today },
  ];
  const urls = [
    ...staticUrls.map(
      (u) =>
        `  <url><loc>${SITE_URL}${u.path}</loc><lastmod>${u.lastmod}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`,
    ),
    ...posts.map((p) => {
      const fresh = new Date(p.isoDate).getTime() >= recentCutoff;
      return `  <url><loc>${SITE_URL}/blog/${p.slug}</loc><lastmod>${p.isoDate}</lastmod><changefreq>${fresh ? "weekly" : "monthly"}</changefreq><priority>${fresh ? "0.8" : "0.6"}</priority></url>`;
    }),
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
