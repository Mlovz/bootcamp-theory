import React from "react";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product, i) => (
        <ProductItem name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
