import ProjectCard from "./ProjectCard";
import DarckImg from "../assets/img/darkMode.png";
import VacanzeImg from "../assets/img/VacanzeMode.png";
import Pokedex from "../assets/img/Pokedex.png";
import FilmAct from "../assets/img/FilmAct.png";
import Swamm from "../assets/img/Swamm.png";
import Telereading from "../assets/img/Telereading.png";
import SitoTelereading from "../assets/img/SitoTelereading.png";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation("portfolio");
  const translatedProjects = t('projects', { returnObjects: true });

  const projects = [
    {
      name: translatedProjects[0].name,
      description: translatedProjects[0].description,
      image: SitoTelereading,
      link: "https://www.telereading.it/",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "HTML",
        "SEO-Friendly",
        "Responsive Design",
      ],
      delay: 0,
    },
    {
      name: translatedProjects[1].name,
      description: translatedProjects[1].description,
      image: Swamm,
      link: "https://swamm.eu/#/",
      technologies: ["Quasar.js", "vue.js", "CSS"],
      delay: 1,
    },
    {
      name: translatedProjects[2].name,
      description: translatedProjects[2].description,
      image: Telereading,
      link: "https://www.iotparking.it/",
      technologies: ["Java", "Spring boot", "MongoDB", "API Rest", "Soap"],
      delay: 2,
    },
    {
      name: translatedProjects[3].name,
      description: translatedProjects[3].description,
      image: FilmAct,
      link: "https://filmact.netlify.app/",
      technologies: ["React.js", "API", "Responsive Design"],
      delay: 3,
    },
    {
      name: translatedProjects[4].name,
      description: translatedProjects[4].description,
      image: DarckImg,
      link: "https://dark-mode-tutorial.netlify.app/",
      technologies: ["React.js", "Dark/Light Theme"],
      delay: 4,
    },
    {
      name: translatedProjects[5].name,
      description: translatedProjects[5].description,
      image: VacanzeImg,
      link: "https://vacanze.netlify.app/",
      technologies: ["React.js", "CSS", "JavaScript"],
      delay: 5,
    },
    {
      name: translatedProjects[6].name,
      description: translatedProjects[6].description,
      image: Pokedex,
      link: "https://pappalardo-angelo-pokedex.netlify.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
      delay: 6,
    },
  ];

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
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              image={project.image}
              link={project.link}
              technologies={project.technologies}
              delay={project.delay}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
