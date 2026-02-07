import React, { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";

const HomeHighlights = React.lazy(() => import("@/components/HomeHighlights"));
const HomeCTA = React.lazy(() => import("@/components/HomeCTA"));
const Footer = React.lazy(() => import("@/components/Footer"));

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO path="/" />
      <Header />
      <main id="main-content">
        <Suspense fallback={null}>
          <Hero />
          <HomeHighlights />
          <HomeCTA />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Home;
