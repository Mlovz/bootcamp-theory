import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {};

  const removeTask = (idx) => {};

  const completeTask = (idx) => {};

  const state = {
    tasks,
    addTask,
    removeTask,
    completeTask,
  };

  return (
    <TaskContext.Provider value={state}>{props.children}</TaskContext.Provider>
  );
};
