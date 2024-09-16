import React from "react";

const TodoFilters = (props) => {
  return (
    <div>
      <div>
        <img src="" alt="" />
        Все: {props.tasks.length}
      </div>
      <div>
        <img src="" alt="" />
        Активные: {props.selectFilteredActiveTasks.length}
      </div>
      <div>
        <img src="" alt="" />
        Завершенные: {props.selectFilteredCompletedTasks.length}
      </div>
    </div>
  );
};

export default TodoFilters;
