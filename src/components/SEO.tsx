import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  path?: string;
}

const SEO = ({ path = "" }: SEOProps) => {
  const { t, i18n } = useTranslation('seo');
  const isItalian = i18n.language.startsWith('it');
  const languageCode = isItalian ? 'it' : 'en';
  const locale = isItalian ? 'it_IT' : 'en_US';
  const alternateLocale = isItalian ? 'en_US' : 'it_IT';
  const siteUrl = "https://pappalardo-angelo.netlify.app";
  const normalizedPath = path === "/" ? "" : path;
  const canonicalUrl = `${siteUrl}${normalizedPath}?lng=${languageCode}`;
  const pageMap: Record<string, string> = {
    "/": "home",
    "/servizi": "services",
    "/processo": "process",
    "/competenze": "skills",
    "/portfolio": "portfolio",
    "/contatti": "contact",
  };
  const pageKey = pageMap[normalizedPath || "/"] ?? "home";
  const getPageText = (key: "title" | "description") => {
    const value = t(`pages.${pageKey}.${key}`);
    return value.startsWith("pages.") ? t(key) : value;
  };
  const pageTitle = getPageText("title");
  const pageDescription = getPageText("description");
  const breadcrumbMap: Record<string, string> = {
    "/": t("breadcrumbs.home"),
    "/servizi": t("breadcrumbs.services"),
    "/processo": t("breadcrumbs.process"),
    "/competenze": t("breadcrumbs.skills"),
    "/portfolio": t("breadcrumbs.portfolio"),
    "/contatti": t("breadcrumbs.contact"),
  };
  const breadcrumbTrail = [
    { name: t("breadcrumbs.home"), item: `${siteUrl}/` },
  ];

  if (normalizedPath && normalizedPath !== "/") {
    const label = breadcrumbMap[normalizedPath];
    if (label) {
      breadcrumbTrail.push({
        name: label,
        item: `${siteUrl}${normalizedPath}`,
      });
    }
  }

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": t('title'),
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pappalardo Angelo",
    "url": siteUrl,
    "jobTitle": "Web Developer",
    "image": "https://pappalardo-angelo.netlify.app/programmer2.jpg",
    "mainEntityOfPage": siteUrl,
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

  const shouldRenderBreadcrumb = breadcrumbTrail.length > 1;

  const jsonLdBreadcrumb = shouldRenderBreadcrumb
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbTrail.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.item
        }))
      }
    : null;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={t('keywords')} />
      <meta name="author" content="Pappalardo Angelo" />
      <meta name="robots" content={t('robots')} />
      <meta name="theme-color" content={t('themeColor')} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteUrl}/programmer2.jpg`} />
      <meta property="og:image:alt" content={t('ogImageAlt')} />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content={alternateLocale} />
      <meta property="og:site_name" content={t('siteName')} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${siteUrl}/programmer2.jpg`} />
      <meta name="twitter:site" content={t('twitterSite')} />
      <meta name="twitter:creator" content={t('twitterCreator')} />

      <meta name="language" content={languageCode} />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}${normalizedPath}?lng=en`} />
      <link rel="alternate" hrefLang="it" href={`${siteUrl}${normalizedPath}?lng=it`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${normalizedPath}`} />

      <script type="application/ld+json">
        {JSON.stringify(jsonLdWebsite)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(jsonLdPerson)}
      </script>
      {jsonLdBreadcrumb ? (
        <script type="application/ld+json">
          {JSON.stringify(jsonLdBreadcrumb)}
        </script>
      ) : null}
    </Helmet>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SEO;
