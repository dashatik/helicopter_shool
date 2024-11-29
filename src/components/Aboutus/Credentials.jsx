import React from 'react';

const Credentials = () => {
  const credentialItems = [
    {
      title: "Certified by the Civil Aviation Administration",
      description: "We are proudly certified by the Civil Aviation Administration, affirming our adherence to national standards in aviation training. This certification allows us to offer officially recognized flight programs that meet rigorous safety and quality requirements."
    },
    {
      title: "Approved for Personal and Commercial Pilot Training",
      description: "Our programs are authorized to provide training for both private and commercial pilot licenses. This approval means our courses are structured to prepare you for real-world aviation roles, equipping you with the skills needed to thrive in the industry."
    },
    {
      title: "Business License and Accreditation",
      description: "As a registered aviation school, we operate under a certified business license, showcasing our compliance with regional and national business regulations. This formal registration adds another layer of reliability for students looking to start or advance their aviation careers with us."
    }
  ];

  return (
    <section className="credentials">
      <div className="container-cred">
        <div className="content-cred">
          <h2 className="section-title-cred">Our Credentials</h2>
          <p className="section-description-cred">
            We believe that credibility and quality training go hand-in-hand. At Zhong Qian School, our certifications and accreditations reflect our commitment to high standards in aviation education, safety, and professionalism.
          </p>
          {credentialItems.map((item, index) => (
            <div key={index} className="credential-item">
              <h3 className="credential-title">{item.title}</h3>
              <p className="credential-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/a7dc9a070077033621f3c422f1cc193c1118bc3f3ab3ac7ddf96c7bd39deda9d?apiKey=536a8b606864400fab194975c3b1e353&" alt="" className="decorative-image-1-cred" />
      <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/8608ae71ba5404ae9729b44a1038b1c789b85728af511303b47c49e6a52cc119?apiKey=536a8b606864400fab194975c3b1e353&" alt="" className="decorative-image-2-cred" />
    </section>
  );
};

export default Credentials;