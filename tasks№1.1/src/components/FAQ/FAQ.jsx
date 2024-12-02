import styles from "./FAQ.module.css"

function FAQ(props) {
    return (
        <div className={styles.card}>
            {
                props.arr.map((item) => {
                    return (
                        <ul>
                            <li>{item.question}</li>
                            <li>{item.answer}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default FAQ