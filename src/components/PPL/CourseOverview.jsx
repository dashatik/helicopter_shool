import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const CourseOverview = () => {
  return (
    <section className="course-overview-second-ppl">
      <div className="overview-content-second-ppl">
        <div className="overview-left-second-ppl">
          <span className="overview-tag-second-ppl">Your First Step to the Skies</span>
          <h2 className="overview-title-second-ppl">Course Length and Training Schedule Overview</h2>
          <div className="overview-actions-second-ppl">
            <Link to="/apply-now" className="btn-ppl btn-secondary-overview-second-ppl">
              Enroll
            </Link>
            <Link to="/training-courses" className="btn btn-link-overview-second-ppl">
              Other courses
              <img
                src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/ee5bdbc32bbc53684deecb2f9d63712884517174ee790d5d45a4eae8116d726d?apiKey=536a8b606864400fab194975c3b1e353&"
                alt=""
                className="btn-icon-overview-second-ppl"
              />
            </Link>
          </div>
        </div>
        <div className="overview-right-second-ppl">
          <p className="overview-description-second-ppl">
            Ready to make your flying dreams a reality? Our PPL program offers the perfect mix of hands-on experience and expert training, helping you feel confident and prepared for your journey as a pilot.
          </p>
          <div className="overview-features-second-ppl">
            <div className="overview-feature-second-ppl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/34a472ab-4f3f-4c54-9355-09638ae9fe1b?apiKey=536a8b606864400fab194975c3b1e353&"
                alt=""
                className="feature-icon-second-ppl"
              />
              <h3 className="feature-title-second-ppl">Flight Time & Duration</h3>
              <p className="feature-description-second-ppl">
                Get the right balance of training that works with your schedule. Our course includes <strong>45 hours</strong> of flight time, with a mix of solo and instructor-led sessions.
              </p>
            </div>
            <div className="overview-feature-second-ppl">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/cdd7c5fe755fe4c22f9810d0e6b228c08a92d14ba0d9013da7bf044c002ea10b?apiKey=536a8b606864400fab194975c3b1e353&"
                alt=""
                className="feature-icon-second-ppl"
              />
              <h3 className="feature-title-second-ppl">Program Flexibility</h3>
              <p className="feature-description-second-ppl">
                Tailor your training to your schedule. Choose from full-time or part-time options, allowing you to progress at your own pace while balancing other commitments.
              </p>
            </div>
          </div>
        </div>
        <img
        src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/7159eb1da4979479c6e20d2ce4e102b896aaf5f605b636b7fff36a693321d02e?apiKey=536a8b606864400fab194975c3b1e353&"
        alt="Helicopter flying over landscape"
        className="overview-image-second-ppl"
      />
      </div>
    </section>
  );
};

export default CourseOverview;