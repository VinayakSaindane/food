// src/components/header.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './header.css';

// Assuming you still don't want the logo image as per previous instruction
// import logo from '../assets/logo.png'; // If you ever re-add it

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="service-name">Shri Cooking & Catering Services</Link> {/* Link title to home */}
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li> {/* Changed to Link */}
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/menus">Menus</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <button className="get-quote-button">Get Quote</button>
    </header>
  );
};

export default Header;