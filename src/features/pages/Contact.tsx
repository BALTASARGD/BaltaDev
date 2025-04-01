import React from "react";
import "../../Styles/contact.css";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <h1 className="contact-title">
          <span className="contact-title-my">My</span> <span className="contact-title-contact">Contact</span>
        </h1>
      </div>
      <div className="contact-content">
        <p className="contact-description">
          I am enthusiastic about learning and collaborating on exciting projects.
        </p>
        <p className="contact-invite">Feel free to contact me via:</p>
        <div className="contact-icons">
          <a href="https://github.com/BALTASARGD" target="_blank" rel="noopener noreferrer">
            <FiGithub className="contact-icon" />
          </a>
          <a href="https://www.linkedin.com/in/Baltademonio/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin className="contact-icon" />
          </a>
          <a href="mailto:baltakoeln@icloud.com">
            <FiMail className="contact-icon" />
          </a>
        </div>
        <p className="contact-thankyou">Thank you for visiting my portfolio!</p>
      </div>
    </div>
  );
};

export default Contact;
