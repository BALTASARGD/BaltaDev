import React from 'react';
import '../../Styles/home.css'; // Asegúrate de que esta ruta sea correcta

const Home = () => {
  return (
    <div className="home">
      <img src="/BaltaDev/assets/profile.jpg" alt="Profile" />
      <h1>Hi, I'm Balta</h1>
      <p>Fullstack Developer based in Germany</p>
      <div className="buttons">
        <button>Contact me</button>
        <button>My Projects</button>
      </div>
    </div>
  );
};

export default Home;
