import { createFileRoute } from "@tanstack/react-router";
import { sitemapXml, xmlResponse } from "@/lib/feeds";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => xmlResponse(sitemapXml()),
    },
  },
});
