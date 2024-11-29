import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const CourseDetailsInstr = () => {
  const courseFeatures = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/1ecce0e316b35db789f06e260c4a3d175edda152279dc4ad2ee652cadaece510?apiKey=536a8b606864400fab194975c3b1e353&",
      title: "Hone Your Teaching Skills:",
      description: "Learn how to effectively communicate and teach aviation techniques."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/1ecce0e316b35db789f06e260c4a3d175edda152279dc4ad2ee652cadaece510?apiKey=536a8b606864400fab194975c3b1e353&",
      title: "Focus on Safety:",
      description: "Understand safety management to ensure a secure learning environment."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/1ecce0e316b35db789f06e260c4a3d175edda152279dc4ad2ee652cadaece510?apiKey=536a8b606864400fab194975c3b1e353&",
      title: "Adaptable Instruction:",
      description: "Master different teaching styles to reach students of all backgrounds and skill levels."
    }
  ];

  return (
    <section className="course-details-instructor">
      <div className="content-wrapper-details-instructor">
        <p className="section-tagline-details-instructor">Become a Helicopter Instructor Today</p>
        <h2 className="section-title-details-instructor">
          Our Instructor Training course equips experienced pilots with the essential skills to teach effectively
        </h2>
        <p className="section-description-details-instructor">
          Our Helicopter Instructor Training course is designed to give you the tools and confidence to share your expertise.
          You'll master the art of teaching aviation, from essential safety protocols to diverse instructional methods.
          Lead the way in aviation education and shape the future of the industry.
        </p>
        <ul className="feature-list-details-instructor">
          {courseFeatures.map((feature, index) => (
            <li key={index} className="feature-item-details-instructor">
              <img src={feature.icon} alt="" className="feature-icon-details-instructor" />
              <p className="feature-description-details-instructor">
                <strong>{feature.title}</strong> {feature.description}
              </p>
            </li>
          ))}
        </ul>
        <div className="course-actions-details-instructor">
          <Link to="/apply-now" className="btn-detailes-instructor btn-primary-detailes-instructor">
            Enroll Now
          </Link>
          <Link to="/about" className="btn-detailes-instructor btn-link-detailes-instructor">
            About Us
            <img
              src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/b1ea117d06c4300f9dad14de1f83b09a745c0f020edba579fec182e08d9e5ecc?apiKey=536a8b606864400fab194975c3b1e353&"
              alt=""
              className="link-icon-detailes-instructor"
            />
          </Link>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/6d103a9d65d4d6d3aca9c1015ff6017a7a7cbe1051bdc9229292061b833efe05?apiKey=536a8b606864400fab194975c3b1e353&"
        alt="Helicopter instructor teaching"
        className="section-image-detailes-instructor"
      />
    </section>
  );
};

export default CourseDetailsInstr;
