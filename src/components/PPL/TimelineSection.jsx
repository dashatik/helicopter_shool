import React from 'react';
import { Link } from 'react-router-dom';

const TimelineSection = () => {
  const timelineItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/8779b4c048dfcf52ed7409f3dcd006d6271ccbad5f2dc54f476bc9e8637468c2?apiKey=536a8b606864400fab194975c3b1e353&",
      step: "Course Overview",
      description: "Learn essential flying skills, including safety protocols, helicopter maneuvers, and navigation, to prepare you for both solo and supervised flights."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/38209511f535eef6b0d50766abb58feb073591b170df679da29e3fba2c646b9e?apiKey=536a8b606864400fab194975c3b1e353&",
      step: "Program Duration",
      description: "Finish your training in 3-6 months with flexible scheduling options that fit your lifestyle."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/9939740a2de37639506d2bbc9ecd908a5acae475f2335cb5ede88645c7819529?apiKey=536a8b606864400fab194975c3b1e353&",
      step: "Learning Modules",
      description: "Get hands-on with flight controls, airspace regulations, and emergency procedures through practical, interactive lessons."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/9ea73aea105b97c0aa05e46551a64ba21d577841af88b0d97145a908bf1739ab?apiKey=536a8b606864400fab194975c3b1e353&",
      step: "Ready to Fly?",
      description: "Take the first step towards your pilot license and start your journey to the skies today!"
    }
  ];

  return (
    <section className="timeline-section-ppl">
      <div className="timeline-container-ppl">
        <div className="timeline-content-ppl">
          <span className="timeline-tag-ppl">Hands-on experience</span>
          <h2 className="timeline-title-ppl">Build Your Flight Expertise from the Ground Up</h2>
          <div className="timeline-actions-ppl">
            <Link to="/apply-now" className="btn btn-secondary-timeline-ppl">Enroll</Link>
            <Link to="/training-courses" className="btn btn-link-timeline-ppl">
              Other courses 
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/ee5bdbc32bbc53684deecb2f9d63712884517174ee790d5d45a4eae8116d726d?apiKey=536a8b606864400fab194975c3b1e353&" 
                alt="" 
                className="btn-icon-timeline-ppl" 
              />
            </Link>
          </div>
        </div>
        <div className="timeline-ppl">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item-ppl">
              <div className="timeline-icon-ppl">
                <img src={item.icon} alt={`Step ${index + 1}`} />
                {index < timelineItems.length - 1 && <div className="timeline-divider-ppl" />}
              </div>
              <div className="timeline-content-ppl">
                <h3 className="timeline-step-ppl">{item.step}</h3>
                <p className="timeline-description-ppl">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/4725f0321915e92cc919d4796a15e45e0a9a4c53b50a8febc87150ee9b6789cb?apiKey=536a8b606864400fab194975c3b1e353&" 
        alt="Helicopter in hangar" 
        className="timeline-image-ppl" 
      />
    </section>
  );
};

export default TimelineSection;
