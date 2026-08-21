# muskonomia.pl

Strona Tesla / SpaceX / xAI: landing, blog i tematy.

Stack: TanStack Start (React + Vite) + Nitro `node-server`.

Repo: https://github.com/muskonomiapl/muskonomia

## Hostinger (Node.js, nie FTP / nie „static HTML”)

1. Podłącz repo `muskonomiapl/muskonomia`, branch `main`.
2. Node **20 albo 22**.
3. Build: `npm run build` (to jest `vite build && npm run db:migrate`).
4. Start: `npm start` albo `node .output/server/index.mjs`.
5. Zdjęcia: skopiuj `public/img/` z zipa na Drive (GitHub nie trzyma binariów).
   https://drive.google.com/file/d/1yaPh_rHxIHvM5fDJvGJVP7zQGzLFIlgL/view

Po deployu serwer Nitro nasłuchuje na `PORT` z Hostingera.

## Start lokalnie

```bash
npm install
npm run dev
```

## Struktura

- `src/routes` — strony (główna, blog, tematy)
- `src/lib/posts-data.ts` — wpisy bloga (składane z `posts-data-a.ts` + `posts-data-b.ts`)
- `public/img` — grafiki
