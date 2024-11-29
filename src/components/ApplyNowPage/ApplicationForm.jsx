import React from 'react';

const ApplicationForm = () => {
  return (
    <section className="application-form">
      <div className="form-header">
        <span className="form-tagline">Apply</span>
        <h2 className="form-title">Application Form</h2>
        <p className="form-description">We're excited to help you start your journey!</p>
      </div>
      <form className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="topic">Select a Topic</label>
          <select id="topic" name="topic" required>
            <option value="">Choose one...</option>
            <option value="course1">CPL course</option>
            <option value="course2">PPL course</option>
            <option value="course3">Instructor Training</option>
            <option value="other">Other</option>
          </select>
        </div>
        <fieldset className="form-group">
          <legend>What describes you best?</legend>
          {['Aspiring Pilot', 'Current Student', 'Industry Professional', 'Helicopter Enthusiast', 'Other Interest', 'None'].map((option) => (
            <div key={option} className="radio-option">
              <input type="radio" id={option.replace(/\s+/g, '')} name="description" value={option} />
              <label htmlFor={option.replace(/\s+/g, '')}>{option}</label>
            </div>
          ))}
        </fieldset>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter your message..." required></textarea>
        </div>
        <div className="form-group checkbox-group">
          <input type="checkbox" id="terms" name="terms" required />
          <label htmlFor="terms">I agree to Terms</label>
        </div>
        <div className="button-container-form">
        <button type="submit" className="btn btn-primary-form">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ApplicationForm;