import React from 'react';
import { Link } from 'react-router-dom';

const CTASectionPPL = () => {
  return (
    <section className="cta-section-ppl">
      <div className="cta-content-ppl">
        <h2 className="cta-title-ppl">Start Your Aviation Journey Today</h2>
        <p className="cta-description-ppl">
          Unlock your potential with our comprehensive pilot training courses designed for all skill levels.
        </p>
        <div className="cta-actions-ppl">
          <Link to="/apply-now" className="btn-cpl btn-hero-cpl btn-cta-primary-ppl">Apply Now</Link>
          <Link to="/about" className="btn-cpl btn-hero-cpl btn-cta-secondary-ppl">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default CTASectionPPL;
