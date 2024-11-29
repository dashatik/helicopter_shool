import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const TrainingSection = () => {
  return (
    <section className="image-section-landing">
      <div className="image-content-landing">
        <div className="image-column-landing">
          <p className="image-tagline-landing">Join a community</p>
          <h2 className="image-heading-landing">Take Your First Steps Toward Becoming a Pilot</h2>
        </div>
        <div className="image-column-landing">
          <p className="image-description-landing">
            We know that learning to fly is a big commitment, and that's why we make sure our training 
            is built around your goals. We offer a supportive environment where you can progress at your own pace.
          </p>
          <div className="image-features-landing">
            <div className="feature-item-landing">
              <h3 className="feature-heading-landing">Real-World Training</h3>
              <p className="feature-description-landing">
                Learn from professionals who have been in the industry for years.
              </p>
            </div>
            <div className="feature-item-landing">
              <h3 className="feature-heading-landing">Flexible Programs</h3>
              <p className="feature-description-landing">
                We know life can be busy, so our courses are designed to fit your schedule.
              </p>
            </div>
          </div>
          <div className="image-actions-landing">
            <Link to="/training-courses" className="btn-light-landing-trainingsect">Discover More</Link>
            <Link to="/apply-now" className="btn-dark-outline-landing-trainingsect">Get Started Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;