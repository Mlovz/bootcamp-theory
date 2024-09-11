import styles from "./avatar.module.css"

function Avatar(props) {
    return (
        <img 
            className={`${styles[props.className]} ${styles.avatar} ${styles[props.size]}`} 
            src={props.URL} 
            alt={props.ALT} 
        />
    )
}

export default Avatar