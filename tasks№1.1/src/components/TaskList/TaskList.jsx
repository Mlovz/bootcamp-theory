import styles from "./TaskList.module.css"

function TaskList(props) {
    return (
        <div className={styles.card}>
            {
                props.arr.map((item) => {
                    return (
                            <>
                            <input type="checkbox" checked={item.completed} />
                            <label>{item.title}</label>
                            </>
                    )
                })
            }
        </div>
    )
}

export default TaskList