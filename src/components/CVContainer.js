import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Profile from './Profile';
import Portfolio from './Portfolio';
import Skills from './Skills';

const CVContainer = () => (
  <div>
    <Banner/>
    <Profile/>
    <Portfolio/>
    <Skills/>
  </div>
);

export default CVContainer;