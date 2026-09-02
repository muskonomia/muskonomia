import { HUBS, hubPosts } from "./hubs";
import { archiveMonths, posts, postsByTopic, TOPICS } from "./posts";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./site";

export function xmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function urlTag(opts: {
  path: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}) {
  return `  <url><loc>${SITE_URL}${opts.path}</loc><lastmod>${opts.lastmod}</lastmod><changefreq>${opts.changefreq}</changefreq><priority>${opts.priority}</priority></url>`;
}

export function sitemapXml() {
  const today = new Date().toISOString().slice(0, 10);
  const recentCutoff = Date.now() - 14 * 24 * 60 * 60 * 1000;
  const latestPost = posts[0]?.isoDate ?? today;

  const staticUrls = [
    { path: "/", changefreq: "daily", priority: "1.0", lastmod: latestPost },
    { path: "/blog", changefreq: "daily", priority: "0.9", lastmod: latestPost },
    { path: "/tematy", changefreq: "weekly", priority: "0.8", lastmod: latestPost },
    { path: "/huby", changefreq: "weekly", priority: "0.7", lastmod: latestPost },
    { path: "/o-serwisie", changefreq: "monthly", priority: "0.5", lastmod: today },
    { path: "/szukaj", changefreq: "weekly", priority: "0.4", lastmod: today },
    { path: "/archiwum", changefreq: "weekly", priority: "0.5", lastmod: latestPost },
  ];

  const topicUrls = TOPICS.map((t) =>
    urlTag({
      path: `/tematy/${t.id}`,
      lastmod: postsByTopic(t.id)[0]?.isoDate ?? today,
      changefreq: "weekly",
      priority: "0.7",
    }),
  );

  const hubUrls = HUBS.map((h) =>
    urlTag({
      path: `/huby/${h.id}`,
      lastmod: hubPosts(h)[0]?.isoDate ?? today,
      changefreq: "weekly",
      priority: "0.7",
    }),
  );

  const monthUrls = archiveMonths().map((m) =>
    urlTag({
      path: `/archiwum/${m.year}/${m.month}`,
      lastmod: posts.find((p) => p.isoDate.startsWith(`${m.year}-${m.month}`))?.isoDate ?? `${m.year}-${m.month}-01`,
      changefreq: "monthly",
      priority: "0.4",
    }),
  );

  const postUrls = posts.map((p) => {
    const fresh = new Date(p.isoDate).getTime() >= recentCutoff;
    return urlTag({
      path: `/blog/${p.slug}`,
      lastmod: p.isoDate,
      changefreq: fresh ? "weekly" : "monthly",
      priority: fresh ? "0.8" : "0.6",
    });
  });

  const urls = [
    ...staticUrls.map((u) => urlTag(u)),
    ...topicUrls,
    ...hubUrls,
    ...monthUrls,
    ...postUrls,
  ].join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function rssXml() {
  const items = posts
    .map((p) => {
      const link = `${SITE_URL}/blog/${p.slug}`;
      const pubDate = new Date(`${p.isoDate}T12:00:00Z`).toUTCString();
      return `    <item>
      <title>${xmlEscape(p.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${xmlEscape(p.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${xmlEscape(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${xmlEscape(SITE_DESCRIPTION)}</description>
    <language>pl-PL</language>
${items}
  </channel>
</rss>`;
}

export function xmlResponse(body: string) {
  return new Response(body, {
    status: 200,
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
