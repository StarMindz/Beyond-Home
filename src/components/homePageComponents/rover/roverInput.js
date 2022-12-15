import React from 'react';

const RoverInput = () => {
  const rover = (
    <div>
      <form>
        <div>
          <span>Rover Camera</span>
          <select name="camera">
            <option value="fhaz">FHAZ</option>
            <option value="rhaz">RHAZ</option>
            <option value="mast">MAST</option>
            <option value="chemcam">CHEMCAM</option>
            <option value="mahli">MAHLI</option>
            <option value="mardi">MARDI</option>
            <option value="navcam">NAVCAM</option>
            <option value="pancam">PANCAM</option>
            <option value="minites">MINITES</option>
          </select>
        </div>
        <div>
          <span>Earth Date</span>
          <input type="date" name="date" />
        </div>
        <button className="roverButton" type="submit">Search Photo</button>
      </form>
    </div>
  );
  return rover;
}

export default RoverInput;