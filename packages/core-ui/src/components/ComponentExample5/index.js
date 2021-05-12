// import React from 'react';
import PropTypes from "prop-types";
import './ComponentExample5.scss';
import image from './empty.svg';

const ComponentExample5 = (options) => {
  return (
    <div className="ComponentExample5">
      <h2 className="ComponentExample5__heading">ComponentExample5</h2>
      <img src={image} />
    </div>
  );
};

export { ComponentExample5 };

ComponentExample5.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object)
};
