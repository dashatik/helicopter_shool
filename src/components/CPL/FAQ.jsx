import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FAQCpl() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What is CPL?",
      answer: "The Commercial Pilot License (CPL) allows you to act as pilot-in-command of an aircraft. It requires advanced training in flight maneuvers and navigation. Successful completion opens doors to various aviation careers."
    },
    {
      question: "How long is the course?",
      answer: "The CPL course typically spans several months, depending on weather conditions and student availability. It includes both ground school and flight training. Students can expect to complete the program in 6 to 12 months."
    },
    {
      question: "What skills are taught?",
      answer: "Students learn night flying, instrument flying, and advanced flight maneuvers. The curriculum emphasizes safety and professionalism. Graduates are well-prepared for commercial flight operations."
    },
    {
      question: "What are career options?",
      answer: "CPL graduates can pursue careers in charter services, tourism, and cargo transport. Opportunities exist in various sectors of aviation. The skills acquired can lead to exciting roles in the industry."
    },
    {
      question: "How do I apply?",
      answer: "To apply for the CPL course, visit our 'Apply Now' section. Fill out the application form and submit the required documents. Our team will contact you to guide you through the next steps."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-cpl">
      <div className="faq-container-cpl">
        <div className="faq-header-cpl">
          <h2 className="faq-title-cpl">FAQs</h2>
          <p className="faq-description-cpl">
            Find answers to your most pressing questions about the Commercial Pilot License course.
          </p>
          <Link to="/apply-now" className="btn btn-secondary-faq-cpl">
            Apply Now
          </Link>
        </div>
        <div className="accordion-cpl">
          {faqItems.map((item, index) => (
            <div key={index} className="accordion-item-cpl">
              <button
                className="accordion-header-cpl"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <h3 className="accordion-title-cpl">{item.question}</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/8d05df5a5f170a76d455305a60570cd9474d88afc64169beb909b8fc6337edad?apiKey=536a8b606864400fab194975c3b1e353&"
                  alt=""
                  className={`accordion-icon-cpl ${activeIndex === index ? 'rotate' : ''}`}
                />
              </button>
              {activeIndex === index && (
                <div className="accordion-content-cpl">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQCpl;
