import React from 'react';
import HeroSection from './HeroSection';
import CourseSection from './CourseSection';
import ContactInfo from '../ContactUs/ContactInfo';
import CTASection from './CTASection';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import './styles.css';

const TrainingCourses = () => {
  return (
    <main className="training-courses">
      <Navbar />
      <HeroSection />
      <CourseSection />
      <ContactInfo />
      <CTASection />
      <Footer />
    </main>
  );
};

export default TrainingCourses;
