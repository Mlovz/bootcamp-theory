import productCardC from "./ProductCard.module.css"

function ProductCard(props) {
    return (
        <div className={productCardC.card}>
            <img className={productCardC.img} src={props.URL} alt="" />
            <h2 className={productCardC.title}>{props.title}</h2>
            <p className={productCardC.info}>{props.info}</p>
        </div>
    )
}

export default ProductCard