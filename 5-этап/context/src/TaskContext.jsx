import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = {text: task, isCompete: false}
    setTasks([...tasks, newTask]);
  };

  const removeTask = (idx) => {
    const newTasks = tasks.filter((t, index) => index !== idx)
    setTasks(newTasks)
  };

  const completeTask = (idx) => {
    const newTasks = tasks.map((suleim, index) => (
      index === idx ? {...suleim, isCompete: !suleim.isCompete} : suleim
    ))
    setTasks(newTasks)
  };

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
