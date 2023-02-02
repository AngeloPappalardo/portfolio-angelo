import React, { useState, useEffect } from "react";
import logo from "./img/logo-AP.png";

import $ from "jquery";
import Contact from "./Contact";

function Navbar() {
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    const color = document.querySelector("#font");
    if (btn === true) {
      color.classList.add("light-font");
      color.classList.remove("dark-font");

    } else{
      color.classList.remove("light-font");
      color.classList.add("dark-font");
    }
    
  });

  return (
    <section className="flexbox">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo IMG" />
        </div>
        <ul className="menu">
          <li>
            <a className="clic" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="clic" href="#FrontEndSkills">
              FrontEndSkills
            </a>
          </li>
          <li>
            <a className="clic" href="#backEndSkills">
              BackEndSkills
            </a>
          </li>
          <li>
            <a className="clic" href="#portfolio">
              portfolio
            </a>
          </li>
        </ul>
        <div className="flex">
          <button className="switch-btn" onClick={() => setBtn(!btn)}>
            <span>day</span>
            <span>night</span>
            {btn ? (
              <span className="switch"></span>
            ) : (
              <span className="switch slide"></span>
            )}
          </button>
          <button className=" cta button contact-button">Contact</button>
        </div>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <Contact />
    </section>
  );
}
export default Navbar;

$(document).ready(() =>
  $(".hamburger").on("click", () => $(".menu").toggleClass("menu--open"))
);
$(document).ready(() =>
  $(".clic").on("click", () => $(".menu").toggleClass("menu--open"))
);
