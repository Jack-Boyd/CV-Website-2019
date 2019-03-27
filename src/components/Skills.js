import React from 'react';
import Skill from './Skill';
import {connect} from 'react-redux';
import Slider from 'react-slick';

class Skills extends React.Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      speed: 2000,
      autoplaySpeed: 2500,
      slidesToShow: 5,
      speed: 200,
      responsive: [
        {
          breakpoint: 1540,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1300,
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
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <div>
        <div className="skills">
        <h2 className="heading">Skills --Used Professionally--</h2>
          <Slider {...settings}>
            {this.props.skills.filter((skill) => {
              return skill.type === "taught"
            }).map((skill) => {
              return (
                <Skill key={skill.id} {...skill}/>
              );
            })}
          </Slider>
        </div>
        <div className="skills2">
          <h2 className="heading">Skills --Self Taught--</h2>
          <Slider {...settings}>

            {this.props.skills.filter((skill) => {
              return skill.type === "self"
            }).map((skill) => {
              return (
                <Skill key={skill.id} {...skill}/>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.skills);
  return {
    skills: state.skills
  }
}
export default connect(mapStateToProps)(Skills);