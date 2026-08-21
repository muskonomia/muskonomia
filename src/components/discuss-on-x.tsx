import { useEffect, useRef } from "react";
import { XLogo } from "@/components/x-logo";
import { absoluteUrl } from "@/lib/site";

const X_HANDLE = "MuskonomiaPL";

function XPostEmbed({ id }: { id: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const w = window as unknown as {
      twttr?: { widgets: { load: (el?: HTMLElement) => void } };
    };
    const load = () => w.twttr?.widgets.load(ref.current ?? undefined);
    if (w.twttr?.widgets) {
      load();
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>("script[data-twitter-wjs]");
    if (existing) {
      existing.addEventListener("load", load);
      return () => existing.removeEventListener("load", load);
    }
    const s = document.createElement("script");
    s.src = "https://platform.twitter.com/widgets.js";
    s.async = true;
    s.setAttribute("data-twitter-wjs", "1");
    s.onload = load;
    document.body.appendChild(s);
  }, [id]);

  return (
    <div ref={ref} className="mt-5 overflow-hidden [&_.twitter-tweet]:mx-auto">
      <blockquote className="twitter-tweet" data-dnt="true" data-theme="dark">
        <a href={`https://x.com/${X_HANDLE}/status/${id}`}>Wpis @{X_HANDLE} na X</a>
      </blockquote>
    </div>
  );
}

export function DiscussOnX({
  title,
  slug,
  xPostId,
}: {
  title: string;
  slug: string;
  xPostId?: string;
}) {
  const url = absoluteUrl(`/blog/${slug}`);
  const tweetUrl = xPostId ? `https://x.com/${X_HANDLE}/status/${xPostId}` : null;
  const compose = `https://x.com/intent/post?text=${encodeURIComponent(
    `${title}\n${url}\n\n@${X_HANDLE}`,
  )}`;
  const reply = xPostId
    ? `https://x.com/intent/tweet?in_reply_to=${xPostId}`
    : compose;

  return (
    <aside
      className="mx-auto mt-4 max-w-3xl rounded-xl border border-border bg-surface px-5 py-7 sm:px-8"
      aria-labelledby="discuss-x"
    >
      <div className="flex items-center gap-4">
        <XLogo className="h-6 w-6 shrink-0 text-fg" />
        <h2 id="discuss-x" className="font-display text-3xl font-semibold leading-none tracking-tight">
          Dyskusja na X
        </h2>
      </div>

      {xPostId ? <XPostEmbed id={xPostId} /> : (
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Masz zdanie o tym wpisie? Napisz na X i oznacz{" "}
          <a
            href={`https://x.com/${X_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg hover:text-accent"
          >
            @{X_HANDLE}
          </a>
          .
        </p>
      )}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a
          href={reply}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-fg hover:bg-accent-hover"
        >
          <XLogo className="h-4 w-4" />
          {xPostId ? "Odpowiedz na X" : "Dyskutuj na X"}
        </a>
        <a
          href={tweetUrl ?? `https://x.com/${X_HANDLE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-5 text-sm font-medium text-muted hover:border-fg hover:text-fg"
        >
          {xPostId ? "Otwórz wpis na X" : `Profil @${X_HANDLE}`}
        </a>
      </div>
    </aside>
  );
}
