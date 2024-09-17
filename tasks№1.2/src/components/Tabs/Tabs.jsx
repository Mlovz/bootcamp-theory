import { useState } from "react"
import styles from "./Tabs.module.css"


function Tabs () {
    let arr = [
        {
            text: "Текст1",
            id: 1,
        },
        {
            text: "Текст2",
            id: 2,
        },
        {
            text: "Текст3",
            id: 3,
        }
    ]
    let [count, setCount] = useState(1)
    function funCount1() {
        setCount(1)
    }
    function funCount2() {
        setCount(2)
    }
    function funCount3() {
        setCount(3)
    }
    
    return (
        <div className={styles.card}>  
            <div className={styles.card_item}>
                <button onClick={funCount1}>Вкладка1</button>
                <button onClick={funCount2}>Вкладка2</button>
                <button onClick={funCount3}>Вкладка3</button>

            </div>
            {
                    arr.map((item) => {
                        if(count === item.id) {
                            return (
                                <div className={styles.wrap}>
                                    <span>{item.text}</span>
                                </div>
                            )
                        }
                    })
                }
        </div>
    )
}

export default Tabs