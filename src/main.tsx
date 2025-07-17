import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n';

import { HelmetProvider } from 'react-helmet-async'; // <--- IMPORTA QUESTO

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

