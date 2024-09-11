import React from "react";
import styles from "./todoList.module.css";
import { clsx } from "clsx";

const TodoList = (props) => {
  return (
    <ul className={styles.list}>
      {props.tasks.length === 0 ? (
        <h1 className={styles.empty}>Еще нет задач</h1>
      ) : (
        props.tasks.map((task) => (
          <li
            key={task.id}
            className={clsx(styles.item, {
              [styles.complete]: task.isComplete === true,
            })}
          >
            <div className={styles.text}>
              <span style={{ background: task.type }}></span>
              {task.text}
            </div>
            <div className={styles.btns}>
              <button
                onClick={() => props.onEdit(task.id)}
                className={styles.edit}
              >
                Завершить
              </button>
              <button
                disabled={!task.isComplete}
                onClick={() => props.onDelete(task.id)}
                className={styles.delete}
              >
                Удалить
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default TodoList;
