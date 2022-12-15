import React from 'react';
import './welcome.css';

const Welcome = () => {
  const url = 'https://technology.nasa.gov/sites/default/files/2022-08/WebsiteLoopingvideo3.mp4';
  const welcome = (
    <div className="welcome">
      <video src={url} autoPlay loop muted />
      <div className="welcomeMessage">
        <div className="messageDiv">
          <h1 className="welcomeHead">Beyond Home</h1>
          <h2 className="welcomeSubHead">A tour of the universe</h2>
          <p className="welcomeBody">You are in! Are you ready to explore?</p>
        </div>
      </div>
    </div>
  );

  return welcome;
};

export default Welcome;
