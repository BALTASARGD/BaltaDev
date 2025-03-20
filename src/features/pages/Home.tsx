import { lazy } from "react";
import '../../Styles/home.css'; // Asegúrate de que esta ruta sea correcta
import '../../Styles/sideBarRight.css'; // Importa los estilos del sidebar
import { headerIntroData } from "../../assets/lib/data"; // Importa headerIntroData
import React from "react";
import logo from '../../assets/images/logo balta2.jpg'; // Asegúrate de que esta ruta sea correcta

const LazySideBarRight = lazy(() => import("../components/SideBarRight"));

const Home = () => {
  const { title, subtitle, description, buttons, profilepicture } = headerIntroData;

  return (
    <div>
      <LazySideBarRight />
      <div className="home">
        <img src={logo} alt="Logo" className="home-logo" />
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
