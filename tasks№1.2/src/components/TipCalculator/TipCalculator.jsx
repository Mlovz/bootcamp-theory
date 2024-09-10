import { useState } from "react";
import styles from "./TipCalculator.module.css";

const TipCalculator = (props) => {
  let [sum, setSum] = useState(0);        
  let [tipPercentage, setTipPercentage] = useState(0); 
  let [total, setTotal] = useState(0);   

  function handleInputValue1(e) {
    setSum(+e.target.value);
  }
  function handleInputValue2(e) {
    setTipPercentage(+e.target.value / 100);
  }
  function handleClick() {
    let tipAmount = sum * tipPercentage;
    setTotal(sum + tipAmount);
  }

  return (
    <div className={styles.card}>
      <input
        onChange={handleInputValue1}
        type="number"
        placeholder="Введи сумму"
      />
      <input
        onChange={handleInputValue2}
        type="number"
        placeholder="Введи процент чаевых"
      />
      <button onClick={handleClick}>Посчитать</button>
      {total > 0 && <p>Общая сумма с чаевыми: {total}</p>}
    </div>
  );
};

export default TipCalculator;
