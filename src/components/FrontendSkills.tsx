import {
  SiFlutter,
  SiJavascript,
  SiQuasar,
  SiReact,
  SiTailwindcss,
  SiVuedotjs,
} from "@icons-pack/react-simple-icons";
import SkillCard from "./SkillCard";
import { FileCode, MonitorSmartphone } from "lucide-react";
import { useTranslation } from "react-i18next";

const FrontendSkills = () => {
  const { t } = useTranslation("frontend");
  const skillsData = [
    {
      name: "JavaScript",
      icon: <SiJavascript className="h-6 w-6" />,
      level: 5,
    },
    {
      name: "React.js",
      icon: <SiReact className="h-6 w-6" />,
      level: 4,
    },
    {
      name: "Vue.js",
      icon: <SiVuedotjs className="h-6 w-6" />,
      level: 5,
    },
    {
      name: "Quasar.js",
      icon: <SiQuasar className="h-6 w-6" />,
      level: 5,
    },
    {
      name: "HTML5 / CSS3",
      icon: <FileCode className="h-6 w-6" />,
      level: 5,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="h-6 w-6" />,
      level: 3,
    },
    {
      name: "Flutter",
      icon: <SiFlutter className="h-6 w-6" />,
      level: 3,
    },
    {
      name: "Responsive Design",
      icon: <MonitorSmartphone className="h-6 w-6" />,
      level: 4,
    },
  ];

  return (
    <section id="frontend-skills" className="container px-4 py-24">
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

export default FrontendSkills;
