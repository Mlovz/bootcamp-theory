import React from 'react';
import styles from './Textarea.module.css';

const Textarea = ({ placeholder, value, onChange, disabled = false }) => {
  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Textarea;
