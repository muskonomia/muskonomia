import { XLogo } from "@/components/x-logo";
import { absoluteUrl } from "@/lib/site";

const X_HANDLE = "MuskonomiaPL";

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

      {xPostId ? null : (
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

      {xPostId && tweetUrl ? (
        <div className="mt-5 overflow-hidden rounded-lg bg-bg">
          <iframe
            title={`Wpis @${X_HANDLE} na X`}
            src={`https://platform.twitter.com/embed/Tweet.html?id=${xPostId}&theme=dark&dnt=true`}
            className="w-full border-0"
            height={560}
            loading="lazy"
          />
        </div>
      ) : null}

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
