// src/pages/AboutPage.tsx
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

// Import the new About page sub-components (now .tsx)
import AboutHero from '../components/AboutHero';
import ApproachSection from '../components/ApproachSection';
import TeamSection from '../components/TeamSection';

import './AboutPage.css'; // For structural elements of the page
import MissionSection from './MissionSection';
import FarmPartners from './FarmPartnerSection';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <Header />
      <main className="about-main-content">
        <AboutHero />
        <MissionSection />
     <ApproachSection />
        <TeamSection />
        <FarmPartners />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;