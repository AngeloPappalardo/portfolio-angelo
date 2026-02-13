import ProjectCard from "./ProjectCard";
import DarckImg from "../assets/img/darkMode.webp";
import VacanzeImg from "../assets/img/VacanzeMode.webp";
import Pokedex from "../assets/img/Pokedex.webp";
import FilmAct from "../assets/img/FilmAct.webp";
import Swamm from "../assets/img/Swamm.webp";
import Telereading from "../assets/img/Telereading.webp";
import SitoTelereading from "../assets/img/SitoTelereading.webp";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t, i18n } = useTranslation("portfolio");
  const translatedProjects = t('projects', { returnObjects: true });

  const projects = [
    {
      name: translatedProjects[0].name,
      description: translatedProjects[0].description,
      context: translatedProjects[0].context,
      image: SitoTelereading,
      link: "https://www.telereading.it/",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "HTML",
        "SEO-Friendly",
        "Responsive Design",
      ],
    },
    {
      name: translatedProjects[1].name,
      description: translatedProjects[1].description,
      context: translatedProjects[1].context,
      image: Swamm,
      link: "https://swamm.eu/#/",
      technologies: ["Quasar.js", "vue.js", "CSS"],
    },
    {
      name: translatedProjects[2].name,
      description: translatedProjects[2].description,
      context: translatedProjects[2].context,
      image: Telereading,
      link: "https://www.iotparking.it/",
      technologies: ["Java", "Spring boot", "MongoDB", "API Rest", "Soap"],
    },
    {
      name: translatedProjects[3].name,
      description: translatedProjects[3].description,
      context: translatedProjects[3].context,
      image: FilmAct,
      link: "https://filmact.netlify.app/",
      technologies: ["React.js", "API", "Responsive Design"],
    },
    {
      name: translatedProjects[4].name,
      description: translatedProjects[4].description,
      context: translatedProjects[4].context,
      image: DarckImg,
      link: "https://dark-mode-tutorial.netlify.app/",
      technologies: ["React.js", "Dark/Light Theme"],
    },
    {
      name: translatedProjects[5].name,
      description: translatedProjects[5].description,
      context: translatedProjects[5].context,
      image: VacanzeImg,
      link: "https://vacanze.netlify.app/",
      technologies: ["React.js", "CSS", "JavaScript"],
    },
    {
      name: translatedProjects[6].name,
      description: translatedProjects[6].description,
      context: translatedProjects[6].context,
      image: Pokedex,
      link: "https://pappalardo-angelo-pokedex.netlify.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const initialVisibleProjects = 4;
  const [visibleCount, setVisibleCount] = useState(initialVisibleProjects);
  const visibleProjects = useMemo(
    () => projects.slice(0, visibleCount),
    [projects, visibleCount]
  );
  const hasMoreProjects = visibleCount < projects.length;
  const showMoreLabel = i18n.language.startsWith("it") ? "Mostra altri progetti" : "Show more projects";

  // Genera lo schema.org JSON-LD per tutti i progetti
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.name,
      url: project.link,
      author: {
        "@type": "Person",
        name: "Pappalardo Angelo",
      },
      description: project.description,
      about: project.context,
      image: `https://pappalardo-angelo.netlify.app${project.image}`,
      keywords: project.technologies.join(", "),
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section id="portfolio" className="container px-4 py-24">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700 dark:from-primary dark:to-blue-400">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              image={project.image}
              link={project.link}
              technologies={project.technologies}
              context={project.context}
            />
          ))}
        </div>

        {hasMoreProjects ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount(projects.length)}
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {showMoreLabel}
            </button>
          </div>
        ) : null}
      </section>
    </>
  );
};

export default Portfolio;
