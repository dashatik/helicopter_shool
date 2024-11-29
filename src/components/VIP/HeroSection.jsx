import React from 'react';
import { Link } from 'react-router-dom';

const HeroSectionVIP = () => {
  return (
    <section className="hero-section-vip">
      <div className="hero-content-vip">
        <span className="hero-tag-vip">PPL-A</span>
        <h1 className="hero-title-vip">VIP Private Pilot Course</h1>
        <p className="hero-description-vip">
          Our VIP Private Pilot Course aims to adapt to the needs that some of our students may have, offering personalised schedules, one-on-one classes, priority flight scheduling, and many other advantages to become a Private Helicopter Pilot.
        </p>
        <div className="hero-actions-vip">
          <Link to="/contact" className="btn-vip btn-primary-vip">Contact Agent</Link>
          <Link to="/about" className="btn-vip btn-secondary-vip">About Us</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionVIP;
