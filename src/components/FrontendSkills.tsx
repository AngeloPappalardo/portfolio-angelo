
import { SiFlutter, SiJavascript, SiQuasar, SiReact, SiTailwindcss, SiVuedotjs } from "@icons-pack/react-simple-icons";
import SkillCard from "./SkillCard";
import { FileCode, MonitorSmartphone } from "lucide-react";

const FrontendSkills = () => {
  const skillsData = [
    { 
      name: "JavaScript",
      icon: <SiJavascript className="h-6 w-6" />,
      level: 5,
      delay: 0
    },
    { 
      name: "React.js",
      icon: < SiReact className="h-6 w-6" />,
      level: 3,
      delay: 1
    },
    { 
      name: "Vue.js",
      icon: <SiVuedotjs className="h-6 w-6" />,
      level: 5,
      delay: 2
    },
    { 
      name: "Quasar.js",
      icon: <SiQuasar className="h-6 w-6" />,
      level: 5,
      delay: 3
    },
    { 
      name: "HTML5 / CSS3",
      icon: <FileCode className="h-6 w-6" />,
      level: 5,
      delay: 4
    },
    { 
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="h-6 w-6" />,
      level: 3,
      delay: 5
    },
    { 
      name: "Flutter",
      icon: <SiFlutter className="h-6 w-6" />,
      level: 3,
      delay: 6
    },
    { 
      name: "Responsive Design",
      icon: <MonitorSmartphone className="h-6 w-6" />,
      level: 4,
      delay: 7
    }
  ];

  return (
    <section id="frontend-skills" className="container px-4 py-24">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700 dark:from-primary dark:to-blue-400">
          Frontend Skills
        </h2>
        <p className="text-lg text-muted-foreground">
          Competenze tecniche per creare interfacce utente moderne ed intuitive
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillsData.map((skill, index) => (
          <SkillCard 
            key={index} 
            name={skill.name} 
            icon={skill.icon} 
            level={skill.level}
            delay={skill.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default FrontendSkills;
