import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

const Process = () => {
  const { t } = useTranslation("process");
  const steps = t("steps", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  const outcomes = t("outcomes", { returnObjects: true }) as string[];
  const timeline = t("timeline", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const icons = [
    <Search className="h-5 w-5" key="search" />,
    <PenTool className="h-5 w-5" key="pen" />,
    <Code2 className="h-5 w-5" key="code" />,
    <Rocket className="h-5 w-5" key="rocket" />,
  ];

  return (
    <section id="process" className="container px-4 py-24 bg-secondary/30 dark:bg-secondary/10">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700 dark:from-primary dark:to-blue-400">
          {t("title")}
        </h2>
        <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
      </div>

      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="bg-card border border-border rounded-2xl p-6 shadow-sm opacity-0 animate-slide-up animation-delay-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                {icons[index % icons.length]}
              </div>
              <span className="text-sm font-semibold text-primary">0{index + 1}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ol>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <article className="bg-card border border-border rounded-2xl p-8 shadow-sm opacity-0 animate-slide-up animation-delay-100">
          <h3 className="text-2xl font-semibold mb-3">{t("timelineTitle")}</h3>
          <p className="text-muted-foreground mb-6">{t("timelineSubtitle")}</p>
          <div className="space-y-4">
            {timeline.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="bg-card border border-border rounded-2xl p-8 shadow-sm opacity-0 animate-slide-up animation-delay-100">
          <h3 className="text-2xl font-semibold mb-3">{t("outcomesTitle")}</h3>
          <p className="text-muted-foreground mb-6">{t("outcomesSubtitle")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {outcomes.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Process;
