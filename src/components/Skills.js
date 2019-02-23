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
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2500,
      slidesToShow: 5,
      speed: 200
    }
    return (
      <div>
        <div className="skills">
        <h2 className="heading">Skills</h2>
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
          <h2 className="heading">Skills</h2>
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
  return {
    skills: state.skills
  }
}
export default connect(mapStateToProps)(Skills);