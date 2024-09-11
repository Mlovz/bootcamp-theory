import React from "react";
import TodoList from "../TodoList/TodoList";
import { useState } from "react";

// {
//     id: 1,
//     text: inputValue,
//     isComplete: false
// },

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const addTask = (e) => {
    e.preventDefault()

    const newTask = {
        id: tasks.length + 1,
        text: inputValue,
        isComplete: false,
    }

    setTasks([...tasks, newTask])
    setInputValue('')
  }

  return (
    <div>
      <form action="" >
        <input type="text" placeholder="Введите задачу" onChange={handleChange} value={inputValue} />
        <button onClick={addTask}>Добавить</button>
      </form>

      <TodoList tasks={tasks} />
    </div>
  );
};

export default Todo;
