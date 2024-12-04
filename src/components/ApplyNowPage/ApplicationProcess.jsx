import React from 'react';

const ApplicationProcess = () => {
  const steps = [
    { number: 1, title: "Complete the Online Application Form", icon: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/b01df2846907f7141d58fa01b562b72a780b7df2406fe7dd05cd6fc7b50d34a2?apiKey=536a8b606864400fab194975c3b1e353&" },
    { number: 2, title: "Submit Required Documents", icon: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/e4623e07263dc85d7069e85ad0d9b9913ee61cc39e8df17271d499802cca1b14?apiKey=536a8b606864400fab194975c3b1e353&" },
    { number: 3, title: "Schedule an Interview", icon: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/138778b9691e22a2b69a2f0e1fe5b682129ae5585b6262bd8c5a77455f1cd699?apiKey=536a8b606864400fab194975c3b1e353&" },
    { number: 4, title: "Receive Acceptance Notification", icon: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/2a0ce65f3aa917bd58943782f0e6c857b8cc77cd9289d3e1ac3390114c9ad8c4?apiKey=536a8b606864400fab194975c3b1e353&" }
  ];

  return (
    <section className="application-process">
      <div className="process-content">
        <div className="left-column">
          <div className="process-header">
            <span className="process-tagline">Apply now</span>
            <h2 className="process-title">Your Application Process: Simple and Straightforward</h2>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/76708992b8f4b334e5884739e2d231ed154594cbea818c084d70612cc2c2978f?apiKey=536a8b606864400fab194975c3b1e353&"
            alt=""
            className="process-decoration"
          />
        </div>
        <div className="timeline">
          {steps.map((step, index) => (
            <div key={step.number} className="timeline-item">
              <div className="timeline-icon">
                <img
                  src={step.icon}
                  alt={`Step ${step.number}`}
                  style={{
                    width: step.number === 4 ? '50px' : 'auto',
                    height: step.number === 4 ? '50px' : 'auto',
                  }}
                />
                {index < steps.length - 1 && <div className="timeline-divider" />}
              </div>
              <div className="timeline-content">
                <h3 className="timeline-step">Step {step.number}:</h3>
                <p className="timeline-description">{step.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
