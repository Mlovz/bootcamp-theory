import style from "./StudentList.module.css";

function StudentList(props) {
  return (
    <div className={style.card}>
      {props.studentsNew.map((student) => {
        return (
          <div>
            <h1>Задание 2: Отображение списка студентов</h1>
            <h3>{student.name}</h3>
            <span>{student.group}</span>
          </div>
        );
      })}
    </div>
  );
}

export default StudentList;
