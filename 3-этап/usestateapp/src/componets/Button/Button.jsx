import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const TEXT = "Text";
  
  return (
    <button
      className={`${styles.button} ${styles[props.classColor]}`}
      disabled={props.disabled}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
