import { useState } from "react"
import styles from "./LikeButton.module.css"


function LikeButton () {
    let [count, setCount] = useState(0)
    function funCount() {
        setCount(++count)
    }
    return (
        <div className={`${styles.card} `}>  
            <button onClick={funCount}>Лайк</button>
            <span>{count} лайков</span>
        </div>
    )
}

export default LikeButton