import React, { useState } from "react";
import { renderList } from "../../utils";
import { NAV_ITEMS } from "../../constants/arrays";
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
          <div>
            <a href="#" className="nav__logo">
              Mi Portafolio
            </a>
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
      </header>
    </div>
  );
};

export default Header;
