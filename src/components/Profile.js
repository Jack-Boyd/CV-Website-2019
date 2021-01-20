import React from "react";

class Profile extends React.Component {
  render() {
    const resumeDownload = "/files/Jack Boyd CV 2019.pdf";
    return (
      <section id="about">
        <div className="about-me">
          <div className="container-1">
            <div className="row profile">
              <div className="col-md-12 text-center"><h3 className="p-sub-title">ABOUT ME</h3></div>
              <div className="col-md-7 col-sm-12">

                <div className="personal-blurb">
                  <p>
                    I am a software engineer based in Auckland, New Zealand, and have been working professionally for 3 years.<br /><br />
                    Having completed a Bachelor of Mathematical Sciences at AUT in 2017, I pride myself in my ability to problem solve, and my knowledge and understanding of building software.<br/><br/>
                    I love building and creating. The ability to do so while solving real customer problems makes me proud of my work. I strive for excellence in everything I do, and I am constantly striving to learn new things in order to apply useful skills to my professional and personal work.<br/><br/>
                    When I'm not coding or fixing bugs caused by my latest bug fixes, I love listening to music, playing piano, watching MMA, binge watching too many TV shows at once, and having a cold beer to cap off the week.
                    <br />
                  </p>
                </div>
              </div>
              <div className="col-md-5 col-sm-12">
                <div className="contact-details">
                  <ul>
                    <li>
                      <span>Date of Birth:</span> 6th February 1997
                    </li>
                    <li>
                      <span>Email:</span>{" "}
                      <a target="_blank" href="mailto:j.william.boyd@gmail.com">
                        j.william.boyd@gmail.com
                      </a>
                    </li>
                    <li>
                      <span>Phone:</span>{" "}
                      <a target="_blank" href="tel:+64224340541">
                        022 434 0541
                      </a>
                    </li>
                    <li>
                      <span>LinkedIn:</span>{" "}
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/jack-william-boyd/"
                      >
                        https://www.linkedin.com/in/jack-william-boyd/
                      </a>
                    </li>
                    <li>
                      <span>GitHub:</span>{" "}
                      <a target="_blank" href="https://github.com/Jack-Boyd/">
                        https://github.com/Jack-Boyd/
                      </a>
                    </li>
                  </ul>
                  <div className="columns download">
                    <p>
                      <a
                        href={resumeDownload}
                        target="_blank"
                        className="myButt one button"
                      >
                        <span>Download Resume</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-experience">
          <div className="container-2">
            <div className="row experience">
              <div className="col-md-4 col-sm-12">
                <div className="title">
                  <h4>Education</h4>
                </div>
              </div>
              <div className="col-md-8 col-sm-12">
                <ul className="right-list">
                  <li>
                    <div>
                      <h5>
                        Bachelor of Mathematical Sciences, Majoring in Computer Science
                      </h5>
                      <p className="darken-text">
                        Auckland University of Technology (AUT)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="title">
                  <h4>Work Experience</h4>
                </div>
              </div>
              <div className="col-md-8 col-sm-12">
                <ul className="right-list">
                  <li>
                    <div>
                      <h5>System 7 - Full Stack Developer / Head of Support</h5>
                      <p>
                        <span className="darken-text">
                          February
                          2018 - Present
                        </span>{" "}
                      </p>
                      <ul className="disc">
                        <li>Web Development for multiple different clients and projects, including Fullstack Development, Custom Software Development, UI Building and Complex API based solutions.</li>
                        <li>Mobile Development & Project Management. Research and implement Mobile Development Process to product native mobile apps for customers, from planning to deployment.</li>
                        <li>Lead the Customer Service / Support Desk Helpline. Act as a point of communication for customers with issues that need fixing / queries they want more information about, looking after customers and keeping them satisfied.</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
