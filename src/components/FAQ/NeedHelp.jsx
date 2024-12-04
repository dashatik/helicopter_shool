import React from 'react';
import { Link } from 'react-router-dom';

const NeedHelp = () => {
  return (
    <section className="need-help">
      <div className="need-help-content">
        <h2 className="need-help-title">Need More Help?</h2>
        <p className="need-help-description">
          For additional questions, feel free to reach out to our support team or visit the "Contact Us" page. We're here to help!
        </p>
        <Link to="/contact" className="contact-btn">Contact Us</Link>
      </div>
    </section>
  );
};

export default NeedHelp;
