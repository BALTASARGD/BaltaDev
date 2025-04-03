import React from "react";
import "../../Styles/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <h1 className="contact-title">
          <span className="contact-title-my">My</span>{" "}
          <span className="contact-title-contact">Contact</span>
        </h1>
      </div>
      <div className="contact-content">
        <p className="contact-description">
          Feel free to reach out to me for any inquiries\nor collaborations!
        </p>
        <p className="contact-invite">Let's build something amazing together.</p>
        <div className="contact-icons">
          {/* Aquí puedes añadir íconos de contacto */}
        </div>
        <p className="contact-thankyou">Thank you for visiting my portfolio!</p>
      </div>
    </div>
  );
};

export default Contact;
