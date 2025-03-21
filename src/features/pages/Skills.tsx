import React from "react";
import "../../Styles/skills.css";
import { skillsDataWeb } from "../../assets/lib/data"; // Importa solo skillsDataWeb

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills-title">&lt;Skills/&gt;</h1>
      <div className="skills-container">
        <div className="skills-section">
          <h2 className="skills-subtitle">&lt;WebDevelopment/&gt;</h2>
          <div className="skills-grid">
            {skillsDataWeb[0].skills.map((skill, index) => (
              <div key={index} className="skill-card" style={{ borderColor: skill.color }}>
                <img src={skill.icon} alt={skill.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;