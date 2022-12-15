import React from 'react';
import PropTypes from 'prop-types';

const ApodItem = ({
  ids,
  titles,
  descriptions,
  images,
  nasas,
  set,
}) => {
  const quotes = ' ...';

  const apodItem = (
    <div id={ids} className="apodHomeItem">
      <div className="controlHomeDiv">
        <img className="apodHomeImage" src={images} alt="astronomy of the day" />
        <h1 className="apodHomeTitle">
          { titles }
        </h1>
        <button className="nasaButton" type="submit" onClick={() => set(nasas)}>Details</button>
      </div>
      <div className="subComponent noDisplay">
        <p className="apodHomeDescription">
          { descriptions }
          { quotes }
        </p>
      </div>
    </div>
  );
  return apodItem;
};

ApodItem.propTypes = {
  ids: PropTypes.string,
  titles: PropTypes.string,
  descriptions: PropTypes.string,
  images: PropTypes.string,
  nasas: PropTypes.string,
  set: PropTypes.func,
};

ApodItem.defaultProps = {
  ids: 0,
  titles: '',
  descriptions: '',
  images: '',
  set: '',
  nasas: '',
};

export default ApodItem;
