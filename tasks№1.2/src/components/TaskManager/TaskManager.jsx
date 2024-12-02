import { useState } from "react"
import styles from "./TaskManager.module.css"


function TaskManager () {
    let [arr, setArr] = useState([])
    let [text, setText] = useState("")
    function handleInputValue(e) {
        setText(e.target.value)
        e.target.value = ""
    }
    function funArr() {
        setArr([...arr, text])
    }
    return (
        <div className={`${styles.card} `}>  
        <input
            onChange={handleInputValue}
            type="text"
            value={text} /> 
            <button onClick={funArr}>Добавить</button>
            {
                arr.map((item) => {
                    return (
                        <span key={item}>{item}</span>
                    )
                })
            }
        </div>
    )
}

export default TaskManager