import type { Post } from "./posts";
import { postsFsd } from "./posts-data-fsd";
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
import { postsVegasLoop } from "./posts-data-vegas-loop";
import { postsShip40 } from "./posts-data-ship40";
import { postsAshokCybercab } from "./posts-data-ashok-cybercab";
import { postsC } from "./posts-data-c";

export const postsData: Post[] = [
  ...postsFsd,
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
  ...postsVegasLoop,
  ...postsShip40,
  ...postsAshokCybercab,
  ...postsC,
];
