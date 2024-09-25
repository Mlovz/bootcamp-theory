import React from "react";
import UserRow from "../UserRow/UserRow";

const UserTable = ({ users }) => {
  return (
    <div>
      {users.map((user, i) => (
        <UserRow name={user.name} email={user.email} age={user.age} />
      ))}
    </div>
  );
};

export default UserTable;
