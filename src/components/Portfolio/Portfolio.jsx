import React from "react";
import "./portfolio.css";
import weather from "../../assets/images/weather.png";
import galletas from "../../assets/images/galletasdelafortuna.png"
import user from "../../assets/images/user.png"
import rickAndMorty from "../../assets/images/rickandmorty.png"
import protPortafilio from "../../assets/images/protportafolio.png"

const Portfolio = () => {
  const projects = [
    {
      image: weather,
      link: "https://fancy-seahorse-27c04f.netlify.app" /*WeatherApp */,
    },
    {
      image: galletas,
      link: "https://jazzy-dasik-680bf5.netlify.app" /*Galletas de la Fortuna */,
    },
    {
      image: user,
      link: "https://bright-dasik-78e30e.netlify.app" /*UsersCrud */,
    },
    {
      image: rickAndMorty,
      link: "https://lustrous-bienenstitch-642eac.netlify.app" /*RickAndMorty*/,
    },
    {
      image: protPortafilio,
      link: "https://stunning-scone-233525.netlify.app" /*prototipoPortafolio */,
    },
  ];

  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <h2 className="section-title">Portfolio</h2>

        <div className="portfolio__container">
          {projects.map((project) => (
            <div key={project.image} className="portfolio__img">
              <a href={project.link} className="portfolio__link-name" target="_blank">
                <span className="portfolio__details">View details</span>
                <img src={project.image} alt="" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
