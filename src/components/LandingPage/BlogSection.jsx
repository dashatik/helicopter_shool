import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const BlogPost = ({ image, category, readTime, title, excerpt }) => (
  <div className="blog-post">
    <img src={image} alt={title} className="blog-post-image" />
    <div className="blog-post-content">
      <div className="blog-post-info">
        <span className="blog-post-category">{category}</span>
        <span className="blog-post-read-time">{readTime}</span>
      </div>
      <h3 className="blog-post-title">{title}</h3>
      <p className="blog-post-excerpt">{excerpt}</p>
      <Link to="/news-blog-post" className="blog-post-link">
        <span className="link-text">Read more</span>
      </Link>
    </div>
  </div>
);

const BlogSection = () => {
  const blogPosts = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6122e2dede8f6d57ce92cd51059de5442a126992ab7afe13b1cc6c75bbec1dc8?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353",
      category: "News",
      readTime: "5 min read",
      title: "A sneak peak into the helicopter industry",
      excerpt: "We are always pleased when we receive visits from colleagues in the helicopter industry...."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9e895adc79a0155ee7502226aa425b00ca7ccda4f5beccaad392190ba77b8e9?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353",
      category: "Updates",
      readTime: "5 min read",
      title: "Pilot shortage threatens preparedness",
      excerpt: "Helicopters come to the rescue when extreme weather stops cars and trains..."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a199d8ba13d611f2e37fac2c59bdb7d248e02e580731ea2418c7e8a100965b7?placeholderIfAbsent=true&apiKey=536a8b606864400fab194975c3b1e353",
      category: "Highlights",
      readTime: "5 min read",
      title: "Student pilot assessments",
      excerpt: "As a professional pilot you will have to undergo a psychological assessment according to..."
    }
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-title-wrapper">
            <p className="blog-tagline">Updates</p>
            <div className="blog-title">
              <h2 className="blog-heading">Latest Insights and News</h2>
              <p className="blog-subtitle">Stay updated with our latest articles.</p>
            </div>
          </div>
          <div className="blog-view-all">
            <Link to="/latest-news" className="btn-outline-blogpost">View all</Link>
          </div>
        </div>
        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;