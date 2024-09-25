import React from 'react';
import styles from './Switch.module.css';

const Switch = ({ checked, onChange }) => {
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.input}
      />
      <span className={styles.slider}></span>
    </label>
  );
};


export default Switch;
