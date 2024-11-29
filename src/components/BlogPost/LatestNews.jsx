import React from 'react';

const newsItems = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/f57c89ebe687dce9f702e8ab693bd6cf89408841fc78158d01547c342673ec64?apiKey=536a8b606864400fab194975c3b1e353&",
    category: "Aviation",
    title: "A sneak peek into the helicopter industry",
    excerpt: "We are always pleased when we receive visits from colleagues in the helicopter industry. This week, we had the pleasure of welcoming Chief Pilot Jarle Solbakken and Jørgen Li from […]",
    author: {
      name: "John Doe",
      avatar: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/927ad02a1b1459835824c5cd52b2f4dcaa54fcf5426f957fc4679fcc6f40ecfe?apiKey=536a8b606864400fab194975c3b1e353&",
      date: "11 Jan 2024",
      readTime: "4 min read"
    }
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/1c5a0c041e544c305dc677f8de6912928ed86995e5716d447fa88bd56ad2dba7?apiKey=536a8b606864400fab194975c3b1e353&",
    category: "Events",
    title: "– Pilot shortage threatens preparedness",
    excerpt: "Helicopters come to the rescue when extreme weather stops cars and trains. But who will pilot the helicopters in the future? Now several flight academies are warning of poor recruitment […]",
    author: {
      name: "Jane Smith",
      avatar: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/26979aa2dfc488d306e0d064a30e81946ae506156c15ea130f71631c6e2737a7?apiKey=536a8b606864400fab194975c3b1e353&",
      date: "15 Feb 2024",
      readTime: "3 min read"
    }
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/0edf60aeaeaee9399c62b8800317abd628aeba0e23b5d688a1c7074381ebf889?apiKey=536a8b606864400fab194975c3b1e353&",
    category: "Safety",
    title: "Advice for helicopter pilots in harsh winter conditions",
    excerpt: "Welcome to Norway! The land of the vikings – and the winter!",
    author: {
      name: "Mike Johnson",
      avatar: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/6e242455a33dfbb7383b2c4d491b22cebbf8e419cf8c08deb9d739367aa26f6a?apiKey=536a8b606864400fab194975c3b1e353&",
      date: "20 Mar 2024",
      readTime: "6 min read"
    }
  }
];

const LatestNews = () => {
  return (
    <section className="latest-news-blog-post">
      <div className="section-header-blog-post">
        <span className="tagline-blog-post">News</span>
        <h2 className="section-title-blog-post">Latest Updates and News</h2>
        <p className="section-description-blog-post">Stay informed with our latest articles and announcements.</p>
      </div>
      <div className="news-grid-blog-post">
        {newsItems.map((item, index) => (
          <article key={index} className="news-card-blog-post">
            <img src={item.image} alt="" className="news-image-blog-post" />
            <div className="news-content-blog-post">
              <span className="news-category-blog-post">{item.category}</span>
              <h3 className="news-title-blog-post">{item.title}</h3>
              <p className="news-excerpt-blog-post">{item.excerpt}</p>
            </div>
            <div className="news-author-blog-post">
              <img src={item.author.avatar} alt={item.author.name} className="author-avatar" />
              <div className="author-info-blog-post">
                <span className="author-name-blog-post">{item.author.name}</span>
                <div className="post-meta-blog-post">
                  <time dateTime={item.author.date}>{item.author.date}</time> • <span>{item.author.readTime}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="news-actions-blog-post">
        <a href="#view-all" className="btn-news-blog-post btn-secondary-blog-post">View all</a>
      </div>
    </section>
  );
};

export default LatestNews;