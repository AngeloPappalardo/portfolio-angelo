import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import  FrontEndSkills from "./components/FrontEndSkills";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="body-font">
      <Navbar />
      <Hero />
      <FrontEndSkills />
      <Skills />
      <Footer />
    </main>
  );
}
export default App;