import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function TourCard({ title, description, features, imageSrc, altText }) {
  return (
    <article className="tour-card">
      <img src={imageSrc} alt={altText} className="tour-image" />
      <div className="tour-content">
        <h2 className="tour-title">{title}</h2>
        <p className="tour-description">{description}</p>
        <ul className="tour-features">
          {features.map((feature, index) => (
            <li key={index} className="tour-feature">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/4a5290ca5bc1c559f6b59f46ffeaaa54ef7957561e57e5a575a45116d57f7e49?apiKey=536a8b606864400fab194975c3b1e353&"
                alt=""
                className="feature-icon"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/contact" className="btn btn-book-tour">
        Book
      </Link>
    </article>
  );
}

export default TourCard;
