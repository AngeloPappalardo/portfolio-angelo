import Header from "@/components/Header";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ProcessPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO path="/processo" />
      <Header />
      <main id="main-content">
        <Process />
        <Footer />
      </main>
    </div>
  );
};

export default ProcessPage;
