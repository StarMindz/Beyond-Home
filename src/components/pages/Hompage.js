import React from 'react';
import Welcome from '../homePageComponents/welcome/welcome';
import Apod from '../homePageComponents/apod/apod';
import Rover from '../homePageComponents/rover/rover';

const HomePage = () => (
  <div className="homePageMainContainer">
    <Welcome />
    <Apod />
    <Rover />
  </div>
);

export default HomePage;
