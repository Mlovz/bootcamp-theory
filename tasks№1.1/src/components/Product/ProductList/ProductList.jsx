import ProductListCss from "./ProductList.module.css"


function ProductList(props) {
    return (

        <div className={ProductListCss.mini_card}>

            {
                props.products.map((item) => 
                        <div>
                            <h2>{item.name}</h2>
                            <h3>{item.price}</h3>
                            <h4>{item.description}</h4>
                        </div>
                )
            }

        </div>
    )
}

export default ProductList