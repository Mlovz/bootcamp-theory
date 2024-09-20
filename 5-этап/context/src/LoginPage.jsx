import React, { useContext, useState } from "react";
import { AuthContext } from "./GlobalContext";

const LoginPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const state = useContext(AuthContext)
  console.log(state);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault()
    state.user.setUser(userData);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
