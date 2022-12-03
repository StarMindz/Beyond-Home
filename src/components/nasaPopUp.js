import React from 'react';
import PropTypes from 'prop-types';

const NasaPopUp = ({
  id,
  title,
  description,
  image,
  date,
  creator,
}) => {
  const popUp = (
    <div id={id}>
      <h1>
        { title }
      </h1>
      <img src={image} alt="nasa" />
      <p>
        { description }
      </p>
      <p>
        Image Created by
        { creator }
        on
        { date }
      </p>
    </div>
  );
  return popUp;
};

NasaPopUp.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  creator: PropTypes.string,
};

NasaPopUp.defaultProps = {
  id: 0,
  title: '',
  description: '',
  image: '',
  date: '',
  creator: '',
};

export default NasaPopUp;
