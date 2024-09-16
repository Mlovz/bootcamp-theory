import React from "react";

const TodoItem = ({ task, onCompleteTask, onDeleteTask }) => {
  return (
    <div>
      <div style={{ width: 20, height: 20, background: "red" }}></div>
      <p>{task.text}</p>
      <div>
        <button onClick={() => onDeleteTask(task.id)}>
          {/* <img src="" alt="" /> */}
          delete
        </button>
        <button onClick={() => onCompleteTask(task.id)}>
          {/* <img src="" alt="" /> */}
          complete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
