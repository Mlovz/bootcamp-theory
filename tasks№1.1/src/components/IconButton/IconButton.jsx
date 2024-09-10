import IconButtonCss from "./IconButton.module.css"
import { useState } from "react";

function IconButton(props) {
    let [state, setState] = useState(false)
    function setStates() {
        setState(!state)
    }
    return (
        <div className={IconButtonCss.card}>
            <button onClick={setStates}>Показать/Скрыть</button>
            {
                state && (
                    <>
                    <img src={props.icon} alt="" />
                    <p>{props.label}</p>
                    </>
                )
            }
        </div>
    )
}

export default IconButton