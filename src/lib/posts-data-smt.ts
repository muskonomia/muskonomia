import type { Post } from "./posts";

export const postsSmt: Post[] = [
  {
    slug: "wycieczka-po-fabryce-semi",
    kicker: "Semi",
    topic: "tesla",
    title: "Pół godziny w fabryce Semi w Sparks",
    excerpt:
      "S.E. Robinson wrzucił 30-minutową wycieczkę po fabryce Semi w Sparks. Prowadzi ją szef zakładu Rob Rayl, nagranie z Semi Rollout 24 września.",
    date: "1 października 2026",
    isoDate: "2026-10-01",
    xPostId: "2105653182546243789",
    img: "/img/wycieczka-semi-sparks.jpg",
    credit:
      "Kadr z filmu S.E. Robinsona: wycieczka po fabryce Semi w Sparks. Film: [S.E. Robinson, Jr. na YouTube](https://www.youtube.com/watch?v=E406h8JQyok).",
    body: [
      {
        type: "p",
        text: "S.E. Robinson wrzucił 30-minutową wycieczkę po fabryce Semi w Sparks w Nevadzie. Prowadzi ją szef zakładu Rob Rayl, razem z ekipą linii. Nagranie powstało podczas Semi Rollout 24 września. Widać tłocznię, spawanie nadwozia, dach, malowanie proszkowe, pakiet baterii, osie i ślub kabiny z ramą.",
      },
      { type: "youtube", id: "E406h8JQyok" },
    ],
  },
];
