import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Comprehensive Curriculum",
      description: "Our courses cover every essential skill, from foundational principles to advanced maneuvers. Whether it's Private Pilot License (PPL), Commercial Pilot License (CPL), or specialized trainings, our curriculum is thorough, practical, and constantly updated with the latest industry standards."
    },
    {
      title: "Flexible Scheduling",
      description: "We understand that life is busy. That's why we offer both full-time and part-time options, allowing you to learn at a pace that works for you, without compromising quality."
    },
    {
      title: "Experienced Instructors",
      description: "Our instructors aren't just highly certified—they're passionate aviators with years of real-world experience. Each instructor is dedicated to student success and safety, providing mentorship and guidance at every step."
    },
    {
      title: "Top-Quality Equipment",
      description: "Train on modern, well-maintained aircraft and cutting-edge simulators. Our commitment to quality extends to the equipment you'll use every day, ensuring a professional and safe training environment."
    }
  ];

  return (
    <section className="why-choose-us">
	<div className="content-why">
		<div className="header-left">
		<span className="tagline-why">Why Choose Us?</span>
		<h2 className="section-title-why">Choosing the right flight school is a big decision</h2>
		</div>
		<div className="header-right">
		<p className="section-description-why">
			We're here to make it easy. Here's what sets us apart and why students from around the world trust us to kickstart their aviation journey.
		</p>
		</div>
	</div>
	      <div className="image-placeholder" aria-hidden="true">
        <video 
          src="https://cdn.builder.io/o/assets%2F536a8b606864400fab194975c3b1e353%2Ffc6ba2c4729940d59e3f20070ea83767%2Fcompressed?apiKey=536a8b606864400fab194975c3b1e353&token=fc6ba2c4729940d59e3f20070ea83767&alt=media&optimized=true" 
          className="placeholder-video-chooseus" 
          controls 
          autoPlay 
          muted 
          loop
        ></video>
      </div>
      <div className="reasons-container">
        <h3 className="reasons-title">What Makes Us Unique</h3>
        {reasons.map((reason, index) => (
          <div key={index} className="reason-item">
            <h4 className="reason-title">{reason.title}</h4>
            <p className="reason-description">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;