import type { Post } from "./posts";
import { postsScout } from "./posts-data-scout";
import { postsGb } from "./posts-data-gb";
import { postsSc } from "./posts-data-sc";
import { postsCc } from "./posts-data-cc";
import { postsKat } from "./posts-data-kat";
import { postsNl } from "./posts-data-nl";
import { postsCb } from "./posts-data-cb";
import { postsZl } from "./posts-data-zl";
import { postsG5 } from "./posts-data-g5";
import { postsSl } from "./posts-data-sl";
import { postsJpm } from "./posts-data-jpm";
import { posts0 } from "./posts-data-0";
import { postsA } from "./posts-data-a";
import { postsB } from "./posts-data-b";

export const postsData: Post[] = [
  ...postsCc,
  ...postsScout,
  ...postsGb,
  ...postsSc,
  ...postsCc,
  ...postsKat,
  ...postsNl,
  ...postsCb,
  ...postsZl,
  ...postsG5,
  ...postsSl,
  ...postsJpm,
  ...posts0,
  ...postsA,
  ...postsB,
];
