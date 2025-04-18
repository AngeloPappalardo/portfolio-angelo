
import { cn } from "@/lib/utils";

interface SkillCardProps {
  name: string;
  icon?: React.ReactNode;
  level?: number;
  className?: string;
  delay?: number;
}

const SkillCard = ({ name, icon, level = 5, className, delay = 0 }: SkillCardProps) => {
  return (
    <div 
      className={cn(
        "p-4 rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col items-center justify-center opacity-0",
        `animate-slide-up animation-delay-${delay * 100}`,
        className
      )}
    >
      {icon && <div className="mb-2 text-primary">{icon}</div>}
      <h3 className="font-medium text-lg mb-2 text-center">{name}</h3>
      {level > 0 && (
        <div className="flex gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "w-2 h-2 rounded-full", 
                i < level ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillCard;
