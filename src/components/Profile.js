import React from 'react';

class Profile extends React.Component {
  render() {
    const resumeDownload = "/files/Jack Boyd CV 2018.pdf";
    return (
      <section id="about">
      <div className="about-me">
      <div className="container-1">
      <div className="row profile">
         <div className="col-md-7 col-sm-12">
            <h2 className="p-sub-title">About me</h2>
            <div className="personal-blurb">
               <p>I am a full-stack developer based in Auckland, New Zealand, with a passion for learning, and a drive for producing quality. <br/>
                  I am an enthusiastic person with a passion for all things music and software, and I am consistently striving to learn new things in order to apply useful skills to my professional and personal work.
                  I am very comfortable in social situations, which I take advantage of in my work talking to customers and making sure they are satisfied.
                  I love writing and listening to music, and have done so from a young age. I've played piano for almost 15 years, and guitar for 7. I am also a DJ around various nightclubs in Auckland's CBD, and have done this as a hobbie for the past year to earn some extra income.<br/>

               </p>
            </div>
         </div>
         <div className="col-md-5 col-sm-12">
            <div className="contact-details">
               <ul>
                  <li><span>Date of Birth:</span> 6th February 1997</li>
                  <li><span>Email:</span> <a target="_blank" href="mailto:j.william.boyd@gmail.com">j.william.boyd@gmail.com</a></li>
                  <li><span>Phone:</span> <a target="_blank" href="tel:+642108280838">021 082 80838</a></li>
                  <li><span>LinkedIn:</span> <a target="_blank" href="https://www.linkedin.com/in/jack-william-boyd/">https://www.linkedin.com/in/jack-william-boyd/</a></li>
                  <li><span>GitHub:</span> <a target="_blank" href="https://github.com/Jack-Boyd/">https://github.com/Jack-Boyd/</a></li>
               </ul>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} target="_blank" className="myButt one button"><span>Download Resume</span></a>
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
               <h3>Education</h3>
            </div>
         </div>
         <div className="col-md-8 col-sm-12">
            <ul className="right-list">
               <li>
                  <div>
                     <h4>Auckland University of Technology (AUT)</h4>
                     <p className="darken-text">Bachelor of Mathematical Sciences, Majoring in Computer Science</p>
                  </div>
               </li>
               <li>
                  <div>
                     <h4>ACG Strathallan College</h4>
                     <p className="darken-text">2 O levels, 6 AS levels, 2 A levels (Year 11, 12, 13 education)</p>
                  </div>
               </li>
            </ul>
         </div>
         <div className="col-md-4 col-sm-12">
            <div className="title">
               <h3>Work Experience</h3>
            </div>
         </div>
         <div className="col-md-8 col-sm-12">
            <ul className="right-list">
               <li>
                  <div>
                     <h4>System 7</h4>
                     <p><span  className="darken-text">Head of Support / Software & Web Developer -- February 2018 - Present</span> </p>
                     <p>After a 3 month internship at System7, I have been employed to run the support area of the company, making sure jobs are done on time, and are communicated with the customer, as well as developing a variety of web applications. During my employment, I have worked with designers to bring an online presense to various start ups across New Zealand, and have also developed complex web applciations for clients under strict time frames. Daily, I utilise HTML5, CSS3, Javascript/jQuery, ASP.NET Core / Razor, Umbraco, C#, Tortoise SVN, and SQL, with high interest and progress in incorperating Sass, Gulp and other helpful open source libraries/tools.</p>
                  </div>
               </li>
               <li>
                  <div>
                     <h4>Remix Magazine</h4>
                     <p><span  className="darken-text">Volunteer -- December 2017 - Present </span></p>
                     <p>Since December 2017, I have done volunteer at concerts such as OurHouse Presents: Summerfest, and Laneway Festival.
                     </p>
                  </div>
               </li>
               <li>
                  <div>
                     <h4>Vessel Entertainment (Impala Nightclub)</h4>
                     <p><span className="darken-text">Bar Staff -- May 2016 - September 2017</span></p>
                     <p>Bartender & Porter at Impala, based in the heart of Auckland city.</p>
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

};

export default Profile;