import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = () => {
  const { t, i18n } = useTranslation('seo');
  const isItalian = i18n.language === 'it-IT';

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": t('title'),
    "url": "https://pappalardo-angelo.netlify.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://pappalardo-angelo.netlify.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pappalardo Angelo",
    "url": "https://pappalardo-angelo.netlify.app",
    "jobTitle": "Web Developer",
    "image": "https://pappalardo-angelo.netlify.app/programmer2.jpg",
    "mainEntityOfPage": "https://pappalardo-angelo.netlify.app",
    "description": t('personDescription'),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Italy",
      "addressCountry": "IT"
    },
    "email": "mailto:angelo961996@gmail.com",
    "telephone": "+39 345 390 17 54",
    "sameAs": [
      "https://github.com/AngeloPappalardo",
      "https://www.linkedin.com/in/angelo-pappalardo-4405b7260/"
    ],
    "knowsAbout": [
      "Web Developer",
      "FrontEnd Developer",
      "Backend Developer",
      "Full Stack Developer",
      "JavaScript",
      "TypeScript",
      "React",
      "MongoDB",
      "CSS",
      "HTML"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Università degli Studi di Catania"
    },
    "birthDate": "1996-10-07",
    "birthPlace": {
      "@type": "Place",
      "name": "Acireale, Italy"
    }
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": t('breadcrumbs.home'),
        "item": "https://pappalardo-angelo.netlify.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": t('breadcrumbs.frontend'),
        "item": "https://pappalardo-angelo.netlify.app/#frontend-skills"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": t('breadcrumbs.backend'),
        "item": "https://pappalardo-angelo.netlify.app/#backend-skills"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": t('breadcrumbs.portfolio'),
        "item": "https://pappalardo-angelo.netlify.app/#portfolio"
      }
    ]
  };

  return (
    <Helmet>
      <title>{t('title')}</title>
      <meta name="description" content={t('description')} />
      <meta name="keywords" content={t('keywords')} />
      <meta name="author" content="Pappalardo Angelo" />

      <meta property="og:title" content={t('title')} />
      <meta property="og:description" content={t('description')} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://pappalardo-angelo.netlify.app" />
      <meta property="og:image" content="https://pappalardo-angelo.netlify.app/programmer2.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t('title')} />
      <meta name="twitter:description" content={t('description')} />
      <meta name="twitter:image" content="https://pappalardo-angelo.netlify.app/programmer2.jpg" />

      <link rel="canonical" href="https://pappalardo-angelo.netlify.app" />

      <script type="application/ld+json">
        {JSON.stringify(jsonLdWebsite)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(jsonLdPerson)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(jsonLdBreadcrumb)}
      </script>
    </Helmet>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SEO;
