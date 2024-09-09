import React, { useState } from "react";
import styles from "./list.module.css";

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const handlelChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      title: text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setText('')
  };

  const onDelete = (id) => {
    console.log(id);
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks)
  }

  const onEdit = (id) => {
    const newTasks = tasks.map((item) => {
        if(item.id === id) {
            return {...item, completed: !item.completed}
        }
        return item
    })
    setTasks(newTasks)
  }
  

  return (
    <div className={styles.todo}>
      <form className={styles.todoForm} onSubmit={onSubmit}>
        <input
          onChange={handlelChange}
          type="text"
          value={text}
          placeholder="Введите задачу..."
        />
        <button type="submit">Добавить</button>
      </form>

      <ul className={styles.list}>
        {tasks.map((item) => {
          return (
            <li className={`${styles.item}`}>
              <span className={`${item.completed && styles.completed}`}>{item.title}</span>
              <div className="">
                <button onClick={() => onEdit(item.id)}>Завершить</button>
                <button onClick={() => onDelete(item.id)}>Удалить</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
