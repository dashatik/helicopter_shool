import React from 'react';
import Navbar from '../common/Navbar';
import Hero from './Hero';
import CourseExplanation from './CourseExplanation';
import CourseDetails from './CourseDetails';
import DurationScheduling from './DurationScheduling';
import Milestones from './Milestones';
import CareerOpportunities from './CareerOpportunities';
import Testimonial from './Testimonial';
import CallToAction from './CallToAction';
import FAQ from './FAQ';
import Footer from '../common/Footer';
import './styles.css'

function CplCourse() {
  return (
    <div className="cpl-course">
      <Navbar />
      <main>
      <Hero />
      <CourseExplanation />
      <CourseDetails />
      <DurationScheduling />
      <Milestones />
      <CareerOpportunities />
      <Testimonial />
      <CallToAction />
      <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default CplCourse;