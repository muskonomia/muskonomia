import type { Post } from "./posts";

export const postsGbpm: Post[] = [
  {
    slug: "grok-bot-developer-i-pm",
    kicker: "Grok Bot",
    topic: "xai",
    title: "Grok Bot to przebiegły, a najlepszy sposób na kodowanie z AI",
    excerpt:
      "Alex Finn: w Grok Bocie ustaw developera i project managera. PM daje zadania z Notion lub Linear, developer robi PR-y przez Cursor cloud agents.",
    date: "5 września 2026",
    isoDate: "2026-09-05",
    img: "https://pbs.twimg.com/media/HRZJ8TBbkAAq4R1.png",
    xPostId: "2095944004932432216",
    body: [
      {
        type: "p",
        text: "[Alex Finn](https://x.com/AlexFinn/status/2095944004932432216). Cursor cloud agents w Grok Bocie są rewelacyjne, ale trzeba ich używać dobrze. Sekret: potrzebujesz bota developera i bota od zarządzania projektem.",
      },
      {
        type: "img",
        src: "https://pbs.twimg.com/media/HRZJ8TBbkAAq4R1.png",
        alt: "Lista botów: Hank HIM Developer, Kelly HIM Project Manager, Reed HIM Researcher",
        caption: "Developer i project manager obok siebie. Źródło: @AlexFinn.",
        contain: true,
      },
      {
        type: "p",
        text: "Bot developer tylko koduje i odpala Cursor cloud agents. Project manager cały czas go pilnuje. Pilnuje kursu i daje po drodze zielone światło.",
      },
      {
        type: "img",
        src: "/img/gbms-ui.jpg",
        alt: "Grok Bot z listą agentów i czatem",
        caption: "Grok Bot. Własny zespół agentów, nie jeden czat.",
      },
      {
        type: "p",
        text: "PM trzyma developera przy tablicy. Notion albo Linear, oba mają w Grok Bocie darmowe wtyczki. Najpierw PM bierze projekt, układa zadania w Notion albo Linear, potem podaje developerowi kolejne zadania po kolei.",
      },
      {
        type: "img",
        src: "/img/cb-cursorbench.jpg",
        alt: "Cursor i agenci kodujący w tle",
        caption: "Cursor cloud agents. Developer je odpala, PM trzyma kurs.",
        contain: true,
      },
      {
        type: "p",
        text: "Developer bierze zadania i robi do każdego PR. Ty testujesz i mergujesz, gdy boty pracują.",
      },
      {
        type: "img",
        src: "/img/gbms-bot.jpg",
        alt: "Grok Bot na komputerze i w telefonie",
        caption: "Boty pracują. Ty mergujesz.",
      },
      {
        type: "p",
        text: "To mocna pętla z kilku powodów. Kod powstaje sam, a agenci pilnują, żeby nie zjechał z toru. Cursor cloud agents są na tyle dobre, że jakość wychodzi wysoka. Wszystko jest poukładane: każde zadanie ma PR, a PR siedzi w Notion albo Linear.",
      },
      {
        type: "p",
        text: "Warto to postawić przy następnym buildzie. Ja tak przeniosłem jakieś 90% kodowania z AI do Grok Bota. (Cheat code: wrzuć ten wpis swojemu chief of staff botowi, niech to wszystko ustawi.)",
      },
    ],
  },
];
