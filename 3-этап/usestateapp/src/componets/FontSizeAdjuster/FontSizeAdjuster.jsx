import { useState } from "react"


const FontSizeAdjuster = () => {
    const [size, setSize] = useState(12)
    
    const onIncSize = () => {
        setSize(size + 1)
    }

    const onDecSize = () => {
        setSize(size - 1)
    }    

    return (
        <div>
            <button onClick={onIncSize}>Увеличить</button>
            <button onClick={onDecSize}>Уменьшить</button>
            <h1 style={{fontSize: size}}>Размер текста</h1>
        </div>
    )
}


export default FontSizeAdjuster