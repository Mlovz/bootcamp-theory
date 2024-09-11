import { useState } from "react"
import styles from "./LightSwitch.module.css"


function LightSwitch () {
    let [light, setlight] = useState(false)
    function funLigth() {
        setlight(!light)
    }
    console.log(light);
    return (
        <div className={styles.card}>
            
            <button onClick={funLigth}>on/off</button>
            <div className={`${light && styles.wrap}`}></div>
        </div>
    )
}

export default LightSwitch