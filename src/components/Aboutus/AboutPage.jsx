import React from 'react';
import Navbar from '../common/Navbar';
import Hero from './Hero';
import MissionVision from './MissionVision';
import CoreValues from './CoreValues';
import Credentials from './Credentials';
import History from './History';
import Team from './Team';
import WhyChooseUs from './WhyChooseUs';
import ContactForm from '../ContactUs/ContactForm';
import ContactInfo from '../ContactUs/ContactInfo';
import Footer from '../common/Footer';
import './styles.css'

const AboutPage = () => {
  return (
    <div className="about-page">
       <Navbar />
      <main>
        <Hero />
        <MissionVision />
        <CoreValues />
        <Credentials />
        <History />
        <Team />
        <WhyChooseUs />
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;