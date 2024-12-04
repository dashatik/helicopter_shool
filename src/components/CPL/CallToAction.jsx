import React from 'react';
import { Link } from 'react-router-dom';

function CallToActionCpl() {
  return (
    <section className="call-to-action-cpl">
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2F536a8b606864400fab194975c3b1e353%2F80c4684d096b4c4b8b3d571e94b8b1a3"
        alt="CPL Background"
        className="cta-background"
      />
      <div className="cta-content-cpl">
        <h2 className="cta-title-cpl">Elevate Your Aviation Career Today</h2>
        <p className="cta-description-cpl">
          Take the first step towards your dream career in aviation. Join our CPL program and soar to new heights.
        </p>
        <div className="cta-actions-cpl">
          <Link to="/apply-now" className="btn btn-CallToAction-primary-cpl">Enroll Now</Link>
          <Link to="/training-courses" className="btn btn-CallToAction-secondary-cpl">Learn More</Link>
        </div>
      </div>
    </section>
  );
}

export default CallToActionCpl;
