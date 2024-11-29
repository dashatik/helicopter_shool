import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, description, tagline, image, primaryAction, secondaryAction, action, link }) => {
  return (
    <article className="course-card">
      {image && <img src={image} alt={title} className="course-image" />}
      <div className="card-content">
        {tagline && <p className="card-tagline">{tagline}</p>}
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-actions">

          {secondaryAction && (
            <Link to={link} className="btn-course btn-link-coursesection">
              {secondaryAction}
              <span className="icon-chevron-right" aria-hidden="true"></span>
            </Link>
          )}
          {action && (
            <Link to={link} className="btn-course btn-link-coursesection">
              {action}
              <span className="icon-chevron-right" aria-hidden="true"></span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default CourseCard;