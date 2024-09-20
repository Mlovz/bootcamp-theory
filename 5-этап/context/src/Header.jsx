import React, { useContext, useState } from "react";
import { AuthContext } from "./GlobalContext";

const Header = (props) => {
  const {user} = useContext(AuthContext);

  const {user: newUser} = user

  return (
    <div className="header">
      <a href="" className="header-logo"></a>

      {state.user.user ? (
        <div>
          <span>{newUser.email}</span>
        </div>
      ) : (
        <a href="" className="header-login">
          Войти
        </a>
      )}
    </div>
  );
};

export default Header;
