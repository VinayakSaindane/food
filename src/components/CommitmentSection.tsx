// src/components/CommitmentSection.jsx
import React from 'react';
import './CommitmentSection.css'; // We'll create this CSS file next

const CommitmentSection = () => {
  return (
    <section className="commitment-section">
      <div className="commitment-content">
        <p className="commitment-subtitle">OUR COMMITMENT</p>
        <h2 className="commitment-title">We Cook with the Seasons, Not Against Them</h2>
        <p className="commitment-description">
          At Shri Cooking & Catering Services, we believe the most flavorful
          ingredients are those grown nearby and harvested at their peak.
          That’s why we’ve built partnerships with over 20 local farms to bring
          you the freshest seasonal bounty.
        </p>
        <p className="commitment-description">
          Our menus transform with the changing seasons, ensuring your event
          features ingredients at their most vibrant and delicious. From spring
          asparagus to autumn squash, we celebrate nature’s calendar in every
          dish.
        </p>
        <div className="commitment-features">
          <div className="feature-item">
            <span className="icon">🍃</span> 100% Seasonal
          </div>
          <div className="feature-item">
            <span className="icon">📍</span> Locally Sourced
          </div>
          <div className="feature-item">
            <span className="icon">🚜</span> Farm-Fresh
          </div>
        </div>
        <a href="/philosophy" className="learn-more">
          Learn more about our philosophy <span className="arrow">→</span>
        </a>
      </div>

      <div className="commitment-image-grid">
        {/* Replace these with your actual image URLs */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg" alt="Garlic and Herbs" />
        <img src="https://media.istockphoto.com/id/1625128632/photo/most-common-allergy-food-shot-from-above.jpg?s=612x612&w=0&k=20&c=vbbkNVRpHv-X4sIKJzaK1yYRCmzE-CgnuWE98wlN_vU=" alt="Plated Dish and Wine" />
        <img src="https://static.vecteezy.com/system/resources/previews/058/368/760/non_2x/vegan-keto-products-ketogenic-plant-based-food-photo.jpg" alt="Creamy Fish Dish" />
        <img src="https://media.istockphoto.com/id/1127528703/photo/good-carbohydrate-fiber-rich-food.jpg?s=612x612&w=0&k=20&c=13Jqi1roAh9eZOr4IqP2vfjXss_-n56Gadrxk_tcmdc=" alt="Outdoor Catering Spread" />
      </div>
    </section>
  );
};

export default CommitmentSection;