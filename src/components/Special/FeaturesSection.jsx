import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const FeaturesSection = () => {
  return (
    <section className="features-section-special">
      <div className="feature-box-special"></div>
      <div className="features-title-special">
        <div className="features-tagline-special">Advance</div>
        <div className="features-heading-special">
          <h2 className="features-main-heading-special">Refine Your Skills,<br />Master Every Flight</h2>
          <p className="features-subheading-special">
            Our Special Flights Training is designed to build confidence and expertise for handling challenging flight conditions. This advanced course focuses on crucial skills to improve safety and ensure readiness for complex flying environments.
          </p>
        </div>
      </div>
      <div className="features-content-special">
        <div className="features-row-special">
          <div className="feature-column-special">
            <div className="feature-content-special"></div>
          </div>
        </div>
        <div className="features-actions-special">
          <Link to="/apply-now" className="features-btn-secondary-special">
            Enroll
          </Link>
          <Link to="/about" className="features-btn-link-special">
            <span className="features-btn-text-special">Learn More</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/b1ea117d06c4300f9dad14de1f83b09a745c0f020edba579fec182e08d9e5ecc?apiKey=536a8b606864400fab194975c3b1e353&"
              alt="Learn More"
              className="features-btn-icon-special"
            />
          </Link>
        </div>
        <div className="feature-box-large-special">
          <div className="feature-box-inner-special"></div>
          <div className="feature-box-small-special">
            <div className="feature-box-small-inner-special"></div>
            <h3 className="feature-column-heading-special">Specialized Skills for Professional Pilots</h3>
            <p className="feature-column-text-special">
              Emergency Landings<br />Night Flying<br />Adverse Weather Navigation<br />Precision Flying<br />Instrument Mastery<br />Precision Landing & Takeoff
            </p>
          </div>
        </div>
        <div className="feature-box-large-alt-special">
          <div className="feature-box-large-alt-inner-special"></div>
          <div className="feature-content-large-special">
            <h3 className="feature-content-heading-special">Course Modules</h3>
            <p className="feature-content-text-special">
              Night Flying Operations (Practice real-time decision-making and visual navigation techniques). Weather Adaptability Training (Explore methods for adjusting to sudden weather changes). Emergency Response Tactics (Protocols and calm response tactics for a range of emergency situations). Precision Landing Techniques (designed for confined spaces and challenging terrain).
            </p>
          </div>
        </div>
        <div className="feature-column-alt-special">
          <div className="feature-icon-wrapper-special"></div>
          <div className="feature-content-small-special">
            <h3 className="feature-content-small-heading-special">Why Choose Special Flights Training?</h3>
            <p className="feature-content-small-text-special">
              Increased Safety<br />Confidence in Complex Scenarios<br />Enhanced Career Opportunities
            </p>
          </div>
        </div>
        <div className="feature-content-large-alt-special">
          <div className="feature-box-large-2-inner-special"></div>
          <div className="feature-content-large-2-special">
            <h3 className="feature-content-large-alt-heading-special">Course Structure and Flexibility</h3>
            <p className="feature-content-large-alt-text-special">
              Emergency procedures and night flying. Complex flying scenarios for precision landings and adverse weather handling.<br />
              Course in as little as three months full-time or extend part-time, allowing you to balance training with other commitments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
