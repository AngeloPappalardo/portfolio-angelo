import React, { useState, useEffect } from "react";
import logo from "./img/logo-AP.png";
import { MdWbSunny } from "react-icons/md";
import { TbMoonFilled } from "react-icons/tb";

import $ from "jquery";
import Contact from "./Contact";

function Navbar() {
  const getFromLocalStorage = () => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    } else {
      return "light-font";
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
        <ul className="clic menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#FrontEndSkills">FrontEndSkills</a>
          </li>
          <li>
            <a href="#backEndSkills">BackEndSkills</a>
          </li>
          <li>
            <a href="#portfolio">portfolio</a>
          </li>
        </ul>
        <div className="flex">
          <button className="switch-btn" onClick={cambiaTema}>
            <MdWbSunny fontSize={20} color="rgb(246, 223, 0)" />
            <TbMoonFilled fontSize={20} color="rgb(155, 155, 217)" />
            <span className="switch"></span>
          </button>
          <button className=" cta button contact-button">Contact</button>
        </div>
        <button className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
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
