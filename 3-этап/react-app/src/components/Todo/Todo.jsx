import React from "react";
import TodoList from "../TodoList/TodoList";
import { useState } from "react";
import { clsx } from "clsx";

import styles from "./todo.module.css";

const newColors = [
  "#fff",
  "#000",
  "#ff7d7d",
  "#ffa805",
  "#cdff05",
  "#65ff05",
  "#05ffea",
  "#0569ff",
  "#ff05f7",
];

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [activeColor, setActiveColor] = useState({
    color: newColors[2],
    idx: 2
  });

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    const newTask = {
      id: tasks.length + 1,
      text: inputValue,
      isComplete: false,
      type: activeColor.color 
    };

    setTasks([...tasks, newTask]);
    setInputValue("");
    setActiveColor({color: newColors[activeColor.idx + 1], idx: activeColor.idx + 1})
  };

  const onEdit = (id) => {
    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, isComplete: !item.isComplete };
        return newItem;
      }

      return item;
    });
    setTasks(newTasks);
  };

  const onDelete = (id) => {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  };

  const onChangeColor = (color, index) => {
    setActiveColor({ color, idx: index });
  };

  const onFilteredTasks = () => {
    const filteredTasks = tasks.filter((item) => !item.isComplete)  
    setTasks(filteredTasks)
  }

  const onFilteredTasks1 = () => {
    const filteredTasks = tasks.filter((item) => item.isComplete)  
    setTasks(filteredTasks)
  }
  
  return (
    <div className={styles.todo}>
      <form action="" className={styles.form}>
        <input
          type="text"
          placeholder="Введите задачу"
          onChange={handleChange}
          value={inputValue}
        />
        <button disabled={!inputValue.trim()} onClick={addTask}>
          Добавить
        </button>
      </form>
      <div className={styles.todosFilters}>
        <button>Все</button>
        <button onClick={onFilteredTasks1}>Завершенные</button>
        <button onClick={onFilteredTasks}>Активные</button>
      </div>
      

      <div className={styles.colors}>
        {newColors.map((color, index) => (
          <div
            onClick={() => onChangeColor(color, index)}
            className={clsx(styles.color, {[styles.active]: index === activeColor?.idx})}
            key={color}
            style={{ background: color }}
          />
        ))}
      </div>

      <TodoList tasks={tasks} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
};

export default Todo;
