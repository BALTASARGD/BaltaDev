import React from "react";
import "../../Styles/projects.css";
import { projectsData } from "../../assets/lib/data";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-header">
        <SectionTitle mainText="My" highlightText="Works" />
        <p className="projects-subtitle">
          Explore my portfolio to see examples of my work that demonstrate my skills and dedication to web development. <br /> Each project represents a milestone in my journey as a developer.
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