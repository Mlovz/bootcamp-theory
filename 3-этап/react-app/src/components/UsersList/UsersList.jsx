import React from "react";
import UserCard from "../UserCard/UserCard";

const UsersList = (props) => {
  const { users } = props;

  return (
    <div>
      {users.map((user, index) => {
        return (
          <UserCard 
            key={index} 
            name={user.name} 
            lastname={user.lastname} 
          />
        );
      })}
    </div>
  );
};

export default UsersList;
