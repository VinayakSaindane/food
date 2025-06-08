// src/components/TestimonialsSection.jsx
import React from 'react';
import './TestimonialSection.css'; // We'll create this CSS file next

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The farm-to-table concept wasn't just marketing speak – they actually knew the names of the farmers who grew our food! Guests are still talking about how fresh everything tasted at our wedding.",
      author: 'Suresh Kumar',
      role: 'Wedding Reception',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg', // Placeholder avatar
    },
    {
      id: 2,
      quote: "Harvest Table catered our company's quarterly meeting and the seasonal menu was impressive. The summer vegetable tart was so good our CEO asked for the recipe! Professional service and exceptional food.",
      author: 'Deepika Menon',
      role: 'TechNova Inc.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg', // Placeholder avatar
    },
    {
      id: 3,
      quote: "I hired Harvest Table for my mother's 70th birthday. They created a menu that honored her Italian heritage while using local ingredients. It was the perfect blend of comfort and sophistication.",
      author: 'Anjali Patel',
      role: 'Private Birthday Dinner',
      avatar: 'https://randomuser.me/api/portraits/women/67.jpg', // Placeholder avatar
    },
  ];

  const trustedByCompanies = [
    'TechCorp',
    'GreenFund',
    'Meridian',
    'BlueSky',
    'Pinnacle',
  ];

  return (
    <section className="testimonials-section">
      <p className="testimonials-subtitle">CLIENT EXPERIENCES</p>
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <p className="testimonials-description">
        Don't just take our word for it. Hear directly from clients who have experienced our seasonal,
        <br /> locally-sourced catering.
      </p>

      <div className="testimonial-cards-container">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <span className="quote-icon">❝</span> {/* Unicode for a large quotation mark */}
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="client-info">
              <img src={testimonial.avatar} alt={testimonial.author} className="client-avatar" />
              <div className="client-details">
                <p className="client-author">{testimonial.author}</p>
                <p className="client-role">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="trusted-by-section">
        <h3 className="trusted-by-title">Trusted By</h3>
        <div className="company-logos">
          {trustedByCompanies.map((company, index) => (
            <span key={index} className="company-name">{company}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;