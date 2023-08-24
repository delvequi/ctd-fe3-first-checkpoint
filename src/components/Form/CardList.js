import React from 'react';
import Card from './Card'; 
function CardList({ colors }) {
  return (
    <div>
      {colors.map((color, index) => (
        <Card key={index} color={color} /> 
      ))}
    </div>
  );
}

export default CardList;