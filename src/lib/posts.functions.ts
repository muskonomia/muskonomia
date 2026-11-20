import { createServerFn } from "@tanstack/react-start";
import { isTopicId, isYearMonth, postTopic, toSummary, type TopicId } from "@/lib/posts";

// Article data must stay out of the client bundle: import posts.server only inside handlers.

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export const getPostList = createServerFn({ method: "GET" }).handler(async () => {
  const { posts } = await import("@/lib/posts.server");
  return posts.map(toSummary);
});

/** First page of the newest posts; the rest is fetched with getPostList on demand. */
export const getLatestPosts = createServerFn({ method: "GET" })
  .validator((data: { limit: number }) => ({
    limit: Math.min(Math.max(Math.trunc(Number(data?.limit)) || 12, 1), 48),
  }))
  .handler(async ({ data }) => {
    const { posts } = await import("@/lib/posts.server");
    return { posts: posts.slice(0, data.limit).map(toSummary), total: posts.length };
  });

export const getPostPage = createServerFn({ method: "GET" })
  .validator((data: { slug: string }) => ({ slug: text(data?.slug, 200) }))
  .handler(async ({ data }) => {
    const { getPost, relatedPosts } = await import("@/lib/posts.server");
    const post = getPost(data.slug);
    if (!post) return null;
    return { post, related: relatedPosts(post, 3).map(toSummary) };
  });

export const getTopicPosts = createServerFn({ method: "GET" })
  .validator((data: { topic: string }) => ({ topic: text(data?.topic, 40) }))
  .handler(async ({ data }) => {
    if (!isTopicId(data.topic)) return null;
    const { postsByTopic } = await import("@/lib/posts.server");
    return postsByTopic(data.topic).map(toSummary);
  });

export const getTopicCounts = createServerFn({ method: "GET" }).handler(async () => {
  const { posts } = await import("@/lib/posts.server");
  const counts = {} as Record<TopicId, number>;
  for (const post of posts) {
    const topic = postTopic(post);
    counts[topic] = (counts[topic] ?? 0) + 1;
  }
  return counts;
});

export const getHubList = createServerFn({ method: "GET" }).handler(async () => {
  const { HUBS, hubInfo, hubPosts } = await import("@/lib/hubs.server");
  return HUBS.map((hub) => ({ ...hubInfo(hub), count: hubPosts(hub).length }));
});

export const getHubPage = createServerFn({ method: "GET" })
  .validator((data: { slug: string }) => ({ slug: text(data?.slug, 80) }))
  .handler(async ({ data }) => {
    const { getHub, hubInfo, hubPosts } = await import("@/lib/hubs.server");
    const hub = getHub(data.slug);
    if (!hub) return null;
    return { hub: hubInfo(hub), list: hubPosts(hub).map(toSummary) };
  });

export const getArchiveMonths = createServerFn({ method: "GET" }).handler(async () => {
  const { archiveMonths } = await import("@/lib/posts.server");
  return archiveMonths();
});

export const getArchiveMonth = createServerFn({ method: "GET" })
  .validator((data: { year: string; month: string }) => ({
    year: text(data?.year, 4),
    month: text(data?.month, 2),
  }))
  .handler(async ({ data }) => {
    if (!isYearMonth(data.year, data.month)) return null;
    const { postsInMonth } = await import("@/lib/posts.server");
    return postsInMonth(data.year, data.month).map(toSummary);
  });

export const searchPostList = createServerFn({ method: "GET" })
  .validator((data: { q: string }) => ({ q: text(data?.q, 200) }))
  .handler(async ({ data }) => {
    const { searchPosts } = await import("@/lib/posts.server");
    return searchPosts(data.q).map(toSummary);
  });
