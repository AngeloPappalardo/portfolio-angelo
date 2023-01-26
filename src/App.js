
import React from "react";
import Navbar from "./components/Navbar";
import  FrontEndSkills from "./components/FrontEndSkills";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BackEndSkills from "./components/backEndSkills";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <main className="body-font">
      <Navbar />
      <Hero />
      <FrontEndSkills />
      <BackEndSkills />
      <Portfolio />
      <Footer />
    </main>
  );
}
export default App;