import { NavLink } from "react-router-dom";
import "../../Styles/navbar.css"; 

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>Skills</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
