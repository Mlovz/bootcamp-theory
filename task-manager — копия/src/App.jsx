import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList/TaskList'
import AddTask from './components/AddTask/AddTask'

function App() {
  return (
    <>
      <AddTask/>
      <TaskList/>
    </>
  )
}

export default App
