import React from 'react';
import Navbar from '../common/Navbar';
import HeroSection from './HeroSection';
import BlogSection from './BlogSection';
import TestimonialSection from './TestimonialSection';
import Footer from '../common/Footer';
import './styles.css'

const LatestNews = () => {
  return (
    <div className="latest-news">
      <Navbar />
      <main>
      <HeroSection />
      <BlogSection />
      <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default LatestNews;