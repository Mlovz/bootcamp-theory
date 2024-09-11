import useStateCss from "./useState.module.css"
import { useState } from "react"

function UseState() {
    let [count, setCount] = useState(0)
    function desc() {
        setCount(--count)
    }
    function plus() {
        setCount(++count)
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={desc}>Отнять</button>
            <button onClick={plus}>Прибавить</button>
        </>
    )
}

export default UseState