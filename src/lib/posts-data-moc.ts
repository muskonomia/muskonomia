import type { Post } from "./posts";

export const postsMoc: Post[] = [
  {
    slug: "spacex-nie-moze-wynajac-mocy-obliczeniowej",
    kicker: "xAI",
    topic: "xai",
    title: "Czy SpaceX nie przesadziła z wynajmowaniem mocy obliczeniowej innym?",
    excerpt:
      "Według Elona Muska SpaceX nie mogła wynająć mocy do inferencji od AWS, Google Cloud ani innych dostawców. Jednocześnie Google i Anthropic płacą SpaceX za dostęp do jej procesorów graficznych.",
    date: "19 października 2026",
    isoDate: "2026-10-19",
    img: "/img/colossus-2-macrohard-memphis-z-lotu-spacex-2026.jpg",
    xPostId: "2112103218092138788",
    credit:
      "Budynek Macrohard w kampusie Colossus II w Memphis z lotu ptaka, zdjęcie opublikowane przez SpaceX we wrześniu 2026 r. Fot. SpaceX",
    body: [
      {
        type: "p",
        text: "Elon Musk przyznał w nocy z niedzieli na poniedziałek, że SpaceX bez powodzenia szukała mocy do obsługi modeli AI u dostawców chmury, w tym u Amazon Web Services i Google Cloud. Google sam płaci SpaceX za dostęp do jej procesorów graficznych.",
      },
      { type: "x", id: "2111930742615802163", handle: "elonmusk" },
      {
        type: "p",
        text: "Pod [nagraniem](https://x.com/elonmusk/status/2111930742615802163) Musk [dopisał](https://x.com/elonmusk/status/2112017286764659176): „Tak wyglądała rozmowa SpaceX, kiedy próbowaliśmy wynająć moc do inferencji od AWS, GCP czy kogokolwiek, żeby odciążyć nasze klastry treningowe!!”. Nie podał, ile mocy chciał wynająć, kiedy SpaceX o nią pytała ani kto dokładnie i dlaczego odmówił. Amazon i Google nie odniosły się do jego słów.",
      },
      {
        type: "p",
        text: "Trening to uczenie modelu, a SpaceX, do której należy teraz xAI, trenuje w ten sposób Groka. Inferencja to obsługa zapytań przez gotowy model. Musk chciał przenieść tę drugą część na cudze serwery, żeby własne klastry zajmowały się tylko treningiem.",
      },
      { type: "h2", text: "SpaceX wynajmuje moc innym" },
      {
        type: "p",
        text: "SpaceX sama jest dostawcą mocy obliczeniowej. Anthropic [ogłosił 6 maja](https://www.anthropic.com/news/higher-limits-spacex), że korzysta z całej mocy centrum danych Colossus 1, czyli ponad 300 MW i ponad 220 tys. procesorów graficznych Nvidii. Według prospektu SpaceX, który opisał TechCrunch, Anthropic płaci za to 1,25 mld dolarów (ok. 4,9 mld zł) miesięcznie do 2029 r. Pisaliśmy o tym w tekście o [wynikach Anthropic za III kwartał](https://muskonomia.pl/blog/anthropic-16-8-mld-q3-spacex-colossus).",
      },
      {
        type: "p",
        text: "Z kolejnego dokumentu SpaceX, jak [podał TechCrunch](https://techcrunch.com/2026/06/05/google-will-pay-spacex-920m-per-month-for-compute/), wynika, że Google, właściciel Google Cloud, płaci SpaceX 920 mln dolarów (ok. 3,6 mld zł) miesięcznie od października 2026 do czerwca 2029 r. za dostęp do ok. 110 tys. procesorów graficznych Nvidii. Google tłumaczył wtedy, że to krótkoterminowa umowa, która ma mu zapewnić moc pomostową na popyt na platformę Gemini Enterprise, większy, niż firma się spodziewała. Obie umowy opisywaliśmy w tekście o tym, że [Anthropic i Google płacą SpaceX ponad 2 mld dolarów miesięcznie](https://muskonomia.pl/blog/anthropic-i-google-placa-spacex-2-mld-miesiecznie).",
      },
      {
        type: "p",
        text: "[Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/musks-colossus-1-ai-supercomputers-inefficient-mixed-architecture-design-couldnt-be-used-to-train-grok-so-anthropics-using-it-for-inference-instead-musk-readies-unified-blackwell-only-colossus-2-for-frontier-training-and-potential-ipo), powołując się na raport banku Mirae Asset Securities, pisze, że Colossus 1 łączy układy H100, H200 i GB200. Taka mieszanka utrudnia trening, ale nie przeszkadza w inferencji, a nowe modele xAI mają powstawać w Colossusie 2. SpaceX tego nie potwierdziła. Musk zastrzegał w maju, że jeśli mocy zacznie brakować, SpaceX może jej od Anthropic potrzebować z powrotem.",
      },
      { type: "h2", text: "Brakuje jej także dostawcom chmury" },
      {
        type: "p",
        text: "Na brak mocy skarżą się też Amazon i Alphabet. „Wciąż nie będziemy mieli dość mocy, by zaspokoić cały popyt w 2026 r. Myślę, że w 2027 r. będzie tak samo” – mówił szef Amazona Andy Jassy po wynikach za II kwartał, jak [relacjonował Data Center Knowledge](https://www.datacenterknowledge.com/infrastructure/amazon-lifts-ai-infrastructure-spending-to-220b-as-demand-outpaces-capacity). „W najbliższym czasie brakuje nam mocy obliczeniowej. Na przykład nasze przychody z chmury byłyby wyższe, gdybyśmy mogli zaspokoić ten popyt” – mówił w kwietniu szef Alphabetu Sundar Pichai, co [przytoczył TechCrunch](https://techcrunch.com/2026/04/29/google-cloud-surpasses-20b-but-says-growth-was-capacity-constrained/).",
      },
      {
        type: "p",
        text: "SpaceX [poda wyniki za III kwartał](https://ir.spacex.com/updates/releases-details/2026/SpaceX-to-Post-Third-Quarter-2026-Results-and-Host-Webcast-on-October-20-2026-2026-QssQGye3im/default.aspx) we wtorek 20 października po zamknięciu sesji. Webcast zacznie się o 22:30 czasu polskiego.",
      },
    ],
  },
];
