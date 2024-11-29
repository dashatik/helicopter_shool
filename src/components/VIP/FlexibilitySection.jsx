import React from 'react';
import { Link } from 'react-router-dom';

const FlexibilitySection = () => {
  const flexibilityPoints = [
    "Examination fees and exams are fully included in the program",
    "Aeronautical VIP Pack",
    "License issuance fees are included",
    "Bring a companion or family member to theory lessons at no extra charge",
    "All landing fees for domestic airports are covered",
    "One-on-one bilingual ground and flight instruction is available in English and Chinese"
  ];

  return (
    <section className="flexibility-section-vip">
      <div className="flexibility-content-vip">
        <h2 className="flexibility-title-vip">Flexibility and Personalization</h2>
        <p className="flexibility-description-vip">
          As a VIP student, all theory lessons are scheduled individually, allowing full control over your learning timetable. With availability from Monday to Sunday, you can easily adjust your classes as needed with less than 24 hours' notice. Whether you need to cancel, reschedule, or add more sessions, the VIP program ensures flexibility to accommodate your lifestyle.
        </p>
        <ul className="flexibility-list-vip">
          {flexibilityPoints.map((point, index) => (
            <li key={index} className="flexibility-item-vip">{point}</li>
          ))}
        </ul>
        <Link to="/about" className="btn-flex-vip btn-secondary-flex-vip">About Us</Link>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/55ebcc416990b31e07788e088c07cd335c57a7f497155fffcfaac325d5295faa?apiKey=536a8b606864400fab194975c3b1e353&" alt="Helicopter interior" className="flexibility-image-vip" />
    </section>
  );
};

export default FlexibilitySection;
