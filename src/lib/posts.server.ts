import { postsData } from "./posts-data";
import { HUBS } from "./hubs.server";
import {
  archiveParams,
  postPlainText,
  postTopic,
  type Post,
  type ResolvedPost,
  type TopicId,
} from "./posts";

function byNewest(a: Post, b: Post) {
  const d = b.isoDate.localeCompare(a.isoDate);
  if (d !== 0) return d;
  return a.slug.localeCompare(b.slug);
}

function uniqueBySlug(list: Post[]) {
  const seen = new Set<string>();
  return list.filter((p) => {
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });
}

export const posts: Post[] = uniqueBySlug(postsData).sort(byNewest);

export function postsByTopic(id: TopicId) {
  return posts.filter((p) => postTopic(p) === id);
}

const SLUG_ALIASES: Record<string, string> = {
  "nowa-tesla-zamowienia-otwarte-bez-polski": "tesla-otworzyla-rezerwacje-roadstera",
};

/** Resolves old slugs too; callers redirect when the returned slug differs. */
export function getPost(slug: string): ResolvedPost | undefined {
  const canonical = SLUG_ALIASES[slug] ?? slug;
  const post = posts.find((p) => p.slug === canonical);
  return post ? { ...post, topic: postTopic(post) } : undefined;
}

export function relatedPosts(post: Post, limit = 3) {
  const seen = new Set<string>([post.slug]);
  const out: Post[] = [];

  const take = (candidates: Post[]) => {
    for (const p of candidates) {
      if (out.length >= limit) return;
      if (seen.has(p.slug)) continue;
      seen.add(p.slug);
      out.push(p);
    }
  };

  take(postsByTopic(postTopic(post)));

  if (out.length < limit) {
    for (const hub of HUBS) {
      if (!hub.match(post)) continue;
      take(posts.filter((p) => hub.match(p)));
      if (out.length >= limit) break;
    }
  }

  if (out.length < limit) take(posts);

  return out;
}

let searchIndex: { post: Post; hay: string }[] | null = null;

export function searchPosts(q: string) {
  const needle = q.trim().toLowerCase();
  if (!needle) return [];
  searchIndex ??= posts.map((post) => ({
    post,
    hay: `${post.title} ${post.excerpt} ${post.kicker} ${postPlainText(post)}`.toLowerCase(),
  }));
  return searchIndex.filter((row) => row.hay.includes(needle)).map((row) => row.post);
}

export function postsInMonth(year: string, month: string) {
  const prefix = `${year}-${month}`;
  return posts.filter((p) => p.isoDate.startsWith(prefix));
}

export function archiveMonths() {
  const map = new Map<string, { year: string; month: string; count: number }>();
  for (const p of posts) {
    const { year, month } = archiveParams(p.isoDate);
    if (!year || !month) continue;
    const key = `${year}-${month}`;
    const cur = map.get(key);
    if (cur) cur.count += 1;
    else map.set(key, { year, month, count: 1 });
  }
  return [...map.values()].sort((a, b) => `${b.year}-${b.month}`.localeCompare(`${a.year}-${a.month}`));
}
