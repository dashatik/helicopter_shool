import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const IntroSection = () => {
  return (
    <section className="layout-section">
      <div className="layout-content">
        <div className="layout-column">
          <p className="tagline">Ready to start your flying adventure?</p>
          <h2 className="layout-heading">Let's Get You in the Air</h2>
        </div>
        <div className="layout-column">
          <p className="layout-description">
            At our training center, we specialize in providing top-tier helicopter training courses 
            tailored for aspiring pilots. With a team of experienced instructors and state-of-the-art 
            facilities, we ensure a comprehensive learning experience. Join us to elevate your skills 
            and soar to new heights in the aviation world.
          </p>
          <div className="layout-actions">
            <Link to="/about" className="btn-dark-training">Learn More</Link>
            <Link to="/contact" className="link-with-icon">
              <span className="link-text">Contact</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="placeholder-lightbox">
        <video 
          src="https://cdn.builder.io/o/assets%2F536a8b606864400fab194975c3b1e353%2Ffc6ba2c4729940d59e3f20070ea83767%2Fcompressed?apiKey=536a8b606864400fab194975c3b1e353&token=fc6ba2c4729940d59e3f20070ea83767&alt=media&optimized=true" 
          className="placeholder-video" 
          controls 
          autoPlay 
          muted 
          loop
        ></video>
        </div>
    </section>
  );
};

export default IntroSection;