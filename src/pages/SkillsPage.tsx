import Header from "@/components/Header";
import FrontendSkills from "@/components/FrontendSkills";
import BackendSkills from "@/components/BackendSkills";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const SkillsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO path="/competenze" />
      <Header />
      <main id="main-content">
        <FrontendSkills />
        <BackendSkills />
        <Footer />
      </main>
    </div>
  );
};

export default SkillsPage;
