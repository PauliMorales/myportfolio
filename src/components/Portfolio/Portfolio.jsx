import React from "react";
import "./portfolio.css";
import weather from "../../assets/images/weather.png";
import galletas from "../../assets/images/galletasdelafortuna.png";
import user from "../../assets/images/user.png";
import rickAndMorty from "../../assets/images/rickandmorty.png";
import protPortafilio from "../../assets/images/protportafolio.png";
import pokedex from "../../assets/images/pokedex.png";
import usermyapi from "../../assets/images/usermyapi.png";
import ecommerce from "../../assets/images/ecommerceAcademloApi.png";
import { TITLES } from "../../constants/arrays";

const Portfolio = () => {
  const projects = [
    {
      image: ecommerce,
      link: "https://ecommerce-api-academlo-paumor.netlify.app" /*ecommerce con api de academlo*/,
      description: "Aplicación de e-commerce desarrollada con React. Diseño de la interfaz usando React , font-awesome y CSS. Consumo de API de productos electrónicos para simular una tienda online donde se hace login.",
      github: "https://github.com/PauliMorales/e-commerce-api-academlo.git",
    },
    {
      image: pokedex,
      link: "https://pokedex-paumor-bc2700.netlify.app" /*Pokedex*/,
      description: "Aplicación web que nos permita ver la información de nuestros pokemons favoritos, React router y Redux, Consumo de API de pokemon",
      github:"https://github.com/PauliMorales/pokedex.git",
    },
    {
      image: rickAndMorty,
      link: "https://rickandmorty-paumor-642eac.netlify.app" /*RickAndMorty*/,
      description: "Aplicación creada con viteJs , desarrollada con React, List and keys, input controlados, renderizado condicional y manejo de errores. Se crea una Aplicación web que permita ver a todos los personajes de la serie de Rick and Morty por su locación, utilizando la Api de Rick and Morty",
      github: "https://github.com/PauliMorales/rickandmorty.git",
    },
    {
      image: weather,
      link: "https://weatherapp-paumor-27c04f.netlify.app" /*WeatherApp */,
      description: "Aplicación creada con viteJs, useEffect, peticiones asíncronas, consumo de API Open Weather. Se Instala librerías necesarias para hacer peticiones asíncronas",
      github: "https://github.com/PauliMorales/weather.git",
    },
    {
      image: user,
      link: "https://userapp-paumor-78e30e.netlify.app" /*UsersCrud */,
      description:
        "Aplicación web que permite interactuar con una API de Users, a través de todos métodos HTTP (get, create, delete, update) y práctica de props",
      github: "https://github.com/PauliMorales/usercrud.git",
    },
    {
      image: galletas,
      link: "https://fortunecookies-paumor-680bf5.netlify.app" /*Galletas de la Fortuna */,
      description: "Aplicación creada con ViteJs. Proyecto donde se generan quotes completamente Random.",
      github:"https://github.com/PauliMorales/entregable1-galletas-de-la-fortuna.git",
    },
    {
      image: protPortafilio,
      link: "https://portfoliomockupone-paumor-233525.netlify.app" /*prototipoPortafolio */,
      description: "Asincronía, Métodos HTTP, Local Storage CRUD.",
      github:"https://github.com/PauliMorales/my_portfolio.git",
    },
    {
      image: usermyapi,
      link: "https://my-crud-users-paumor.netlify.app" /*usersCrud con Api propia*/,
      description:"creación de modelo para usuarios y endpoints para el CRUD, se crea una Api para consumo de aplicación User Crud",
      github: "https://github.com/PauliMorales/my-crud-users-back.git",
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
                <div className="portfolio__link-name">
                  <div>{project.description}</div>
                  <div className="portafolio__icon">
                    <a href={project.github} target="_blank">
                      <i className="bx bxl-github portafolio__icon-i"></i>
                    </a>
                    <a href={project.link} target="_blank">
                      <i className="bx bxl-netlify portafolio__icon-i"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
