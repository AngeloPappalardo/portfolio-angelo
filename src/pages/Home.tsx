import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";

const HomeHighlights = lazy(() => import("@/components/HomeHighlights"));
const HomeCTA = lazy(() => import("@/components/HomeCTA"));
const Footer = lazy(() => import("@/components/Footer"));

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO path="/" />
      <Header />
      <main id="main-content">
        <Hero />
        <Suspense fallback={null}>
          <HomeHighlights />
          <HomeCTA />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Home;
