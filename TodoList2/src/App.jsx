import React, { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  return (
    <div className="container">
      <ToDoList />
    </div>
  );
}

export default App;

