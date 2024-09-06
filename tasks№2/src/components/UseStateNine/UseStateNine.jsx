import UseStateNineCss from "./UseStateNine.module.css"
import { useState } from "react"

function UseStateNine() {
    let [state, setState] = useState(false) 
    function Activet() {
        setState(!state)
    }
    return (
        <>
        <button onClick={Activet}>Показать</button>
        <span>
        {
            (state && (
                "Добро Пожаловать"
            ))
        }
        </span>
        </>
    )
    
}

export default UseStateNine