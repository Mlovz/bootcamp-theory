import styles from "./Event.module.css"
import EventList from "./EventList/EventList"

function Event(props) {
    let arr = [
        props.title,
        props.date,
        props.location,
    ]
    return (
        <div className={styles.card}>
            <EventList arr={arr}/>
        </div>
    )
}

export default Event