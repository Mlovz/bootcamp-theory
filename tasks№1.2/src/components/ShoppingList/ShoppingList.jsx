import { useState } from "react"
import styles from "./ShoppingList.module.css"

const ShoppingList = () => {
  let arr = [
    {
      product: "Product1",
      id: 1
    },
    {
      product: "Product2",
      id: 2
    },
    {
      product: "Product3",
      id: 3
    },
  ]
  
  let [count, setCount] = useState(arr[arr.length - 1].id + 1)
  function funCount() {
    setCount(--count)
  }
  return (
    <div className={styles.card}>
      <button onClick={funCount}>
        Убрать один элемент
      </button>
      <ul>
        {
          arr.map((item) => {
            console.log(count);
            console.log(item.id);
            if(count > item.id) {
              return (
                <li key={item.id}>{item.product}</li>
              )
            }
          })
        }
      </ul>
    </div>
  );
};

export default ShoppingList;