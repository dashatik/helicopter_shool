import React from 'react';

const Skills = () => {
  const skillItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/1a83e5d6ecaa55bc0789976f33e9bd7be50ee3e23b2e8b6dd1ace2912452b5cb?apiKey=536a8b606864400fab194975c3b1e353&",
      title: "Interactive Modules",
      description: "Dive into hands-on sessions that cover everything from flight principles to real-life helicopter operations."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/0bfe37b2f4f1bdcff0fb82a6959c07fbd26860201cb26c096c400c0475105e28?apiKey=536a8b606864400fab194975c3b1e353&",
      title: "Accelerated Timeline",
      description: "Complete the course in just a few weeks with our focused, intensive training schedule designed to get you in the skies faster."
    }
  ];

  return (
    <section className="skills-section">
      <div className="skills-box-1"></div>
      <div className="skills-box-2"></div>
      <div className="skills-container">
        <div className="skills-content">
          <div className="skills-title">
            <h2 className="skills-heading">Master the Core Skills for Personal Flying with Our PPL Program</h2>
            <p className="skills-description">
              Our PPL course delivers in-depth training to equip you with the essential skills needed for personal aviation. From mastering helicopter controls to understanding critical aviation safety protocols, this program ensures you're fully prepared for solo flights.
            </p>
          </div>
          <div className="skills-list">
            {skillItems.map((item, index) => (
              <div key={index} className="skill-item">
                <img src={item.icon} alt="" className="skill-icon" aria-hidden="true" />
                <div>
                  <h3 className="skill-title">{item.title}</h3>
                  <p className="skill-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/96383c9d0b2cf9aea2dbb44ae2491cee58eeafebde358e6991d22753a8485548?apiKey=536a8b606864400fab194975c3b1e353&" alt="Helicopter in flight" className="skills-image" />
      </div>
    </section>
  );
};

export default Skills;