import React from 'react';
import './FarmPartnerSection.css'; // Import the CSS file for styling

// Define an interface for the farm data
interface Farm {
  id: number;
  name: string;
  distance: string;
  location: string;
  description: string;
  image: string; // Path to the image
}

 // Adjust path as needed


// FarmCard Sub-component (nested within this file)
// Define the props interface for FarmCard
interface FarmCardProps {
  name: string;
  distance: string;
  location: string;
  description: string;
  image: string;
}

const FarmCard: React.FC<FarmCardProps> = ({ name, distance, location, description, image }) => {
  return (
    <div className="farm-card">
      <div className="farm-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="farm-card-content">
        <h3 className="farm-name">{name}</h3>
        <p className="farm-location-info">
          <span className="icon-pin">📍</span> {distance} &bull; {location}
        </p>
        <p className="farm-description">{description}</p>
      </div>
    </div>
  );
};


// Main FarmPartners Component
const FarmPartners: React.FC = () => {
  const farmData: Farm[] = [
    {
      id: 1,
      name: 'Green Acres Farm',
      distance: '15 miles away',
      location: 'Millfield, CA',
      description: 'Specializing in heirloom tomatoes and stone fruits since 1987.',
      image: "greenAcresFarmImg",
    },
    {
      id: 2,
      name: 'Riverview Gardens',
      distance: '8 miles away',
      location: 'Oakdale, CA',
      description: 'Certified organic vegetable farm practicing regenerative agriculture.',
      image: "riverviewGardensImg",
    },
    {
      id: 3,
      name: 'Sunshine Herbs',
      distance: '3 miles away',
      location: 'Brookside, CA',
      description: 'Urban microfarm specializing in culinary herbs and edible flowers.',
      image: "sunshineHerbsImg",
    },
  ];

  const handleGetInTouchClick = () => {
    console.log('Get in Touch clicked!');
    // You can add navigation logic here, e.g., using react-router-dom
    // navigate('/contact-us');
  };

  return (
    <section className="farm-partners-section">
      <div className="container">
        <h2 className="section-title">Our Farm Partners</h2>
        <p className="section-description">
          We're proud to work with these local farms who share our commitment to sustainable agriculture and exceptional flavor.
        </p>

        <div className="farm-cards-grid">
          {farmData.map((farm) => (
            <FarmCard // Using the FarmCard sub-component defined above
              key={farm.id}
              name={farm.name}
              distance={farm.distance}
              location={farm.location}
              description={farm.description}
              image={farm.image}
            />
          ))}
        </div>

        <div className="get-in-touch-wrapper">
          <button className="get-in-touch-button" onClick={handleGetInTouchClick}>
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FarmPartners;