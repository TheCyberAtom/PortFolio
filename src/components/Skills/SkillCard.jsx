import React from "react";
import "./Skills.css";

const SkillCard = ({ item }) => {
  return (
    <div className="skill-item">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-title">
        <p>{item.name}</p>
        <span>{item.type}</span>
      </div>
    </div>
  );
};

export default SkillCard;
