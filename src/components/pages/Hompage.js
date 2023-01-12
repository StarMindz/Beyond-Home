import React from 'react';
import Welcome from '../homePageComponents/welcome/welcome';
import Apod from '../homePageComponents/apod/apod';
import Rover from '../homePageComponents/rover/rover';
import LibraryHome from '../homePageComponents/library/LibraryHome';

const HomePage = () => (
  <div className="homePageMainContainer">
    <Welcome />
    <Apod />
    <LibraryHome />
    <Rover />
  </div>
);

export default HomePage;
