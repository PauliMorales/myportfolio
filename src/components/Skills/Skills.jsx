import React from "react";
import "./skills.css";
import { TITLES } from "../../constants/arrays";

const Skills = () => {
  const skills = [
    {
      title: "Development",
      items: [
        {
          name: "Html",
          icon: "bxl-html5",
        },
        {
          name: "Css",
          icon: "bxl-css3",
        },
        {
          name: "Javascript",
          icon: "bxl-javascript",
        },
        {
          name: "React",
          icon: "bxl-react",
        },
        {
          name: "Redux",
          icon: "bxl-redux"
        },
        {
          name: "Node.js",
          icon: "bxl-nodejs",
        },
        {
          name: "PostgreSQL",
          icon: "bxl-postgresql"
        },
      ],
    },
    {
      title: "Design",
      items: [
        {
          name: "Figma",
          icon: "bxl-figma",
        },
        {
          name: "Adobe XD",
          icon: "bxl-adobe",
        },
        {
          name: "Photoshop",
          icon: "bxs-layer",
        },
        {
          name: "Canva",
          icon: "bxs-magic-wand",
        },
      ],
    },
  ];

  const renderItems = (items) => {
    return items.map((item) => (
      <div className="skills__icon" key={item.name} >
        <span className="skills__name">{item.name}</span>
        <i className={`bx ${item.icon}`}></i>
      </div>
    ));
  };

  return (
    <div>
      <section className="skills section" id="skills">
        <h2 className="section-title">{TITLES.SKILLS}</h2>

        <div className="skills__container">
          {skills.map((skill) => (
            <div key={skill.title} className="skills__box">
              <h3 className="skills__subtitle">{skill.title}</h3>
              <div className="skills__items">{renderItems(skill.items)}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
