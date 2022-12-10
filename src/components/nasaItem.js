import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NasaPopUp from './nasaPopUp';

const NasaItem = ({
  id,
  title,
  description,
  fullDescribe,
  image,
  hdImage,
  date,
  creator,
}) => {
  const [show, setShow] = useState(false);
  const quotes = ' ...';

  const Back = () => {
    setShow(false);
  };

  const nasaItem = (
    <div id={id} className="nasaItem">
      <h1 className="nasaTitle">
        { title }
      </h1>
      <p className="nasaDescription">
        { description }
        { quotes }
      </p>
      <div className="controlDiv">
        <img className="nasaImage" src={image} alt="nasa" />
        <button className="nasaButton" type="submit" onClick={() => setShow(true)}>Details</button>
      </div>
      <div className={show ? 'popUp' : 'noDisplay'}>
        <NasaPopUp
          id={id}
          title={title}
          description={fullDescribe}
          creator={creator}
          image={hdImage}
          date={date}
          back={Back}
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
  fullDescribe: PropTypes.string,
  image: PropTypes.string,
  hdImage: PropTypes.string,
  date: PropTypes.string,
  creator: PropTypes.string,
};

NasaItem.defaultProps = {
  id: 0,
  title: '',
  description: '',
  image: '',
  hdImage: '',
  date: '',
  creator: '',
  fullDescribe: '',
};

export default NasaItem;
