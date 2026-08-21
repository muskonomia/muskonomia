# muskonomia.pl

Strona Tesla / SpaceX / xAI: landing, blog i tematy.

Stack: TanStack Start, React, Tailwind CSS.

## Start lokalnie

```bash
npm install
npm run dev
```

Aplikacja wstaje na `http://localhost:3000` (lub porcie z logów Vite).

## Deploy (Hostinger / Node)

1. `npm install`
2. `npm run build`
3. wgraj output na hosting **Node.js**, nie samo HTML
4. ustaw domenę `muskonomia.pl`

Szczegóły builda: `package.json` → skrypt `build`.

## Struktura

- `src/routes` — strony (główna, blog, tematy)
- `src/lib/posts-data.ts` — wpisy bloga
- `public/img` — grafiki
