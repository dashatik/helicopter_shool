import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const FleetSection = () => {
  const helicopters = [
    {
      name: 'CH-7 Angel',
      description: 'A two-seater lightweight helicopter known for its simplicity, agility, and cost-effectiveness.',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dadf66a16afe5abebe6427cc3024ffbc282b61013bab7685ffd6f6f58e18dbd6?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353'
    },
    {
      name: 'Robinson R22',
      description: 'A two-seat light helicopter, frequently used for flight training, personal use, and recreational flying.',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b9f5cc243582dd4a5cab4f9d44c72fed6b01ca461ef6ccca351da4b672dd74b8?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353'
    }
  ];

  return (
    <section className="fleet-section">
      <div className="fleet-container">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/be9b52d49b9c22d5eb6d8d4d9b5bff6c1d72e753045a18e5ab6e3776109ae879?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353" alt="3D model of a helicopter" className="fleet-image" />
        <div className="fleet-content">
          <div className="fleet-title">
            <p className="fleet-tagline">Fleet</p>
            <h2 className="fleet-heading">Experience Our Helicopter Fleet</h2>
            <p className="fleet-description">
              Get a real feel for the helicopters you'll be flying! Dive into our 3D model viewer 
              to check out the exact aircraft you'll train on.
            </p>
          </div>
          <div className="fleet-items">
            {helicopters.map((helicopter, index) => (
              <div key={index} className="fleet-item">
                <img src={helicopter.image} alt={helicopter.name} className="fleet-item-icon" />
                <h3 className="fleet-item-title">{helicopter.name}</h3>
                <p className="fleet-item-description">{helicopter.description}</p>
              </div>
            ))}
          </div>
          <div className="fleet-actions">
            <Link to="/contact" className="link-with-icon">
              <span className="link-text">Explore Helicopters</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;