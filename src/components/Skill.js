import React from 'react';
import {Progress} from 'reactstrap';

const Skill = ({id, name, image, rating, text}) => (
  <div className="slide-content">
    <h3>{name}</h3>
    <img height="150" src={image}/>
    <div>
      <p className="fivetext" dangerouslySetInnerHTML={{__html: text}}></p>
      <Progress value={rating}/>
    </div>
  </div>
);

export default Skill;