import fs from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import http from 'node:http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const port = Number(process.env.PORT) || 8080;
const base = process.env.BASE || '/';

const sendFile = async (res, filePath) => {
  const stream = createReadStream(filePath);
  stream.on('error', () => {
    res.statusCode = 404;
    res.end('Not found');
  });
  stream.pipe(res);
};

let vite;
let template;
let render;

const normalizeUrl = (incomingUrl) => {
  if (base === '/') return incomingUrl;
  return incomingUrl.startsWith(base) ? incomingUrl.replace(base, '/') : incomingUrl;
};

if (!isProduction) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });
} else {
  template = await fs.readFile(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
  render = (await import('./dist/server/entry-server.js')).render;
}

const server = http.createServer(async (req, res) => {
  const reqUrl = req.url || '/';

  try {
    if (!isProduction) {
      vite.middlewares(req, res, async () => {
        const htmlTemplate = await fs.readFile(path.resolve(__dirname, 'index.html'), 'utf-8');
        const transformedTemplate = await vite.transformIndexHtml(reqUrl, htmlTemplate);
        const { render: devRender } = await vite.ssrLoadModule('/src/entry-server.tsx');
        const { appHtml, helmet } = await devRender(normalizeUrl(reqUrl));

        const html = transformedTemplate
          .replace('<!--app-head-->', `${helmet?.title?.toString() ?? ''}${helmet?.meta?.toString() ?? ''}${helmet?.link?.toString() ?? ''}${helmet?.script?.toString() ?? ''}`)
          .replace('<!--app-html-->', appHtml);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
      });
      return;
    }

    const cleanUrl = reqUrl.split('?')[0];
    if (cleanUrl.startsWith('/assets/') || cleanUrl === '/favicon.ico' || cleanUrl.endsWith('.svg') || cleanUrl.endsWith('.jpg') || cleanUrl.endsWith('.webp') || cleanUrl.endsWith('.txt') || cleanUrl.endsWith('.xml') || cleanUrl.endsWith('.html')) {
      const assetPath = path.resolve(__dirname, `dist/client${cleanUrl}`);
      await sendFile(res, assetPath);
      return;
    }

    const { appHtml, helmet } = await render(normalizeUrl(reqUrl));
    const html = template
      .replace('<!--app-head-->', `${helmet?.title?.toString() ?? ''}${helmet?.meta?.toString() ?? ''}${helmet?.link?.toString() ?? ''}${helmet?.script?.toString() ?? ''}`)
      .replace('<!--app-html-->', appHtml);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } catch (error) {
    vite?.ssrFixStacktrace(error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(error instanceof Error ? error.stack : String(error));
  }
});

server.listen(port, () => {
  console.log(`SSR server running at http://localhost:${port}`);
});
