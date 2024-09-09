import styles from "./Testimonial.module.css"
import TestimonialsList from "./TestimonialsList/TestimonialsList"


function Testimonial(props) {
    let arr = [
        props.name,
        props.feedack,
        props.date,

    ]
    return (
        <div className={styles.card}>
            <TestimonialsList arr={arr}/>
        </div>
    )
}

export default Testimonial