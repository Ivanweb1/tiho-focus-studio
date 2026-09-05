// Собирает статическую версию сайта в docs/ для GitHub Pages.
//
// Проект рендерится Cloudflare Worker'ом (vinext/RSC), поэтому статику
// получаем снимком: поднимаем собранный воркер локально, забираем HTML «/»,
// кладём рядом клиентские ассеты и переписываем абсолютные пути в относительные,
// чтобы страница жила по подпути вида /<repo>/.
//
// Запуск: npm run build && node scripts/make-pages.mjs

import {spawn} from 'node:child_process';
import {cp, mkdir, readFile, rm, writeFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const docs = path.join(root, 'docs');
const PORT = 8788;
const ORIGIN = `http://127.0.0.1:${PORT}`;

if (!existsSync(path.join(dist, 'server', 'wrangler.json'))) {
  console.error('Нет dist/ — сначала выполните: npm run build');
  process.exit(1);
}

const server = spawn(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  ['wrangler', 'dev', '--config', 'dist/server/wrangler.json', '--port', String(PORT), '--ip', '127.0.0.1'],
  {cwd: root, stdio: 'ignore'},
);

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`${ORIGIN}/`);
      if (res.ok) return await res.text();
    } catch {}
    await new Promise(r => setTimeout(r, 1000));
  }
  throw new Error('Локальный воркер не поднялся');
}

function toRelative(html) {
  // Ссылки в атрибутах и внутри инлайнового RSC-payload.
  return html
    .replaceAll('="/_next/', '="_next/')
    .replaceAll('="/journal-', '="journal-')
    .replaceAll('="/favicon', '="favicon')
    .replaceAll('\\"/_next/', '\\"_next/')
    .replaceAll('css:/_next/', 'css:_next/');
}

// Vite зашивает базу ассетов как "/" — под подпутём это даёт 404 на догрузке
// чанков. Резолвим от document.baseURI.
async function patchAssetBase() {
  const manifest = JSON.parse(
    await readFile(path.join(dist, 'client', 'vinext-client-entry-manifest.json'), 'utf8'),
  );
  const entry = path.join(docs, manifest.appBrowserEntry);
  const code = await readFile(entry, 'utf8');
  const re = /=function\((\w)\)\{return`\/`\+\1\}/;
  if (!re.test(code)) {
    console.warn('! Не найден хелпер базы ассетов — проверьте догрузку чанков вручную');
    return;
  }
  await writeFile(entry, code.replace(re, '=function($1){return new URL($1,document.baseURI).href}'));
}

try {
  const html = await waitForServer();
  await rm(docs, {recursive: true, force: true});
  await mkdir(docs, {recursive: true});
  await cp(path.join(dist, 'client'), docs, {recursive: true});
  await writeFile(path.join(docs, 'index.html'), toRelative(html));
  await patchAssetBase();
  await writeFile(path.join(docs, '.nojekyll'), ''); // иначе Pages выбросит папку _next
  console.log('docs/ собран');
} finally {
  server.kill();
}
