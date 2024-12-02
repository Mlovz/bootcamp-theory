import React from 'react'
import styles from "./ToDoList.module.css"
import ListItem from "./ListItem";

const List = ({tasks, onDelete, onEdit, activeBtn}) => {
  return (
    <ul className={styles.list}>
        { 
            tasks.map((item, index) => {
                return (
                    <div key={index}>
                        <ListItem onEdit={onEdit} onDelete={onDelete}  tasks={tasks} item={item}/>
                    </div>
                )
            })
        }
       
    </ul>
  )
}

export default List