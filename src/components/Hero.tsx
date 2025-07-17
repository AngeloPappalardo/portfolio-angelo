import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("hero");
  const scrollToNextSection = () => {
    document
      .querySelector("#frontend-skills")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-4"
    >
      <div className="max-w-3xl text-center animate-fade-in backdrop-blur-sm p-8 rounded-lg">
        <p className="text-lg md:text-xl mb-2 text-foreground/70">
          Full-Stack Developer
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700 dark:from-primary dark:to-blue-400">
          Pappalardo Angelo
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-foreground/80">
          {t("title")}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            onClick={() =>
              document
                .querySelector("#portfolio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            variant="default"
            size="lg"
            className="rounded-full"
            aria-label={'Navigation to ' + t("btnProject")}
          >
            {t("btnProject")}
          </Button>

          <Button
            onClick={() =>
              document
                .querySelector("#frontend-skills")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            variant="outline"
            size="lg"
            className="rounded-full"
            aria-label={'Navigation to ' + t("btnSkills")}
          >
            {t("btnSkills")}
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToNextSection}
          className="rounded-full h-10 w-10 border border-primary/30"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
