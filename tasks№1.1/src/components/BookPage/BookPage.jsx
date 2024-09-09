import styles from "./BookPage.module.css"

function BookPage(props) {
    return (
        <div className={styles.card}>
            <div className={styles.page}>
                <h2>{props.title}</h2>
                <div>
                    <span>{props.author}</span>
                    <span>{props.pages}</span>
                </div>
            </div>
        </div>
    )
}

export default BookPage