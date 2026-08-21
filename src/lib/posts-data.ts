import type { Post } from "./posts";
import { posts0 } from "./posts-data-0";
import { postsA } from "./posts-data-a";
import { postsB } from "./posts-data-b";

export const postsData: Post[] = [...posts0, ...postsA, ...postsB];
