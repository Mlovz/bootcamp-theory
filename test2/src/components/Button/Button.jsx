import ButtonC from "./Button.module.css"


function Button (props) {
    return (
        <button className={ButtonC.btn} onClick={props.click}>{props.text}</button>
    )
}

export default Button