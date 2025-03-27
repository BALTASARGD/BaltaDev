import React, { useState } from "react";
import "../../Styles/projects.css";
import { FiGithub, FiGlobe } from "react-icons/fi";

const projects = [
  {
    name: "Cronómetro",
    githubUrl: "https://github.com/BALTASARGD/Cronometro",
    liveUrl: "https://cronometro-tan.vercel.app/",
    backgroundImage: "src/assets/images/projects_img/MyConometer.png",
  },
  {
    name: "Tarjeta Mercedes Benz",
    githubUrl: "https://github.com/BALTASARGD/Tarjeta-Mercedes-Benz",
    liveUrl: "https://tarjeta-mercedes-benz.vercel.app/",
    backgroundImage: "src/assets/images/projects_img/MercedesBenzCard.png",
  },
  {
    name: "Weather App",
    githubUrl: "https://github.com/BALTASARGD/WebDevCourse_SPA__Weather_App-",
    liveUrl: "https://weather-app.vercel.app",
    backgroundImage: "src/assets/images/projects_img/WeatherApp.png",
  },
  {
    name: "Find Countries App",
    githubUrl: "https://github.com/BALTASARGD/Dci_SPA_FindCountriesApp",
    liveUrl: "https://dci-spa-find-countries-app-witv.vercel.app/",
    backgroundImage: "src/assets/images/projects_img/FindCountriesApp.png",
  },
  {
    name: "The Modern House",
    githubUrl: "https://github.com/BALTASARGD/The-Modern-House",
    liveUrl: "https://baltasargd.github.io/The-Modern-House/",
    backgroundImage: "src/assets/images/projects_img/TheModernHouse.png",
  },
  {
    name: "To-Do List",
    githubUrl: "https://github.com/BALTASARGD/To-Do-List",
    liveUrl: "https://to-do-list-mauve-eta.vercel.app/",
    backgroundImage: "src/assets/images/projects_img/ToDoList.png",
  },
  {
    name: "Portfolio BGD",
    githubUrl: "https://github.com/BALTASARGD/PORTFOLIO-BGD",
    liveUrl: "https://portfolio-bgd.vercel.app/",
    backgroundImage: "src/assets/images/projects_img/PortfolioBGD.png",
  },
];

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 3;

  const handleNext = () => {
    if (startIndex + itemsToShow < projects.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="projects">
      <h1 className="projects-title">&lt;My Projects/&gt;</h1>
      <div className="projects-carousel-container">
        <button className="carousel-arrow left-arrow" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="projects-carousel">
          {projects.slice(startIndex, startIndex + itemsToShow).map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{
                backgroundImage: project.backgroundImage
                  ? `url(${project.backgroundImage})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="project-footer">
                <h2 className="project-title">{project.name}</h2>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-icon">
                    <FiGithub />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-icon">
                    <FiGlobe />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-arrow right-arrow" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Projects;