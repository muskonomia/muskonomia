import { sitemapXml, xmlResponse } from "../../src/lib/feeds";

export function GET() {
  return xmlResponse(sitemapXml());
}

export default GET;
