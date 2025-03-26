import { lazy } from "react";
import '../../Styles/home.css';
import '../../Styles/sideBarRight.css';
import { headerIntroData } from "../../assets/lib/data";
import React from "react";

const LazySideBarRight = lazy(() => import("../components/SideBarRight"));

const Home = () => {
  const { title, subtitle, description, buttons, profilepicture } = headerIntroData;

  return (
    <div>
      <LazySideBarRight />
      <div className="home">
        <img src={profilepicture} alt="Profile" />
        <h1>{title.en}</h1>
        <h2>{subtitle}</h2>
        <p>{description.en}</p>
        <div className="buttons">
          <a href="mailto:baltakoeln@icloud.com" className="main-btn">
            {React.createElement(buttons[0].icon)}
            {buttons[0].label.en}
          </a>
          <a href="https://github.com/BALTASARGD" className="main-btn" target="_blank" rel="noopener noreferrer">
            {React.createElement(buttons[1].icon)}
            {buttons[1].label.en}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
