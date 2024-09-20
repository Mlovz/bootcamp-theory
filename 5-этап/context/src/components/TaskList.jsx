import React, { useContext } from "react";
import { TaskContext } from "../TaskContext";

const TaskList = () => {
  const state = useContext(TaskContext);

  console.log(state);

  return (
    <div>
      {state.tasks.length > 0 ? (
        state.tasks.map((task, index) => (
          <div key={index} style={{opacity: task.isCompete ? '.4' : 1}}>
            {task.text}
            <button onClick={() => state.removeTask(index)}>Удалить</button>
            <button onClick={() => state.completeTask(index)}>
              Завершить задачу
            </button>
          </div>
        ))
      ) : (
        <h1>Нет задач пока что</h1>
      )}
    </div>
  );
};

export default TaskList;
