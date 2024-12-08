import React from 'react';
import './styles.css';

const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <div className="dropdown-column">
        <h3 className="dropdown-heading">Training Modules</h3>
        <ul className="dropdown-list">
          <li className="dropdown-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/539eb0f8ec854dc9a3cd8285fe1ceb68" alt="PPL Courses" className="dropdown-image" />
            <div>
              <a href="/ppl" className="dropdown-link">PPL Courses</a>
              <p className="dropdown-description">Private Pilot License Training for Beginners</p>
            </div>
          </li>
          <li className="dropdown-item">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F536a8b606864400fab194975c3b1e353%2F5c17b4a4298b471fb49d4599674dc14d" alt="CPL Courses" className="dropdown-image" />
            <div>
              <a href="/cpl" className="dropdown-link">CPL Courses</a>
              <p className="dropdown-description">Commercial Pilot License for Aspiring Pilots</p>
            </div>
          </li>
          <li className="dropdown-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/2f63178447b94c7993f72f631a3bc646" alt="VIP Courses" className="dropdown-image" />
            <div>
              <a href="/vip" className="dropdown-link">VIP Courses</a>
              <p className="dropdown-description">Exclusive Training for Elite Helicopter Pilots</p>
            </div>
          </li>
          <li className="dropdown-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/296df2ee4a1d403a8d1be57d9420d288" alt="Instructor Training" className="dropdown-image" />
            <div>
              <a href="/instructor-training" className="dropdown-link">Instructor Training</a>
              <p className="dropdown-description">Become a Certified Helicopter Instructor</p>
            </div>
          </li>
          <li className="dropdown-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/61e90a70a35d4b5e9174c659995d85a1" alt="Special Training" className="dropdown-image" />
            <div>
              <a href="/special-courses" className="dropdown-link">Special Training</a>
              <p className="dropdown-description">Elevate your skills to the new level</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="dropdown-column">
        <h3 className="dropdown-heading">General</h3>
        <ul className="dropdown-list">
          <li className="dropdown-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/aafd11c31c534d0cbbee09b313e6bd0c" alt="FAQ" className="dropdown-image" />
            <div>
              <a href="/faq-main" className="dropdown-link">FAQ</a>
            </div>
          </li>
          <li className="dropdown-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/83be0fef99f34b0dabebff71e518c328" alt="News" className="dropdown-image" />
            <div>
              <a href="/latest-news" className="dropdown-link">News</a>
            </div>
          </li>
          <li className="dropdown-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/f2206468173f4a2686e387a7cff29a4c" alt="Contact Us" className="dropdown-image" />
            <div>
              <a href="/contact" className="dropdown-link">Contact Us</a>
            </div>
          </li>
          <li className="dropdown-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/77aa1754cbd9490da43964fa650d46fd" alt="Apply Now" className="dropdown-image" />
            <div>
              <a href="/apply-now" className="dropdown-link">Apply Now</a>
            </div>
          </li>
        </ul>
      </div>
      <div className="latest-news">
        <h3 className="dropdown-heading">Latest News</h3>
        <div className="news-item">
          <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/0f634dec006549a6867f46c53c4bc299" alt="News 1" className="dropdown-news-image" />
          <div>
            <h4 className="news-title">A sneak peek into the helicopter industry</h4>
            <p className="news-description">We are always pleased when we receive visits from colleagues in the helicopter industry.</p>
            <a href="/news-blog-post" className="news-link">Read more</a>
          </div>
        </div>
        <div className="news-item">
          <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/83cb130cc00040c3b591b2a3c9c518b0" alt="News 2" className="dropdown-news-image" />
          <div>
            <h4 className="news-title">Greetings from Greece</h4>
            <p className="news-description">We love getting greetings from our former students in sunnier places!</p>
            <a href="/news-blog-post" className="news-link">Read more</a>
          </div>
        </div>
        <div className="news-more">More</div>
      </div>
    </div>
  );
};

export default DropdownMenu;



