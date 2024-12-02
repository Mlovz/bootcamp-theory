import ProductItem from "../ProductItem/ProductItem";

function ProductList(props) {
  return (
    <div>
      <ul>
        {props.products.map((e) => (
          <ProductItem name={e.name} price={e.price} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
