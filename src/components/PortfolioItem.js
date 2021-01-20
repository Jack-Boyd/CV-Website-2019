import React from 'react';

const PortfolioListItem = ({id, name, image, url, text}) => (
  <div className="slide-content">
    <h5>{name}</h5>
    <a href={url} target="_blank"><img className="slide-image" height="80" src={image}/></a>
  </div>
);

export default PortfolioListItem;