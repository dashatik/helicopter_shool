import React from 'react';
import './styles.css'

const Newsletter = () => {
  return (
    <section className="newsletter-contact-us">
      <div className="newsletter-content-contact-us">
        <h2 className="newsletter-title-contact-us">Get in Touch with Us</h2>
        <p className="newsletter-description-contact-us">We're here to answer your questions and guide you on your training journey.</p>
        <form className="newsletter-form-contact-us">
          <input type="email" placeholder="Your Email Address" className="newsletter-input-contact-us" required />
          <button type="submit" className="newsletter-submit-contact-us">Submit</button>
        </form>
        <p className="newsletter-terms-contact-us">By clicking Submit, you agree to our Terms and Conditions.</p>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/d4fad9d042f652be9af787bc8c434d03cf0df9a07ef7cac519ead4822003df53?apiKey=536a8b606864400fab194975c3b1e353&" alt="Newsletter illustration" className="newsletter-image-contact-us" />
    </section>
  );
};

export default Newsletter;