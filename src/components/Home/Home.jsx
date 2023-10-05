import React from "react";
import "./home.css";
import pic from "../../assets/images/img_home.png";

const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="home__container">
          <h1 className="home__title">
            <span>HOLA</span>
          </h1>
          <div className="home__subtitle">
            <h2 className="home__name">Yo soy Paula Morales</h2>
            <span className="home__profession">Desarrolladora Fullstack</span>
            <img src={pic} alt="" className="home__img" />
          </div>
          <div className="home__scroll">
            <a href="#portfolio" className="home__scroll-link">
              <i className="bx bx-up-arrow-alt"></i>Mis Proyectos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
