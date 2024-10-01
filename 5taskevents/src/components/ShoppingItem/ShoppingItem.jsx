import React from "react";

const ShoppingItem = ({ product }) => {
  const Eat = () => {
    alert(product);
  };
  return (
    <li>
      <button className="btn" onClick={Eat}>
        {product}
      </button>
    </li>
  );
};
export default ShoppingItem;
