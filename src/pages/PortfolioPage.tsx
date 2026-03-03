import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO path="/portfolio" />
      <Header />
      <main id="main-content">
        <Portfolio />
        <Footer />
      </main>
    </div>
  );
};

export default PortfolioPage;
