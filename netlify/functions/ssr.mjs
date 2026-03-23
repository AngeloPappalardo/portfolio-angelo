import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { render as renderApp } from '../../dist/server/entry-server.js';

let template;
const render = renderApp;

const getTemplate = async () => {
  if (!template) {
    const templatePath = path.resolve(
      path.dirname(fileURLToPath(import.meta.url)),
      '../../dist/client/index.html'
    );
    template = await fs.readFile(templatePath, 'utf-8');
  }
  return template;
};

const getRender = async () => render;

const deferStylesheetLoading = (html) =>
  html.replace(
    /<link rel="stylesheet"([^>]*?)href="([^"]+)"([^>]*?)>/g,
    (_match, beforeHref = '', href = '', afterHref = '') => {
      const isLocalAsset = href.startsWith('/assets/');
      if (!isLocalAsset) return _match;

      const combinedAttributes = `${beforeHref}${afterHref}`;
      return (
        `<link rel="preload" as="style" href="${href}"${combinedAttributes} onload="this.onload=null;this.rel='stylesheet'">` +
        `<noscript><link rel="stylesheet" href="${href}"${combinedAttributes}></noscript>`
      );
    }
  );

const buildRequestUrl = (event) => {
  const pathValue = event.path || '/';
  if (event.rawQuery) {
    return `${pathValue}?${event.rawQuery}`;
  }
  if (event.queryStringParameters) {
    const params = new URLSearchParams(event.queryStringParameters);
    const query = params.toString();
    return query ? `${pathValue}?${query}` : pathValue;
  }
  return pathValue;
};

export async function handler(event) {
  try {
    const [htmlTemplate, renderFn] = await Promise.all([getTemplate(), getRender()]);
    const requestUrl = buildRequestUrl(event);
    const { appHtml, helmet } = await renderFn(requestUrl);

    const html = deferStylesheetLoading(
      htmlTemplate
        .replace(
          '<!--app-head-->',
          `${helmet?.title?.toString() ?? ''}${helmet?.meta?.toString() ?? ''}${helmet?.link?.toString() ?? ''}${helmet?.script?.toString() ?? ''}`
        )
        .replace('<!--app-html-->', appHtml)
    );

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
      body: html,
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
      body: error instanceof Error ? error.stack : String(error),
    };
  }
}
