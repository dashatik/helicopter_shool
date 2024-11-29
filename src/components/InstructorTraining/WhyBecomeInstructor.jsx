import React from 'react';

const WhyBecomeInstructor = () => {
  return (
    <section className="why-become-instructor">
      <div className="left-column-instructor">
        <h2 className="section-title-instructor">Why Become a Flight Instructor?</h2>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/db23d422b30796064614d9b4f3bb28103a14f147f4989b87c740b4d465a1e1a2?apiKey=536a8b606864400fab194975c3b1e353&"
          alt="Helicopter instructor"
          className="section-image-why-instructor"
        />
      </div>
      <div className="right-column-instructor">
        <p className="section-description-instructor">
          Becoming a certified helicopter instructor unlocks new career paths and provides the personal fulfillment of training the next generation of pilots. As an instructor, you'll build advanced flying skills, grow your professional network, and contribute meaningfully to the aviation community.
        </p>
        <div className="benefits-grid-instructor">
          <div className="benefit-item-instructor">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/16e2658ec6236e77e406662c0e8dadc665a10a5f77605e7f714ec6601981015f?apiKey=536a8b606864400fab194975c3b1e353&"
              alt=""
              className="benefit-icon-instructor"
            />
            <h3 className="benefit-title-instructor">Career Growth</h3>
            <p className="benefit-description-instructor">
              Transition from a pilot to a mentor, expanding your expertise while opening doors to higher-paying roles and leadership positions in flight schools and aviation companies.
            </p>
          </div>
          <div className="benefit-item-instructor">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/1aefcb1e0e26000c64971c54c7eaa9348710ce769361e8def740f2340fc93594?apiKey=536a8b606864400fab194975c3b1e353&"
              alt=""
              className="benefit-icon-instructor"
            />
            <h3 className="benefit-title-instructor">Professional Development</h3>
            <p className="benefit-description-instructor">
              Enhance your flying capabilities through real-world teaching experience, mastering the finer details of helicopter flight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBecomeInstructor;

