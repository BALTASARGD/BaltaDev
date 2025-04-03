import React from "react";

interface ProjectCardProps {
  name: string;
  url: string;
  image: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, url, image, tags }) => {
  return (
    <div className="project-card">
      <a href={url} target="_blank" rel="noopener noreferrer">
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
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
