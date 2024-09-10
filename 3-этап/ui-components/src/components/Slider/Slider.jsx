import React from 'react';
import styles from './Slider.module.css';

const Slider = ({ value, onChange, min = 0, max = 100 }) => {
  return (
    <input
      type="range"
      className={styles.slider}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
    />
  );
};

export default Slider;
