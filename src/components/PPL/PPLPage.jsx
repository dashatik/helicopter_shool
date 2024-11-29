import React from 'react';
import Navbar from '../common/Navbar';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import CourseOverview from './CourseOverview';
import TimelineSection from './TimelineSection';
import Summary from './Summary';
import Skills from './Skills';
import CTASection from './CTASection';
import Footer from '../common/Footer';
import './styles.css'

const PPL = () => {
  return (
    <div className="main-container">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <CourseOverview />
        <TimelineSection />
        <Summary />
        <Skills />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default PPL;