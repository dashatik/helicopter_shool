import React from 'react';
import { Link } from 'react-router-dom';

const Summary = () => {
  return (
    <section className="summary-section">
      <div className="summary-content">
        <h2 className="summary-left">Learn to Fly with Confidence in Our PPL Helicopter Course</h2>
        <p className="summary-right">
          Our PPL program gives you hands-on flight experience while covering the essentials of helicopter controls, navigation, and safety. With real-world training, you'll be fully prepared for your first solo flight and beyond.
          <br /><br />
          <Link to="/apply-now" className="summary-cta">
            Ready to take the next step in your aviation journey?
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Summary;
