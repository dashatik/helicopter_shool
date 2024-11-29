import React from 'react';
import './styles.css';

const StatsSection = () => {
  const stats = [
    { number: '100%', text: 'Success rate in licensing exams' },
    { number: '15k+', text: 'Total flight hours logged by our students' },
    { number: '98%', text: 'Student satisfaction rate' },
    { number: '20+', text: 'Years of experience in helicopter pilot training' }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-content">
          <h2 className="stats-heading">Our Commitment to Excellence, Measured in Results</h2>
          <p className="stats-description">
            At Zhong Qian School, our achievements speak for themselves. With a history of success 
            and a dedication to every student's growth, we take pride in the numbers that reflect our journey.
          </p>
          <div className="stats-row">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <p className="stat-text">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd919f73837dbe9a2dae4635dc5c31f844839c80cfa9cc45af5de021884eddbd?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353" alt="Helicopter training in action" className="stats-image" />
      </div>
      {[1, 2, 3, 4].map((num) => (
        <div key={num} className={`stat-box stat-box-${num}`} aria-hidden="true"></div>
      ))}
    </section>
  );
};

export default StatsSection;