import { useState } from "react"


const WelcomeMessage = () => {
    const [isShow, setIsShow] = useState(false)
    
    const onShow = () => {
        setIsShow(true)
    }
    
    return (
        <div>
            <button onClick={onShow}>Показать</button>
            {
                isShow && <h1>Добро пожаловать</h1>
            }
        </div>
    )
    
}


export default WelcomeMessage