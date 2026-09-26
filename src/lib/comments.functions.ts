import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { getPost } from "@/lib/posts";

const MAX_LEN = 1000;
const MODERATORS = new Set(["sebastian.lipinski@gmail.com"]);

type CommentRow = {
  id: string;
  user_id: string;
  author_name: string;
  body: string;
  created_at: Date | string;
};

export type PublicComment = {
  id: string;
  userId: string;
  authorName: string;
  body: string;
  createdAt: string;
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

function toPublic(row: CommentRow): PublicComment {
  const created = row.created_at instanceof Date ? row.created_at : new Date(row.created_at);
  return {
    id: row.id,
    userId: row.user_id,
    authorName: row.author_name,
    body: row.body,
    createdAt: created.toISOString(),
  };
}

async function db() {
  const { getSql } = await import("@/lib/db");
  return getSql();
}

const recent = new Map<string, number[]>();

function allowPost(userId: string) {
  const now = Date.now();
  const stamps = (recent.get(userId) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  if (stamps.length >= 6) throw new Error("Za dużo komentarzy naraz. Spróbuj za chwilę.");
  stamps.push(now);
  recent.set(userId, stamps);
}

export const listComments = createServerFn({ method: "GET" })
  .inputValidator((data: { slug: string }) => ({ slug: cleanSlug(data?.slug) }))
  .handler(async ({ data }) => {
    const sql = await db();
    const rows = await sql<CommentRow>`
      select id, user_id, author_name, body, created_at
      from post_comment
      where slug = ${data.slug}
      order by created_at asc
    `;
    return rows.map(toPublic);
  });

export const addComment = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .inputValidator((data: { slug: string; body: string }) => ({
    slug: cleanSlug(data?.slug),
    body: cleanBody(data?.body),
  }))
  .handler(async ({ data, context }) => {
    allowPost(context.userId);
    const sql = await db();
    const users = await sql<{ name: string }>`
      select name from "user" where id = ${context.userId} limit 1
    `;
    const authorName = (users[0]?.name ?? "Czytelnik").trim().slice(0, 80) || "Czytelnik";
    const id = crypto.randomUUID();
    const rows = await sql<CommentRow>`
      insert into post_comment (id, slug, user_id, author_name, body)
      values (${id}, ${data.slug}, ${context.userId}, ${authorName}, ${data.body})
      returning id, user_id, author_name, body, created_at
    `;
    return toPublic(rows[0]);
  });

export const deleteComment = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .inputValidator((data: { id: string }) => {
    const id = typeof data?.id === "string" ? data.id.trim() : "";
    if (!/^[0-9a-f-]{36}$/i.test(id)) throw new Error("Nie ma takiego komentarza.");
    return { id };
  })
  .handler(async ({ data, context }) => {
    const sql = await db();
    const users = await sql<{ email: string }>`
      select email from "user" where id = ${context.userId} limit 1
    `;
    const email = users[0]?.email?.toLowerCase() ?? "";
    const moderator = MODERATORS.has(email);
    const rows = moderator
      ? await sql<{ id: string }>`
          delete from post_comment where id = ${data.id} returning id
        `
      : await sql<{ id: string }>`
          delete from post_comment
          where id = ${data.id} and user_id = ${context.userId}
          returning id
        `;
    if (!rows.length) throw new Error("Nie można usunąć tego komentarza.");
    return { ok: true };
  });
