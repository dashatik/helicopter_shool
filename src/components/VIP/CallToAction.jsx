import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="cta-section-vip">
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2F536a8b606864400fab194975c3b1e353%2F80c4684d096b4c4b8b3d571e94b8b1a3"
        alt="Helicopter in flight"
        className="cta-background-vip"
      />
      <div className="cta-content-vip">
        <h2 className="cta-title-vip">Join the VIP Experience Today!</h2>
        <p className="cta-description-vip">
          Join our exclusive VIP training for a personalized helicopter flying experience tailored just for you.
        </p>
        <div className="cta-actions-vip">
          <Link to="/contact" className="btn-cta-vip btn-primary-cta-vip">
            Contact Agent
          </Link>
          <Link to="/about" className="btn-cta-vip btn-secondary-cta-vip">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
