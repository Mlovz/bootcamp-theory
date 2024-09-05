import React, { useState } from "react";

const HomePage = () => {
  // let a = 0
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };


  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={onOpen}>open</button>

      {/* {isOpen && (
        <div className="modal">
          <button onClick={onClose}>Close Modal</button>
        </div>
      )} */}

      <div className={`modal ${isOpen ? "active" : ""}`}>
        {/* <button onClick={onClose}>Close Modal</button> */}
      </div>

      {/* {a} */}
      {/* {
        a ? (
          <h2>Hello</h2>
        ) : (
          <h3>World</h3>
        )
      } */}
    </div>
  );
};

export default HomePage;
