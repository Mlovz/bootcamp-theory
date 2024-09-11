import UseStateTenCss from "./UseStateTen.module.css"
import { useState } from "react"

function UseStateTen() {
    let [px, setPX] = useState(20) 
    function Plus() {
        setPX(px + 10)
    }
    function Minus() {
        setPX(px - 10)
    }
    return (
        <>

        <button onClick={Minus}>Уменьшить размер</button>
        <button onClick={Plus}>Увеличить размер</button>
        <p style={{ fontSize:  px}}>Текст</p>
        </>
    )
    
}

export default UseStateTen