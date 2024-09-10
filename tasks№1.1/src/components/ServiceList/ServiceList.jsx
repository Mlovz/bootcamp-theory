import styles from "./ServiceList.module.css"

function ServiceList(props) {
    return (
        <div className={styles.card}>
            {
                props.arr.map((item) => {
                    return (
                        <ul>
                            <li>{item.name}</li>
                            <li>{item.description}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default ServiceList