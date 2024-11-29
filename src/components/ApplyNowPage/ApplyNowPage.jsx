import React from 'react';
import Navbar from '../common/Navbar';
import Header from './Header';
import ApplicationProcess from './ApplicationProcess';
import ApplicationForm from './ApplicationForm';
import EligibilitySection from './EligibilitySection';
import FAQSection from './FAQSection';
import ContactSection from './ContactSection';
import Footer from '../common/Footer';
import './styles.css';

const ApplyNowPage = () => {
  return (
    <div className="apply-now-page">
      <Navbar />
      <main>
        <Header />
        <ApplicationProcess />
        <ApplicationForm />
        <EligibilitySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ApplyNowPage;