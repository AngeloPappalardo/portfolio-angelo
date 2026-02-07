import React, { Suspense } from "react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = React.lazy(() => import("@/components/Footer"));

const ContactPage = () => {
  const { t } = useTranslation("contact");

  return (
    <div className="min-h-screen flex flex-col">
      <SEO path="/contatti" />
      <Header />
      <main id="main-content">
        <section className="container px-4 py-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
            <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <MapPin className="h-5 w-5 text-primary mb-3" />
              <h2 className="text-lg font-semibold mb-2">{t("addressTitle")}</h2>
              <p className="text-muted-foreground">{t("addressValue")}</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <Mail className="h-5 w-5 text-primary mb-3" />
              <h2 className="text-lg font-semibold mb-2">Email</h2>
              <a
                href="mailto:angelo961996@gmail.com"
                className="text-primary hover:underline"
                aria-label="Email Angelo Pappalardo"
              >
                angelo961996@gmail.com
              </a>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <Phone className="h-5 w-5 text-primary mb-3" />
              <h2 className="text-lg font-semibold mb-2">{t("phoneTitle")}</h2>
              <a
                href="tel:+393453901754"
                className="text-primary hover:underline"
                aria-label="Call Angelo Pappalardo"
              >
                +39 345 390 1754
              </a>
            </div>
          </div>
        </section>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default ContactPage;
