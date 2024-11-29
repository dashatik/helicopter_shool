import React, { useState } from 'react';

const TestimonialCardSpecial = ({ quote, name, title, avatar }) => (
  <div className="testimonial-card-special">
    <div className="testimonial-card-content-special">
      <div className="testimonial-stars-special">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/c76f702b11c652ae0fb939475fc8d98b1871b1b2b522b9c85f0ebf1da758d67d?apiKey=536a8b606864400fab194975c3b1e353&"
            alt="Star"
            className="star-icon"
          />
        ))}
      </div>
      <div className="testimonial-quote-special">{quote}</div>
    </div>
    <div className="testimonial-avatar-special">
      <img src={avatar} alt={name} className="avatar-img-special" />
      <div className="avatar-content-special">
        <div className="avatar-name-special">{name}</div>
        <div className="avatar-title-special">{title}</div>
      </div>
    </div>
  </div>
);

const TestimonialSectionSpecial = () => {
  const testimonials = [
    {
      quote: "The special courses refined my skills beyond my expectations.",
      name: "John Doe",
      title: "Senior Pilot, SkyHigh",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/48f7dec9f591b7e013788a41a19073a8bac7959ebdfd205379a28c35c7d9e368?apiKey=536a8b606864400fab194975c3b1e353&",
    },
    {
      quote: "I gained confidence and precision in challenging conditions.",
      name: "Jane Smith",
      title: "Chief Instructor, FlyRight",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/a65d3430af800544d38084bbd21b97fcfc1f84db691b53a999f1ef16459b430b?apiKey=536a8b606864400fab194975c3b1e353&",
    },
    {
      quote: "The night flying course was a game changer for me.",
      name: "Mark Johnson",
      title: "Flight Director, AirMasters",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/3c20d241f866c08ca9c892e3eef4b3f3dbd03666255fc9bf7bd50782e835a43d?apiKey=536a8b606864400fab194975c3b1e353&",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="testimonial-section-special">
      <div className="testimonial-title-special">
        <h2 className="testimonial-heading-special">Pilot Success Stories</h2>
        <p className="testimonial-subheading-special">
          Transformative training that elevates your flying skills.
        </p>
      </div>
      <div className="testimonial-content-special">
        <div
          className="testimonial-container-special"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCardSpecial key={index} {...testimonial} />
          ))}
        </div>
        <div className="testimonial-slider-dots-special">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={
                index === activeIndex
                  ? "slider-dot-special"
                  : "slider-dot-inactive-special"
              }
              onClick={() => setActiveIndex(index)}
            ></div>
          ))}
        </div>
      </div>
      <button
        className="slider-btn-special slider-btn-left-special"
        aria-label="Previous testimonial"
        onClick={handlePrev}
      >
        &#8249;
      </button>
      <button
        className="slider-btn-special slider-btn-right-special"
        aria-label="Next testimonial"
        onClick={handleNext}
      >
        &#8250;
      </button>
    </section>
  );
};

export default TestimonialSectionSpecial;
