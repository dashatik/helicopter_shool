// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/MainPage';
import AboutPage from './components/Aboutus/AboutPage';
import TrainingCourses from './components/TrainingCourses/TrainingCourses';
import ApplyNowPage from './components/ApplyNowPage/ApplyNowPage';
import BlogPost from './components/BlogPost/BlogPost';
import ContactUs from './components/ContactUs/ContactUs';
import CPLCourse from './components/CPL/CplCourse';
import FAQ from './components/FAQ/FAQMain';
import InstructorTraining from './components/InstructorTraining/InstructorTraining';
import PPLPage from './components/PPL/PPLPage';
import SpecialCourses from './components/Special/SpecialCourses';
import Tours from './components/Tours/HelicopterTours';
import VIPCourses from './components/VIP/VipCourses';
import LatestNews from './components/LatestNews/LatestNews';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/training-courses" element={<TrainingCourses />} />
        <Route path="/apply-now" element={<ApplyNowPage />} />
        <Route path="/news-blog-post" element={<BlogPost />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cpl" element={<CPLCourse />} />
        <Route path="/faq-main" element={<FAQ />} />
        <Route path="/instructor-training" element={<InstructorTraining />} />
        <Route path="/ppl" element={<PPLPage />} />
        <Route path="/special-courses" element={<SpecialCourses />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/vip" element={<VIPCourses />} />
        <Route path="/latest-news" element={<LatestNews />} />
      </Routes>
    </Router>
  );
}

export default App;

