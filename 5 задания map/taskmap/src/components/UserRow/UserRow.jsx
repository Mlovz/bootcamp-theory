import React from "react";

const UserRow = ({ name, email, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>{age}</h3>
    </div>
  );
};
export default UserRow;
