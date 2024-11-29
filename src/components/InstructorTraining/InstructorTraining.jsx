import React from 'react';
import Navbar from '../common/Navbar';
import HeroSection from './HeroSection';
import WhyBecomeInstructor from './WhyBecomeInstructor';
import CourseDetails from './CourseDetails';
import Prerequisites from './Prerequisites';
import UnlockPotential from './UnlockPotential';
import Footer from '../common/Footer';
import './styles.css'

const InstructorTraining = () => {
  return (
    <div className="instructor-training">
      <Navbar />
      <main>
      <HeroSection />
      <WhyBecomeInstructor />
      <CourseDetails />
      <Prerequisites />
      <UnlockPotential />
      </main>
      <Footer />
    </div>
  );
};

export default InstructorTraining;