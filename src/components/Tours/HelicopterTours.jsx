import React from 'react';
import Navbar from '../common/Navbar';
import HeroSection from './HeroSection';
import TourCard from './TourCard';
import CallToAction from './CallToAction';
import Footer from '../common/Footer';
import './styles.css'

const tourData = [
  {
    title: "THE LAKE LOOP (~10 MIN.)",
    description: "This mini tour is by no means small. Packed with stunning views of McCall, Payette Lake and the surrounding majestic mountains, you'll get an unbelievable experience at a budget friendly price. $$$ per person",
    features: ["Affordable & Scenic", "McCall & Lake Views", "Mountain Scenery"],
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/3d429dbce92f0018a4becaf68b22c0990b464e9331595d0970218bc23a3bd2e1?apiKey=536a8b606864400fab194975c3b1e353&",
    altText: "Lake Loop Tour Helicopter View"
  },
  {
    title: "THE LOOKOUT (~20 MIN.)",
    description: "On this experience you'll see incredible views of McCall, Payette Lake, Granite Lookout and Brundage Resort. See the area like few get to see with The Lookout tour. $$$ per person.",
    features: ["Sweeping Lookout Views", "McCall & Payette Lake", "Exclusive Aerial Vantage"],
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/80ecd1aeaddd22df96f97d69b1494d77fcec088e0f938c0baa5d0835510f8333?apiKey=536a8b606864400fab194975c3b1e353&",
    altText: "The Lookout Tour Helicopter View"
  },
  {
    title: "THE PEAK TO PEAK (~40 MIN.)",
    description: "Strap in for this breathtaking tour, you'll see countless alpine lakes, creeks and peaks. The tour starts with a close up view of Jughandle and Boulder Mountains, then on towards Nick, Snowslide and Sawtooth Peaks, then we're off to Box and Ross Lakes out to Granite Look out and Brundage Resort, then we finish it all with a cruise down the west coast of Payette Lake. $$$ per person",
    features: ["Mountain Peaks & Lakes", "Extended Scenic Route", "Lakeside Finish"],
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/78591e3469d04b8163681a6aa9408c2ea5ae912788c13b574c431ec4d0c66958?apiKey=536a8b606864400fab194975c3b1e353&",
    altText: "Peak to Peak Tour Helicopter View"
  },
  {
    title: "THE ADVENTURER (~60 MIN)",
    description: "Go all out with this unforgettable experience. The Payette National Forest in 2.3 million acres. With that, there is A LOT to see. With a trip that fly's over Jughandle Mtn, Sawtooth Peak, Lick Creek summit and up Split Creek to to see the famous WWII B23 bomber crash site at Loon Lake. From 9000ft peaks to alpine lakes, to wildlife and raging rivers, be ready to capture an adventure of a lifetime. $$$ per person",
    features: ["Payette National Forest", "Historic Crash Site", "High Altitude Views"],
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/536a8b606864400fab194975c3b1e353/9fe74dd6d2b3542a4a0dbc7ff9f99869f1c67b66884d36d9e56abc228b5190a0?apiKey=536a8b606864400fab194975c3b1e353&",
    altText: "The Adventurer Tour Helicopter View"
  }
];

function HelicopterTours() {
  return (
    <div className="helicopter-tours">
      <Navbar />
      <HeroSection />
      <section className="tour-cards">
        {tourData.map((tour, index) => (
          <TourCard key={index} {...tour} />
        ))}
      </section>
      <CallToAction />
      <Footer />
    </div>
  );
}

export default HelicopterTours;