import React from 'react';

function TestimonialCpl() {
  return (
    <section className="testimonial-cpl">
      <div className="testimonial-content-cpl">
        <div className="rating-cpl">
          {[1, 2, 3, 4, 5].map((star) => (
            <img key={star} src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/8bc91b8dccb55d66d00488989320c81634698aff6c331f85f48034eca6fa2496?apiKey=536a8b606864400fab194975c3b1e353&" alt="" className="star-icon-cpl" />
          ))}
        </div>
        <blockquote className="testimonial-quote-cpl">
          "The CPL program transformed my passion for flying into a fulfilling career. The training was rigorous, but the support from instructors made all the difference!"
        </blockquote>
        <div className="testimonial-author-cpl">
          <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/b07eb6b1c4d6f6caae21f7c3dad21c4e827143d30f5ad846fa5e12b0fdda95f3?apiKey=536a8b606864400fab194975c3b1e353&" alt="Emily Johnson" className="author-image-cpl" />
          <div className="author-info-cpl">
            <p className="author-name-cpl">Emily Johnson</p>
            <p className="author-position-cpl">Commercial Pilot, SkyTours</p>
          </div>
          <div className="testimonial-divider-cpl"></div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fde4f504f71821c9a54324f3cd62d415275b60eb2aaa4622553b66f7130382e9?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353" alt="Company logo" className="company-logo" />
        </div>
        <button className="slider-button-cpl slider-button-left-cpl" aria-label="Previous testimonial">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7199c21a9707ebdf39af70dcf3809d515b966cb04e34e6e74557ed64cc5feb85?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353" alt="Left arrow" className="slider-button-icon-cpl" />
        </button>
        <button className="slider-button-cpl slider-button-right-cpl" aria-label="Next testimonial">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/22f84898dfaf6b30e6fe24bcc4eff0a3d32ac4f6f6dc14860344a0d729020d0c?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353" alt="Right arrow" className="slider-button-icon-cpl" />
        </button>
      </div>
    </section>
  );
}

export default TestimonialCpl;