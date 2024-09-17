import { useState } from "react"
import styles from "./ImageSlider.module.css"

const ImageSlider = () => {

  let arr = [
    {
      url: "https://yastatic.net/naydex/yandex-search/ssy10H022/835316C6w/XvWmwys1vmXHJWzjwgtllHIO7m39noeFoxyb7GMXuXAJ5WWUZN7AiXehV9-suqAfhVBrBx6oFsIjhR5G8_0W1FKhs_J-GK4YqlRwgpNKFNUHJo8UsPuflNskntQzQtBEOfh57Sj_yeAviUfyFE40kkW8wp-yJdJjAsk3C6-UK8QOUVw",
      id: 1,
    },
    {
      url: "https://yastatic.net/naydex/yandex-search/sUsyH9406/835316C6w/XvWmwys1vmXHJWzjwgtllHIO7m39noeFoxyb7GZbtU1d_Wj8bNuN2XO9Vqu0o9QSyVEuRlKoF743gEJTv_he0QqowpoaOL4UtmRkmuM7ebBic8IY3Z-b9Oswx4EDJrF8NIVxudA3DAieAL52TC4UrqlERkcC2E6TMjHw",
      id: 2,
    },
    {
      url: "https://yastatic.net/naydex/yandex-search/sUsyH9406/835316C6w/XvWmwys1vmXHJWzjwgtllHIO7m39noeFoxyb7FMXuVFctWzxJMLt1XekFrb8p9VTgARuRl_9ZsIGxQMTsrka0Qf8wooaOL4MrnREku87ebBic8IY3Z-b9Oswx4EDJrF8NIVxudA3DAieAL52TC4UrqlERkcC2E6TMjHw",
      id: 3,
    },
  ]
  let [count, setCount] = useState(1)
  function funCountMinus() {
    if(count > arr.length - 2) {
      setCount(--count)
    }
  }
  function funCountPlus() {
    if(count < arr.length) {
      setCount(++count)
    }
  }
  return (
    <div className={styles.card}>
      <button onClick={funCountPlus}>Вперед</button>
      {
        arr.map((item) => {
          if(count === item.id) {
            return (
              <img key={item.id} src={item.url} alt="" />
            )
          }
        })
      }
      <button onClick={funCountMinus}>Назад</button>
    </div>
  );
};

export default ImageSlider;