import React from "react";
import skillsData from "../../constants/skillConstant";
import "./skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills-content">
        <div className="skills-content-title">
          <h2>My Tech Stack</h2>
        </div>
        <div className="skills-content-description">
          <p>
            I'm proficient in a range of modern technologies that empower me to
            build highly functional solutions.
          </p>
        </div>
        <div className="skills-content-items">
          {skillsData.map((item) => {
            return (
              <div className="skill-item" key={item.id}>
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-title">
                  <p>{item.name}</p>
                  <span>{item.type}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
