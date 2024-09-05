import React, { useState } from "react";

// События
// Условный рендеринг

const Header = ({ children }) => {
  // const [isLoggeg, setIsLogged] = useState(false)
  
  // const onOnLogged = () => {
  //   setIsLogged(true)
  // }

  // console.log(isLoggeg);

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  
  const decrement = () => {
    if(count <= 0) return
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }
  

  return (
    <header>
        <h1>{count}</h1>
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>Dec</button>
        <button onClick={reset}>Reset</button>


      {/* <h1>My App</h1>
      <button onClick={onOnLogged}>Войти</button>
      {isShow && <h1>show content</h1>}
      {isLoggeg === true ? (
        <ul>
          <li>Admin</li>
          <li>Users</li>
          <li>Tickets</li>
        </ul>
      ) : (
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}

      <h2>{children}</h2> */}

      
      
    </header>
  );
};

export default Header;
