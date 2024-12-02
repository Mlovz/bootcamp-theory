import styles from "./AppCard.module.css"

function AppCard(props) {
    return (
        <div className={styles.card}>
            <img src={props.iconUrl} alt="" />
            <h2>{props.appName}</h2>
            <h3>{props.developer}</h3>
            <span>{props.downloads}</span>
        </div>
    )
}

export default AppCard