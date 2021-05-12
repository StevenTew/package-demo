// import React from 'react';
import PropTypes from "prop-types";
import './ComponentExample3.scss';
import image from './empty.svg';

const ComponentExample3 = () => {
  return (
    <div className="ComponentExample3">
      <h2 className="ComponentExample3__heading">ComponentExample3</h2>
      <img src={image} alt="" />
    </div>
  );
};

export { ComponentExample3 };

ComponentExample3.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object)
};
