import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ image, category, title, excerpt, author, date, readTime, link }) => {
  return (
    <Link to={link} className="blog-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
      <article className="blog-card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <span className="card-category">{category}</span>
          <h3 className="card-title">{title}</h3>
          <p className="card-excerpt">{excerpt}</p>
        </div>
        <footer className="card-footer">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/927ad02a1b1459835824c5cd52b2f4dcaa54fcf5426f957fc4679fcc6f40ecfe?apiKey=536a8b606864400fab194975c3b1e353&"
            alt={author}
            className="author-avatar"
          />
          <div className="author-info">
            <span className="author-name">{author}</span>
            <div className="post-meta">
              <time dateTime={date}>{date}</time>
              <span className="separator">•</span>
              <span className="read-time">{readTime}</span>
            </div>
          </div>
        </footer>
      </article>
    </Link>
  );
};

export default BlogCard;
