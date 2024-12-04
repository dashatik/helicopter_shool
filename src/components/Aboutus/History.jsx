import React from 'react';

const History = () => {
  return (
    <section className="history">
      <div className="container">
        <div className="content">
          <div className="section-header">
            <span className="tagline">About Us</span>
            <h2 className="section-title">Our History</h2>
          </div>
          <p className="section-description">
            From our beginnings to becoming a top choice for pilot training, our story reflects our commitment to aviation excellence and safety.
          </p>
          <p className="history-text">
            Established in 2024, our school was founded with a clear mission: to train and inspire the next generation of pilots through rigorous, hands-on learning. We launched with a focus on high safety standards and personalized training, quickly building a reputation for excellence in aviation education.
          </p>
          <h3 className="subsection-title">Our Ongoing Commitment</h3>
          <p className="commitment-text">
            As we continue to grow, our mission remains the same: to provide high-quality, comprehensive training that prepares students for safe, successful careers in aviation. Each year, we adapt to advancements in the industry, ensuring our curriculum and facilities meet the evolving needs of modern pilots.
            <br />
            Our history isn't just a timeline—it's a testament to our dedication to aviation excellence and our students' success. We're proud of where we started and excited for where we're headed.
          </p>
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/c05edbaa7feb4652e612a345bd04a83802bdd973be6b1e6c873f05be18a923e3?apiKey=536a8b606864400fab194975c3b1e353&" alt="History of Zhong Qian School" className="history-image" />
      </div>
    </section>
  );
};

export default History;