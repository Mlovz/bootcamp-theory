import React from 'react'

const TodoList = (props) => {
  return (
    <ul>
        {
            props.tasks.length === 0 
            ? <h1>Еще нет задач</h1>
            : props.tasks.map((task) => (
                <li key={task.id}>{task.text}</li>
            ))
        }
    </ul>
  )
}

export default TodoList