import React, { useEffect, useState } from "react";
import data from "../data";
import Progetti from "./Progetti";

function Portfolio(id) {
  const [progetti, setProgetti] = useState(data);
  const [active, setActive] = useState(0);

  const prossimaSlide = () => {
    setActive((prevValue) => {
      if (prevValue + 1 > progetti.length - 1) {
        return 0;
      }
      return prevValue + 1;
    });
  };
  const precedenteSlide = () => {
    setActive((prevValue) => {
      if (prevValue - 1 < 0) {
        return progetti.length - 1;
      }
      return prevValue - 1;
    });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      prossimaSlide();
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <section id="portfolio">
      <div className="skills-text">
        <h2 className="med-text">Portfolio</h2>
      </div>
      <div className="mb-1">
        <div className="front-end">
          <h2 className="normal-text">Gallerie</h2>
        </div>
        <div className="slider">
          {progetti.map((progetto, index) => {
            let positionClass = "";
            if (index === active) {
              positionClass = "active";
            } else if (
              index + 1 === active ||
              (active === 0 && index === progetti.length - 1)
            ) {
              positionClass = "prev";
            } else {
              positionClass = "next";
            }
            return (
              <Progetti
                key={progetto.id}
                {...progetto}
                classes={positionClass}
              />
            );
          })}
          
        </div>
        <div className="container-btn-slider">
            <button
              className="button"
              onClick={precedenteSlide}
            >
              prev
            </button>
            <button
              className="button"
              onClick={prossimaSlide}
            >
              next
            </button>
          </div>
      </div>
    </section>
  );
}

export default Portfolio;
