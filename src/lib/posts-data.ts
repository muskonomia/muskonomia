import type { Post } from "./posts";
import { postsJpm } from "./posts-data-jpm";
import { posts0 } from "./posts-data-0";
import { postsA } from "./posts-data-a";
import { postsB } from "./posts-data-b";

export const postsData: Post[] = [...postsJpm, ...posts0, ...postsA, ...postsB];
