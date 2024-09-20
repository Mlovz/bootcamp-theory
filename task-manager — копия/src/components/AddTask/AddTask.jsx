import React, { useContext, useState } from 'react'
import { TaskContext } from '../../TaskContext.jsx'
import styles from './AddTask.module.css'

const AddTask = () => {
    const [text, setText] = useState("")
    const state = useContext(TaskContext)

    function handleChange(e) {
        setText(e.target.value)
    }

    function addTask(e) {
        e.preventDefault()
        state.addTask(text)
        setText("")
    }

    return (
        <form onSubmit={addTask} className={styles.form}>
            <input type="text" onChange={handleChange} value={text} className={styles.input} />
            <button type='submit' className={styles.button}>Добавить</button>
        </form>
    )
}

export default AddTask
