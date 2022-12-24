import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import  FrontEndSkills from "./components/FrontEndSkills";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BackEndSkills from "./components/backEndSkills";

function App() {
  return (
    <main className="body-font">
      <Navbar />
      <Hero />
      <FrontEndSkills />
      <BackEndSkills />
      <Footer />
    </main>
  );
}
export default App;