import { Building2, LayoutDashboard, Layers, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation("services");
  const services = t("items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  const deliverables = t("deliverables", { returnObjects: true }) as string[];
  const industries = t("industries", { returnObjects: true }) as string[];
  const faqs = t("faqs", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  const icons = [
    <Building2 className="h-6 w-6" key="building" />,
    <LayoutDashboard className="h-6 w-6" key="dashboard" />,
    <Layers className="h-6 w-6" key="layers" />,
    <Wrench className="h-6 w-6" key="wrench" />,
  ];

  return (
    <section id="services" className="container px-4 py-24">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700 dark:from-primary dark:to-blue-400">
          {t("title")}
        </h2>
        <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow opacity-0 animate-slide-up animation-delay-100"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
              {icons[index % icons.length]}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </article>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <article className="bg-card border border-border rounded-2xl p-8 shadow-sm opacity-0 animate-slide-up animation-delay-100">
          <h3 className="text-2xl font-semibold mb-3">{t("deliverablesTitle")}</h3>
          <p className="text-muted-foreground mb-5">{t("deliverablesSubtitle")}</p>
          <div className="flex flex-wrap gap-2">
            {deliverables.map((item) => (
              <span
                key={item}
                className="text-sm bg-secondary/60 text-foreground px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="bg-card border border-border rounded-2xl p-8 shadow-sm opacity-0 animate-slide-up animation-delay-100">
          <h3 className="text-2xl font-semibold mb-3">{t("industriesTitle")}</h3>
          <p className="text-muted-foreground mb-5">{t("industriesSubtitle")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {industries.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="mt-12">
        <div className="max-w-3xl mx-auto text-center mb-8 opacity-0 animate-slide-up animation-delay-100">
          <h3 className="text-2xl font-semibold mb-2">{t("faqTitle")}</h3>
          <p className="text-muted-foreground">{t("faqSubtitle")}</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm opacity-0 animate-slide-up animation-delay-100"
            >
              <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
              <p className="text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
