import React from 'react';
import Navbar from '../common/Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import CTASection from './CTASection';
import TestimonialSection from './TestimonialCard';
import CTASectionAlt from './CTASectionAlt';
import Footer from '../common/Footer';
import './styles.css'

const SpecialCourses = () => {
  return (
    <div className="special-courses">
      <Navbar />
      <main>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <TestimonialSection />
      <CTASectionAlt />
      </main>
      <Footer />
    </div>
  );
};

export default SpecialCourses;