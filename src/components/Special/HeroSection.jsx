import React from 'react';
import { Link } from 'react-router-dom';

const HeroSectionSpecial = () => {
  return (
    <section className="hero-section-special">
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2F536a8b606864400fab194975c3b1e353%2F650961c51da64dd3a771332d3b0cb933"
        alt="Hero Background"
        className="hero-bg-special"
      />
      <div className="hero-content-special">
        <div className="hero-title-special">
          <div className="hero-tagline-special">Special Training</div>
          <div className="hero-heading-special">
            <h1 className="hero-main-heading-special">Specialized Flying with Advanced Training</h1>
            <p className="hero-subheading-special">
              Take your piloting expertise to new heights with advanced training designed for challenging scenarios.
            </p>
          </div>
        </div>
        <div className="hero-actions-special">
          <Link to="/apply-now" className="hero-btn-primary-special">
            Enroll
          </Link>
          <Link to="/about" className="hero-btn-secondary-special">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSpecial;
