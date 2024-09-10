import React from 'react'

const ProductItem = (props) => {
  return (
    <div>
        <h1>{props.product.name}</h1>
        <span>{props.product.price}</span>
        <p>{props.product.description}</p>
    </div>
  )
}

export default ProductItem