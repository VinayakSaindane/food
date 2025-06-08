// src/components/MissionSection.tsx
import React from 'react';
import './MissionSection.css';

const MissionSection: React.FC = () => {
  return (
    <section className="mission-section">
      <div className="mission-image-container">
        <img
          src="https://images.unsplash.com/photo-1627997637841-f038f4e242b5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Network image URL for Indian cuisine
          alt="Assorted Indian dishes"
          className="mission-image"
        />
      </div>
      <div className="mission-content">
        <h2 className="section-heading">Our Mission</h2>
        <p>
          At Shri Cooking & Catering Services, we're on a mission to transform how
          people experience food at events. We believe that exceptional catering begins
          with exceptional ingredients, which is why we commit to sourcing at least 90%
          of our ingredients from within 50 miles of our kitchen.
        </p>
        <p>
          Founded in 2015 by Chef Maria Johnson, our company grew from a passion
          for showcasing the incredible bounty of our region's small farms and artisan
          producers. With over 15 years of experience in fine dining restaurants, Chef
          Maria wanted to bring restaurant-quality, seasonal cuisine to catered events.
        </p>
        <p>
          Today, our team of 12 dedicated culinary professionals continues this mission,
          creating memorable dining experiences that honor the seasons and support
          our local agricultural community.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;