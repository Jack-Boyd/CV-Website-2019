import React from 'react';
import Skill from './Skill';
import {connect} from 'react-redux';
import Slider from 'react-slick';

class Skills extends React.Component {
  render() {
    return (
      <section className="skills">
        <div className="container">
          <div className="row mobile-center">
            <div className="col-md-12 title-space">
              <h3 className="text-center"><strong>SKILLS</strong></h3>
            </div>
            {
              this.props.skills.sort((a, b) => (a.rating > b.rating) ? -1 : 1).map((skill, index) => {
                return (
                  <div className="col-md-3 col-sm-6 col-xs-12" key={index}>
                    <p className="skill-item">{skill.name}</p>
                  </div>
                );
              })
            }
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    skills: state.skills
  }
}
export default connect(mapStateToProps)(Skills);



// const settings = {
//   className: "center",
//   centerMode: true,
//   infinite: true,
//   centerPadding: "0px",
//   speed: 2000,
//   autoplaySpeed: 2500,
//   slidesToShow: 9,
//   speed: 200,
//   responsive: [
//     {
//       breakpoint: 1540,
//       settings: {
//         slidesToShow: 6,
//         slidesToScroll: 6,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 1300,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2
//       }
//     },
//     {
//       breakpoint: 575,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// }
        // <div className="skills">
        // <h2 className="heading">Skills --Used Professionally--</h2>
        //   <Slider {...settings}>
        //     {this.props.skills.map((skill) => {
        //       return (
        //         <Skill key={skill.id} {...skill}/>
        //       );
        //     })}
        //   </Slider>
        // </div>
