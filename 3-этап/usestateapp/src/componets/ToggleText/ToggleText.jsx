import { useState } from "react"



const ToggleText = () => {
    const [isShow, setIsShow] = useState(false)

    const toggleShow = () => {
        setIsShow(!isShow)
    }

    return(
        <div>
            <button onClick={toggleShow}>{isShow ? 'Скрыть' : 'Показать'}</button>
            {
                isShow && <h1>Текст показан</h1>
            }
        </div>
    )
}


export default ToggleText