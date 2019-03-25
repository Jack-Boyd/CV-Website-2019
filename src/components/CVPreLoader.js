import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Profile from './Profile';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';


const CVPreLoader = () => (
  <div>
    <Banner/>
    <div className="loading">
      <p  className="loading-text">Loading...</p>
    </div>
    <footer>
      <p className="footertext">Made by Jack Boyd 2019</p>
    </footer>
  </div>
);

export default CVPreLoader;