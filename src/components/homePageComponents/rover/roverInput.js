import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRover } from '../../../redux/rover/roverSlice';

const RoverInput = () => {
  const [date, setDate] = useState('2015-05-30');
  const [camera, setCamera] = useState('mast');
  const dispatch = useDispatch();

  const setValues = (element) => {
    element.preventDefault();
    dispatch(fetchRover([date, camera]));
  };

  const rover = (
    <div className="roverInput">
      <form className="roverForm" onSubmit={setValues}>
        <div className="cameraInput">
          <span className="roverInputItem">Rover Camera</span>
          <select onChange={(e) => setCamera(e.target.value)} className="roverInputItem" name="camera">
            <option value="mast">MAST</option>
            <option value="fhaz">FHAZ</option>
            <option value="rhaz">RHAZ</option>
            <option value="chemcam">CHEMCAM</option>
            <option value="mahli">MAHLI</option>
            <option value="mardi">MARDI</option>
            <option value="navcam">NAVCAM</option>
            <option value="pancam">PANCAM</option>
            <option value="minites">MINITES</option>
          </select>
        </div>
        <div className="dateInput">
          <span className="roverInputItem">Earth Date</span>
          <input onChange={(e) => setDate(e.target.value)} className="roverInputItem" type="date" name="date" />
        </div>
        <button className="roverButton" type="submit">Search Photo</button>
      </form>
    </div>
  );
  return rover;
};

export default RoverInput;
