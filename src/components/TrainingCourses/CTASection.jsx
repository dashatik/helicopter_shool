import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="cta-section-training-courses" aria-labelledby="cta-section-title-training-courses">
      <div className="cta-background-training-courses"></div>
      <div className="cta-content-training-courses">
        <h2 id="cta-section-title-training-courses" className="cta-title-training-courses">
          Start Your Aviation Journey Today
        </h2>
        <p className="cta-description-training-courses">
          Unlock your potential with our comprehensive pilot training courses designed for all skill levels.
        </p>
        <div className="btn-CTA-training-courses">
          <Link to="/about" className="btn-training-courses btn-primary-CTA-training-courses">
            Learn More
          </Link>
          <Link to="/contact" className="btn-training-courses btn-secondary-CTA-training-courses">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
