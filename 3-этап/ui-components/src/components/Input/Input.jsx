import React from "react";
import styles from "./Input.module.css"; // Подключение модульных стилей

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input;
