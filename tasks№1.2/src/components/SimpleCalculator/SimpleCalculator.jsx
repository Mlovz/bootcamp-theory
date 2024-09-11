import { useState } from "react"
import styles from "./SimpleCalculator.module.css"

const SimpleCalculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  const calculateResult = () => {

    let calcResult;
    switch (operation) {
      case '+':
        calcResult = +(num1) + +(num2);
        break;
      case '-':
        calcResult = +(num1) - +(num2);
        break;
      case '*':
        calcResult = +(num1) * +(num2);
        break;
      case '/':
        calcResult = +(num2) !== 0 ? +(num1) / +(num2) : 'Деление на ноль невозможно';
        break;
      default:
        calcResult = 'Неверная операция';
    }

    setResult(calcResult);
  };

  return (
    <div className={styles.card}>
      <h1>Simple Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Первое число"
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Второе число"
      />
      <button onClick={calculateResult}>Посчитать</button>
      {result !== null && <h2>Результат: {result}</h2>}
    </div>
  );
};

export default SimpleCalculator;