import React from "react";
import "../App.css";
import img from "./img/pokedex-img.jfif";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="skills-text">
        <h2 className="med-text">Portfolio</h2>
      </div>
      <div className="mb-1">
        <div className="front-end">
          <h2 className="normal-text">Gallerie</h2>
          <a
            className="button-portfolio"
            href="https://pappalardo-angelo-pokedex.netlify.app/"
          >
            Pokedex
          </a>
          <div>
            <a href="https://pappalardo-angelo-pokedex.netlify.app/">
              <img className="img-portfolio" src={img} alt="pokedex" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
