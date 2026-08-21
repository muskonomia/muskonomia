import type { Post } from "./posts";
import { postsA } from "./posts-data-a";
import { postsB } from "./posts-data-b";

export const postsData: Post[] = [...postsA, ...postsB];
