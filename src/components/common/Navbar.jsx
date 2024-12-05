import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // Default language
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageToggle = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language); // Update the selected language
    setIsLanguageMenuOpen(false); // Close the language dropdown
  };

  return (
    <header className="navbar">
      <div className="navbar-content">
        <a href="/" className="navbar-logo-link">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/c5a1116ab5a1414b3629325f7413d0e8aa453a79712fe24ee01f4f4180171599?apiKey=536a8b606864400fab194975c3b1e353&"
            alt="Zhong Qian School Logo"
            className="logo"
          />
        </a>
        <button className="menu-toggle" onClick={handleMenuToggle} aria-label="Toggle menu">
          &#9776;
        </button>
        <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/training-courses" className="nav-link">Training Courses</Link>
          <Link to="/tours" className="nav-link">Helicopter Tours</Link>
          <div className="dropdown">
            <div className="dropdown-toggle">
              More Info
              <img
                src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/2183c93de90b2b35c9c74c96b65dee67a0e04a93e0e267714d00ee5f99fb25cf?apiKey=536a8b606864400fab194975c3b1e353&"
                alt="Dropdown Icon"
                className="dropdown-icon"
              />
            </div>
            <DropdownMenu />
          </div>
        </nav>

        <div className="language-and-buttons">
          <div className="language-toggle-container">
            <button
              className="language-toggle"
              aria-label="Language selection"
              onClick={handleLanguageToggle}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F536a8b606864400fab194975c3b1e353%2Fcb66b5e8fcba4d538053e875203ad55e"
                alt="Language Icon"
                className="additional-language-icon"
              />
              <span>{selectedLanguage}</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/ef83cf85346f4400fc5d90327d968b9db6e628416f1acffd75f5cae8451236b1?apiKey=536a8b606864400fab194975c3b1e353&"
                alt="Dropdown Arrow"
                className="language-icon"
              />
            </button>
            {isLanguageMenuOpen && (
              <div className="language-menu">
                <button
                  className="language-option"
                  onClick={() => handleLanguageSelect('English')}
                >
                  English
                </button>
                <button
                  className="language-option"
                  onClick={() => handleLanguageSelect('Chinese')}
                >
                  中文 (Chinese)
                </button>
              </div>
            )}
          </div>
          <Link to="/contact" className="btn-navbar btn-first-navbar">Contact us</Link>
          <Link to="/apply-now" className="btn-navbar btn-second-navbar">Apply now</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;



