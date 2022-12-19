import React from "react";
import Reveal from "react-reveal/Reveal";
import "../App.css";

function FrontEndSkills() {
  return (
    <section id="FrontEndSkills">
      <div className="front-end-text">
        <Reveal bottom>
          <h2 className="med-text">Front-end skills</h2>
        </Reveal>
      </div>
      <div className="front-end-skills mb-1">
        <div className="front-end">
          <Reveal bottom>
            <h2 className="normal-text">Coding Skill</h2>
          </Reveal>
          <Reveal bottom>
            <div className="skils">
              <h3>Html</h3>
              <div className="container-span">
                <p className="number">100%</p>
                <div className="html-span"></div>
              </div>
            </div>
          </Reveal>
          <Reveal bottom>
            <div className="skils">
              <h3>Css/Sass</h3>
              <div className="container-span">
                <p className="number">80%</p>
                <div className="css-span"></div>
              </div>
            </div>
          </Reveal>
          <Reveal bottom>
            <div className="skils">
              <h3>Javascript</h3>
              <div className="container-span">
                <p className="number">60%</p>
                <div className="js-span"></div>
              </div>
            </div>
          </Reveal>
          <Reveal bottom>
            <div className="skils">
              <h3>React</h3>
              <div className="container-span">
                <p className="number">40%</p>
                <div className="react-span"></div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
export default FrontEndSkills;
