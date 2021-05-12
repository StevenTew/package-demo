// import React from 'react';
import PropTypes from "prop-types";
import './ComponentExample6.scss';
import image from './empty.svg';

const ComponentExample6 = (options) => {
  return (
    <div className="ComponentExample6">
      <h2 className="ComponentExample6__heading">ComponentExample6</h2>
      <img src={image} />
    </div>
  );
};

export { ComponentExample6 };

ComponentExample6.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object)
};
