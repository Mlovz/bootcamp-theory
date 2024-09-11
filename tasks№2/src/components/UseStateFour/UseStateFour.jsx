import UseStateFourCss from "./UseStateFour.module.css"
import { useState } from "react"

function UseStateFour() {
    let [color, setColor] = useState("red")
    const changeColor = () => {
        document.body.style.backgroundColor = color;
      };
    return (
        <>
        <button onClick={changeColor}>Изменить цвет фона</button>

        </>
    )
}

export default UseStateFour