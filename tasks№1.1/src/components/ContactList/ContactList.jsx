import styles from "./ContactList.module.css"

function ContactList(props) {
    return (
        <div className={styles.card}>
            {
                props.arr.map((item) => {
                    return (
                        <ul>
                            <li>{item.name}</li>
                            <li>{item.number}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default ContactList