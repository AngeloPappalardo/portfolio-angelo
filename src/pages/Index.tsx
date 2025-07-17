import React, { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";

// Lazy load dei componenti secondari
const FrontendSkills = React.lazy(() => import("@/components/FrontendSkills"));
const BackendSkills = React.lazy(() => import("@/components/BackendSkills"));
const Portfolio = React.lazy(() => import("@/components/Portfolio"));
const Footer = React.lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />
      <main>
        <Suspense fallback={null}>
          <Hero />
          <FrontendSkills />
          <BackendSkills />
          <Portfolio />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
