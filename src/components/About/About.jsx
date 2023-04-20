import React from "react";
import photo from "../../assets/images/photo.png"
import "./about.css";

const About = () => {
  const socialMedia = [
    {
      link: "https://www.linkedin.com/in/paula-andrea-morales-delgado-6b591025a",
      icon: "bxl-linkedin",
    },
    {
      link: "https://github.com/PauliMorales",
      icon: "bxl-github",
    },
    {
      link: "https://app.netlify.com/teams/paulimorales/overview",
      icon: "bxl-netlify",
    },
    {
      link: "https://wa.me/+573164623534",
      icon: "bxl-whatsapp",
    },
  ];

  return (
    <div>
      <section className="about section" id="about">
        <h2 className="section-title">About</h2>

        <div className="about__container">
          <div className="about__img">
            <img src={photo} alt="" />
          </div>

          <div>
            <h2 className="about__subtitle">I'am Paula Morales</h2>
            <span className="about__profession">Front-end Developer</span>
            <p className="about__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              consectetur, architecto quas fugiat, iste inventore facere
              repellendus delectus id, vitae blanditiis.
            </p>

            <div className="about__social">
              {socialMedia.map((red) => (
                <a key={red.link} href={red.link} className="about__social-icon" target="_blank">
                  <i className={`bx ${red.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
