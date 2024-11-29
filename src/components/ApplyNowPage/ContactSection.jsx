import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure you're using react-router-dom

const ContactSection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Still have questions?</h2>
        <p className="contact-description">We're here to help you with any inquiries.</p>
        <button
          className="btn btn-secondary-questions"
          onClick={handleContactClick}
        >
          Contact
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
