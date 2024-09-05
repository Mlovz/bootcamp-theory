import logoC from "./Logo.module.css"

function Logo(props) {
    return (
        <img src={props.URL} alt="" width={props.width} height={props.height}/>
    )
}

export default Logo