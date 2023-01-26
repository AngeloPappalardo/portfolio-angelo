import React from "react";


function FrontEndSkills() {
  return (
    <section id="FrontEndSkills">
      <div className="skills-text">
          <h2 className="med-text">Front-end Skills</h2>
      </div>
      <div className="front-end-skills mb-1">
        <div className="front-end">
            <h2 className="normal-text">Coding Skill</h2>
            <div className="skils">
              <h3>Html</h3>
              <div className="container-span">
                <p className="number">100%</p>
                <div className="html"></div>
              </div>
            </div>
            <div className="skils">
              <h3>Css/Sass</h3>
              <div className="container-span">
                <p className="number">80%</p>
                <div className="css"></div>
              </div>
            </div>
            <div className="skils">
              <h3>Javascript</h3>
              <div className="container-span">
                <p className="number">60%</p>
                <div className="js"></div>
              </div>
            </div>
            <div className="skils">
              <h3>React</h3>
              <div className="container-span">
                <p className="number">40%</p>
                <div className="react"></div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
export default FrontEndSkills;
