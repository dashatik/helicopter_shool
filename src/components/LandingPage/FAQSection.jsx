import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item-landing">
      <button 
        className="accordion-question-landing" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="question-text-landing">{question}</span>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/62bda7b36d76d9b578bd0a316a0e396ef03138ceb4c27fe22fe49e4bd814dd2b?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353" 
          alt={isOpen ? "Collapse" : "Expand"} 
          className="question-icon-landing"
        />
      </button>
      {isOpen && <div className="accordion-answer-landing">{answer}</div>}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What courses do you offer?",
      answer: "We offer a variety of courses including Private Pilot License (PPL), Commercial Pilot License (CPL), and specialized VIP courses. Each course is designed to provide you with the skills and knowledge necessary for a successful aviation career. Explore our Training & Courses section for detailed information."
    },
    {
      question: "What is the duration?",
      answer: "Course durations vary based on the type of training. Typically, PPL courses take around 3-6 months, while CPL courses may take 6-12 months. We also offer flexible scheduling to accommodate your needs."
    },
    {
      question: "Do you offer financing?",
      answer: "Yes, we provide various financing options to help make your training more accessible. Our team can guide you through the available plans to find one that suits your budget. Contact us for more details."
    },
    {
      question: "What are the prerequisites?",
      answer: "Prerequisites vary by course. Generally, you need to be at least 17 years old and have a valid medical certificate. Specific requirements can be found on the course pages."
    },
    {
      question: "How do I apply?",
      answer: "Applying is simple! Visit our 'Apply Now' section and fill out the online application form. Our admissions team will review your application and get back to you shortly."
    }
  ];

  return (
    <section className="faq-section-landing">
      <div className="faq-container-landing">
        <div className="faq-title-landing">
          <h2 className="faq-heading-landing">FAQs</h2>
          <p className="faq-description-landing">Find answers to your questions about our helicopter training and services below.</p>
        </div>
        <div className="accordion-list-landing">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="faq-cta-landing">
          <div className="cta-content-landing">
            <h3 className="cta-heading-landing">Still have questions?</h3>
            <p className="cta-description-landing">We're here to help you!</p>
          </div>
          <div className="cta-actions-landing">
            <Link to="/contact" className="btn-dark-small-landing">Contact</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;