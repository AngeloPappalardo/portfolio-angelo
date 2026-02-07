import { ArrowRight, Briefcase, LineChart, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const HomeHighlights = () => {
  const { t } = useTranslation("home");
  const items = t("highlights", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const icons = [
    <Briefcase className="h-6 w-6" key="briefcase" />,
    <LineChart className="h-6 w-6" key="chart" />,
    <ShieldCheck className="h-6 w-6" key="shield" />,
  ];

  return (
    <section id="highlights" className="container px-4 py-24">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700 dark:from-primary dark:to-blue-400">
          {t("highlightsTitle")}
        </h2>
        <p className="text-lg text-muted-foreground">{t("highlightsSubtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <article
            key={item.title}
            className="bg-card border border-border rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
              {icons[index % icons.length]}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="/portfolio"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          {t("highlightsCta")} <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default HomeHighlights;
