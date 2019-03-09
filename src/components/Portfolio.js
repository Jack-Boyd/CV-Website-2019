import React from 'react';
import PortfolioItem from './PortfolioItem';
import {connect} from 'react-redux';
import Slider from 'react-slick';

class Portfolio extends React.Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      speed: 2000,
      autoplaySpeed: 2500,
      slidesToShow: 4,
      speed: 200
    }
    return (
      <div className="portfolio">
      <h2 className="heading">Portfolio</h2>
        <Slider {...settings}>
        {this.props.websites.map((site) => {
            return (
              <PortfolioItem key={site.id} {...site}/>
            );
          })}
          </Slider>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    websites: state.websites
  }
}
export default connect(mapStateToProps)(Portfolio);