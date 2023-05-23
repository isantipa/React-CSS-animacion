import React, { useState } from 'react';

function CharacterCard({ name, country, img, imgHover }) {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className='card' 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2>{name}</h2>
      <img src={hover ? imgHover : img} alt={name}/>
      <p>{country}</p>
    </div>
  );
}

export default CharacterCard;
