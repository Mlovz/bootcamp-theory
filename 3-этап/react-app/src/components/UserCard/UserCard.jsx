import React from "react";

const UserCard = (props) => {
  const { name, lastname } = props;

  return (
    <div className="user-card">
      <h1>{name}</h1>
      <h2>{lastname}</h2>
    </div>
  );
};

export default UserCard;
