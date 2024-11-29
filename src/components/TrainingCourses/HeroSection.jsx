import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section-training" aria-label="Hero section">
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2F536a8b606864400fab194975c3b1e353%2Fc19474f77ad049d199f6f02d12071164"
        alt="Helicopter in flight"
        className="hero-background-training"
      />
      <div className="hero-content-training">
        <p className="hero-tagline-training">Training courses</p>
        <h1 className="hero-heading-training">Our Training Courses</h1>
        <p className="hero-description-training">
          Turn your love for flying into a career with our expert training. Whether you're starting or advancing, we have courses to help you succeed.
        </p>
        <div className="hero-buttons-training-courses">
          <Link to="/about" className="btn-trainig-courses btn-about-training-courses">
            About us
          </Link>
          <Link to="/apply-now" className="btn-trainig-courses btn-apply-training-courses">
            Apply now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
