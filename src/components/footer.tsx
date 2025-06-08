// src/components/footer.tsx
import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-col company-info-col">
          <div className="company-logo-name">
            {/* Using a placeholder circle as per the image for the logo area */}
            <div className="logo-circle"></div>
            <span className="footer-company-name">Shri Cooking & Catering Services</span>
          </div>
          <p className="company-description">
            Crafting extraordinary catering experiences with ingredients sourced
            within 50 miles, celebrating the seasons and supporting local
            farmers.
          </p>
          <div className="social-icons">
            {/* Placeholder for social icons - you can replace with actual SVG/FontAwesome icons */}
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i> f</a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i> ig</a>
            <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i> p</a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i> in</a>
          </div>
        </div>

        <div className="footer-col quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/seasonal-menus">Seasonal Menus</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col services-links">
          <h3>Services</h3>
          <ul>
            <li><a href="/corporate-events">Corporate Events</a></li>
            <li><a href="/weddings-celebrations">Weddings & Celebrations</a></li>
            <li><a href="/private-dining">Private Dining</a></li>
            <li><a href="/cooking-classes">Cooking Classes</a></li>
            <li><a href="/seasonal-menu-planning">Seasonal Menu Planning</a></li>
          </ul>
        </div>

        <div className="footer-col contact-us">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <span className="icon-text-wrapper">
                <span className="contact-icon">📍</span> Satpala, Virar (W)
              </span>
            </li>
            <li>
              <span className="icon-text-wrapper">
                <span className="contact-icon">📞</span> +91 70289 26020
              </span>
            </li>
            <li>
              <span className="icon-text-wrapper">
                <span className="contact-icon">✉️</span> thakurrn19@yahoo.com
              </span>
            </li>
            <li>
              <span className="icon-text-wrapper">
                <span className="contact-icon">⏰</span> Mon-Fri: 9am-5pm
              </span>
            </li>
            <li>
              <span className="icon-text-wrapper">
                <span className="contact-icon"></span> Weekends: by appointment
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shri Cooking & Catering Services. All rights reserved.</p>
        <div className="footer-legal-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/accessibility">Accessibility</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;