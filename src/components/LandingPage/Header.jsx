import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className="header-section-landing">
      <div className="header-content-landing">
        <div className="header-text-landing">
          <h1 className="header-title-landing">Zhong Qian School</h1>
          <p className="header-description-landing">
            We will turn your dream of flying helicopters into a reality.
          </p>
        </div>
        <div className="header-actions-landing">
          <Link to="/apply-now" className="btn-primary-alt-landing">Apply now</Link>
          <Link to="/about" className="btn-secondary-alt-landing">About Us</Link>
        </div>
      </div>
    </section>
    
  );
};

export default Header;