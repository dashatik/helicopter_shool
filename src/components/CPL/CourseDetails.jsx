import React from 'react';
import { Link } from 'react-router-dom';

function CourseDetailsCpl() {
  const learningPoints = [
    {
      title: "Advanced Flight Maneuvers:",
      description: "Night flying, multi-engine flying, and handling various flight situations."
    },
    {
      title: "Instrument Flying (IFR)",
      description: "Mastering flight without visual references, flying in bad weather conditions."
    },
    {
      title: "Navigation & Radio Communication:",
      description: "Detailed understanding of air navigation and communication protocols."
    },
    {
      title: "Aviation Regulations:",
      description: "In-depth knowledge of legal, safety, and operational standards in commercial aviation."
    }
  ];

  return (
    <section className="course-details-cpl">
      <div className="details-content-cpl">
        <span className="details-tagline-cpl">Unlock Your Career in Professional Aviation</span>
        <h2 className="details-title-cpl">Get Certified with Our Advanced CPL Course</h2>
        <p className="details-description-cpl">
          Looking to become a commercial pilot? Our Commercial Pilot License (CPL) program is designed to equip you with the advanced flight skills you need to fly professionally. With our specially designed training, you'll learn everything from mastering complex maneuvers to understanding aviation regulations. This course is the gateway to a career in charter flights, tourism, and corporate aviation.
        </p>
        <div className="learning-points-cpl">
          {learningPoints.map((point, index) => (
            <div key={index} className="learning-point-cpl">
              <h3 className="point-title-cpl">{point.title}</h3>
              <p className="point-description-cpl">{point.description}</p>
            </div>
          ))}
        </div>
        <div className="details-actions-cpl">
          <Link to="/apply-now" className="btn btn-coursedetails-secondary-cpl">Enroll</Link>
          <Link to="/about" className="btn btn-link-coursedetailes-cpl">About Us</Link>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/1aba7043286683a9fb0f6ccf4f7c5cdbba26fb21f0bec089f2dbe945c5c8d89c?apiKey=536a8b606864400fab194975c3b1e353&"
        alt="CPL Course Training"
        className="details-image-cpl"
      />
    </section>
  );
}

export default CourseDetailsCpl;
