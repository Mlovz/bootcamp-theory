import UseStateThreeCss from "./UseStateThree.module.css"
import { useState } from "react"

function UseStateThree() {
    let [state, setState] = useState("black")
    function Red() {
        setState("red")
    }
    function Green() {
        setState("green")
    }
    function Blue() {
        setState("blue")
    }

    return (
        <>
        <p style={{ color: `${state}`}}>Teкст</p>
        <button onClick={Green}>Зеленый</button>
        <button onClick={Red}>Красный</button>
        <button onClick={Blue}>Синий</button>
        </>
    )
}

export default UseStateThree