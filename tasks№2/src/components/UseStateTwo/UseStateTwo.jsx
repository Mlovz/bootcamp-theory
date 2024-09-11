import UseStateTwoCss from "./UseStateTwo.module.css"
import { useState } from "react"

function UseStateTwo() {
    let [state, setState] = useState(false)
    function SetState() {
        setState(!state)
    }

    return (
        <>
            <button onClick={SetState}>Показать/Скрыть</button>
            {
                state && (
                    <p>Текст который можно скрыть/показать           </p>
                )
            }
        </>
    )
}

export default UseStateTwo