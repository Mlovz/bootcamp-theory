import React from "react";
import ProductItem from "./ProductItem";

const Product = (props) => {
  return (
    <div>
      {props.products.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Product;
