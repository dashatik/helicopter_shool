import React from 'react';

function DurationScheduling() {
  const scheduleOptions = [
    {
      title: "Full-Time Path:",
      description: "Complete your Commercial Pilot License (CPL) training in as little as 6 months with intensive",
      image: "https://cdn.builder.io/api/v1/image/assets%2F536a8b606864400fab194975c3b1e353%2Fb8fc00c5f12b483285bcdab10c31970e"
    },
    {
      title: "Part-Time Flexibility:",
      description: "If you need a more flexible schedule, typically finishing in 12 to 18 months.",
      image: "https://cdn.builder.io/api/v1/image/assets%2F536a8b606864400fab194975c3b1e353%2Fa2b3bd52896043f29120fe95b51d4df7"
    }
  ];

  return (
    <section className="duration-scheduling-cpl">
      <div className="scheduling-content-cpl">
        <h2 className="scheduling-title-cpl">Duration & Scheduling</h2>
        <p className="scheduling-description-cpl">
          With our flexible scheduling, you can work toward your CPL certification while keeping up with your personal and professional commitments
        </p>
        <div className="schedule-options-cpl">
          {scheduleOptions.map((option, index) => (
            <div key={index} className="schedule-option-cpl">
              <div className="option-image-cpl">
                <img src={option.image} alt={`${option.title} icon`} />
              </div>
              <div className="option-text-cpl">
                <h3 className="option-title-cpl">{option.title}</h3>
                <p className="option-description-cpl">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DurationScheduling;