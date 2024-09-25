import React from "react";

const ProductItem = ({ name, price }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{price}</h2>
    </div>
  );
};

export default ProductItem;
