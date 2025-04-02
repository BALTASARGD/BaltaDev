import { NavLink } from "react-router-dom";
import "../../Styles/navbar.css";

const Navbar = () => {
  const links = ["about", "skills", "projects", "contact"];
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map((link) => (
          <li key={link} className="navbar-item">
            <NavLink
              to={`/${link === "about" ? "" : link}`}
              className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
            >
              {link.toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
