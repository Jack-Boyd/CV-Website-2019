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
      speed: 200,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
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