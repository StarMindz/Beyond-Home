import React from 'react';
import RoverInput from './roverInput';
import RoverComponent from './roverComponent';
import './rover.css';

const Rover = () => {
  const rover = (
    <div className="rover">
      <RoverInput />
      <RoverComponent />
    </div>
  );
  return rover;
};

export default Rover;
