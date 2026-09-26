import { createServerFn } from "@tanstack/react-start";
import { getPost } from "@/lib/posts";

const MAX_LEN = 1000;

type CommentRow = {
  id: string;
  user_id: string;
  author_name: string;
  body: string;
  created_at: Date | string;
};

export type PublicComment = {
  id: string;
  authorName: string;
  body: string;
  createdAt: string;
  mine: boolean;
};

function cleanSlug(value: unknown): string {
  const slug = typeof value === "string" ? value.trim() : "";
  if (!/^[a-z0-9-]{1,80}$/.test(slug) || !getPost(slug)) {
    throw new Error("Nie ma takiego wpisu.");
  }
  return slug;
}

function cleanBody(value: unknown): string {
  const body = typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
  if (!body) throw new Error("Komentarz jest pusty.");
  if (body.length > MAX_LEN) throw new Error("Komentarz może mieć najwyżej 1000 znaków.");
  return body;
}

function cleanName(value: unknown): string {
  const name = typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
  if (name.length < 1 || name.length > 40) throw new Error("Podaj imię, do 40 znaków.");
  if (/https?:|www\.|@/i.test(name)) throw new Error("Imię nie może być linkiem.");
  return name;
}

function cleanToken(value: unknown): string {
  const token = typeof value === "string" ? value.trim() : "";
  if (!/^[0-9a-f-]{36}$/i.test(token)) throw new Error("Odśwież stronę i spróbuj jeszcze raz.");
  return token;
}

function toPublic(row: CommentRow, token: string): PublicComment {
  const created = row.created_at instanceof Date ? row.created_at : new Date(row.created_at);
  return {
    id: row.id,
    authorName: row.author_name,
    body: row.body,
    createdAt: created.toISOString(),
    mine: row.user_id === token,
  };
}

async function db() {
  const { getSql } = await import("@/lib/db");
  return getSql();
}

const recent = new Map<string, number[]>();

function allowPost(token: string) {
  const now = Date.now();
  const stamps = (recent.get(token) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  if (stamps.length >= 6) throw new Error("Za dużo komentarzy naraz. Spróbuj za chwilę.");
  stamps.push(now);
  recent.set(token, stamps);
}

export const listComments = createServerFn({ method: "GET" })
  .inputValidator((data: { slug: string; token?: string }) => ({
    slug: cleanSlug(data?.slug),
    token: typeof data?.token === "string" && /^[0-9a-f-]{36}$/i.test(data.token) ? data.token : "",
  }))
  .handler(async ({ data }) => {
    const sql = await db();
    const rows = await sql<CommentRow>`
      select id, user_id, author_name, body, created_at
      from post_comment
      where slug = ${data.slug}
      order by created_at asc
    `;
    return rows.map((row) => toPublic(row, data.token));
  });

export const addComment = createServerFn({ method: "POST" })
  .inputValidator((data: { slug: string; body: string; name: string; token: string }) => ({
    slug: cleanSlug(data?.slug),
    body: cleanBody(data?.body),
    name: cleanName(data?.name),
    token: cleanToken(data?.token),
  }))
  .handler(async ({ data }) => {
    allowPost(data.token);
    const sql = await db();
    const id = crypto.randomUUID();
    const rows = await sql<CommentRow>`
      insert into post_comment (id, slug, user_id, author_name, body)
      values (${id}, ${data.slug}, ${data.token}, ${data.name}, ${data.body})
      returning id, user_id, author_name, body, created_at
    `;
    return toPublic(rows[0], data.token);
  });

export const deleteComment = createServerFn({ method: "POST" })
  .inputValidator((data: { id: string; token: string }) => {
    const id = typeof data?.id === "string" ? data.id.trim() : "";
    if (!/^[0-9a-f-]{36}$/i.test(id)) throw new Error("Nie ma takiego komentarza.");
    return { id, token: cleanToken(data?.token) };
  })
  .handler(async ({ data }) => {
    const sql = await db();
    const rows = await sql<{ id: string }>`
      delete from post_comment
      where id = ${data.id} and user_id = ${data.token}
      returning id
    `;
    if (!rows.length) throw new Error("Nie można usunąć tego komentarza.");
    return { ok: true };
  });
