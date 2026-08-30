import type { Post } from "./posts";

export const postsTb: Post[] = [
  {
    slug: "spacex-odleje-lopatki-turbin-we-wlasnej-odlewni",
    kicker: "SpaceX",
    topic: "spacex",
    title: "SpaceX odleje łopatki turbin u siebie. Kolejki u PCC i Howmet sięgają 2030",
    excerpt:
      "Musk potwierdza foundry w Bastrop. Łopatki i kierownice to wąskie gardło turbin gazowych — PCC i Howmet mają pełne książki do 2030. Własny odlew: nawet 18 miesięcy szybciej.",
    date: "30 sierpnia 2026",
    isoDate: "2026-08-30",
    img: "/img/tb-lopatki.jpg",
    body: [
      {
        type: "p",
        text: "Elon Musk potwierdził to, co od miesięcy widać w ogłoszeniach o pracę: SpaceX sam będzie odlewać łopatki i kierownice gazowych turbin. Własny odlew ma przyspieszyć uruchamianie kompletnych maszyn nawet o 18 miesięcy.",
      },
      {
        type: "img",
        src: "/img/tb-lopatki.jpg",
        alt: "Rotor turbiny gazowej z rzędami odlewanych łopatek",
        caption:
          "Gorąca sekcja. Bez łopatki turbina jest pustą obudową. Kolejki u PCC i Howmet — do 2030.",
      },
      {
        type: "p",
        text: "W wpisie na X Musk rozrysował układ sił. SpaceX i Tesla budują po 100 GW rocznej mocy produkcji paneli słonecznych, „tak szybko, jak się da”. Gaz ziemny i tak zostanie na kilka lat — jako uzupełnienie i rozruch fotowoltaiki. Limitem nie jest już sam zakup turbiny. Limitem jest odlew gorącej sekcji.",
      },
      {
        type: "img",
        src: "/img/tb-lopatka.jpg",
        alt: "Pojedyncza odlewana łopatka turbiny gazowej ze stopu niklu",
        caption:
          "1 650–1 980 °C. Powyżej temperatury topnienia stopu. Monokryształ albo krystalizacja kierunkowa.",
      },
      {
        type: "p",
        text: "Vincent (@SPCX100T) dokłada to, czego w dwóch zdaniach Muska nie ma. Łopatki i kierownice w dużych turbinach przemysłowych pracują w 1 650–1 980 °C, powyżej temperatury topnienia samych stopów. Trzeba odlewu monokrystalicznego albo kierunkowo krystalizowanego ze stopów niklu. Na skalę robi to wiarygodnie kilka hut na świecie — PCC, Howmet i jeszcze jedna, może dwie. Książki zamówień są pełne do 2030. To jeden z najostrzejszych hamulców przy zasilaniu centrów AI.",
      },
      {
        type: "img",
        src: "/img/tb-ogloszenie.jpg",
        alt: "Ogłoszenie SpaceX: Sr. Operations Engineer, Blades and Vanes Foundry",
        caption:
          "Nie pomysł z weekendu. SpaceX rekrutuje foundry „blades and vanes” od miesięcy. Bastrop, Teksas.",
        contain: true,
      },
      {
        type: "p",
        text: "SpaceX nie wchodzi tu z pustymi rękami. Te same wysokotemperaturowe superstopy odlewa już pod turbopompy Raptora i latami gasił problem pękających łopatek. Teraz stawia foundry „blades and vanes” w Bastrop w Teksasie i przenosi ten warsztat na turbiny przemysłowe.",
      },
      {
        type: "img",
        src: "/img/tb-bastrop.jpg",
        alt: "Budowa hali SpaceX w Bastrop w Teksasie",
        caption:
          "Bastrop. Najpierw własne potrzeby: prąd dla SpaceXAI i odlewy pod Starshipa.",
      },
      {
        type: "p",
        text: "To nie jest zapowiedź nowej marki turbin gazowych. To zastrzyk rakietowego tempa do branży, która od lat stoi na kilku dostawcach i wieloletnich lead time’ach. Najpierw własne potrzeby: prąd dla SpaceXAI i odlewy pod Starshipa. Potem — jeśli wyjdzie — krótsze terminy, więcej mocy, presja na dotychczasowych odlewników.",
      },
      {
        type: "p",
        text: "Klasyczny odruch Muska. Łańcuch nie nadąża, więc buduje się fabrykę. Tym razem nie ogniw i nie rakiet, tylko detalu, bez którego turbina jest pustą obudową.",
      },
      {
        type: "p",
        text: "100 GW paneli rocznie w dwóch firmach brzmi jak plan na dekadę. 18 miesięcy mniej czekania na turbinę brzmi jak coś, co da się zmierzyć przy Colossusie już w przyszłym roku. Odlewnia w Bastrop nie rozwiąże sieci, transformatorów ani pozwoleń. Może tylko sprawić, że gdy prąd wreszcie dojedzie na działkę, łopatka już będzie w maszynie, a nie w kolejce u Howmetu do 2030.",
      },
      {
        type: "p",
        text: "Źródło: Elon Musk, 29 sierpnia 2026, oraz Vincent (@SPCX100T).",
      },
    ],
  },
];
