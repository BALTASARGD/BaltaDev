import React from "react";
import "../../Styles/projects.css";
import { projectsData } from "../../assets/lib/data";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-header">
        <h1 className="projects-title">
          <span className="projects-title-my">My</span>{" "}
          <span className="projects-title-works">Works</span>
        </h1>
        <p className="projects-subtitle">
          Explore my portfolio to see examples of my work that demonstrate my
          skills and dedication to web development. Each project represents a
          milestone in my journey as a developer.
        </p>
      </div>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            url={project.url}
            image={project.image}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;