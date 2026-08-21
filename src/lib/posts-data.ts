import type { Post } from "./posts";
import { postsSl } from "./posts-data-sl";
import { postsJpm } from "./posts-data-jpm";
import { posts0 } from "./posts-data-0";
import { postsA } from "./posts-data-a";
import { postsB } from "./posts-data-b";

export const postsData: Post[] = [...postsSl, ...postsJpm, ...posts0, ...postsA, ...postsB];
