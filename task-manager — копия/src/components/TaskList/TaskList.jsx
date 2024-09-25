import React, { useContext } from 'react'
import { TaskContext } from '../../TaskContext.jsx'
import styles from './TaskList.module.css'

const TaskList = () => {
    const state = useContext(TaskContext)

    return (
        <div className={styles.container}>
            {state.tasks.length > 0 
                ? state.tasks.map((item) => (
                    <div key={item.id} className={`${styles.taskItem} ${item.isComplete ? styles.taskItemComplete : ''}`}>
                        <span className={styles.taskText}>{item.text}</span>
                        <div className={styles.taskButtons}>
                            <button onClick={() => state.removeTask(item.id)}>Удалить</button>
                            <button onClick={() => state.completeTask(item.id)}>Завершить</button>
                        </div>
                    </div>
                ))
                : <h1 className={styles.noTasks}>Пока нет задач</h1>
            }
        </div>
    )
}

export default TaskList
