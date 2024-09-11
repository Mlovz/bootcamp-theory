import { useState } from "react"
import styles from "./CountdownTimer.module.css"


function CountdownTimer () {
    let [state, setState] = useState(false)
    function funState() {
        setState(!state)
    }

    let [timer, setTimer] = useState(60)
    function funTimer() {
        if (timer > 0) {
            setTimer(--timer)
        }
    }
    if(state) {
        setInterval(() => {
            funTimer()
        }, 1000)
    }
    return (
        <div className={`${styles.card} `}>   
            <button onClick={funState}>start</button>
            <span>{timer}</span>
        </div>
    )
}

export default CountdownTimer