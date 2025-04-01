import { NavLink } from "react-router-dom";
import "../../Styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}>
            About
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/skills" className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}>
            Skills
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}>
            Works
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
