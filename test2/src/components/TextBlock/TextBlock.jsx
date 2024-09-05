import TextBlockC from "./TextBlock.module.css"

function TextBlock(props) {
    return (
        <div style={{background: props.color}}>
            <h2>{props.text}</h2>
        </div>
    )
}

export default TextBlock