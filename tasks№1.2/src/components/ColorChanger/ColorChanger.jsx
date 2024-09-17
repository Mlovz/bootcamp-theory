import { useState } from "react"
import styles from "./ColorChanger.module.css"


function ColorChanger () {
    let [color, setColor] = useState(false)
    function ColorChanger() {
        setColor(!color)
    }
    return (
        <div className={`${color ? styles.green : styles.blue} ${styles.card} `}>   
            <button onClick={ColorChanger}>on/off</button>
        </div>
    )
}

export default ColorChanger