import { useState } from "react";
import styles from "./BackgroundSwitcher.module.css";

const BackgroundSwitcher = () => {
  const [bg, setBg] = useState("black");

  const onChangeBg = () => {
    setBg(bg === "black"? "white" : "black");
  }
  

  return <div className={styles.block}style={{background: bg}}>
    <button onClick={onChangeBg}>Поменять цвет фона</button>
  </div>;
};

export default BackgroundSwitcher;
