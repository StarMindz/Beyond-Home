import React from 'react';
import { useSelector } from 'react-redux';

const APOD = () => {
  const apodInfo = useSelector((state) => state.apod);

  const apod = (
    <div className="apodContainer">
      <h1 className="apodHeading">
        Astronomy Picture of the day
      </h1>
      <h2 className="apodDate">
        { apodInfo.date }
      </h2>
      <h2 className="apodTitle">
        { apodInfo.title }
      </h2>
      <img src={apodInfo.hdurl} className="apodImage" alt="Astronomy of the Day" />
      <p className="apodDescription">
        { apodInfo.explanation }
      </p>
    </div>
  );
  return apod;
};

export default APOD;
