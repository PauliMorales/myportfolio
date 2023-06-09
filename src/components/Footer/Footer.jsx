import React from "react";
import { renderList } from "../../utils";
import { NAV_ITEMS } from "../../constants/arrays";
import "./footer.css";

const Footer = () => {
  const sNetworks = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/paumor271?mibextid=ZbWKwL",
      icon: "bxl-facebook",
    },
    {
      name: "Instagram",
      link: "https://instagram.com/paulita.mor?igshid=ZDdkNTZiNTM=",
      icon: "bxl-instagram",
    },
    {
      name: "twitter",
      link: "https://twitter.com/PaulitaMoralesd?t=lsCz9mCrW3uxYX6ELurmnw&s=09",
      icon: "bxl-twitter",
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
