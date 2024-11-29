import React, { useState } from 'react';
import './styles.css';

const testimonials = [
  {
    stars: 5,
    quote:
      "My experience at Zhong Hua has been incredibly valuable and challenging. I have had the opportunity to share my knowledge while learning from my colleagues and students. Being able to fly on a modern CH-7 Angel in China was something special that I will definitely miss in the future.",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/93a348fee4dd0d3752e84a5d66938594f0b4023f8d597f4436a6f7c415e72f24?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353",
    name: "Sergio González",
    title: "IBERIA First Officer and Zhong Qian's Ex-Pilot",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/fde4f504f71821c9a54324f3cd62d415275b60eb2aaa4622553b66f7130382e9?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353",
  },
  {
    stars: 5,
    quote:
      "Zhong Hua provided me with the skills and experience to take my flying career to new heights. The instructors and staff are incredibly supportive, and the facilities are world-class. Flying the CH-7 Angel was a dream come true.",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/93a348fee4dd0d3752e84a5d66938594f0b4023f8d597f4436a6f7c415e72f24?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353",
      name: "Maria Lee",
    title: "Pilot at Air Wings",
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/fde4f504f71821c9a54324f3cd62d415275b60eb2aaa4622553b66f7130382e9?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonial-section">
      <div className="testimonial-background" aria-hidden="true"></div>
      <div className="testimonial-content">
        <div className="testimonial-container">
          <div className="testimonial-column">
            <div className="testimonial-wrapper">
              <div className="testimonial-stars">
                {[...Array(currentTestimonial.stars)].map((_, index) => (
                  <img
                    key={index}
                    src="https://cdn.builder.io/api/v1/image/assets%2F536a8b606864400fab194975c3b1e353%2Fc76f702b11c652ae0fb939475fc8d98b1871b1b2b522b9c85f0ebf1da758d67d"
                    alt="Star"
                    className="star-icon"
                  />
                ))}
              </div>
              <blockquote className="testimonial-quote">
                {currentTestimonial.quote}
              </blockquote>
              <div className="testimonial-avatar">
                <img
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="avatar-image"
                />
                <div className="avatar-content">
                  <p className="avatar-name">{currentTestimonial.name}</p>
                  <p className="avatar-title">{currentTestimonial.title}</p>
                </div>
                <div className="testimonial-divider"></div>
                <img
                  src={currentTestimonial.logo}
                  alt="Company logo"
                  className="company-logo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? 'dot-active' : 'dot-inactive'}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
        <button
          className="slider-button slider-button-left"
          aria-label="Previous testimonial"
          onClick={handlePrev}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7199c21a9707ebdf39af70dcf3809d515b966cb04e34e6e74557ed64cc5feb85?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353"
            alt="Left arrow"
            className="slider-button-icon"
          />
        </button>
        <button
          className="slider-button slider-button-right"
          aria-label="Next testimonial"
          onClick={handleNext}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/22f84898dfaf6b30e6fe24bcc4eff0a3d32ac4f6f6dc14860344a0d729020d0c?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353"
            alt="Right arrow"
            className="slider-button-icon"
          />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
