import React, { useState } from 'react';

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState(null); // Track open category
  const [activeQuestion, setActiveQuestion] = useState(null); // Track open question

  const faqData = [
    {
      category: "General Questions",
      questions: [
        {
          question: "How do I enroll in a course or tour?",
          answer: "Simply select your desired course or tour on our website and follow the booking instructions. For assistance, our support team is available by phone or email."
        },
        {
          question: "What payment options are available?",
          answer: "We accept major credit cards, bank transfers, and PayPal. Payment plans may also be available for certain courses—contact us for more details."
        },
        {
          question: "What's the cancellation policy for courses and tours?",
          answer: "Cancellations for tours are generally accepted up to 24 hours before the tour time for a full refund. Courses may have varying cancellation policies depending on the program length. Check our cancellation policy page for specific details."
        },
        {
          question: "Do you offer any discounts or promotions?",
          answer: "We occasionally offer discounts on specific courses or tours. Subscribe to our newsletter or follow us on social media to stay updated on promotions."
        }
      ]
    },
    {
      category: "Pilot Training",
      questions: [
        {
          question: "What are the requirements to enroll in pilot training courses?",
          answer: "Pilot training courses may require prior flying hours, specific licenses (like a PPL for advanced courses), and a medical check. Check the specific course page for details."
        },
        {
          question: "Can I take courses part-time?",
          answer: "Yes, many of our courses are designed with flexible scheduling to accommodate both full-time and part-time students. Course duration will vary based on your availability."
        },
        {
          question: "What's included in the VIP training?",
          answer: "VIP training offers a personalized experience, including additional flight hours, flexible scheduling, and more simulator time. The VIP package includes all domestic landing fees, examination fees, and course materials."
        },
        {
          question: "What types of pilot licenses do you offer?",
          answer: "We provide training for Private Pilot Licenses (PPL), Commercial Pilot Licenses (CPL), and specialized certifications for night flying, weather conditions, and more."
        }
      ]
    },
    {
      category: "Tours",
      questions: [
        {
          question: "What types of helicopter tours do you offer?",
          answer: "We offer a range of tours, from short scenic flights over local landmarks to extended adventures covering scenic landscapes and special sites. Custom tours are also available upon request."
        },
        {
          question: "Are helicopter tours safe?",
          answer: "Safety is our priority. Our experienced pilots undergo regular training, and our helicopters are maintained to the highest standards."
        },
        {
          question: "Can I request a private or custom tour?",
          answer: "Absolutely! We offer private tours and can customize your itinerary to include specific landmarks or destinations. Contact us for more details."
        },
        {
          question: "Are there age or weight restrictions for tours?",
          answer: "Tours are generally open to all ages, though weight restrictions may apply. We recommend contacting us to discuss any specific needs or questions."
        }
      ]
    },
    {
      category: "Special Training",
      questions: [
        {
          question: "What is included in Special Training programs?",
          answer: "Our Special Training covers advanced topics like night flying, adverse weather handling, emergency procedures, and precision landing. Each module is designed to improve safety and enhance skill in challenging situations."
        },
        {
          question: "Who should consider Special Training?",
          answer: "Special Training is ideal for certified pilots looking to expand their skills in specific areas, such as emergency responses, night navigation, and complex flying scenarios."
        },
        {
          question: "Is simulator training included in special courses?",
          answer: "Yes, simulator training is included, particularly for courses focusing on adverse weather handling and emergency procedures."
        },
        {
          question: "Do you offer training in different weather conditions?",
          answer: "Yes, we provide Adverse Weather Handling training, including rain, wind, and low-visibility conditions, to prepare you for real-world environments."
        }
      ]
    },
    {
      category: "Application & Enrollment",
      questions: [
        {
          question: "What documents do I need to apply for a course?",
          answer: "Generally, you’ll need a valid government ID, relevant flight certifications, and a recent medical report. Some advanced courses may have additional requirements."
        },
        {
          question: "Is financing available for training courses?",
          answer: "We offer various financing options for qualifying students. Contact our admissions team to discuss your options and determine eligibility."
        },
        {
          question: "What is the process after enrollment?",
          answer: "After enrollment, you’ll receive a welcome email with an outline of your training schedule, materials required, and an introduction to your instructor."
        },
        {
          question: "Can I apply for multiple courses?",
          answer: "Yes, you can enroll in multiple courses simultaneously, provided you meet the requirements for each."
        },
        {
          question: "What support is available during my training?",
          answer: "Our instructors are here to provide ongoing guidance and support, and our customer service team is available to assist with scheduling or administrative questions."
        }
      ]
    }
  ];
  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
    setActiveQuestion(null); // Reset question selection when switching categories
  };

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section className="faq-section">
      {faqData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="faq-category">
          <h2
            className={`faq-category-title ${activeCategory === categoryIndex ? 'active' : ''}`}
            onClick={() => toggleCategory(categoryIndex)}
          >
            {category.category}
          </h2>
          {activeCategory === categoryIndex && (
            <div className="faq-questions">
              {category.questions.map((item, questionIndex) => (
                <div
                  key={questionIndex}
                  className={`faq-question-item ${activeQuestion === questionIndex ? 'open' : ''}`}
                >
                  <button
                    className="faq-question-header"
                    onClick={() => toggleQuestion(questionIndex)}
                  >
                    {item.question}
                    <span className="faq-icon">{activeQuestion === questionIndex }</span>
                  </button>
                  {activeQuestion === questionIndex && (
                    <div className="faq-answer">{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQSection;