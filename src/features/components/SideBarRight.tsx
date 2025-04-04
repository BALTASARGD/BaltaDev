import React from "react";
import { sideBarLeftSocials, sideBarRightMail } from "../../../public/assets/lib/data";
import "../../Styles/sideBarRight.css";

const SideBarRight: React.FC = () => {
  return (
    <div className="sidebar-right">
      <div className="icons-container">
        {sideBarLeftSocials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <social.icon className="icon" />
          </a>
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
      <div className="line2"></div>
      <div className="line22"></div>
    </div>
  );
};

export default SideBarRight;
