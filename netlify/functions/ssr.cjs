const fs = require('node:fs/promises');
const path = require('node:path');

let template;
let render;

const getTemplate = async () => {
  if (!template) {
    const templatePath = path.resolve(__dirname, '../../dist/client/index.html');
    template = await fs.readFile(templatePath, 'utf-8');
  }
  return template;
};

const getRender = async () => {
  if (!render) {
    const serverEntryPath = path.resolve(__dirname, '../../dist/server/entry-server.cjs');
    const mod = require(serverEntryPath);
    render = mod.render;
  }
  return render;
};

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

exports.handler = async (event) => {
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
};
