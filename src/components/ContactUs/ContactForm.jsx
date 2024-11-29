import React from 'react';
import './styles.css'

const Contact = () => {
  return (
    <section className="contact-form">
      <div className="container-form">
        <div className="form-info">
          <div className="section-header-form">
            <span className="tagline-form">Connect</span>
            <h2 className="section-title-form">Get in Touch</h2>
            <p className="section-description-form">We're here to answer your questions and assist you.</p>
          </div>
          <div className="form-details">
            <div className="form-item">
              <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/8d687d280a8686ef4d2a99e2fbccdf65cd008077704deba563ef4d2b868f1a9b?apiKey=536a8b606864400fab194975c3b1e353&" alt="" className="form-icon" />
              <a href="mailto:hello@zhongqian.com" className="form-link">hello@zhongqian.com</a>
            </div>
            <div className="form-item">
              <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/0026f4cafa9e2ac482b07c5044a35bc57d260b9ff71a6ac1d48ac8fc1ac8662d?apiKey=536a8b606864400fab194975c3b1e353&" alt="" className="form-icon" />
              <a href="tel:+861060862234" className="form-link">+86 10 6086 2234</a>
            </div>
            <div className="form-item">
              <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/6a53e2eb0f42884457a8b89ca1ddb6a9ca35420abc41733ef9335d4346e7999f?apiKey=536a8b606864400fab194975c3b1e353&" alt="" className="form-icon" />
              <address className="contact-address">Mentougou District, 102308, Beijing, China</address>
            </div>
          </div>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" name="name" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" name="email" className="form-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" name="message" className="form-textarea" placeholder="Write your message..." required></textarea>
          </div>
          <div className="checkbox-container">
            <label className="checkbox-label">
              <input type="checkbox" name="terms" required />
              I agree to Terms
            </label>
          </div>
          <button type="submit" className="btn btn-primary-form">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;