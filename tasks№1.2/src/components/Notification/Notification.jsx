import { useState } from "react"
import styles from "./Notification.module.css"

const Notification = () => {

  
  let [state, setState] = useState(false)
  function funState() {
    setState(true)
    setTimeout(() => {
      setState(false)
    }, 1000)
  }
  return (
    <div className={styles.card}>
      <button onClick={funState}>Показать уведомление</button>
      {
        state && (
          <span>Уведомление</span>
        )
      }
    </div>
  );
};

export default Notification;