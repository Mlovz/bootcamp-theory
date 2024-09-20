import React, { useContext, useState } from "react";
import { TaskContext } from "../TaskContext";

const AddTask = () => {
  const state = useContext(TaskContext);
  const [task, setTask] = useState('')
  
  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    state.addTask(task)
    setTask('')
  }


  return <form onSubmit={onSubmit}>
    <input type="text" placeholder="Add task..." value={task} onChange={handleChange}/>
    <button type="submit">Add</button>
  </form>;
};

export default AddTask;
