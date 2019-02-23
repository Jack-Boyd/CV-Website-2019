import React from 'react';

const PortfolioListItem = ({id, name, image, url, text}) => (
  <div className="slide-content">
    <h3>{name}</h3>
    <a href={url} target="_blank"><img height="80" src={image}/></a>
    <div>
      <p>{text}</p>
    </div>
  </div>
);

export default PortfolioListItem;