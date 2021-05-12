// import React from 'react';
import PropTypes from "prop-types";
import './ComponentExample4.scss';
import image from './empty.svg';

const ComponentExample4 = (options) => {
  return (
    <div className="ComponentExample4">
      <h2 className="ComponentExample4__heading">ComponentExample4</h2>
      <img src={image} />
    </div>
  );
};

export { ComponentExample4 };

ComponentExample4.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object)
};
