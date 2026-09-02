import type { Post } from "./posts";
import { postsC1 } from "./posts-data-c1";
import { postsC2 } from "./posts-data-c2";
import { postsC3 } from "./posts-data-c3";

export const postsC: Post[] = [...postsC1, ...postsC2, ...postsC3];
