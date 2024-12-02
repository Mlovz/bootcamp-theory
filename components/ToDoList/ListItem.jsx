import React from 'react'
import styles from "./ToDoList.module.css"
import Delete from "../../assets/Delete.svg"
import Edit from "../../assets/Edit Square.svg"

const ListItem = ({tasks, item, onDelete, onEdit}) => {
  return (
    <div className={`${styles.list_item} ${item.isCompleted && styles.finishedTask}`}>
        <div className={styles.list_item_left}>
            <span style={{background:`${item.color}`}} className={styles.color_wrap}></span>
            <li>{item.text}</li>
        </div>
        <div className={styles.list_item_rigth}>
            <button onClick={() => onDelete(item.id)} className={styles.delete_btn}>
                <img src={Delete} alt="" />
            </button>
            <button onClick={() => onEdit(item.id)} className={styles.Edit_btn}>
                <img src={Edit} alt="" />
            </button>
        </div>
        
    </div>
  )
}

export default ListItem