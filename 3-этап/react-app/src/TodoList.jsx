import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, onCompleteTask, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((item) => (
        <TodoItem
          key={item.id}
          task={item}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
