import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({ checked, onChange, label }) => {
  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.checkbox}
      />
      <span className={styles.checkmark}></span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default Checkbox;
