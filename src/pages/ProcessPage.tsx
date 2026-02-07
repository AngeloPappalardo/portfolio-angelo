import React, { Suspense } from "react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";

const Process = React.lazy(() => import("@/components/Process"));
const Footer = React.lazy(() => import("@/components/Footer"));

const ProcessPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO path="/processo" />
      <Header />
      <main id="main-content">
        <Suspense fallback={null}>
          <Process />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default ProcessPage;
