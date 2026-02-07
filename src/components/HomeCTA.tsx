import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const HomeCTA = () => {
  const { t } = useTranslation("home");

  return (
    <section id="cta" className="container px-4 py-24">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-10 md:p-14 text-center shadow-sm">
        <p className="text-sm uppercase tracking-widest text-primary mb-3">{t("ctaTag")}</p>
        <h2 className="text-4xl font-bold mb-4">{t("ctaTitle")}</h2>
        <p className="text-lg text-muted-foreground mb-8">{t("ctaSubtitle")}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full">
            <a href="/contatti">{t("ctaPrimary")}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <a href="/servizi">{t("ctaSecondary")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
