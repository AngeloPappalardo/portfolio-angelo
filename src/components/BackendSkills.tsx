
import { SiGit, SiMongodb, SiSpringboot, SiSpringsecurity } from "@icons-pack/react-simple-icons";
import SkillCard from "./SkillCard";
import { Database, Server, FileCode, Map } from "lucide-react";
import { useTranslation } from "react-i18next";


const BackendSkills = () => {
  const { t } = useTranslation("backend");
  const skillsData = [
    { 
      name: "Spring Boot",
      icon: <SiSpringboot className="h-6 w-6" />,
      level: 4,
    },
    { 
      name: "Spring Security",
      icon: <SiSpringsecurity className="h-6 w-6" />,
      level: 4,
    },
    { 
      name: "MongoDB",
      icon: <SiMongodb className="h-6 w-6" />,
      level: 4,
    },
    { 
      name: "REST API",
      icon: <FileCode className="h-6 w-6" />,
      level: 4,
    },
    { 
      name: "Git/GitHub/GitLab",
      icon: <SiGit className="h-6 w-6" />,
      level: 4,
    },
    { 
      name: "Nominatim/OpenStreetMap",
      icon: <Map className="h-6 w-6" />,
      level: 2,
    },
    { 
      name: "Linux Server Setup",
      icon: <Server className="h-6 w-6" />,
      level: 1,
    },
    { 
      name: "Database Design",
      icon: <Database className="h-6 w-6" />,
      level: 3,
    }
  ];

  return (
    <section id="backend-skills" className="container px-4 py-24 bg-secondary/30 dark:bg-secondary/10">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700 dark:from-primary dark:to-blue-400">
          {t("title")}
        </h2>
        <p className="text-lg text-muted-foreground">
          {t("subtitle")}
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillsData.map((skill, index) => (
          <SkillCard 
            key={index} 
            name={skill.name} 
            icon={skill.icon} 
            level={skill.level}
          />
        ))}
      </div>
    </section>
  );
};

export default BackendSkills;
