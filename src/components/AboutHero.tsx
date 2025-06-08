// src/components/AboutHero.tsx
import React from 'react';
import './AboutHero.css';

const AboutHero: React.FC = () => {
  return (
    <section className="about-hero-section">
      <p className="about-subtitle">OUR STORY</p>
      <h1 className="about-main-title">About Shri Cooking & Catering Services</h1>
      <p className="about-description">
        Discover the passion behind our farm-to-table approach and our commitment to celebrating
        local ingredients.
      </p>
    </section>
  );
};

export default AboutHero;