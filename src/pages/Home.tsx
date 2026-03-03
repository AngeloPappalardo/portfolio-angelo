import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeHighlights from "@/components/HomeHighlights";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO path="/" />
      <Header />
      <main id="main-content">
        <Hero />
        <HomeHighlights />
        <HomeCTA />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
