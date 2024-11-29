import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="cta-tours">
      <div className="cta-content-tours">
        <h2 className="cta-title-tours">Book Your Helicopter Adventure Today</h2>
        <p className="cta-description-tours">
          Ready to experience the thrill of a lifetime? With flexible scheduling, simple booking, and secure payments, reserving your seat is quick and easy. Get ready for an unforgettable view from the skies!
        </p>
        <Link to="/contact" className="btn-tours btn-large-tours">Book Tour Today</Link>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/8e83cb7c69249793d8190b25d0d00675a01a2a237d2961a081b0c794b56c7e11?apiKey=536a8b606864400fab194975c3b1e353&" alt="Helicopter flying over mountains" className="cta-image-tours" />
    </section>
  );
}

export default CallToAction;