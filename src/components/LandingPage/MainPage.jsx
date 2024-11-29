import React from 'react';
import './styles.css';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Header from './Header';
import IntroSection from './IntroSection';
import StatsSection from './StatsSection';
import TrainingSection from './TrainingSection';
import FleetSection from './FleetSection';
import CoursesSection from './CoursesSection';
import TestimonialSection from './TestimonialSection';
import FAQSection from './FAQSection';
import BlogSection from './BlogSection';
import ContactInfo from '../ContactUs/ContactInfo';

const MainPage = () => {
  return (
    <div className="main-content">
      <Navbar />
      <main>
      <Header />
      <StatsSection />
      <IntroSection />
      <TrainingSection />
      <FleetSection />
      <CoursesSection />
      <TestimonialSection />
      <FAQSection />
      <BlogSection />
      <ContactInfo />
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;