import { useState } from "react"


const ClickCounter = () => {
    const [clickCount, setClickCount] = useState(0)

    const incrementClick = () => {
        setClickCount(clickCount + 1)
    }

    return (
        <div>
            <h1>Количество кликов: {clickCount}</h1>
            <button onClick={incrementClick}>Increment</button>
        </div>
    )
}

export default ClickCounter