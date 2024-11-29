import React from 'react';

function CourseExplanation() {
  return (
    <section className="course-explanation-cpl">
      <div className="explanation-container-cpl">
        {/* Left Column */}
        <div className="explanation-left-cpl">
          <h2 className="explanation-title-cpl">
            Explanation <br /> of the CPL certificate
          </h2>
        </div>
        {/* Right Column */}
        <div className="explanation-right-cpl">
          <p className="explanation-text-cpl">
            A Commercial Pilot License or so called "CPL" certificate allows you to{' '}
            <span className="gradient-text">
              fly commercial aircraft, enabling you to work for airlines, charter companies, or
              offer aerial services.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default CourseExplanation;
