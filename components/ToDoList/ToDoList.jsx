import styles from "./ToDoList.module.css"
import List from "./List"
import { useState } from "react"
import CategoryCopy from "../../assets/Category copy.svg"
import Filter from "../../assets/Filter.svg"
import Settings from "../../assets/Setting.svg"

function ToDoList() {
    let arrColor = [
        "#984040", "#21BCFF", "#FF8C21", "#608B67", "#FDA386",
    ];
    let [value, setValue] = useState("");
    let [tasks, setTasks] = useState([]);
    let [activeBtn, setActiveBtn] = useState(1);
    let [activeColor, setActiveColor] = useState({
        color: arrColor[0],
        idx: 0,
    });

    function handleInputChange(e) {
        setValue(e.target.value.trim());
    }

    function addTask(e) {
        e.preventDefault();
        let newTask = {
            id: tasks.length + 1,
            text: value,
            isCompleted: false,
            color: activeColor.color,
        };
        setTasks([...tasks, newTask]);
        setValue("");
    }

    function onDelete(id) {
        let newTasks = tasks.filter((item) => item.id !== id);
        setTasks(newTasks);
    }

    function onEdit(id) {
        let newTasks = tasks.map((item) => {
            if (item.id === id) {
                return { ...item, isCompleted: !item.isCompleted };
            }
            return item;
        });
        setTasks(newTasks);
    }

    const onChangeColor = (color, index) => {
        setActiveColor({ color, idx: index });
    };

    function filterTasks() {
        if (activeBtn === 2) {
            return tasks.filter((item) => !item.isCompleted);
        }
        if (activeBtn === 3) {
            return tasks.filter((item) => item.isCompleted);
        }
        return tasks;
    }

    function button1() {
        setActiveBtn(1);
    }

    function button2() {
        setActiveBtn(2);
    }

    function button3() {
        setActiveBtn(3);
    }

    return (
        <div className={styles.container}>
            <div className={styles.top_cont}>
                <form onSubmit={addTask} className={styles.form}>
                    <input
                        placeholder="Введите задачу..."
                        className={styles.form_inp}
                        type="text"
                        value={value}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className={styles.form_btn}>
                        Send
                    </button>
                </form>
                <div className={styles.cont_btns}>
                    <button onClick={button1}>
                        <img src={CategoryCopy} alt="" />
                        <span>Все: {tasks.length}</span>
                    </button>
                    <button onClick={button2}>
                        <img src={Filter} alt="" />
                        <span>Активные: {tasks.filter((item) => !item.isCompleted).length}</span>
                    </button>
                    <button onClick={button3}>
                        <img src={Settings} alt="" />
                        <span>Завершенные: {tasks.filter((item) => item.isCompleted).length}</span>
                    </button>
                </div>
                <div className={styles.colors_cont}>
                    {arrColor.map((item, index) => {
                        return (
                            <span
                                key={index}
                                onClick={() => onChangeColor(item, index)}
                                style={{ background: `${item}` }}
                                className={`${styles.color_wrap} ${
                                    activeColor?.idx === index && styles.activeColor
                                }`}
                            ></span>
                        );
                    })}
                </div>
            </div>
            <List
                activeBtn={activeBtn}
                onEdit={onEdit}
                onDelete={onDelete}
                tasks={filterTasks()}
            />
        </div>
    );
}

export default ToDoList