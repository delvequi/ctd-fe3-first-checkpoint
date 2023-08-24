import React from 'react';

function Card({ color }) {
  const cardStyle = {
    backgroundColor: color.hexa,
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    color: 'white', 
  };

  return (
    <div style={cardStyle}>
      <p>{color.name}</p>
    </div>
  );
}

export default Card;