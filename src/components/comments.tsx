import { useEffect, useState, type FormEvent } from "react";
import { addComment, deleteComment, listComments, type PublicComment } from "@/lib/comments.functions";

const MAX_LEN = 1000;
const NAME_KEY = "musko-comment-name";
const TOKEN_KEY = "musko-comment-token";

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
  const [items, setItems] = useState<PublicComment[]>([]);
  const [name, setName] = useState("");
  const [draftName, setDraftName] = useState("");
  const [token, setToken] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(NAME_KEY) ?? "";
    let id = window.localStorage.getItem(TOKEN_KEY);
    if (!id) {
      id = crypto.randomUUID();
      window.localStorage.setItem(TOKEN_KEY, id);
    }
    setName(stored);
    setDraftName(stored);
    setToken(id);
  }, []);

  useEffect(() => {
    if (!token) return;
    let cancelled = false;
    setLoading(true);
    listComments({ data: { slug, token } })
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
  }, [slug, token]);

  function saveName(event: FormEvent) {
    event.preventDefault();
    const next = draftName.replace(/\s+/g, " ").trim();
    if (!next || next.length > 40) {
      setError("Podaj imię, do 40 znaków.");
      return;
    }
    window.localStorage.setItem(NAME_KEY, next);
    setName(next);
    setError("");
  }

  function clearName() {
    window.localStorage.removeItem(NAME_KEY);
    setName("");
    setDraftName("");
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setSending(true);
    try {
      const created = await addComment({ data: { slug, body, name, token } });
      setItems((prev) => [...prev, created]);
      setBody("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Nie udało się wysłać.");
    } finally {
      setSending(false);
    }
  }

  async function onDelete(id: string) {
    setError("");
    try {
      await deleteComment({ data: { id, token } });
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
            {item.mine ? (
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
        {name ? (
          <form onSubmit={onSubmit} className="space-y-3">
            <p className="text-sm text-muted">
              Piszesz jako <span className="font-medium text-fg">{name}</span>.{" "}
              <button type="button" onClick={clearName} className="hover:text-accent">
                Zmień imię
              </button>
            </p>
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
          <form onSubmit={saveName} className="space-y-3">
            <label htmlFor="comment-name" className="block text-sm font-medium">
              Podaj swoje imię
            </label>
            <input
              id="comment-name"
              value={draftName}
              onChange={(event) => setDraftName(event.target.value.slice(0, 40))}
              maxLength={40}
              placeholder="Imię"
              className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
            />
            <button
              type="submit"
              disabled={!draftName.trim()}
              className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover disabled:opacity-50"
            >
              Zaloguj
            </button>
          </form>
        )}
        {error ? <p className="mt-3 text-sm text-accent">{error}</p> : null}
      </div>
    </section>
  );
}
