import { useState } from "react"


const ColorChanger = () => {
    const [newColor, setNewColor] = useState('blue')
    
    const changeColor = (typeColor) => {
        setNewColor(typeColor)
    }
    

    return (
        <div>
            <button onClick={() => changeColor('red')}>Red</button>
            <button onClick={() => changeColor('blue')}>Blue</button>
            <button onClick={() => changeColor('green')}>Green</button>
            <h1 style={{color: newColor}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, perferendis.</h1>
        </div>
    )
}

export default ColorChanger