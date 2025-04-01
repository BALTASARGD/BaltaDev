import { NavLink } from "react-router-dom";
import "../../Styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}>
            ABOUT
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/skills" className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}>
            SKILLS
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}>
            WORKS
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
