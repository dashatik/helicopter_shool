import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const CTASectionSpecial = () => {
  return (
    <section className="cta-section-special">
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2F536a8b606864400fab194975c3b1e353%2F551319ddc5464ca08cb559e014bfd7ca"
        alt="CTA Background"
        className="cta-bg-special"
      />
      <div className="cta-content-special">
        <div className="cta-title-special">
          <div className="cta-tagline-special">Professional Edge</div>
          <div className="cta-heading-special">
            <h2>Take Your Skills Beyond Standard Training</h2>
            <p>
              To apply, you'll need a valid Commercial or Private Pilot License and at least 100 logged flight hours. This ensures that every participant has a solid foundation for the advanced techniques we cover.
            </p>
          </div>
        </div>
        <div className="cta-actions-special">
          <Link to="/apply-now" className="cta-btn-secondary-special">
            Enroll
          </Link>
          <Link to="/contact" className="cta-btn-link-special">
            <span>Contact Us</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/7bae327651536795358c8c1a5536984999fca10ebc32ae6ae19b9cff1b575004?apiKey=536a8b606864400fab194975c3b1e353&"
              alt="Contact Us"
              className="cta-btn-icon-special"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASectionSpecial;
