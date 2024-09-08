import UseStateFiveCss from "./UseStateFive.module.css"
import { useState } from "react"

function UseStateFive() {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([])

    function handleInputChange(event) {
        setInputValue(event.target.value);
        
    }
    function changeInClick() {
        let newTasks = {
            id : tasks.length + 1,
            text: inputValue,
            completed: false,
        }
        setTasks([...tasks, newTasks])
        
    }
    function onDelete(id) {
        const updatedTasks = tasks.filter((item) => item.id !== id);
        setTasks(updatedTasks);
        
    }
    function finishedTask(id) {
       let updatetask = tasks.map((item) => {
            if(item.id === id) {
                return {...item, completed: !item.completed}
            }
            return item
            
        })
        setTasks(updatetask)
    }

    function onClick() {
        changeInClick()
        setInputValue("");
    }
    console.log(tasks);
    return (
        <>
        

        <div className={UseStateFiveCss.container}>
            <div className={UseStateFiveCss.centerWrap}>
                <input  type="text"
                        onChange={handleInputChange}
                        value={inputValue}
                        />
                <button onClick={onClick} className="btn">Добавить</button>

            </div>
            <ul className={UseStateFiveCss.list}>
                 {
                    tasks.map((item, index) => {
                        index = item.id
                        if(item.text !== "") {
                            return (
                                <div className={`${UseStateFiveCss.list_item_cont} ${
                                    item.completed && UseStateFiveCss.finished
                                } `}  key={index}>
                                    <li>{item.text}</li>
                                    <div className={UseStateFiveCss.list_btn_cont}>
                                        <button onClick={() => {onDelete(item.id)}}>Delete</button>
                                        
                                        <button onClick={() => {finishedTask(item.id)}}>Finish</button>
                                    </div>
                                </div>
                            )
                        }
                    })
                 }
                
             </ul>
        </div>

        </>
    )
    
}

export default UseStateFive