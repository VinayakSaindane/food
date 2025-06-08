// src/components/SummerFreshSection.jsx
import React from 'react';
import './SummerFreshSection.css'; // We'll create this CSS file next

const SummerFreshSection = () => {
  const products = [
    {
      id: 1,
      image: 'https://media.gettyimages.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?s=170667a&w=gi&k=20&c=13tnL-6DHA724uP_TZJpyTdHXZz--6bMWXJ-O9eIm5U=', // Example image for Heritage Tomatoes
      tag: 'Summer Harvest',
      title: 'Heritage Tomatoes',
      miles: '15 miles',
      description: 'Bursting with sweetness, these vibrant heirloom varieties come from Green Acres Farm, where they’re vine-ripened and hand-picked at peak flavor.',
      location: 'Green Acres Farm, Millfield',
    },
    {
      id: 2,
      image: 'https://thumbs.dreamstime.com/z/anxiety-stress-relieving-super-food-to-relieve-herbs-spices-used-herbal-medicine-also-help-relaxation-reduce-137689143.jpg',
      tag: 'Summer Harvest',
      title: 'Summer Squash',
      miles: '8 miles',
      description: 'Tender zucchini and yellow squash grown using sustainable practices at Riverview Gardens. Their delicate flavor shines in our summer dishes.',
      location: 'Riverview Gardens, Oakdale',
    },
    {
      id: 3,
      image: 'https://media.istockphoto.com/id/1925116282/photo/group-of-healthy-organic-food-products-for-balanced-diet.jpg?s=612x612&w=is&k=20&c=9oomxYAyc38D5YK7XCK5KyyToV7xoismi-FUIjdAJSA=',
      tag: 'Summer Harvest',
      title: 'Aromatic Basil',
      miles: '3 miles',
      description: 'This fragrant herb is grown in Sunshine Herbs’ greenhouse, providing intense flavor to our summer pastas, salads, and appetizers.',
      location: 'Sunshine Herbs, Brookside',
    },
  ];

  return (
    <section className="summer-fresh-section">
      <p className="section-subtitle">THIS SEASON'S STARS</p>
      <h2 className="section-title">What's Fresh This Summer</h2>
      <p className="section-description">
        Our menus evolve with nature's rhythm. Here's what's inspiring our chefs right now.
      </p>

      <div className="product-cards-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.title} className="product-image" />
              <span className="product-tag">{product.tag}</span>
            </div>
            <div className="product-info">
              <div className="product-header">
                <h3 className="product-title">{product.title}</h3>
                <span className="product-miles">{product.miles}</span>
              </div>
              <p className="product-description">{product.description}</p>
              <div className="product-location">
                <span className="location-icon">📍</span> {product.location}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="view-menu-button">
        View Our Summer Menu <span className="arrow">→</span>
      </button>
    </section>
  );
};

export default SummerFreshSection;