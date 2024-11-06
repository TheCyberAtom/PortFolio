import React from "react";
import skillsData from "../../constants/skillConstant";
import { motion } from "framer-motion";
import "./Skills.css";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills-content">
        <motion.div
          className="skills-content-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          //   viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h2 className="section-title">My Tech Stack</h2>
        </motion.div>
        <motion.div
          className="skills-content-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          //   viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p className="section-desc">
            I'm proficient in a range of modern technologies that empower me to
            build highly functional solutions.
          </p>
        </motion.div>
        <motion.div
          className="skills-content-items"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          //   viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {skillsData.map((item) => {
            return <SkillCard item={item} key={item.id} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
