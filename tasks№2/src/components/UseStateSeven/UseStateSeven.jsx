import UseStateSevenCss from "./UseStateSeven.module.css"
import { useState } from "react"

function UseStateSeven() {
    let [count, setCount] = useState(0) 
    function ChangeCount() {
        setCount(++count)
    }
    return (
        <>
        <div>
            <button onClick={ChangeCount}>{count}</button>
        </div>
        </>
    )
    
}

export default UseStateSeven