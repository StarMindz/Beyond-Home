import React from 'react';
import PropTypes from 'prop-types';

const NasaPopUp = ({
  id,
  title,
  description,
  image,
  date,
  creator,
  back,
}) => {
  const popUp = (
    <div id={`${id}PopUp`}>
      <h1 className="popUpTitle">
        { title }
      </h1>
      <div>
        <img className="popUpImage" src={image} alt="nasa" />
      </div>
      <p className="popUpDescription">
        { description }
      </p>
      <p className="credit">
        <span className="creditTerms">{ creator }</span>
        <span className="creditTerms">{ date }</span>
      </p>
      <button type="submit" className="nasaSecondButton" onClick={() => back()}>Back</button>
    </div>
  );
  return popUp;
};

NasaPopUp.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  creator: PropTypes.string,
  back: PropTypes.func,
};

NasaPopUp.defaultProps = {
  id: 0,
  title: '',
  description: '',
  image: '',
  date: '',
  creator: '',
  back: '',
};

export default NasaPopUp;
