import React from "react";
import "../../Styles/contact.css";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <SectionTitle mainText="My" highlightText="Contact" />
      </div>
      <div className="contact-content">
        <p className="contact-description">
          Feel free to reach out to me for any inquiries or collaborations!
        </p>
        <p className="contact-invite">Let's build something amazing together.</p>
        <div className="contact-icons">
          {/* Aquí puedes añadir íconos de contacto */}
        </div>
        <p className="contact-thankyou">Thank you for visiting my portfolio!</p>
      </div>
      <div className="contact-arrow">➡</div>
    </div>
  );
};

export default Contact;
