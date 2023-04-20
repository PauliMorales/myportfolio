import React from "react";
import { renderList } from "../../utils";
import { NAV_ITEMS } from "../../constants/arrays";
import "./header.css";

const Header = () => {
  
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <div>
            <a href="#" className="nav__logo">
              Paula Morales
            </a>
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              {renderList(NAV_ITEMS, "nav__item", "nav__link")}
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-heart-square"></i>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
