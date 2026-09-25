import type { Post } from "./posts";

export const postsAg: Post[] = [
  {
    slug: "anthropic-i-google-placa-spacex-2-mld-miesiecznie",
    kicker: "xAI",
    topic: "xai",
    title: "Anthropic i Google płacą SpaceX ponad 2 mld dolarów miesięcznie",
    excerpt:
      "Już od października Anthropic i Google zapłacą SpaceX ponad 2 mld dolarów miesięcznie za moc obliczeniową.",
    date: "25 września 2026",
    isoDate: "2026-09-25",
    img: "/img/anthropic-google-gpu.jpg",
    body: [
      {
        type: "p",
        text: "Już od października SpaceX będzie dostawać od Anthropica i Google łącznie ponad 2 mld dolarów miesięcznie za wynajem mocy obliczeniowej. Do tej pory wiedzieliśmy jedynie o podpisanych umowach, a teraz pieniądze będą faktycznie wpływać na konto SpaceX. Anthropic płaci 1,25 mld dolarów, a Google dołoży 920 mln dolarów za dostęp do około 110 tys. procesorów graficznych Nvidii. Razem to około 8,4 mld zł co miesiąc.",
      },
      { type: "x", id: "2103239024752341080", handle: "joehansen" },
      {
        type: "p",
        text: "Anthropic wynajmuje całą moc Colossusa 1 pod Memphis w Tennessee, czyli centrum danych zbudowanego przez xAI na potrzeby Groka. [Stawka wyszła na jaw w maju](https://techcrunch.com/2026/05/20/anthropic-will-pay-xai-1-25-billion-per-month-for-compute/), w prospekcie emisyjnym SpaceX. Umowa ma trwać do maja 2029 r., ale każda ze stron może ją wypowiedzieć z 90-dniowym wyprzedzeniem.",
      },
      {
        type: "p",
        text: "[Umowa z Google](https://techcrunch.com/2026/06/05/google-will-pay-spacex-920m-per-month-for-compute/) wchodzi w pełną stawkę w październiku i ma obowiązywać do czerwca 2029 r. Po 31 grudnia 2026 r. obie firmy mogą ją zerwać z 90-dniowym wyprzedzeniem. Jeśli SpaceX nie odda do 30 września wszystkich 110 tys. GPU, Google może po miesiącu karencji odejść albo płacić mniej za to, co dostał. Google tłumaczy umowę popytem na Gemini Enterprise, który okazał się wyższy, niż firma zakładała. Które centrum danych obsłuży Google, SpaceX nie podał.",
      },
    ],
  },
];
