import { useState } from "react"
import styles from "./ToggleText.module.css"


function ToggleText () {
    let [state, setState] = useState(false)
    function funState() {
        setState(!state)
    }
    return (
        <div className={`${styles.card} `}>   
            <button onClick={funState}>показать/скрыть</button>
            {
                state && (
                    <span>текст</span>
                )
            }
        </div>
    )
}

export default ToggleText