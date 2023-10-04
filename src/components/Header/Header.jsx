import React, { useState } from "react";
import { renderList } from "../../utils";
import { NAV_ITEMS } from "../../constants/arrays";
import whatsapp from "../../assets/images/gif-whatsapp.gif";
import "./header.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <header className="header">
        <nav className="nav">
          <div className="nav__logo">
            <a href="#" className="nav__myport">
              Mi Portafolio
            </a>
            <span className="nav__switch">
              <i className="bx bxs-sun"></i>
              <i className="bx bxs-moon"></i>
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
