import React from 'react';
import { Link } from 'react-router-dom';

function HeroCPL() {
  return (
    <header className="hero-cpl">
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2F536a8b606864400fab194975c3b1e353%2Fe1fa791e667944d4866b1e958f288c47"
        alt="Commercial Pilot License Course"
        className="hero-bg-cpl"
      />
      <div className="hero-content-cpl">
        <span className="hero-tagline-cpl">CPL Course</span>
        <h1 className="hero-title-cpl">Get Ready for Your Commercial Pilot Journey</h1>
        <p className="hero-description-cpl">
          Designed for those aiming to fly professionally. You'll gain the expertise and certifications to succeed in the commercial aviation world.
        </p>
        <div className="hero-actions-cpl">
          <Link to="/about" className="btn-cpl btn-primary-cpl">About Us</Link>
          <Link to="/apply-now" className="btn-cpl btn-secondary-cpl">Apply Now</Link>
        </div>
      </div>
    </header>
  );
}

export default HeroCPL;
