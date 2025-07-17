
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FrontendSkills from "@/components/FrontendSkills";
import BackendSkills from "@/components/BackendSkills";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />
      <main>
        <Hero />
        <FrontendSkills />
        <BackendSkills />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
