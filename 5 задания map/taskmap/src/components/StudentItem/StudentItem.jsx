import React from "react";

const StudentItem = ({ name, group }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{group}</h2>
    </div>
  );
};
export default StudentItem;
