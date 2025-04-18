
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  link: string;
  technologies?: string[];
  delay?: number;
}

const ProjectCard = ({ name, description, image, link, technologies = [], delay = 0 }: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "bg-card rounded-xl shadow-md overflow-hidden border border-border h-full flex flex-col opacity-0",
        `animate-slide-up animation-delay-${delay * 100}`
      )}
    >
      <div className="relative overflow-hidden group h-48">
        <img
          src={image} 
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <Button 
            asChild 
            variant="secondary"
            className="gap-2"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              Visita Progetto <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs bg-secondary py-1 px-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
