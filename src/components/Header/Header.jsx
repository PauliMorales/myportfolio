import React, { useState } from "react";
import { renderList } from "../../utils";
import { NAV_ITEMS } from "../../constants/arrays";
import whatsapp from "../../assets/images/gif-whatsapp.gif";
import "./header.css";

const Header = ({ setTheme }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleDarkMode = () => {
    const switchButton = document.querySelector(".nav__switch");
    if (switchButton.classList.contains("active")) {
      switchButton.classList.remove("active");
      setTheme("light");
    } else {
      switchButton.classList.add("active");
      setTheme("dark");
    }
  };

  return (
    <div>
      <header className="header">
        <nav className="nav">
          <div className="nav__logo">
            <div className="content">
              <div className="visible">
                <p><a href="#"></a> hola</p>
                <ul>
                  <li>MUNDO!</li>
                  <li>TEAM!</li>
                  <li>TOD@S!</li>
                </ul>
              </div>
            </div>
            <span className="nav__switch" onClick={toggleDarkMode}>
              <i className="bx bxs-moon"></i>
              <i className="bx bxs-sun"></i>
            </span>
          </div>
          <div
            className={`nav__menu ${openMenu ? "nav__menu-active" : ""}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              {renderList(NAV_ITEMS, "nav__item", "nav__link", toggleMenu)}
            </ul>
          </div>

          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => toggleMenu()}
          >
            <i className="bx bx-heart-square"></i>
          </div>
        </nav>
        <div className="nav__whatsapp">
          <a href="https://wa.me/+573164623534" target="_blank">
            <img src={whatsapp} alt="" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
