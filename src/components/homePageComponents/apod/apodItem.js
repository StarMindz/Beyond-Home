import React from 'react';
import PropTypes from 'prop-types';

const ApodItem = ({
  id,
  title,
  description,
  image,
  set,
}) => {
  const quotes = ' ...';

  const apodItem = (
    <div id={`${id}Apod`} className="apodHomeItem">
      <div className="controlHomeDiv">
        <img className="apodHomeImage" src={image} alt="astronomy of the day" />
        <h1 className="apodHomeTitle">
          { title }
        </h1>
        <button className="nasaButton" type="submit" onClick={() => set()}>Details</button>
      </div>
      <div className="subComponent noDisplay">
        <p className="apodHomeDescription">
          { description }
          { quotes }
        </p>
      </div>
    </div>
  );
  return apodItem;
};

ApodItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  set: PropTypes.func,
};

ApodItem.defaultProps = {
  id: 0,
  title: '',
  description: '',
  image: '',
  set: '',
};

export default ApodItem;
