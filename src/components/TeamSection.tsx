// src/components/TeamSection.tsx
import React from 'react';
import './TeamSection.css';

const TeamSection: React.FC = () => {
  // If you had multiple team members, you might pass them as props
  // type TeamMember = {
  //   name: string;
  //   role: string;
  //   avatarSrc: string;
  // };
  // const teamMembers: TeamMember[] = [
  //   { name: "Mohit Thakur", role: "Executive Chef & Founder", avatarSrc: "..." }
  // ];

  return (
    <section className="team-section">
      <h2 className="section-heading">Meet Our Team</h2>
      <div className="team-member-card">
        <img
          src="https://images.unsplash.com/photo-1549068106-b024baf5029a?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder for Mohit Thakur's image
          alt="Mohit Thakur"
          className="team-member-avatar"
        />
        <h3 className="team-member-name">Mohit Thakur</h3>
        <p className="team-member-role">Executive Chef & Founder</p>
      </div>
      {/* You can add more team members here following the same structure */}
    </section>
  );
};

export default TeamSection;