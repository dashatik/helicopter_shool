import React from 'react';
import { Link } from 'react-router-dom';

function MilestonesCPL() {
  const milestones = [
    { title: "Initial Ground Training", icon: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/b01df2846907f7141d58fa01b562b72a780b7df2406fe7dd05cd6fc7b50d34a2?apiKey=536a8b606864400fab194975c3b1e353&" },
    { title: "Solo Flights", icon: "https://cdn.builder.io/api/v1/image/assets%2F536a8b606864400fab194975c3b1e353%2Fd9eb0807775747c6bb9b0e49d4f8d02d" },
    { title: "Advanced Maneuvers", icon: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/8b77b98038019d22d0dab56eadfb99710634321e9bc5275791225971f8d0f533?apiKey=536a8b606864400fab194975c3b1e353&" }
  ];

  return (
    <section className="milestones-cpl">
      <div className="milestones-container-cpl">
        <div className="milestones-left-cpl">
          <span className="milestones-tagline-cpl">Hands-on experience</span>
          <h2 className="milestones-title-cpl">Milestones</h2>
          <div className="milestones-actions-cpl">
            <Link to="/apply-now" className="btn btn-secondary-milestones-cpl">Enroll</Link>
            <Link to="/training-courses" className="btn btn-link-cpl">
              Other courses
              <img
                src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/b1ea117d06c4300f9dad14de1f83b09a745c0f020edba579fec182e08d9e5ecc?apiKey=536a8b606864400fab194975c3b1e353&"
                alt=""
                className="link-icon-cpl"
              />
            </Link>
          </div>
        </div>
        <div className="milestones-right-cpl">
          <div className="timeline-cpl">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item-cpl">
                <div className="timeline-icon-cpl">
                  <img src={milestone.icon} alt="" className="milestone-icon-cpl" />
                </div>
                <div className="timeline-content-cpl">
                  <h3 className="milestone-title-cpl">{milestone.title}</h3>
                </div>
                {index < milestones.length - 1 && <div className="timeline-divider-cpl" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MilestonesCPL;

