import ProjectCard from "./ProjectCard";
import DarckImg from "../assets/img/darkMode.png";
import VacanzeImg from "../assets/img/VacanzeMode.png";
import Pokedex from "../assets/img/Pokedex.png";
import FilmAct from "../assets/img/FilmAct.png";
import Swamm from "../assets/img/Swamm.png";
import Telereading from "../assets/img/Telereading.png";
import SitoTelereading from "../assets/img/SitoTelereading.png";

const projects = [
  {
    name: "Sito Telereading",
    description:
      "Sito web aziendale per Telereading, Specialisti in tecnologie per risparmio energetico e gestione delle utilities",
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
    name: "Swamm",
    description:
      "SWAMM è un progetto per il controllo sostenibile dell'acqua tramite un dispositivo di telemetria.",
    image: Swamm,
    link: "https://swamm.eu/#/",
    technologies: ["Quasar.js", "vue.js", "CSS"],
    delay: 1,
  },
  {
    name: "Telereading",
    description:
      "Progettazione di microservizi per il pagamento della sosta con PagoPA.",
    image: Telereading,
    link: "https://www.iotparking.it/",
    technologies: ["Java", "Spring boot", "MongoDB", "API Rest", "Soap"],
    delay: 2,
  },
  {
    name: "Film Act",
    description:
      "Un sito per la ricerca e visualizzazione di film, creato con React.js.",
    image: FilmAct,
    link: "https://filmact.netlify.app/",
    technologies: ["React.js", "API", "Responsive Design"],
    delay: 3,
  },
  {
    name: "Dark Mode Tutorial",
    description:
      "Un'applicazione React che permette il passaggio tra modalità scura e chiara.",
    image: DarckImg,
    link: "https://dark-mode-tutorial.netlify.app/",
    technologies: ["React.js", "Dark/Light Theme"],
    delay: 4,
  },
  {
    name: "Vacanze Card List",
    description: "Una lista visuale delle vacanze, realizzata con React.js.",
    image: VacanzeImg,
    link: "https://vacanze.netlify.app/",
    technologies: ["React.js", "CSS", "JavaScript"],
    delay: 5,
  },
  {
    name: "Pokedex",
    description:
      "Un'applicazione per esplorare i Pokémon, creata con HTML, CSS e JavaScript puro.",
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
      name: "Pappalardo Angelo"
    },
    description: project.description,
    image: `https://pappalardo-angelo.netlify.app${project.image}`,
    keywords: project.technologies.join(", ")
  })),
};


const Portfolio = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section id="portfolio" className="container px-4 py-24">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700 dark:from-primary dark:to-blue-400">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground">
            Una selezione dei miei progetti recenti
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
