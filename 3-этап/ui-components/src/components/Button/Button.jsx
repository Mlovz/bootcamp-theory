import React from 'react';
import styles from './Button.module.css'; 

const Button = ({ children, onClick, type = 'button', variant, disabled = false }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};



export default Button;
