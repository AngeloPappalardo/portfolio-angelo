import React, { Suspense } from "react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";

const FrontendSkills = React.lazy(() => import("@/components/FrontendSkills"));
const BackendSkills = React.lazy(() => import("@/components/BackendSkills"));
const Footer = React.lazy(() => import("@/components/Footer"));

const SkillsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO path="/competenze" />
      <Header />
      <main id="main-content">
        <Suspense fallback={null}>
          <FrontendSkills />
          <BackendSkills />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default SkillsPage;
