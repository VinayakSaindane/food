// src/components/ServicesSection.jsx
import React from 'react';
import './ServiceSection.css'; // We'll create this CSS file next

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg',
      title: 'Corporate Events',
      description: 'Elevate your business gatherings with seasonally-inspired menus that impress clients and energize team members. From board meetings to company celebrations.',
      features: [
        'Breakfast & lunch packages',
        'Conference & meeting catering',
        'Corporate galas & celebrations',
      ],
      linkText: 'Request corporate quote',
      linkHref: '/request-quote',
    },
    {
      id: 2,
      image: 'https://media.istockphoto.com/id/637765812/photo/cuisine-culinary-buffet-dinner-catering-dining-food-celebration.jpg?b=1&s=612x612&w=0&k=20&c=tJESBG2MFNMITgVaff6xmDpqeaPZLAyox6JFgriGipw=',
      title: 'Weddings & Celebrations',
      description: 'Create unforgettable memories with a wedding menu that reflects your unique story while showcasing the finest seasonal ingredients from local farms.',
      features: [
        'Customized wedding menus',
        'Cocktail hour & reception service',
        'Dessert & cake service',
      ],
      linkText: 'Plan your wedding menu',
      linkHref: '/plan-wedding',
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3hJx7b_7uQjL4X4ARmpvsEC4zC0th4YWcRXE0jVm3-NjjSKf10hu1ZIl0Csbc7SaIRs&usqp=CAU',
      title: 'Private Events',
      description: 'Transform intimate gatherings into extraordinary experiences with personalized catering that brings the farm-to-table philosophy directly to your home.',
      features: [
        'In-home private chef experiences',
        'Birthday & anniversary celebrations',
        'Holiday & special occasion menus',
      ],
      linkText: 'Book your private event',
      linkHref: '/book-private-event',
    },
  ];

  return (
    <section className="services-section">
      <p className="services-subtitle">EXCEPTIONAL CATERING</p>
      <h2 className="services-title">Our Services</h2>
      <p className="services-description">
        From intimate gatherings to grand celebrations, we offer personalized catering services
        featuring locally-sourced seasonal ingredients.
      </p>

      <div className="service-cards-container">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-image-wrapper">
              <img src={service.image} alt={service.title} className="service-image" />
            </div>
            <div className="service-info">
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              <ul className="service-features-list">
                {service.features.map((feature, index) => (
                  <li key={index} className="feature-list-item">
                    <span className="check-icon">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <a href={service.linkHref} className="service-link">
                {service.linkText} <span className="arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;