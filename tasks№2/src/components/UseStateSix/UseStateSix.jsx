import UseStateSixCss from "./UseStateSix.module.css"
import { useState } from "react"

function UseStateSix() {
    let [state, setState] = useState(false) 
    function ChangeState() {
        setState(!state)
    }
    return (
        <>
        <div>
            
            <button onClick={ChangeState}>
                {
                    state ? 'Выключить' : ' Включить'  
                }
            </button>
        </div>
        </>
    )
    
}

export default UseStateSix