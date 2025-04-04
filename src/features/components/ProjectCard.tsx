import React from "react";
import { FiGlobe, FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  name: string;
  url: string;
  image: string;
  tags: string[];
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, url, image, tags, githubUrl }) => {
  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-image" />
      <div className="project-overlay">
        <h2 className="project-title">{name}</h2>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-icons">
          <a href={url} target="_blank" rel="noopener noreferrer" className="project-icon-link">
            <FiGlobe className="project-icon" />
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-icon-link">
            <FiGithub className="project-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
