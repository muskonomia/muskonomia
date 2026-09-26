import { useEffect, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { addComment, deleteComment, listComments, type PublicComment } from "@/lib/comments.functions";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

const MAX_LEN = 1000;

function when(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function Comments({ slug }: { slug: string }) {
  const { user, isPending } = useCurrentUserState();
  const [items, setItems] = useState<PublicComment[]>([]);
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    listComments({ data: { slug } })
      .then((rows) => {
        if (!cancelled) setItems(rows);
      })
      .catch(() => {
        if (!cancelled) setError("Nie udało się wczytać komentarzy.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setSending(true);
    try {
      const created = await addComment({ data: { slug, body } });
      setItems((prev) => [...prev, created]);
      setBody("");
    } catch (err) {
      const message = err instanceof Error ? err.message : "";
      setError(message === "Unauthorized" ? "Zaloguj się, żeby napisać." : message || "Nie udało się wysłać.");
    } finally {
      setSending(false);
    }
  }

  async function onDelete(id: string) {
    setError("");
    try {
      await deleteComment({ data: { id } });
      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Nie udało się usunąć.");
    }
  }

  return (
    <section
      className="mx-auto mt-4 max-w-3xl rounded-xl border border-border bg-surface px-5 py-7 sm:px-8"
      aria-labelledby="comments-heading"
    >
      <h2 id="comments-heading" className="font-display text-3xl font-semibold leading-none tracking-tight">
        Komentarze
      </h2>
      <p className="mt-2 text-sm text-muted">Test. Płaska lista, bez odpowiedzi na odpowiedzi.</p>

      <div className="mt-6 space-y-5">
        {loading ? <p className="text-sm text-muted">Wczytuję…</p> : null}
        {!loading && items.length === 0 ? (
          <p className="text-sm text-muted">Jeszcze nikt nie napisał. Bądź pierwszy.</p>
        ) : null}
        {items.map((item) => (
          <article key={item.id} className="border-t border-border pt-4">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-sm font-medium text-fg">{item.authorName}</p>
              <time className="shrink-0 text-xs text-muted" dateTime={item.createdAt}>
                {when(item.createdAt)}
              </time>
            </div>
            <p className="mt-1 whitespace-pre-wrap text-base leading-relaxed text-fg/90">{item.body}</p>
            {user && (user.id === item.userId || user.primaryEmail?.toLowerCase() === "sebastian.lipinski@gmail.com") ? (
              <button
                type="button"
                onClick={() => onDelete(item.id)}
                className="mt-2 text-xs font-medium text-muted hover:text-accent"
              >
                Usuń
              </button>
            ) : null}
          </article>
        ))}
      </div>

      <div className="mt-6 border-t border-border pt-5">
        {isPending ? null : user ? (
          <form onSubmit={onSubmit} className="space-y-3">
            <label htmlFor="comment-body" className="block text-sm font-medium">
              Napisz komentarz
            </label>
            <textarea
              id="comment-body"
              value={body}
              onChange={(event) => setBody(event.target.value.slice(0, MAX_LEN))}
              rows={4}
              maxLength={MAX_LEN}
              placeholder="Krótko, do 1000 znaków."
              className="w-full resize-y rounded-md border border-border bg-bg px-3 py-2 text-sm leading-relaxed text-fg outline-none focus:border-accent"
            />
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs text-muted">
                {body.trim().length}/{MAX_LEN}
              </span>
              <button
                type="submit"
                disabled={sending || !body.trim()}
                className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover disabled:opacity-50"
              >
                {sending ? "Wysyłam…" : "Wyślij"}
              </button>
            </div>
          </form>
        ) : (
          <p className="text-sm text-muted">
            <Link to="/login" className="font-medium text-fg hover:text-accent">
              Zaloguj się
            </Link>
            , żeby napisać komentarz.
          </p>
        )}
        {error ? <p className="mt-3 text-sm text-accent">{error}</p> : null}
      </div>
    </section>
  );
}
