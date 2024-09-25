import { useState } from "react"
import styles from "./TodoList.module.css"

function TodoList() {
    let colorArr = [
        "#C7253E",
        "#00712D",
        "#4E31AA",
    ]
    let [value, setValue] = useState("")
    let [tasks, setTasks] = useState([])
    let [finishedTasks, setfinishedTasks] = useState([])
    let [activeTasks, setActiveTasks] = useState([])
    let [activeBtn, setActiveBtn] = useState(1)
    let [activeColor, setActiveColor] = useState({
        color: colorArr[0],
        idx: 0,
    })
    console.log(activeColor);
    function FinisedToDo() {
        let newTasks = tasks.filter((item) => item.isCompleted)
        setfinishedTasks(newTasks)
    }
    function ActiveToDo() {
        let ActiveTasks = tasks.filter((item) => !item.isCompleted)
        setActiveTasks(ActiveTasks)
    }
    function Button1() {
        setActiveBtn(1)
    }
    function Button2() {
        setActiveBtn(2)
        FinisedToDo()
    }
    function Button3() {
        setActiveBtn(3)
        ActiveToDo()
        
    }
    function chngeColor(color, index) {
        setActiveColor({ color, idx: index });  
    }
    function handleInputChange(e) {
        setValue(e.target.value.trim())
    }
    function createArr(e) {
        e.preventDefault()
        let newElementInArr
        newElementInArr = {
            id: tasks.length + 1,
            text: value,
            isCompleted: false,
            color: activeColor.color,
            idx: activeColor.idx,
        }
        let newArr = [...tasks, newElementInArr]
        newArr.sort((a, b) => a.idx - b.idx)
        console.log(tasks);
        setTasks(newArr)
        setValue("")
        
    }
    function onDelete(id) {
        let updateTasks = tasks.filter((i) => {
           return i.id !== id
        })
        setTasks(updateTasks)
    }
    function onFnished(id) {
        let newTasks = tasks.map((item) => {
            if(id === item.id) {
                let newItem = {...item, isCompleted: !item.isCompleted}
                return newItem
            }
            return item
        })
        setTasks(newTasks)
    }
    console.log(tasks);
    return (
        <div className={styles.card}>
            <h1>ToDoList</h1>
            <form onSubmit={createArr} className={styles.form}>
                <input 
                type="text" 
                onChange={handleInputChange}
                value={value}
                />
                <button className={styles.add_btn} disabled={value === ""} type="submit">Добавить</button>
            </form>
            <div className={styles.btn_wrap}>
                <button className={`${activeBtn === 1 && styles.active_Btn}`} onClick={Button1}>Все</button>
                <button className={`${activeBtn === 2 && styles.active_Btn}`} onClick={Button2}>Завершенные</button>
                <button className={`${activeBtn === 3 && styles.active_Btn}`} onClick={Button3}>Активные</button>
            </div>
            <div className={styles.colors_cont}>
                {
                    colorArr.map((item, index) => {
                        return (
                            <span className={`${styles.color_wrap} ${
                                index === activeColor?.idx && styles.activeColorCss
                            }` } key={index} onClick={() => chngeColor(item, index)} style={{background: `${item}`}}></span>
                        )
                    })
                }
            </div>
            <ul className={styles.list}>
                {
                    activeBtn === 1 && 
                    tasks?.map((item) => {
                        return (
                            <div key={item.id} className={`${styles.list_item} ${
                                item.isCompleted && styles.finished
                            }`}>
                                <div className={styles.colors_cont}>
                                    <span className={styles.color_wrap} style={{background: `${item.color}`}}></span>
                                    <li>{item.text}</li> 
                                </div>
                                <div className={styles.btn_cont}>
                                    <button disabled={!item.isCompleted} onClick={() => onDelete(item.id)} className={styles.delete_btn}>Delete</button>
                                    <button onClick={() => onFnished(item.id)} className={styles.finished_btn}>Finished</button>
                                </div>
                            </div>
                        )
                    })
                }

                {
                    (activeBtn === 2 && 
                        (finishedTasks.map((item) => {
                            return (
                                <div key={item.id} className={`${styles.list_item} ${
                                    item.isCompleted && styles.finished
                                }`}>
                                    <div className={styles.colors_cont}>
                                        <span className={styles.color_wrap} style={{background: `${item.color}`}}></span>
                                        <li>{item.text}</li> 
                                    </div>
                                    <div className={styles.btn_cont}>
                                        <button disabled={!item.isCompleted} onClick={() => onDelete(item.id)} className={styles.delete_btn}>Delete</button>
                                        <button onClick={() => onFnished(item.id)} className={styles.finished_btn}>Finished</button>
                                    </div>
                                </div>
                            )
                        }))
                    ) 
                }
                {
                    (
                        activeBtn === 3 && 
                        (activeTasks.map((item) => {
                            return (
                                <div key={item.id} className={styles.list_item}>
                                    <div className={styles.colors_cont}>
                                        <span className={styles.color_wrap} style={{background: `${item.color}`}}></span>
                                        <li>{item.text}</li> 
                                    </div>
                                    <div className={styles.btn_cont}>
                                        <button disabled={!item.isCompleted} onClick={() => onDelete(item.id)} className={styles.delete_btn}>Delete</button>
                                        <button onClick={() => onFnished(item.id)} className={styles.finished_btn}>Finished</button>
                                    </div>
                                </div>
                            )
                        }))
                    )
                }

            </ul>
        </div>
    )
}

export default TodoList