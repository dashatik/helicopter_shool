import React from 'react';

const CallToAction = () => {
  return (
    <section className="cta-blog-post">
      <div className="cta-card-blog-post">
        <div className="cta-content-blog-post">
          <h2 className="cta-title-blog-post">Join Our Community Today</h2>
          <p className="cta-description-blog-post">Subscribe to our newsletter for the latest updates.</p>
        </div>
        <div className="cta-actions-blog-post">
          <button className="btn-blog-post btn-primary-CallToAction-blog-post">Subscribe</button>
          <button className="btn-blog-post btn-secondary-CallToAction-blog-post">Share</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;