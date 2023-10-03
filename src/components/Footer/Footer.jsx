import React from "react";
import { renderList } from "../../utils";
import { NAV_ITEMS } from "../../constants/arrays";
import "./footer.css";

const Footer = () => {
  const sNetworks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/paula-andrea-morales-delgado-6b591025a",
      icon: "bxl-linkedin"
    },
  ];

  return (
    <div>
      <footer className="footer section">
        <div className="footer__container">
          <div className="footer__data">
            <h2 className="footer__title">EXPLORAR</h2>
            <ul>{renderList(NAV_ITEMS, "footer__item", "footer__link")}</ul>
          </div>
          <div className="footer__data">
            <h2 className="footer__title">SIGUEME</h2>
            <div className="footer__follow">
              {sNetworks.map((network) => (
                <a
                  key={network.name}
                  href={network.link}
                  className="footer__social"
                  target="_blank"
                >
                  <i className={`bx ${network.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
