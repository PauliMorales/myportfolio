import React from "react";
import "./portfolio.css"

const Portfolio = () => {
  const projects = [
    {
      image: "image1",
      link: "https://lustrous-bienenstitch-642eac.netlify.app",
    },
    {
      image: "image2",
      link: "https://lustrous-bienenstitch-642eac.netlify.app",
    },
    {
      image: "image3",
      link: "https://lustrous-bienenstitch-642eac.netlify.app",
    },
    {
      image: "image4",
      link: "https://lustrous-bienenstitch-642eac.netlify.app",
    },
    {
      image: "image5",
      link: "https://lustrous-bienenstitch-642eac.netlify.app",
    },
  ];

  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <h2 className="section-title">Portfolio</h2>

        <div className="portfolio__container">
          {projects.map((project) => (
            <div key={project.image} className="portfolio__img">
              <a href={project.link} className="portfolio__link-name">
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
