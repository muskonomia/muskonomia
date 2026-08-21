# muskonomia.pl

Strona Tesla / SpaceX / xAI: landing, blog i tematy.

**GitHub:** https://github.com/muskonomiapl/muskonomia  
**Pełny zip (kod + zdjęcia + wpisy):** https://drive.google.com/file/d/1yaPh_rHxIHvM5fDJvGJVP7zQGzLFIlgL/view

Stack: TanStack Start, React, Tailwind CSS.

## Najprostszy start — zip z Drive

1. Pobierz [muskonomia-src.zip](https://drive.google.com/file/d/1yaPh_rHxIHvM5fDJvGJVP7zQGzLFIlgL/view)
2. Rozpakuj
3. `npm install && npm run dev`
4. Otwórz http://localhost:8080

Ten zip ma wszystko: wpisy, `public/img`, skrypty Vite.

## Albo clone z GitHuba

```bash
git clone https://github.com/muskonomiapl/muskonomia.git
cd muskonomia
```

Rozpakuj zip z Drive **do tego folderu** (uzupełnij `src/lib/posts-data.ts`, `public/img/` i `scripts/`). Potem:

```bash
npm install
npm run dev
```

Żeby wrzucić brakujące pliki na GitHuba z własnego komputera:

```bash
git add -A
git commit -m "Pełny kod i grafiki"
git push
```

## Deploy (Hostinger / Node)

1. `npm install`
2. `npm run build`
3. wgraj output na hosting **Node.js**, nie samo HTML
4. ustaw domenę muskonomia.pl
