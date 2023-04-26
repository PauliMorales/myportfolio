import React from "react";
import "./home.css";
import pic from "../../assets/images/img_home.png";

const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="home__container">
          <h1 className="home__title">
            <span>HE</span>
            <br />
            LLO.
          </h1>

          <div className="home__scroll">
            <a href="#portfolio" className="home__scroll-link">
              <i className="bx bx-up-arrow-alt"></i>Scroll down
            </a>
          </div>

          <img src={pic} alt="" className="home__img" />
        </div>
      </section>
    </div>
  );
};

export default Home;
