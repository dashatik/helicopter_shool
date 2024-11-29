import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const CTASectionAltSpecial = () => {
  return (
    <section className="cta-section-alt-special">
      <div className="cta-container-alt-special">
        <div className="cta-column-alt-special">
          <div className="cta-content-alt-special">
            <h2>Reach New Levels in Your Aviation Journey</h2>
            <p>
              Advance your piloting capabilities with our specialized courses, designed to enhance your confidence, safety, and career prospects. Enjoy flexible scheduling to suit your busy life. Ready to take the next step? Join now to master the skills that set you apart.
            </p>
          </div>
          <div className="cta-actions-alt-special">
            <Link to="/apply-now" className="cta-btn-primary-alt-special">
              Enroll Now
            </Link>
            <Link to="/about" className="cta-btn-secondary-alt-special">
              Learn More
            </Link>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/097b700bfb21eb1443890d81e8972f0fe221f4fc7a21727570ee8f6164aa0842?apiKey=536a8b606864400fab194975c3b1e353&"
          alt="Aviation Journey"
          className="cta-image-special"
        />
      </div>
    </section>
  );
};

export default CTASectionAltSpecial;
