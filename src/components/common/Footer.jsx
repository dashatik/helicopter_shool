import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
        <a href="/" className="footer-logo-link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/9c4d6035ea0a73d565f53685b8d700c63a996009611cf756b2cf31bf4822dd0b?apiKey=536a8b606864400fab194975c3b1e353&"
              alt="Company Logo"
              className="footer-logo"
            />
          </a>
          <div className="footer-column">
            <h3 className="footer-heading">General</h3>
            <ul className="footer-list">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/training-courses">Training Courses</Link></li>
              <li><Link to="/tours">Helicopter Tours</Link></li>
              <li><Link to="/latest-news">Latest News</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-column2">
            <h3 className="footer-heading">Training Courses</h3>
            <ul className="footer-list">
              <li><Link to="/ppl">PPL Course</Link></li>
              <li><Link to="/cpl">CPL Course</Link></li>
              <li><Link to="/vip">VIP Course</Link></li>
              <li><Link to="/instructor-training">Instructor Training</Link></li>
              <li><Link to="/special-courses">Special Training</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-newsletter">
          <h3 className="newsletter-heading">Subscribe</h3>
          <p className="newsletter-description">Join our newsletter to stay up to date on features and releases.</p>
          <form className="newsletter-form">
            <input type="email" id="email" placeholder="Enter your email" className="newsletter-input" />
            <button type="submit" className="btn btn-secondary-footer">Subscribe</button>
          </form>
          <p className="newsletter-disclaimer">
            By subscribing you agree to our <Link to="/privacy">Privacy Policy</Link> and provide consent to receive updates from our company.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-credits">
          <p>&copy; 2024 Zhong Qian School. All rights reserved.</p>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/cookies">Cookie Policy</Link>
        </div>
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/252d2a92-f07a-4c6f-a77b-23de206d5b15?apiKey=536a8b606864400fab194975c3b1e353&" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/545cd0555eced3fcaf91f03ce3b3c3c75d228cc31f18f31e672dd5c535d96ecb?apiKey=536a8b606864400fab194975c3b1e353&" alt="YouTube" className="social-icon" />
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" aria-label="Other">
            <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/365a19a701b83c01cbd957c0a8c7c8fe9fd0070f9cec4b969eaa14a7bc362034?apiKey=536a8b606864400fab194975c3b1e353&" alt="Other" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
