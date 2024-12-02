import { Children, createContext, useState } from "react";

export const TaskContext = createContext()

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([])
    const addTask = (text) => {
        let newTask = {
            id: tasks.length + 1,
            text: text,
            isComplete: false,
        }
        setTasks([...tasks, newTask])
    }
    const removeTask = (id) => {
        const newTasks = tasks.filter((i) => i.id !== id)
        setTasks(newTasks)
    }
    const completeTask = (id) => {
        const newTasks = tasks.map((item) => item.id === id ? {...item, isComplete:!item.isComplete}: item)
        setTasks(newTasks)
    }
    const state = {
        tasks,
        addTask,
        removeTask,
        completeTask
    }
    return (
        <TaskContext.Provider
         value={state}>
            {children}
        </TaskContext.Provider>
    )
}