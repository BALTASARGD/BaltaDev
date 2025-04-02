import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "../../Styles/themeToggleButton.css";

const ThemeToggleButton: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="theme-toggle-icon" onClick={toggleTheme}>
      {isDarkMode ? <FiSun /> : <FiMoon />}
    </div>
  );
};

export default ThemeToggleButton;
