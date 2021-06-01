// import React from 'react';
import PropTypes from "prop-types";
import css from './ComponentExample4.module.scss';
import image from './empty.svg';

const ComponentExample4 = () => {
  return (
    <div className={css.ComponentExample4}>
      <h2 className={css.ComponentExample4__heading}>ComponentExample4</h2>
      <img src={image} alt="" />
    </div>
  );
};

export { ComponentExample4 };

ComponentExample4.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object)
};
