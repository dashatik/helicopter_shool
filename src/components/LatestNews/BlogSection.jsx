import React from 'react';
import BlogCard from './BlogCard';

const blogPosts = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/f57c89ebe687dce9f702e8ab693bd6cf89408841fc78158d01547c342673ec64?apiKey=536a8b606864400fab194975c3b1e353&",
    category: "Aviation",
    title: "A sneak peek into the helicopter industry",
    excerpt: "We are always pleased when we receive visits from colleagues in the helicopter industry. This week, we had the pleasure of welcoming Chief Pilot Jarle Solbakken and Jørgen Li from […]",
    author: "John Doe",
    date: "11 Jan 2024",
    readTime: "4 min read",
    link: '/news-blog-post'
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/1c5a0c041e544c305dc677f8de6912928ed86995e5716d447fa88bd56ad2dba7?apiKey=536a8b606864400fab194975c3b1e353&",
    category: "Events",
    title: "– Pilot shortage threatens preparedness",
    excerpt: "Helicopters come to the rescue when extreme weather stops cars and trains. But who will pilot the helicopters in the future? Now several flight academies are warning of poor recruitment […]",
    author: "Jane Smith",
    date: "15 Feb 2024",
    readTime: "3 min read",
    link: '/news-blog-post'
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/0edf60aeaeaee9399c62b8800317abd628aeba0e23b5d688a1c7074381ebf889?apiKey=536a8b606864400fab194975c3b1e353&",
    category: "Safety",
    title: "Advice for helicopter pilots in harsh winter conditions",
    excerpt: "Welcome to Norway! The land of the vikings – and the winter!",
    author: "Mike Johnson",
    date: "20 Mar 2024",
    readTime: "6 min read",
    link: '/news-blog-post'
  }
];

const BlogSection = () => {
  return (
    <section className="blog-section-latest-news">
      <div className="section-header-latest-news">
        <span className="section-tag-latest-news">News</span>
        <h2 className="section-title-latest-news">Latest Updates and News</h2>
        <p className="section-description-latest-news">Stay informed with our latest articles and announcements.</p>
      </div>
      <div className="blog-grid-latest-news">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
      <div className="section-actions-latest-news">
        <a href="#all-posts" className="btn-latest-news btn-secondary-blog-latest-news">View all</a>
      </div>
    </section>
  );
};

export default BlogSection;
