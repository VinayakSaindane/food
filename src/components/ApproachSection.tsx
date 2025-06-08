// src/components/ApproachSection.tsx
import React from 'react';
import './ApproachSection.css';

const ApproachSection: React.FC = () => {
  return (
    <section className="approach-section">
      <div className="approach-content">
        <h2 className="section-heading">Our Approach</h2>
        <p>
          We believe the best flavors come from ingredients harvested at their peak.
          That's why our menus change with the seasons, highlighting what's freshest
          and most flavorful right now.
        </p>
        <p>
          Our culinary team visits local farms weekly, developing personal relationships
          with the growers who supply our ingredients. These connections allow us to
          showcase unique, heirloom varieties you won't find in grocery stores.
        </p>
        <p>
          When you choose Shri Cooking & Catering Services, you're not just getting a meal—you're getting
          a curated seasonal experience that tells the story of our region's agricultural
          heritage.
        </p>
      </div>
      <div className="approach-image-container">
        <img
          src="https://images.unsplash.com/photo-1517420800646-63968d904f46?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Network image URL for vegetables/ingredients
          alt="Fresh vegetables and herbs"
          className="approach-image"
        />
      </div>
    </section>
  );
};

export default ApproachSection;