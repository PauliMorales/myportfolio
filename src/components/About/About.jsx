import React from "react";
import photo from "../../assets/images/photo.png";
import "./about.css";
import { TITLES } from "../../constants/arrays";

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
        <h2 className="section-title">{TITLES.ABOUT}</h2>

        <div className="about__container">
          <div className="about__img">
            <img src={photo} alt="" />
          </div>

          <div>
            <h2 className="about__subtitle">Yo soy Paula Morales</h2>
            <span className="about__profession">Desarrolladora Frontend</span>
            <p className="about__text">
              Soy Desarrolladora Frontend con un alto grado de compromiso con el
              éxito y la ética laboral. Me apasiona el aprendizaje continuo y la
              mejora profesional me impulsa a mantenerme actualizada en mi campo
              y buscar oportunidades para crecer y desarrollarme. Mi autonomía y
              capacidad de aprendizaje rápido me permiten dominar rápidamente
              nuevas tecnologías y herramientas.
              <br />
              <br />
              Poseo una orientación al detalle y una capacidad de atención y
              esto hace que realice tareas con precisión y minuciosidad,
              adaptándome así a los cambios y al entorno. Además, disfruto
              trabajar en equipo y creo en la importancia de la colaboración
              para lograr los mejores resultados en cada proyecto.
            </p>

            <div className="about__social">
              {socialMedia.map((red) => (
                <a
                  key={red.link}
                  href={red.link}
                  className="about__social-icon"
                  target="_blank"
                >
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
