import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import type { FilledContext } from 'react-helmet-async';
import App from './App';
import i18n from './i18n';
import './index.css';

const resolveLanguageFromUrl = (url: string) => {
  const parsedUrl = new URL(url, 'https://pappalardo-angelo.netlify.app');
  const language = parsedUrl.searchParams.get('lng');
  return language === 'it' || language === 'en' ? language : 'it';
};

export async function render(url: string) {
  const helmetContext: FilledContext = {} as FilledContext;
  await i18n.changeLanguage(resolveLanguageFromUrl(url));

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  return {
    appHtml,
    helmet: helmetContext.helmet,
  };
}
