# Тихо — пространство для главного

Лендинг фокус-пространства «Тихо». Одностраничник на React 19 + vinext (RSC-рендер на Cloudflare Worker), стили — Tailwind 4, иконки — lucide.

Живая версия: https://ivanweb1.github.io/tiho-focus-studio/

## Структура

- `app/` — исходники страницы: `page.tsx` (вся разметка и интерактив), `editorial.tsx`, `motion.ts` (скролл-анимации), `globals.css`, `closing.css`
- `public/` — картинки журнала и фавикон
- `components/ui`, `hooks`, `lib` — заготовки shadcn
- `docs/` — статическая сборка, которую отдаёт GitHub Pages
- `scripts/make-pages.mjs` — сборщик `docs/`

## Разработка

```bash
npm install
npm run dev
```

## Публикация на GitHub Pages

Страница целиком клиентская (`'use client'`), поэтому на Pages уезжает снимок SSR-вывода плюс клиентские ассеты:

```bash
npm run build
node scripts/make-pages.mjs
git add docs && git commit -m "Update docs build" && git push
```

Pages настроены на ветку `main`, папку `/docs`.

Две правки, без которых сайт не работает по подпути `/<repo>/`:

- абсолютные пути `/_next/...` в HTML переписываются в относительные;
- в клиентском бандле база ассетов зашита как `/` — заменяется на резолв от `document.baseURI`, иначе догрузка чанков даёт 404.

Обе делает `scripts/make-pages.mjs`. Файл `docs/.nojekyll` обязателен: без него Pages выбрасывает папку `_next`.
