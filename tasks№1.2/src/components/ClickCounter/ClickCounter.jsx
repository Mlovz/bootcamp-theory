import { useState } from "react"
import styles from "./ClickCounter.module.css"


function ClickCounter () {
    let [count, setCount] = useState(0)
    function oncount() {
        setCount(++count)
    }
    return (
        <div className={styles.card}>
            <button onClick={oncount}>{count}</button>
        </div>
    )
}

export default ClickCounter