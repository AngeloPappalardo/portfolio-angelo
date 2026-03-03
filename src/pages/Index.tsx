import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FrontendSkills from "@/components/FrontendSkills";
import BackendSkills from "@/components/BackendSkills";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Process />
        <FrontendSkills />
        <BackendSkills />
        <Portfolio />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
