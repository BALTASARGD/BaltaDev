import React from "react";
import "../../Styles/projects.css";

const projects = [
  {
    name: "Find Countries App",
    url: "https://dci-spa-find-countries-app-witv.vercel.app/",
    image: "src/assets/images/projects_img/FindCountriesApp.png",
    tags: ["React", "API", "CSS"],
  },
  {
    name: "The Modern House",
    url: "https://baltasargd.github.io/The-Modern-House/",
    image: "src/assets/images/projects_img/TheModernHouse.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Portfolio BGD",
    url: "https://portfolio-bgd.vercel.app/",
    image: "src/assets/images/projects_img/PortfolioBGD.png",
    tags: ["React", "Tailwind", "Vite"],
  },
  {
    name: "To-Do List",
    url: "https://to-do-list-mauve-eta.vercel.app/",
    image: "src/assets/images/projects_img/ToDoList.png",
    tags: ["React", "CSS", "LocalStorage"],
  },
  {
    name: "Tarjeta Mercedes Benz",
    url: "https://tarjeta-mercedes-benz.vercel.app/",
    image: "src/assets/images/projects_img/MercedesBenzCard.png",
    tags: ["HTML", "CSS"],
  },
  {
    name: "Weather App",
    url: "https://web-dev-course-spa-weather-app.vercel.app/",
    image: "src/assets/images/projects_img/WeatherApp.png",
    tags: ["React", "API", "CSS"],
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-header">
        <h1 className="projects-title">
          <span className="projects-title-my">My</span> <span className="projects-title-works">Works</span>
        </h1>
        <p className="projects-subtitle">
          Explore my portfolio to see examples of my work that demonstrate my skills and dedication to web development.
          Each project represents a milestone in my journey as a developer.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} className="project-image" />
              <div className="project-overlay">
                <h2 className="project-title">{project.name}</h2>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;