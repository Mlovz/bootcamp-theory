import React, { useState } from "react";
import styles from "./form.module.css";

const Form = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        name="email"
        onChange={handleChange}
        type="text"
        placeholder="Email"
      />
      
      <input
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="password"
      />
      <button type="submit">
        Войти
      </button>
    </form>
  );
};

export default Form;
