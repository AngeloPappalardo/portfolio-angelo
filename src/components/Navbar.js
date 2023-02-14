import React, { useState, useEffect } from "react";
import logo from "./img/logo-AP.png";

import $ from "jquery";
import Contact from "./Contact";

function Navbar() {
  const getFromLocalStorage = () => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
  };
  const [thame, setTheme] = useState(getFromLocalStorage || "light-font");

  const cambiaTema = () => {
    if (thame === "light-font") {
      setTheme("dark-font");
    } else {
      setTheme("light-font");
    }
  };

  useEffect(() => {
    document.documentElement.className = thame;
    localStorage.setItem("theme", thame);
  }, [thame]);
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
          <button className="switch-btn" onClick={cambiaTema}>
            <span>day</span>
            <span>night</span>
              <span className="switch"></span>
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
