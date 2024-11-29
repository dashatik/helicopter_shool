import React from 'react';

const ProgramHighlights = () => {
  const highlights = [
    { 
      title: "150 Hours of Personalized PPL Helicopter Theory" 
    },
    { 
      title: "50 Hours of Real Flight Instruction in CH-Angel Helicopters" 
    },
    { 
      title: "Exclusive access to luxury helicopter models for training.",
      subItems: [
        "40 hours in single-engine CH-Angel helicopters",
        "10 hours in advanced CH-Angel models"
      ] 
    },
    { 
      title: "2 Hours in Multi-Engine CH-Angel Helicopters" 
    }
  ];

  return (
    <section className="program-highlights-vip">
      <div className="highlights-container-vip">
        <h2 className="highlights-title-vip">Program Highlights</h2>
        <ul className="highlights-list-vip">
          {highlights.map((highlight, index) => (
            <li key={index} className="highlight-item-vip">
              <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/f61fa68ad760b5baa6c347b242651ffa312698bb5b578c421453a7677704114b?apiKey=536a8b606864400fab194975c3b1e353&" alt="" className="highlight-icon-vip" />
              <p>{highlight.title}</p>
              {highlight.subItems && (
                <ul className="sub-highlights-list-vip">
                  {highlight.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="sub-highlight-item-vip">
                      <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/f61fa68ad760b5baa6c347b242651ffa312698bb5b578c421453a7677704114b?apiKey=536a8b606864400fab194975c3b1e353&" alt="" className="highlight-icon-vip" />
                      <p>{subItem}</p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/09c270ac4d4c54d2032fb22def96a6847c0351a0a47422775551e51b756cf807?apiKey=536a8b606864400fab194975c3b1e353&" alt="Helicopter in flight" className="highlights-image-vip" />
    </section>
  );
};

export default ProgramHighlights;
