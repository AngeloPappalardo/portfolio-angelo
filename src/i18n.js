import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// EN imports
import heroEN from './locales/en/hero.json';
import homeEN from './locales/en/home.json';
import frontendEN from './locales/en/frontend.json';
import backendEN from './locales/en/backend.json';
import portfolioEN from './locales/en/portfolio.json';
import servicesEN from './locales/en/services.json';
import processEN from './locales/en/process.json';
import contactEN from './locales/en/contact.json';
import footerEN from './locales/en/footer.json';
import seoEN from './locales/en/seo.json';

// IT imports
import heroIT from './locales/it/hero.json';
import homeIT from './locales/it/home.json';
import frontendIT from './locales/it/frontend.json';
import backendIT from './locales/it/backend.json';
import portfolioIT from './locales/it/portfolio.json';
import servicesIT from './locales/it/services.json';
import processIT from './locales/it/process.json';
import contactIT from './locales/it/contact.json';
import footerIT from './locales/it/footer.json';
import seoIT from './locales/it/seo.json';

const resources = {
  en: {
    hero: heroEN,
    home: homeEN,
    frontend: frontendEN,
    backend: backendEN,
    portfolio: portfolioEN,
    services: servicesEN,
    process: processEN,
    contact: contactEN,
    footer: footerEN,
    seo: seoEN,
  },
  it: {
    hero: heroIT,
    home: homeIT,
    frontend: frontendIT,
    backend: backendIT,
    portfolio: portfolioIT,
    services: servicesIT,
    process: processIT,
    contact: contactIT,
    footer: footerIT,
    seo: seoIT,
  },
};

const getInitialLanguage = () => {
  if (typeof window === 'undefined') {
    return 'it';
  }

  const queryLanguage = new URLSearchParams(window.location.search).get('lng');
  if (queryLanguage && ['en', 'it'].includes(queryLanguage)) {
    return queryLanguage;
  }

  const navigatorLanguage = window.navigator.language?.slice(0, 2);
  return navigatorLanguage === 'it' ? 'it' : 'en';
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  supportedLngs: ['en', 'it'],
  lng: getInitialLanguage(),
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
