import { Link } from "react-router-dom";
import { sideBarLeftSocials, sideBarRightMail } from "../../assets/lib/data";
import React from "react";
import "../../Styles/sideBarRight.css"; // Importa los estilos del sidebar

const SideBarRight: React.FC = () => {
  return (
    <div className="sidebar-right">
      <div className="icons-container">
        {sideBarLeftSocials.map((social, index) => (
          <Link key={index} to={social.link} className="icon-link">
            <social.icon className="icon" />
          </Link>
        ))}
      </div>
      <div className="email-container">
        <a href={`mailto:${sideBarRightMail.text}`} className="email-link">
          {sideBarRightMail.text}
        </a>
      </div>
      <div className="line-container">
        <div className="line"></div>
      </div>
    </div>
  );
};

export default SideBarRight;
