import React, { useState } from 'react';
import PropTypes from 'prop-types';

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleMouseEnter = (value) => {
    setHoveredRating(value);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0); // Reset after submission
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRatingClick(star)}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
            style={{
              fontSize: '24px',
              cursor: 'pointer',
              color: (hoveredRating || rating) >= star ? 'gold' : 'gray',
              marginRight: '5px'
            }}
          >
            ★
          </span>
        ))}
      </div>
      <button 
        onClick={handleSubmit} 
        style={{ marginTop: '10px', padding: '5px 10px', border: 'none', borderRadius: '5px', background: '#28a745', color: 'white', cursor: 'pointer' }}
      >
        Submit Rating
      </button>
    </div>
  );
}

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default RatingWidget;
