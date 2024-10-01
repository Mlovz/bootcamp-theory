import React from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

const ShoppingList = ({ products }) => {
  return (
    <ul>
      {products.map((product, i) => (
        <ShoppingItem key={i} product={product} />
      ))}
    </ul>
  );
};
export default ShoppingList;
