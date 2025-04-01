import React from "react";
import "../../Styles/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <h1 className="contact-title">
          <span className="contact-title-contact">Contact</span> <span className="contact-title-me">Me</span>
        </h1>
      </div>
      <div className="contact-content">
        <p>Feel free to reach out to me via email or through my social media channels!</p>
        <a href="mailto:baltakoeln@icloud.com" className="contact-email">
          baltakoeln@icloud.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
