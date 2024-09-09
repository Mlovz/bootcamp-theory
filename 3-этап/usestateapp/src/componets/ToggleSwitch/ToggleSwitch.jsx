import { useState } from "react"


const ToggleSwitch = () => {
    const [isToggle, setIsToggle] = useState(false)


    const onToggle = () => {
        setIsToggle(!isToggle)
    }
    
    return (
        <div>
            <button onClick={onToggle}>{isToggle ? 'Выключить' : 'Включить'}</button>
             {
                isToggle ? <h1>Включено</h1>: <h1>Выключено</h1>
             }
        </div>
    )
}


export default ToggleSwitch