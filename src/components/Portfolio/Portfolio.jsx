import React from "react";
import "./portfolio.css";
import weather from "../../assets/images/weather.png";
import galletas from "../../assets/images/galletasdelafortuna.png";
import user from "../../assets/images/user.png";
import rickAndMorty from "../../assets/images/rickandmorty.png";
import protPortafilio from "../../assets/images/protportafolio.png";
import pokedex from "../../assets/images/pokedex.png";
import { TITLES } from "../../constants/arrays";

const Portfolio = () => {
  const projects = [
    {
      image: pokedex,
      link: "https://pokedex-paumor-bc2700.netlify.app" /*Pokedex*/,
    },
    {
      image: rickAndMorty,
      link: "https://rickandmorty-paumor-642eac.netlify.app" /*RickAndMorty*/,
    },
    {
      image: weather,
      link: "https://weatherapp-paumor-27c04f.netlify.app" /*WeatherApp */,
    },
    {
      image: user,
      link: "https://userapp-paumor-78e30e.netlify.app" /*UsersCrud */,
    },
    {
      image: galletas,
      link: "https://fortunecookies-paumor-680bf5.netlify.app" /*Galletas de la Fortuna */,
    },
    {
      image: protPortafilio,
      link: "https://portfoliomockupone-paumor-233525.netlify.app" /*prototipoPortafolio */,
    },
  ];

  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <h2 className="section-title">{TITLES.PORTFOLIO}</h2>

        <div className="portfolio__container">
          {projects.map((project) => (
            <div key={project.image} className="portfolio__img">
              <img src={project.image} alt="" />
              <div className="portfolio__link">
                <a
                  href={project.link}
                  className="portfolio__link-name"
                  target="_blank"
                >
                  View details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
