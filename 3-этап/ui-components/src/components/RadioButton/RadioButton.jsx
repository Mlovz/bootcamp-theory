import React from 'react';
import styles from './RadioButton.module.css';

const RadioButton = ({ name, value, checked, onChange, label }) => {
  return (
    <label className={styles.radioContainer}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={styles.radio}
      />
      <span className={styles.checkmark}></span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};


export default RadioButton;
