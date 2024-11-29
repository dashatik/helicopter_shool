import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const HeroSectionInstr = () => {
  return (
    <header className="hero-section-instructor">
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2F536a8b606864400fab194975c3b1e353%2F4ad03ffef6984dc4af0270fa3ae7e8ea"
        alt="Helicopter instructor training"
        className="hero-background-instructor"
      />
      <div className="hero-content-instructor">
        <p className="hero-tagline-instructor">Instructor Training</p>
        <h1 className="hero-title-instructor">Instructor Training Course</h1>
        <p className="hero-description-instructor">
          Course equips you with the skills to guide and mentor the next generation of helicopter pilots.
        </p>
        <div className="hero-actions-instructor">
          <Link to="/apply-now" className="btn-instructor btn-primary-instructor btn-large-instructor">
            Apply Now
          </Link>
          <Link to="/about" className="btn-instructor btn-secondary-instructor btn-large-instructor">
            About Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeroSectionInstr;
