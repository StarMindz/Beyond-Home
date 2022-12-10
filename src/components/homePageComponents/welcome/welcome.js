import React from 'react';
import './welcome.css';

const Welcome = () => {
  const url = 'https://technology.nasa.gov/sites/default/files/2022-08/WebsiteLoopingvideo3.mp4';
  const welcome = (
    <div className="welcome">
      <video src={url} autoPlay loop muted />
      <div className="welcomeMessage">
        <div className="messageDiv">
          <h1 className="welcomeHead">Welcome !</h1>
          <p className="welcomeBody">Have fun exploring Beyond Home</p>
        </div>
      </div>
    </div>
  );

  return welcome;
};

export default Welcome;
