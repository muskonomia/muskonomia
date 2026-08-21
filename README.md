# muskonomia.pl

Strona Tesla / SpaceX / xAI: landing, blog i tematy.

**Repozytorium:** https://github.com/muskonomiapl/muskonomia

Stack: TanStack Start, React, Tailwind CSS.

## Start lokalnie

```bash
git clone https://github.com/muskonomiapl/muskonomia.git
cd muskonomia
npm install
npm run dev
```

Dev serwer: `http://localhost:8080`.

## Grafiki i pełny zip

Zdjęcia (ok. 8 MB) nie mieszczą się w API, którym wypychałem kod. Pełny projekt **z `public/img`** jest na Google Drive:

https://drive.google.com/file/d/1yaPh_rHxIHvM5fDJvGJVP7zQGzLFIlgL/view

Rozpakuj zip i skopiuj `public/img/` do sklonowanego repo, potem `npm run dev`.

## Deploy (Hostinger / Node)

1. `npm install`
2. `npm run build`
3. wgraj output na hosting **Node.js**, nie samo HTML
4. ustaw domenę `muskonomia.pl`

## Struktura

- `src/routes` — strony (główna, blog, tematy)
- `src/lib/posts-data.ts` — wpisy bloga
- `public/img` — grafiki
- `src/components` — header, footer, karty wpisów
