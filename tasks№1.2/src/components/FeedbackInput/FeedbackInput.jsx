import { useState } from "react"
import styles from "./FeedbackInput.module.css"


function FeedbackInput () {
    let [text, setText] = useState(false)
    function funText(e) {
        setText(e.target.value)
    }
    return (
        <div className={styles.card}>
            <input 
            onChange={funText}
            type="text" />
            <span>{text}</span>
        </div>
    )
}

export default FeedbackInput