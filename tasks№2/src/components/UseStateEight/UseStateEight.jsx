import UseStateEightCss from "./UseStateEight.module.css"
import { useState } from "react"

function UseStateEight() {
    let [text, setText] = useState("") 
    const [inputValue, setInputValue] = useState("");

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }
    return (
        <>
        <form>
            <input type="text" 
            value={inputValue}
            onChange={handleInputChange}
            />
            <span>{inputValue}</span>
        </form>
        </>
    )
    
}

export default UseStateEight