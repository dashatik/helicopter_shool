import React from 'react';
import { Link } from 'react-router-dom';

const Prerequisites = () => {
  return (
    <section className="prerequisites-instructor">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/474d8c8b07ccdbdb6a6ba3d2c2c3058e764a1b8e609aa63cdd0eda0ffa7e319e?apiKey=536a8b606864400fab194975c3b1e353&"
        alt="Helicopter in flight"
        className="section-image-prerequisites-instructor"
      />
      <div className="content-wrapper-prerequisites-instructor">
        <p className="section-tagline-prerequisites-instructor">Prerequisites</p>
        <h2 className="section-title-prerequisites-instructor">Who's Eligible to Enroll?</h2>
        <p className="section-description-prerequisites-instructor">
          To join the Helicopter Instructor Training course, you'll need some flight experience under your belt. Candidates should have at least 1,500 flight hours and hold a valid Commercial Pilot License (CPL).
        </p>
        <div className="requirements-grid-prerequisites-instructor">
          <div className="requirement-item-prerequisites-instructor">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/1f0f653e5166ea0e64e5233bc968de8d8f1998f5e9aa3f81243a3cf27c0aabbf?apiKey=536a8b606864400fab194975c3b1e353&"
              alt=""
              className="requirement-icon-prerequisites-instructor"
            />
            <h3 className="requirement-title-prerequisites-instructor">Flight Hours</h3>
            <p className="requirement-description-prerequisites-instructor">You need a minimum of 1,500 flight hours.</p>
          </div>
          <div className="requirement-item-prerequisites-instructor">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/b638d04cc7ceda3b62ca78c04d8fddfbdc992779a2e153cf27753b9210dd7df0?apiKey=536a8b606864400fab194975c3b1e353&"
              alt=""
              className="requirement-icon-prerequisites-instructor"
            />
            <h3 className="requirement-title-prerequisites-instructor">CPL Required</h3>
            <p className="requirement-description-prerequisites-instructor">Make sure your Commercial Pilot License (CPL) is up to date.</p>
          </div>
        </div>
        <div className="prerequisite-actions-instructor">
          <Link to="/apply-now" className="btn-prere-instructor btn-primary-prere-instructor">
            Apply Now
          </Link>
          <Link to="/about" className="btn-prere-instructor btn-link-prere-instructor">
            About Us
            <img
              src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/aca4793d99dfbcb231a64c5d8f12b42bb9bef16573370722e95d30ec90a4c4eb?apiKey=536a8b606864400fab194975c3b1e353&"
              alt=""
              className="link-icon-prere-instructor"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Prerequisites;
