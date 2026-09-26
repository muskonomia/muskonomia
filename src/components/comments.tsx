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
  const [remember, setRemember] = useState(false);
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
    if (stored) {
      setName(stored);
      setRemember(true);
    }
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

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setSending(true);
    try {
      const created = await addComment({ data: { slug, body, name, token } });
      setItems((prev) => [...prev, created]);
      setBody("");
      if (remember) window.localStorage.setItem(NAME_KEY, name.trim());
      else window.localStorage.removeItem(NAME_KEY);
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
    <section className="mx-auto mt-4 max-w-3xl px-5 py-7 sm:px-8" aria-labelledby="comments-heading">
      <h2
        id="comments-heading"
        className="border-b-2 border-accent pb-2 font-display text-3xl font-semibold leading-none tracking-tight"
      >
        Komentarze
      </h2>

      <form onSubmit={onSubmit} className="mt-5 space-y-4">
        <textarea
          id="comment-body"
          value={body}
          onChange={(event) => setBody(event.target.value.slice(0, MAX_LEN))}
          rows={5}
          maxLength={MAX_LEN}
          required
          placeholder="Napisz komentarz"
          aria-label="Napisz komentarz"
          className="w-full resize-y rounded-md border border-border bg-bg px-3 py-3 text-base leading-relaxed text-fg outline-none placeholder:text-muted focus:border-accent"
        />
        <p className="text-sm leading-relaxed text-muted">
          Zamieszczając komentarz, publikujesz go pod podanym imieniem. Nie prosimy o maila.
        </p>
        <input
          id="comment-name"
          value={name}
          onChange={(event) => setName(event.target.value.slice(0, 40))}
          maxLength={40}
          required
          placeholder="Twoje imię/nick"
          aria-label="Twoje imię/nick"
          className="w-full rounded-md border border-border bg-bg px-3 py-3 text-base outline-none placeholder:text-muted focus:border-accent"
        />
        <button
          type="submit"
          disabled={sending || !body.trim() || !name.trim()}
          className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent-hover disabled:opacity-50"
        >
          {sending ? "Wysyłam…" : "Dodaj komentarz"}
        </button>
        <label className="flex items-start gap-2 text-sm leading-relaxed text-muted">
          <input
            type="checkbox"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
            className="mt-1"
          />
          <span>Zapamiętaj moje dane w tej przeglądarce podczas pisania kolejnych komentarzy.</span>
        </label>
        {error ? <p className="text-sm text-accent">{error}</p> : null}
      </form>

      <div className="mt-8">
        {loading ? <p className="text-center text-sm text-muted">Wczytuję…</p> : null}
        {!loading && items.length === 0 ? (
          <p className="text-center text-sm text-muted">Brak komentarzy</p>
        ) : null}
        <div className="space-y-5">
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
      </div>
    </section>
  );
}
