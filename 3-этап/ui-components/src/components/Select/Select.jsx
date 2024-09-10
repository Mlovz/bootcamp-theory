import React from 'react';
import styles from './Select.module.css';

const Select = ({ options, value, onChange, disabled = false }) => {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};


export default Select;
