import style from "./ProductItem.module.css";

function ProductItem(props) {
  const { name, price } = props;
  return (
    <ul className={style.card}>
      <h1>Задание 1: Отображение списка товаров</h1>
      <h3>{name}</h3>
      <span>{price}</span>
    </ul>
  );
}

export default ProductItem;
