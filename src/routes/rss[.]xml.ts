import { createFileRoute } from "@tanstack/react-router";
import { rssXml, xmlResponse } from "@/lib/feeds";

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () => xmlResponse(rssXml()),
    },
  },
});
