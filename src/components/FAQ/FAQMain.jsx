import React from 'react';
import Navbar from '../common/Navbar';
import FAQSection from './FAQSection';
import NeedHelp from './NeedHelp';
import Footer from '../common/Footer';
import './styles.css';

const FAQMain = () => {
    return (
        <div className='faq-main'>
            <Navbar />
            <main>
                <FAQSection />
                <NeedHelp />
            </main>
            <Footer />
        </div>
    );
};

export default FAQMain;