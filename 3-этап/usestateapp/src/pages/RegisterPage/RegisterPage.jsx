import React from "react";
import './register.css'

const RegisterPage = () => {
  return (
    <div className="register">
      <h1>Регистрация</h1>
      <form className="register-form">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="Confirm password" />
        <button>Регистрация</button>
      </form>
    </div>
  );
};

export default RegisterPage;
