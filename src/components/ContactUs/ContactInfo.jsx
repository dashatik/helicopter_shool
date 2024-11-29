import React from 'react';
import './styles.css';


const ContactInfo = () => {
  const contactDetails = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/d3c18a7c410293ecd1a2931d8ab8fc98a7baa824ec7edacfa9b623f578a89bb4?apiKey=536a8b606864400fab194975c3b1e353&",
      title: "Email",
      description: "For all general inquiries and course information, contact us at",
      link: "hello@zhongqian.com"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/6d2c224866a68deabf82e2e2bfee12e7d2097c8b152368226ebbb01f5ce20875?apiKey=536a8b606864400fab194975c3b1e353&",
      title: "Phone",
      description: "Call us directly at for immediate assistance",
      link: "+86 10 6086 2234"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/e7d79545b3ee0b2760eac797bf4596b0de27fa635ded18533206972ee9a91089?apiKey=536a8b606864400fab194975c3b1e353&",
      title: "Office",
      description: "Visit us at Mentougou for a tour of our facilities or to speak with our staff in person.",
      link: "Mentougou District, 102308, Beijing, China"
    }
  ];

  return (
    <section className="contact-info">
      <h2 className="section-title-contact">Connect</h2>
      <h3 className="section-subtitle">Get in Touch</h3>
      <div className="info-container">
        {contactDetails.map((detail, index) => (
          <div key={index} className="info-card">
            <img src={detail.icon} alt="" className="info-icon" />
            <div className="info-content">
              <h4 className="info-title">{detail.title}</h4>
              <p className="info-description">{detail.description}</p>
              <a href={`${detail.title === 'Email' ? 'mailto:' : detail.title === 'Phone' ? 'tel:' : ''}`} className="info-link">{detail.link}</a>
            </div>
          </div>
        ))}
      </div>
      <div className="social-links">
        <a href="#" aria-label="Facebook"><img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/779f1dc805bd92dff06913a3984426c37f7ec079304c40b419138854445addbd?apiKey=536a8b606864400fab194975c3b1e353&" alt="" /></a>
        <a href="#" aria-label="Twitter"><img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/eafc6b6235d4ef98682da9a2cf2edc1f0272a50cf4e71cb596c842497aa977ac?apiKey=536a8b606864400fab194975c3b1e353&" alt="" /></a>
        <a href="#" aria-label="Instagram"><img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/252d2a92-f07a-4c6f-a77b-23de206d5b15?apiKey=536a8b606864400fab194975c3b1e353&" alt="" /></a>
      </div>
    </section>
  );
};

export default ContactInfo;