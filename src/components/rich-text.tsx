import type { ReactNode } from "react";

const MARKDOWN_OR_URL =
  /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)|(https?:\/\/[^\s]+)/g;

const URL_PHRASES: Array<[RegExp, string]> = [
  [/^https:\/\/x\.com\/Tesla\/status\//i, "Post Tesli na X"],
  [/^https:\/\/x\.com\/socalfsd\/status\//i, "Nagranie SoCal FSD na X"],
  [/^https:\/\/(?:www\.)?tesla\.com\/support\/autopilot/i, "Dokumentacja Tesli: Autopilot / FSD"],
  [/^https:\/\/x\.com\/SpaceX\/status\//i, "Post SpaceX na X"],
  [/^https:\/\/x\.com\/boringcompany\/status\//i, "Post The Boring Company na X"],
  [/^https:\/\/x\.com\/aelluswamy\/status\//i, "Post Ashoka Elluswamy na X"],
  [/^https:\/\/x\.com\/artsimage\/status\//i, "Film @artsimage na X"],
  [/^https:\/\/(?:www\.)?teslanorth\.com\//i, "Relacja TeslaNorth"],
  [/^https:\/\/(?:www\.)?abc\.net\.au\//i, "Relacja ABC News"],
  [/^https:\/\/(?:www\.)?reviewjournal\.com\//i, "Relacja Las Vegas Review-Journal"],
  [/^https:\/\/(?:www\.)?cdcgaming\.com\//i, "Relacja CDC Gaming"],
  [/^https:\/\/(?:www\.)?teslarati\.com\//i, "Relacja Teslarati"],
  [/^https:\/\/(?:www\.)?fox5vegas\.com\//i, "Relacja FOX5 Las Vegas"],
];

function peelUrl(raw: string): { href: string; trail: string } {
  let href = raw;
  let trail = "";
  while (href.length > 8 && /[),.;:!?]$/.test(href)) {
    trail = href.slice(-1) + trail;
    href = href.slice(0, -1);
  }
  return { href, trail };
}

export function phraseForUrl(url: string): string {
  for (const [re, phrase] of URL_PHRASES) {
    if (re.test(url)) return phrase;
  }
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    if (host === "x.com" || host === "twitter.com") return "Post na X";
    if (host === "tesla.com" || host.endsWith(".tesla.com")) return "Tesla";
    return `Źródło: ${host}`;
  } catch {
    return "Źródło";
  }
}

function SourceLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:text-accent-hover"
    >
      {children}
    </a>
  );
}

export function LinkedText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  const re = new RegExp(MARKDOWN_OR_URL.source, "g");
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(<span key={key++}>{text.slice(last, match.index)}</span>);
    }
    const mdLabel = match[1];
    const mdHref = match[2];
    const rawUrl = match[3];
    if (mdLabel && mdHref) {
      nodes.push(
        <SourceLink key={key++} href={mdHref}>
          {mdLabel}
        </SourceLink>,
      );
    } else if (rawUrl) {
      const { href, trail } = peelUrl(rawUrl);
      nodes.push(
        <SourceLink key={key++} href={href}>
          {phraseForUrl(href)}
        </SourceLink>,
      );
      if (trail) nodes.push(<span key={key++}>{trail}</span>);
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) {
    nodes.push(<span key={key++}>{text.slice(last)}</span>);
  }
  return <>{nodes}</>;
}
