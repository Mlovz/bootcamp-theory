import styles from './ProductCard.module.css'

const ProductCard = (props) => {
    console.log(props);
    
    return (
        <div className={styles.product}>
            <img src={props.productUrl} alt="" />
            <h2>{props.productName}</h2>
            <p>{props.productDesc}</p>
        </div>
    )
}

export default ProductCard