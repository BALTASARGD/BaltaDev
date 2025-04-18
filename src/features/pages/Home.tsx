import React from "react";
import "../../Styles/home.css";
import DownloadButton from "../components/DownloadButton";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <p className="home-intro">Hello World, I'm</p>
        <h1 className="home-name">
          Balta <span className="home-lastname">García</span>
        </h1>
        <p className="home-subtitle">a Junior Web Developer based in Germany.</p>
        <p className="home-description">
          I have a strong interest in creating dynamic, responsive, and user-friendly websites. 
          My journey into web development started with a curiosity about how websites function, 
          evolving into a passion for coding and design.
        </p>
        <div className="home-icons">
          <DownloadButton href="/BaltaDev/assets/CV_BaltasarGarcia.pdf" text="Download My CV!" />
        </div>
      </div>
      <footer className="home-footer">
        <p>©2025 Baltasar García Dávila</p>
      </footer>
    </div>
  );
};

export default Home;
