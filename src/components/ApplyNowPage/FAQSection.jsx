import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {question}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/3abaf8f641a789fc546fdafcbcb1b553cc2b9a177fd065f436bbbe4d6569ebd0?apiKey=536a8b606864400fab194975c3b1e353&"
          alt=""
          className={`faq-icon ${isOpen ? 'open' : ''}`}
        />
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "How to apply?",
      answer: "To apply, simply fill out the application form available on our website. Ensure that you provide all required information accurately. Once submitted, you will receive a confirmation email."
    },
    {
      question: "What are the fees?",
      answer: "Our course fees vary based on the program selected. Detailed pricing information can be found on each course page. We also offer financing options to make training accessible."
    },
    {
      question: "What is the duration?",
      answer: "Course durations differ depending on the type of training you choose. Typically, programs range from a few weeks to several months. Please check individual course descriptions for specifics."
    },
    {
      question: "Are there prerequisites?",
      answer: "Certain courses may have prerequisites, such as age or prior experience. We recommend reviewing the course details for any specific requirements. If in doubt, feel free to reach out for clarification."
    },
    {
      question: "How do I pay?",
      answer: "Payments can be made securely through our online portal. We accept various payment methods for your convenience. Detailed instructions will be provided upon application submission."
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FAQs</h2>
        <p className="faq-description">Find answers to your questions about the application process below.</p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;