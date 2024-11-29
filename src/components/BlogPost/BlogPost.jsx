import React from 'react';
import Navbar from '../common/Navbar';
import BlogPostHeader from './BlogPostHeader';
import BlogContent from './BlogContent';
import LatestNews from './LatestNews';
import CallToAction from './CallToAction';
import Footer from '../common/Footer';
import './styles.css';

const BlogPost = () => {
  return (
    <div className="news-blog-post">
      <Navbar />
      <main>
          <BlogPostHeader />
          <BlogContent />
          <LatestNews />
          <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;