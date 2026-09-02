import { rssXml, xmlResponse } from "../../src/lib/feeds";

export function GET() {
  return xmlResponse(rssXml());
}

export default GET;
