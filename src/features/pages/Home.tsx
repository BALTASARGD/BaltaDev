import React from "react";
import "../../Styles/home.css";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <p className="home-intro">Hello World, I'm</p>
        <h1 className="home-name">
          Baltasar <span className="home-lastname">Garcia</span>
        </h1>
        <p className="home-subtitle">a Junior Web Developer based in Germany.</p>
        <p className="home-description">
          I have a strong interest in creating dynamic, responsive, and user-friendly websites. 
          My journey into web development started with a curiosity about how websites function, 
          evolving into a passion for coding and design.
        </p>
        <div className="home-icons">
          <a href="https://github.com/BALTASARGD" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/Baltademonio/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </a>
          <a href="mailto:baltakoeln@icloud.com" target="_blank" rel="noopener noreferrer">
            <FiMail />
          </a>
        </div>
      </div>
      <footer className="home-footer">
        <p>©2024-2025 Baltasar Garcia</p>
        <div className="home-footer-options">
          <label>
            <input type="checkbox" /> Light
          </label>
          <label>
            <input type="checkbox" /> Dark
          </label>
          <label>
            <input type="checkbox" /> Sans-serif
          </label>
        </div>
      </footer>
    </div>
  );
};

export default Home;
