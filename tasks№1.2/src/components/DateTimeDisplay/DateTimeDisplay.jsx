import { useState } from "react"
import styles from "./DateTimeDisplay.module.css"


const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const updateTime = () => {
    setCurrentTime(new Date().toLocaleString());
  };

  return (
    <div className={styles.card}>
      <h1>Текущее время</h1>
      <p>{currentTime}</p>
      <button onClick={updateTime}>Обновить</button>
    </div>
  );
};

export default DateTimeDisplay;


