import styles from "./ProductCard.module.css"

function ProductCard(props) {
    return (
        <div className={styles.card}>
            <img src={props.imageUrl} alt="" />
            <h2>{props.name}</h2>
            <h3>{props.price}</h3>
            <h4>Рейтинг: {props.rating}</h4>
        </div>
    )
}

export default ProductCard