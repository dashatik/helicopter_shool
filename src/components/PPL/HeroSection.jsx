import React from 'react';
import { Link } from 'react-router-dom'; // Import React Router Link

const HeroSectionPPL = () => {
  return (
    <section className="hero-section-ppl">
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2F536a8b606864400fab194975c3b1e353%2Fb2942171e7c74ca19c02c05735a886d3"
        alt="Helicopter in flight"
        className="hero-bg-ppl"
      />
      <div className="hero-content-ppl">
        <span className="hero-tag-ppl">PPL Course</span>
        <h1 className="hero-title-ppl">Private Pilot License for Beginners</h1>
        <p className="hero-description-ppl">
          Start your flying journey here. Our beginner course is perfect for first-time pilots, giving you the skills and confidence to take to the skies.
        </p>
        <div className="hero-actions-ppl">
          <Link to="/about" className="btn btn-hero btn-hero-primary-ppl">
            About Us
          </Link>
          <Link to="/apply-now" className="btn btn-hero btn-hero-secondary-ppl">
            Enroll
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionPPL;
