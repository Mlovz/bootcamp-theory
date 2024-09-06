import UseStateFiveCss from "./UseStateFive.module.css"
import { useState } from "react"

function UseStateFive() {
    
    let [text, setText] = useState("Задача Котору можно поменять")
    const [inputValue, setInputValue] = useState("");
    function changeText() {
        setText(inputValue)
    }
    function handleInputChange(event) {
        setInputValue(event.target.value);
    }
    return (
        <>
        <input  type="text"
                value={inputValue}
                onChange={handleInputChange} />
        <button onClick={changeText} className="btn">Добавить</button>
        <div className="div">
            <span>{text}</span>
        </div>
        </>
    )
    
}

export default UseStateFive