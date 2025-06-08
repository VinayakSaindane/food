// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css'; // We'll create this CSS file next

const HeroSection = () => {
  // Using a network image URL for the background
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Example: a catering image from Unsplash

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="hero-overlay"></div> {/* For the semi-transparent overlay */}
      <div className="hero-content-container">
        <div className="hero-content-box">
          <span className="tagline">Hyper-Local & Seasonal Sourcing</span>
          <h2 className="main-heading">From Our Neighbor's Field to Your Table</h2>
          <p className="description">
            Crafting extraordinary catering experiences with ingredients sourced within 50 miles,
            celebrating the seasons and supporting local farmers.
          </p>
          <div className="hero-buttons">
            <button className="explore-button">Explore Seasonal Menus</button>
            <button className="request-button">Request a Quote</button>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        {/* You can add an SVG icon here for the scroll down arrow */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 17L6 11H9V5H15V11H18L12 17Z" fill="white"/> {/* Example arrow path */}
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;