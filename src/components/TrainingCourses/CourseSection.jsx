import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    title: "Private Pilot License for Beginners",
    description: "Start your flying journey here. Our beginner course is perfect for first-time pilots, giving you the skills and confidence to take to the skies.",
    tagline: "Ready to take off?",
    image: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/8918a2a338267777ef15a47a1873deed9e17dd372ff64d96198079ced4d7eec4?apiKey=536a8b606864400fab194975c3b1e353&",
    primaryAction: "Explore Course",
    secondaryAction: "Enroll",
    link: '/ppl'
  },
  {
    title: "VIP Pilot Courses",
    description: "Our VIP courses are customized for experienced pilots. Get tailored instruction and top-tier training designed just for you.",
    image: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/6aa15130417a6b2181190dcef3560bcdbf31bd0d6941f516ca7b7d3eecbc6b4a?apiKey=536a8b606864400fab194975c3b1e353&",
    action: "Exclusive Training",
    link: '/vip'
  },
  {
    title: "Special Training",
    description: "For pilots with unique goals, our special training programs provide customized instruction to help you reach your objectives.",
    image: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/c045c677c94cc8f2f730b9c51e5e40d8cbebf568e43f5050c4f1fc80bd6594fe?apiKey=536a8b606864400fab194975c3b1e353&",
    action: "Tailored for You",
    link: '/special-courses'
  },
  {
    title: "Become a Helicopter Instructor",
    description: "Take the next step in your career by training the pilots of tomorrow. Get certified as a helicopter instructor and inspire others.",
    tagline: "Pass on your passion.",
    image: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/38c1a4025e4113eda264b88edc96ad4864f6f636250ad8cf7a24c207bd309e79?apiKey=536a8b606864400fab194975c3b1e353&",
    action: "Learn How",
    link: '/instructor-training'
  },
  {
    title: "Commercial Pilot License for Aspiring Pilots",
    description: "Make flying your profession! This course will take you from enthusiast to professional, with the certifications you need to fly commercially.",
    tagline: "Your career, airborne",
    image: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/10f6636e9db3413b3cb4b6746b7e140dce56271e02f23f31eed1d5dd99fceb38?apiKey=536a8b606864400fab194975c3b1e353&",
    primaryAction: "Explore Course",
    secondaryAction: "Enroll",
    link: '/cpl'
  }
];

const CourseSection = () => {
  return (
    <section className="course-section" aria-labelledby="course-section-title">
      <div className="section-header">
        <p className="tagline">Courses</p>
        <h2 id="course-section-title" className="section-title">Pilot Training Programs</h2>
        <p className="section-description">Transform your passion for flying into a career.</p>
      </div>
      <div className="course-grid">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
};

export default CourseSection;
