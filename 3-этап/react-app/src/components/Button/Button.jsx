import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  if (props.link) {
    return (
      <a className={`${styles.btn} ${styles[props.variant]}`}>{props.text}</a>
    );
  }

  return (
    <button onClick={props.click} className={`${styles.btn} ${styles[props.variant]}`}>
      {props.text}
    </button>
  );
};

export default Button;
