import React from 'react';
import Navbar from '../common/Navbar';
import HeroSection from './HeroSection';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import Newsletter from './Newsletter';
import Footer from '../common/Footer';
import './styles.css';


const ContactUs = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <main>
        <HeroSection />
        <ContactInfo />
        <ContactForm />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;