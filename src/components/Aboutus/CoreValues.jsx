import React from 'react';

const CoreValues = () => {
  const values = [
    {
      title: "Safety First",
      description: "We prioritize rigorous safety standards in all our training, ensuring that our students are fully prepared to make safe, responsible decisions in the air."
    },
    {
      title: "Excellence in Training",
      description: "We provide comprehensive, hands-on training led by seasoned instructors, focusing on real-world skills and high standards of proficiency."
    },
    {
      title: "Student Success",
      description: "Your success is our mission. We're here to support and guide you, from your first lesson through to your advanced certifications and beyond."
    },
    {
      title: "Innovation in Aviation",
      description: "With the latest technology and modern aircraft, we stay at the forefront of aviation training, giving our students access to the tools they need to excel."
    }
  ];

  return (
    <section className="core-values">
      <div className="container-values">
        <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/2cf55261e4224f95df44a7c94325a1948bb432c6f85ff90467a0ac946b130a34?apiKey=536a8b606864400fab194975c3b1e353&" alt="" className="decorative-image-values" />
        <div className="content-values">
          <h2 className="section-title-values">Our Core Values</h2>
          <div className="values-list">
            {values.map((value, index) => (
              <div key={index} className="value-item">
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;