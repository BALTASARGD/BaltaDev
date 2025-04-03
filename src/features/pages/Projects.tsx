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
          Explore my portfolio to see examples of my work\nthat demonstrate my skills and dedication to web development.
        </p>
      </div>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            url={project.url}
            githubUrl={project.githubUrl}
            image={project.image}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;