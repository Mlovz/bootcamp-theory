import React from "react";
import StudentItem from "../StudentItem/StudentItem";

const StudentList = ({ students }) => {
  return (
    <div>
      {students.map((student, i) => (
        <StudentItem name={student.name} group={student.group} />
      ))}
    </div>
  );
};
export default StudentList;
