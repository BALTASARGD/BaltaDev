import React, { useState } from "react";
import "../../Styles/projects.css";

const projects = [
  {
    name: "Cronómetro",
    url: "https://github.com/BALTASARGD/Cronometro",
    image: "/path/to/cronometro.jpg",
  },
  {
    name: "Tarjeta Mercedes Benz",
    url: "https://github.com/BALTASARGD/Tarjeta-Mercedes-Benz",
    image: "/path/to/tarjeta-mercedes.jpg",
  },
  {
    name: "Weather App",
    url: "https://github.com/BALTASARGD/WebDevCourse_SPA__Weather_App-",
    image: "/path/to/weather-app.jpg",
  },
  {
    name: "Find Countries App",
    url: "https://github.com/BALTASARGD/Dci_SPA_FindCountriesApp",
    image: "/path/to/find-countries.jpg",
  },
  {
    name: "The Modern House",
    url: "https://github.com/BALTASARGD/The-Modern-House",
    image: "/path/to/modern-house.jpg",
  },
  {
    name: "To-Do List",
    url: "https://github.com/BALTASARGD/To-Do-List",
    image: "/path/to/to-do-list.jpg",
  },
  {
    name: "Portfolio BGD",
    url: "https://github.com/BALTASARGD/PORTFOLIO-BGD",
    image: "/path/to/portfolio-bgd.jpg",
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
      <h1 className="projects-title">&lt;My Projects/&gt;</h1> {/* Usa la clase projects-title */}
      <div className="projects-carousel-container">
        <button className="carousel-arrow left-arrow" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="projects-carousel">
          {projects.slice(startIndex, startIndex + itemsToShow).map((project, index) => (
            <div key={index} className="project-card">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.name} className="project-image" />
                <h2 className="project-title">{project.name}</h2>
              </a>
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