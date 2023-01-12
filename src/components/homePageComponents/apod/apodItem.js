import React from 'react';
import PropTypes from 'prop-types';

const ApodItem = ({
  ids,
  titles,
  images,
  nasas,
  set,
}) => {
  const apodItem = (
    <div id={ids} className="apodHomeItem">
      <div className="controlHomeDiv">
        <div className="apodImageBackground">
          <img className="apodHomeImage" src={images} alt="astronomy of the day" />
        </div>
        <h1 className="apodHomeTitle">
          { titles }
        </h1>
        <button className="nasaButton" type="submit" onClick={() => set(nasas)}>Details</button>
      </div>
    </div>
  );
  return apodItem;
};

ApodItem.propTypes = {
  ids: PropTypes.string,
  titles: PropTypes.string,
  images: PropTypes.string,
  nasas: PropTypes.string,
  set: PropTypes.func,
};

ApodItem.defaultProps = {
  ids: 0,
  titles: '',
  images: '',
  set: '',
  nasas: '',
};

export default ApodItem;
