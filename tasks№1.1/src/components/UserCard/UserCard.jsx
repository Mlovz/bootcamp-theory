import styles from "./UserCard.module.css"

function UserCard(props) {
    return (
        <div className={styles.card}>
            <img src={props.avatarUrl} alt="" />
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    )
}

export default UserCard