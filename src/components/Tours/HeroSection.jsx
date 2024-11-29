import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const HeroSection = () => {
  return (
    <section className="hero-section-tours" aria-label="Hero section">
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2F536a8b606864400fab194975c3b1e353%2F3434bba6a9174607b8079b91f7b87dd8"
        alt="Scenic helicopter view"
        className="hero-background-tours"
      />
      <div className="hero-content-tours">
        <p className="hero-tagline-tours">Helicopter Tours</p>
        <h1 className="hero-heading-tours">Discover the World from New Heights</h1>
        <p className="hero-description-tours">
          Experience breathtaking views and VIP treatment on our unforgettable helicopter tours.
        </p>
        <div className="hero-buttons">
          <Link to="/book-tour" className="btn btn-book">
            Book a Tour
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
