import { useState } from "react";
import counterC from "./Counter.module.css"

function Counter(props) {


    return (
        <button onClick={props.Firstcount} className={counterC.btn} >{props.countt}</button>
    )
}

export default Counter