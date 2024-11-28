import React, { forwardRef, memo } from 'react';
import styles from './Button.module.css'; 

const Button = ({
   children, onClick, type = 'button', variant, disabled = false
   }, ref) => {

  
  
  return (
    <button
      ref={ref}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};



export default memo(forwardRef(Button));
