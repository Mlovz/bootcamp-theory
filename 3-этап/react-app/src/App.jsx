import axios from "axios";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    const user  = {username: 'aaa', age: 200}
    
    const response = await axios.get("http://localhost:5500/users",user,{
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    setUsers(response.data.users);
    setIsLoading(false);
  };

  return (
    <div>
      <button onClick={getUsers}> Получить пользователей</button>
      {isLoading && <h1>Loading....</h1>}
      {users.length > 0 ? (
        users.map((user) => (
          <div>
            <h1>{user.username}</h1>
            <span>{user.age}</span>
          </div>
        ))
      ) : (
        <h1>пользователей еще нет</h1>
      )}
    </div>
  );
}

export default App;
