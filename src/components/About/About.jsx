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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quidem nam maxime voluptate quod laboriosam numquam eum, et iste deleniti, a dolore laudantium nobis, dicta quis nulla nisi tenetur aut rerum magnam voluptas aperiam. Ipsum obcaecati porro dicta impedit? Porro maiores nobis modi quasi, molestiae nihil, minima temporibus, repudiandae cupiditate aliquam facilis provident. Quo ab itaque minus maxime, id, quia fugiat rerum sed adipisci esse at, ut ipsum numquam nisi labore expedita iusto pariatur. Ea culpa repudiandae totam recusandae saepe veniam tempora rerum labore earum, blanditiis ducimus commodi. Ab, error consequuntur vero omnis voluptatum blanditiis iste ea repudiandae pariatur similique nihil, cupiditate eaque quos quo provident exercitationem voluptates facere! Omnis nemo doloremque cumque, labore hic quod aspernatur libero cupiditate.
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
