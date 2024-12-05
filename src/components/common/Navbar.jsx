import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <button className="language-toggle" aria-label="Language selection">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/ef83cf85346f4400fc5d90327d968b9db6e628416f1acffd75f5cae8451236b1?apiKey=536a8b606864400fab194975c3b1e353&"
              alt="Language Selection Icon"
              className="language-icon"
            />
          </button>
          <Link to="/contact" className="btn-navbar btn-first-navbar">Contact us</Link>
          <Link to="/apply-now" className="btn-navbar btn-second-navbar">Apply now</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


