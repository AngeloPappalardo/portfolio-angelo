
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";


interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  link: string;
  technologies?: string[];
  context?: string;
}

const ProjectCard = ({ name, description, image, link, technologies = [], context }: ProjectCardProps) => {
  const { t } = useTranslation("portfolio");
  const titleId = `${name.replace(/\s+/g, "-").toLowerCase()}-title`;
  const descriptionId = `${name.replace(/\s+/g, "-").toLowerCase()}-description`;
  return (
    <article
      className={cn(
        "bg-card rounded-xl shadow-md overflow-hidden border border-border h-full flex flex-col opacity-0",
        "animate-slide-up animation-delay-100"
      )}
      itemScope
      itemType="https://schema.org/CreativeWork"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <div className="relative overflow-hidden group h-48">
        <img
          src={image} 
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          itemProp="image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <Button 
            asChild 
            variant="secondary"
            className="gap-2"
            aria-label={t("btnProject") + ` ${name}`}
          >
            <a href={link} target="_blank" rel="noopener noreferrer" itemProp="url">
              {t("btnProject")} <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 id={titleId} className="text-xl font-bold mb-2" itemProp="name">{name}</h3>
        {context && (
          <p className="text-sm text-muted-foreground mb-2">
            <span className="font-medium text-foreground/80">{t("contextLabel")}: </span>
            <span itemProp="about">{context}</span>
          </p>
        )}
        <p id={descriptionId} className="text-muted-foreground mb-4 flex-grow" itemProp="description">{description}</p>
        
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto" aria-label={t("techLabel")}>
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs bg-secondary py-1 px-2 rounded-full"
              >
                <span itemProp="keywords">{tech}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
