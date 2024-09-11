import { useState } from "react"
import styles from "./ThemeSwitcher.module.css"

const ThemeSwitcher = () => {
  let [state, setState] = useState(false)
  function funState() {
    setState(!state)
  }
  return (
    <div className={`${styles.card} ${state && (styles.black)}`}>
      {
        state ? <button onClick={funState}>Светлая тема</button> : <button onClick={funState}>Темная тема</button>
      }
    </div>
  );
};

export default ThemeSwitcher;