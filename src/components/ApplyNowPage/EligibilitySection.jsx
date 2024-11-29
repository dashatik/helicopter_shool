import React from 'react';

const EligibilitySection = () => {
  const requirements = [
    {
      title: "Minimum Flight Hours",
      description: "Applicants may need prior flight experience or specific flight hours depending on the course."
    },
    {
      title: "Medical Certification",
      description: "Ensure you have a Class 1 or Class 2 Medical Certificate (dependent on the course level) to demonstrate physical fitness for flying."
    },
    {
      title: "Licenses",
      description: "A valid Private Pilot License (PPL) is essential for entering into a Commercial Pilot License (CPL) course."
    }
  ];

  return (
    <section className="eligibility-section">
      <div className="eligibility-content">
        <h2 className="eligibility-title">Are You Eligible?</h2>
        <p className="eligibility-description">
          To join our Pilot Programs (such as PPL and CPL), applicants should meet a few important requirements:
        </p>
        <ul className="requirements-list">
          {requirements.map((req, index) => (
            <li key={index} className="requirement-item">
              <h3 className="requirement-title">{req.title}</h3>
              <p className="requirement-description">{req.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EligibilitySection;