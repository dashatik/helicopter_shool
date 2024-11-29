import React, { useState } from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "The training I received was top-notch, and it truly prepared me for my career in aviation! I couldn't have asked for a better experience.",
      name: "John Doe",
      title: "Pilot, Sky Aviation",
    },
    {
      quote: "The advanced techniques taught in this program have been invaluable. Highly recommended for aspiring pilots!",
      name: "Jane Smith",
      title: "Captain, JetSet Airways",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonial-section-latest-news">
      <div className="testimonial-container-latest-news">
        <div className="testimonial-content-latest-news">
          <blockquote className="testimonial-quote-latest-news">
            {testimonials[currentIndex].quote}
          </blockquote>
          <footer className="testimonial-author-latest-news">
            <div className="author-info-latest-news">
              <span className="author-name-latest-news">{testimonials[currentIndex].name}</span>
              <span className="author-title-latest-news">{testimonials[currentIndex].title}</span>
            </div>
          </footer>
        </div>
      </div>
      <div className="slider-controls-latest-news">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`slider-dot-latest-news ${index === currentIndex ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
      <button
        className="slider-button-latest-news prev"
        aria-label="Previous testimonial"
        onClick={handlePrev}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/f813e1a77c0c35a35fadec79d77fb490aa60921daea2b524269d44f5a8585fe7?apiKey=536a8b606864400fab194975c3b1e353&"
          alt="Previous"
        />
      </button>
      <button
        className="slider-button-latest-news next"
        aria-label="Next testimonial"
        onClick={handleNext}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/22f84898dfaf6b30e6fe24bcc4eff0a3d32ac4f6f6dc14860344a0d729020d0c?apiKey=536a8b606864400fab194975c3b1e353&"
          alt="Next"
        />
      </button>
    </section>
  );
};

export default TestimonialSection;
