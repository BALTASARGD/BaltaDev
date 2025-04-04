import React from "react";
import "../../Styles/skills.css";

const skillsRow1 = [
  { name: "HTML", icon: "public/assets/icons/htmlicon.svg", color: "#F1662A" },
  { name: "CSS", icon: "public/assets/icons/cssicon.svg", color: "#1572B6" },
  { name: "JavaScript", icon: "public/assets/icons/javascripticon.svg", color: "#F7DF1E" },
  { name: "React", icon: "public/assets/icons/reacticon.svg", color: "#61DAFB" },
  { name: "Node.js", icon: "public/assets/icons/nodejsicon.svg", color: "#339933" },
  { name: "Git", icon: "public/assets/icons/Git-Icon-1788C.svg", color: "#F05032" },
  { name: "GitHub", icon: "public/assets/icons/github-color.svg", color: "#181717" },
  { name: "SASS", icon: "public/assets/icons/sassicon.svg", color: "#CC6699" },
];

const skillsRow2 = [
  { name: "Responsive", icon: "public/assets/icons/responsive-design.png", color: "#38B2AC" },
  { name: "Terminal", icon: "public/assets/icons/terminal-svgrepo-com.svg", color: "#000000" },
  { name: "Tailwind", icon: "public/assets/icons/tailwindicon.svg", color: "#38B2AC" },
];

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-header">
        <h1 className="skills-title">
          <span className="skills-title-my">My</span> <span className="skills-title-skills">Skills</span>
        </h1>
        <p className="projects-subtitle">
          Discover the skills that shape my journey as a web developer. <br /> Each technology and tool I’ve mastered reflects
          my commitment to creating high-quality, innovative solutions.
        </p>
      </div>
      <div className="skills-row">
        {skillsRow1.map((skill, index) => (
          <div
            key={index}
            className="skill-icon-container"
            style={{ animationDelay: `${index * 2}s` }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="skill-icon"
              style={{ color: skill.color }}
            />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="skills-row">
        {skillsRow2.map((skill, index) => (
          <div
            key={index}
            className="skill-icon-container"
            style={{ animationDelay: `${index * 2}s` }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="skill-icon"
              style={{ color: skill.color }}
            />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;