import React from "react";

const TodoForm = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Введите задачу..."
        onChange={props.handleChange}
      />
      <button onClick={props.onAddTask}>Send</button>
    </div>
  );
};

export default TodoForm;
