import React from 'react';

const Skill = ({id, name, image, rating, text}) => (
  <div className="slide-content">
    <h3>{name}</h3>
    <img height="200" src={image}/>
    <div>
      <p>{text}</p>
      <p>{rating} / 10</p>
    </div>
  </div>
);

export default Skill;