import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NasaPopUp from './nasaPopUp';

const NasaItem = ({
  id,
  title,
  description,
  image,
  date,
  creator,
}) => {
  const [show, setShow] = useState(false);

  const nasaItem = (
    <div id={id} className="nasaItem">
      <h1 className="nasaTitle">
        { title }
      </h1>
      <p className="nasaDescription">
        { description }
      </p>
      <div className="controlDiv">
        <img className="nasaImage" src={image} alt="nasa" />
        <button className="nasaButton" type="submit" onClick={() => setShow(true)}>Details</button>
      </div>
      <div className={show ? 'popUp' : 'noDisplay'}>
        <NasaPopUp
          id={id}
          title={title}
          description={description}
          creator={creator}
          image={image}
          date={date}
        />
      </div>
    </div>
  );
  return nasaItem;
};

NasaItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  creator: PropTypes.string,
};

NasaItem.defaultProps = {
  id: 0,
  title: '',
  description: '',
  image: '',
  date: '',
  creator: '',
};

export default NasaItem;
