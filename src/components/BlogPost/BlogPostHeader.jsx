import React from 'react';

const BlogPostHeader = () => {
  return (
    <section className="blog-post-header">
      <div className="header-content-blog-post">
      <nav className="breadcrumbs-blog-post">
        <a href="#news" className="breadcrumb-link-blog-post">News</a>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/23c8f08538fb9302c42a52a0358fb41e5d8b10685273633897233712cf7591a1?apiKey=536a8b606864400fab194975c3b1e353&" 
          alt=">" 
          className="breadcrumb-separator-blog-post" 
        />
        <a href="#insights" className="breadcrumb-link-blog-post">Insights</a>
      </nav>
        <h1 className="blog-title-blog-post">– Pilot shortage threatens preparedness (full article)</h1>
        <div className="header-author-info-blog-post">
          <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/2d09c03da21388a072b8e9e91a33ce07e90bb37a0a93ebec57fe38927bb91938?apiKey=536a8b606864400fab194975c3b1e353&" alt="John Doe" className="header-author-avatar-blog-post" />
          <div className="header-author-details-blog-post">
            <p className="header-author-name-blog-post">John Doe</p>
            <p className="header-post-meta-blog-post">
              <time dateTime="2023-01-11">11 Jan 2023</time> • <span>5 min read</span>
            </p>
          </div>
        </div>
        <div className="header-share-buttons-blog-post">
          <button aria-label="Share on Facebook"><img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/cf375eb0029f12c9826500dc7ae55899447f363e6e963a88eb4f0b5f13d9c69e?apiKey=536a8b606864400fab194975c3b1e353&" alt="" /></button>
          <button aria-label="Share on Twitter"><img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/87ec53ece447b3ae9f6e9f06db93c5ac976c08b25cd66b0b4bed7aa0afb5c6f0?apiKey=536a8b606864400fab194975c3b1e353&" alt="" /></button>
          <button aria-label="Share on LinkedIn"><img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/b1332e40c061482067062bfab80c125f3ae26fa5c3731b55424bf3b58522d3e0?apiKey=536a8b606864400fab194975c3b1e353&" alt="" /></button>
          <button aria-label="Copy link"><img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/31013d06cddb55c39df4cdeb33b6b48c6fbc05737dd27767b800efb73ded2caf?apiKey=536a8b606864400fab194975c3b1e353&" alt="" /></button>
        </div>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/b0cdca3cdace536c82f808b7a0dccd2b7da7c5124c3ed1e334e95ede697facaf?apiKey=536a8b606864400fab194975c3b1e353&" alt="Blog post header image" className="header-image-blog-post" />
    </section>
  );
};

export default BlogPostHeader;