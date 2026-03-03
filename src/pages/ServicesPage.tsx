import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO path="/servizi" />
      <Header />
      <main id="main-content">
        <Services />
        <Footer />
      </main>
    </div>
  );
};

export default ServicesPage;
