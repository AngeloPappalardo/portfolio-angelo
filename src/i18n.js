import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// EN imports
import heroEN from './locales/en/hero.json';
import frontendEN from './locales/en/frontend.json';
import backendEN from './locales/en/backend.json';
import portfolioEN from './locales/en/portfolio.json';
import footerEN from './locales/en/footer.json';
import seoEN from './locales/en/seo.json';

// IT imports
import heroIT from './locales/it/hero.json';
import frontendIT from './locales/it/frontend.json';
import backendIT from './locales/it/backend.json';
import portfolioIT from './locales/it/portfolio.json';
import footerIT from './locales/it/footer.json';
import seoIT from './locales/it/seo.json';

const resources = {
  en: {
    hero: heroEN,
    frontend: frontendEN,
    backend: backendEN,
    portfolio: portfolioEN,
    footer: footerEN,
    seo: seoEN
  },
  it: {
    hero: heroIT,
    frontend: frontendIT,
    backend: backendIT,
    portfolio: portfolioIT,
    footer: footerIT,
    seo: seoIT
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
