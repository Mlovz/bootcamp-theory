import styles from "./MenuItem.module.css"
import Menu from "./Menu/Menu"

function MenuItem(props) {
    let arr = [
        props.name, props.price, props.description
    ]
    return (
        <div className={styles.card}>
            <Menu arr={arr}/>
        </div>
    )
}

export default MenuItem