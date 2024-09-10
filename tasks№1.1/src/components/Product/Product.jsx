import ProductCss from "./Product.module.css"
import ProductList from "./ProductList/ProductList"
function Product(props) {
 
    return (
        <div className={ProductCss.card}>
            <h2>{props.name}</h2>
            <h3>{props.price}</h3>
            <h4>{props.description}</h4>
            <ProductList products={[
            {
                name: 'Name1',
                price: 'Price1',
                description: 'Lorem1'
            },
            {
                name: 'Name2',
                price: 'Price2',
                description: 'Lorem2'
            },
            {
                name: 'Name3',
                price: 'Price3',
                description: 'Lorem3'
            },
        ]}/>
        </div>
    )
}
export default Product