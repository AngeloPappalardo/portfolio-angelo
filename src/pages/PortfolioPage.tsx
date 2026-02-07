import React, { Suspense } from "react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";

const Portfolio = React.lazy(() => import("@/components/Portfolio"));
const Footer = React.lazy(() => import("@/components/Footer"));

const PortfolioPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO path="/portfolio" />
      <Header />
      <main id="main-content">
        <Suspense fallback={null}>
          <Portfolio />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default PortfolioPage;
