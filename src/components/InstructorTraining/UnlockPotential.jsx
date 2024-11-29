import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const UnlockPotential = () => {
  const potentialItems = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/23634e13c968f03e0d928b69014020cd040f57f24aa4f90df7c2ae75ac445881?apiKey=536a8b606864400fab194975c3b1e353&",
      title: "As a flight instructor, you get to:",
      description: [
        "Mentor the Next Generation: Pass on your skills and knowledge to aspiring pilots.",
        "Make an Impact: Play a vital role in shaping safe and skilled future aviators.",
        "Enjoy a Rewarding Career: Build a fulfilling career while sharing your love for flying."
      ]
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/9fb17d0e34d023883f7dc4c22ca136ffef88e02e152c605efdf8d7a2158585f0?apiKey=536a8b606864400fab194975c3b1e353&",
      title: "What You'll Gain",
      description: [
        "Effective Teaching Methods: Learn how to communicate complex flying concepts clearly and confidently.",
        "Safety Leadership: Equip yourself to foster a safe learning environment.",
        "Inspiring Leadership: Cultivate the skills to guide students toward mastering helicopter controls and flight regulations."
      ]
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/baf59f118d5b942ebcc30b816a7809b064d09e0f700e7aa041a94ed27f42c5f2?apiKey=536a8b606864400fab194975c3b1e353&",
      title: "Are You Ready to Apply?",
      description: [
        "Requirements: Minimum of 1,500 flight hours and a valid CPL.",
        "Passion: A love for teaching and flying is a must!"
      ]
    }
  ];

  return (
    <section className="unlock-potential-instructor">
      <h2 className="section-title-unlock-instructor">Unlock Your Potential as a Helicopter Instructor</h2>
      <p className="section-tagline-unlock-instructor">Take your passion for aviation to the next level by shaping future pilots.</p>
      <p className="section-description-unlock-instructor">
        Becoming an instructor is more than a job—it's a way to give back to the aviation community and help others succeed.
      </p>
      <div className="potential-grid-unlock-instructor">
        {potentialItems.map((item, index) => (
          <div key={index} className="potential-item-unlock-instructor">
            <img src={item.image} alt="" className="potential-image-unlock-instructor" />
            <h3 className="potential-title-unlock-instructor">{item.title}</h3>
            <ul className="potential-description-unlock-instructor">
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="potential-actions-instructor">
        <Link to="/training-courses" className="btn btn-secondary-instructor-potential">
          Learn More
        </Link>
        <Link to="/apply-now" className="btn btn-link-unlock-instructor">
          Apply Now
          <img
            src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/2c648c99086dabcc02665d7136f3813fa8d9ab4a20d15904140067b9f5dc1586?apiKey=536a8b606864400fab194975c3b1e353&"
            alt=""
            className="link-icon-unlock-instructor"
          />
        </Link>
      </div>
    </section>
  );
};

export default UnlockPotential;

