import React from 'react';
import PropTypes from 'prop-types';
import RatingWidget from './RatingWidget';

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', margin: '16px', textAlign: 'center', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
      />
      <h2 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{product.name}</h2>
      <p style={{ color: '#555', fontSize: '1rem' }}>{product.description}</p>
      <p style={{ fontWeight: 'bold', margin: '10px 0' }}>
        Average Rating: {product.avgRating.toFixed(1)} ⭐ ({product.totalRatings} ratings)
      </p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    avgRating: PropTypes.number.isRequired,
    totalRatings: PropTypes.number.isRequired
  }).isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default ProductCard;
