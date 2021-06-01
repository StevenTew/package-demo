// import React from 'react';
import PropTypes from "prop-types";
import css from './ComponentExample3.module.scss';
import image from './empty.svg';

const ComponentExample3 = () => {
  return (
    <div className={css.ComponentExample3}>
      <h2 className={css.ComponentExample3__heading}>ComponentExample3</h2>
      <img src={image} alt="" />
    </div>
  );
};

export { ComponentExample3 };

ComponentExample3.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object)
};
