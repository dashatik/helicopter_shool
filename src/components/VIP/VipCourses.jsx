import React from 'react';
import Navbar from '../common/Navbar';
import HeroSection from './HeroSection';
import ProgramHighlights from './ProgramHighlights';
import FlexibilitySection from './FlexibilitySection';
import CallToAction from './CallToAction';
import ContactInfo from '../ContactUs/ContactInfo';
import Footer from '../common/Footer';
import './styles.css'

const VipCourses = () => {
  return (
    <div className="vip-courses">
      <Navbar />
      <main>
      <HeroSection />
      <ProgramHighlights />
      <FlexibilitySection />
      <CallToAction />
      <ContactInfo />
      </main>
      <Footer />
    </div>
  );
};

export default VipCourses;