import React, { Suspense } from "react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";

const Services = React.lazy(() => import("@/components/Services"));
const Footer = React.lazy(() => import("@/components/Footer"));

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO path="/servizi" />
      <Header />
      <main id="main-content">
        <Suspense fallback={null}>
          <Services />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default ServicesPage;
