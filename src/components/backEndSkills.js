import React from "react";


function BackEndSkills() {
  return (
    <section id="backEndSkills">
      <div className="skills-text">
          <h2 className="med-text">Back-end Skills</h2>
      </div>
      <div className="front-end-skills mb-1">
        <div className="front-end">
            <h2 className="normal-text">Coding Skill</h2>
            <div className="skils">
              <h3>Node.js</h3>
              <div className="container-span">
                <p className="number">20%</p>
                <div className="node-js"></div>
              </div>
            </div>
            <div className="skils">
              <h3>Express.js</h3>
              <div className="container-span">
                <p className="number">15%</p>
                <div className="express-js"></div>
              </div>
            </div>
            <div className="skils">
              <h3>Java</h3>
              <div className="container-span">
                <p className="number">10%</p>
                <div className="java"></div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
export default BackEndSkills;
