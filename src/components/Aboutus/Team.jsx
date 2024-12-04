import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "Chief Instructor",
      description: "With over 15 years of experience in aviation training.",
      image: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/98514193862d4a0445ae6e4b09895cdd98ae9daedb87f27118be92b18ae471c6?apiKey=536a8b606864400fab194975c3b1e353&"
    },
    {
      name: "Jane Smith",
      position: "Safety Officer",
      description: "Dedicated to ensuring the highest safety standards.",
      image: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/98514193862d4a0445ae6e4b09895cdd98ae9daedb87f27118be92b18ae471c6?apiKey=536a8b606864400fab194975c3b1e353&"
    },
    {
      name: "Mike Johnson",
      position: "Flight Engineer",
      description: "Expert in helicopter maintenance and operations.",
      image: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/98514193862d4a0445ae6e4b09895cdd98ae9daedb87f27118be92b18ae471c6?apiKey=536a8b606864400fab194975c3b1e353&"
    },
    {
      name: "Emily Davis",
      position: "Course Coordinator",
      description: "Passionate about creating engaging training experiences.",
      image: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/98514193862d4a0445ae6e4b09895cdd98ae9daedb87f27118be92b18ae471c6?apiKey=536a8b606864400fab194975c3b1e353&"
    }
  ];

  return (
    <section className="team">
      <div className="section-header-team">
        <span className="tagline-team">Excellence</span>
        <h2 className="section-title-team">Our Team</h2>
        <p className="section-description-team">Meet the passionate professionals behind our success.</p>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="member-image" />
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-position">{member.position}</p>
              <p className="member-description">{member.description}</p>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/dariatikhomirova" aria-label={`${member.name}'s LinkedIn`}><img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/87ec53ece447b3ae9f6e9f06db93c5ac976c08b25cd66b0b4bed7aa0afb5c6f0?apiKey=536a8b606864400fab194975c3b1e353&" alt="" /></a>
              <a href="https://www.linkedin.com/in/dariatikhomirova" aria-label={`${member.name}'s Twitter`}><img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/b1332e40c061482067062bfab80c125f3ae26fa5c3731b55424bf3b58522d3e0?apiKey=536a8b606864400fab194975c3b1e353&" alt="" /></a>
              <a href="https://www.linkedin.com/in/dariatikhomirova" aria-label={`${member.name}'s Facebook`}><img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/0422d869d172f76989d9fccd2f594bcc62b0030b7baa7377449993994ec97309?apiKey=536a8b606864400fab194975c3b1e353&" alt="" /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;