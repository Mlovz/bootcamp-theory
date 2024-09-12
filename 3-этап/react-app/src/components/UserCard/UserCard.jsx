const UserCard = ({user}) => {
  return (
    <div className="card" >
      <h1>{user.name}</h1>
      <p>{user.username}</p>
      <p>{user.phone}</p>
      <a>{user.website}</a>
      <p>{user.address.city}</p>
    </div>
  );
};

export default UserCard;
