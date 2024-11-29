import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const CoursesSection = () => {
  const courses = [
    {
      title: 'Private Pilot Licence (PPL)',
      description: 'This is the entry-level license for anyone looking to fly helicopters for personal use.',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bdecee2ba3b0bf39930295d7c783513fcc5a65c30d4c57bdae7fadde80b337bc?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353',
      link: '/ppl'
    },
    {
      title: 'Commercial Pilot Licence (CPL)',
      description: 'The CPL is designed for those who want to become professional pilots.',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e80bdee67355ea40439d8b6927d9d4fe0e45e77d7fe994f43024b7f6674fa4c8?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353',
      link: '/cpl'
    },
    {
      title: 'Specialized Training Advanced',
      description: 'This course is for experienced pilots who want to become flight instructors. Advanced programs focused on niche areas such as night flying, emergency maneuvers.',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8a6b4537749085464032aafb8e886d181bcec70cc305d7e699404c647f6bb44a?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353',
      link: '/special-courses'
    },
    {
      title: 'VIP Courses (Personalized)',
      description: 'Tailored for high-profile clients, these courses offer personalized schedules and training experiences.',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b9416c749cba637b964c1a0f6069a8902d31a5842c4de05cdfc23aaebc313542?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353',
      link: '/vip'
    }
  ];

  return (
    <section className="courses-section">
      <div className="courses-title">
        <p className="courses-tagline">Courses</p>
        <h2 className="courses-heading">Explore Our Comprehensive Training Programs</h2>
        <p className="courses-description">
          Our training courses are designed to elevate your skills and confidence in helicopter aviation. 
          From beginner to advanced levels, we offer a range of programs tailored to your needs.
        </p>
      </div>
      <div className="courses-content">
        <div className="courses-row">
          {courses.map((course, index) => (
            <Link key={index} to={course.link} className="course-item">
              <img src={course.icon} alt={course.title} className="course-icon" />
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="courses-actions">
        <Link to="/training-courses" className="btn-dark-courses">Choose my course</Link>
        <Link to="/apply-now" className="link-with-icon-courses">
          <span className="link-text">Apply now</span>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/01a19286-4702-4aa2-a47f-1e2a071b2800?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353" alt="Arrow icon" className="link-icon" />
        </Link>
      </div>
      {[1, 2, 3, 4].map((num) => (
        <div key={num} className={`course-box course-box-${num}`} aria-hidden="true"></div>
      ))}
    </section>
  );
};

export default CoursesSection;
