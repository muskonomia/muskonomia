import { XLogo } from "@/components/x-logo";
import { absoluteUrl } from "@/lib/site";

const X_HANDLE = "MuskonomiaPL";

export function DiscussOnX({ title, slug }: { title: string; slug: string }) {
  const url = absoluteUrl(`/blog/${slug}`);
  const compose = `https://x.com/intent/post?text=${encodeURIComponent(
    `${title}\n${url}\n\n@${X_HANDLE}`,
  )}`;

  return (
    <aside
      className="mx-auto mt-4 max-w-3xl rounded-xl border border-border bg-surface px-5 py-7 sm:px-8"
      aria-labelledby="discuss-x"
    >
      <div className="flex items-start gap-4">
        <XLogo className="mt-1 h-6 w-6 shrink-0 text-fg" />
        <div className="min-w-0">
          <h2 id="discuss-x" className="font-display text-3xl font-semibold leading-none tracking-tight">
            Dyskusja na X
          </h2>
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
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={compose}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-fg hover:bg-accent-hover"
            >
              <XLogo className="h-4 w-4" />
              Dyskutuj na X
            </a>
            <a
              href={`https://x.com/${X_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-5 text-sm font-medium text-muted hover:border-fg hover:text-fg"
            >
              Profil @{X_HANDLE}
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
