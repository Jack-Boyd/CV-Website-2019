import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Profile from './Profile';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';


const CVContainer = () => (
  <div>
    <Banner/>
    <Profile/>
    <Portfolio/>
    <Skills/>
    <Contact/>
    <footer>
      <p className="footertext text-center">© Made by Jack Boyd 2021</p>
    </footer>
  </div>
);

export default CVContainer;