import React from 'react';

function CareerOpportunities() {
  const careers = [
    {
      title: "Airline Pilot",
      description: "Many pilots start with regional airlines before progressing to larger, international carriers."
    },
    {
      title: "Charter Services",
      description: "Charter pilots fly private or corporate clients to various destinations on a flexible schedule."
    },
    {
      title: "Tourism Piloting",
      description: "Take tourists on scenic flights to breathtaking destinations, offering unforgettable experiences."
    },
    {
      title: "Cargo Piloting",
      description: "Fly commercial freight or cargo, ensuring that goods are delivered on time and safely."
    }
  ];

  return (
    <section className="career-opportunities-cpl">
      <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/a4c94d56ca512e8062941632db50aaee45cfc4860747d82b00b24797b0388ba2?apiKey=536a8b606864400fab194975c3b1e353&" alt="Career opportunities in aviation" className="opportunities-image-cpl" />
      <div className="opportunities-content-cpl">
        <h2 className="opportunities-title-cpl">Where Can This License Take You?</h2>
        <p className="opportunities-description-cpl">
          The demand for commercial pilots is growing rapidly. According to industry reports, airlines worldwide will need approximately <strong>790,000</strong> new pilots by <strong>2037</strong>, due to increasing air travel demand and pilot retirements.
        </p>
        <h3 className="career-header-cpl">Careers</h3>
        <div className="careers-list-cpl">
          {careers.map((career, index) => (
            <div key={index} className="career-item-cpl">
              <h3 className="career-title-cpl">{career.title}</h3>
              <p className="career-description-cpl">{career.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerOpportunities;